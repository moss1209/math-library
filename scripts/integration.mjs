import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { once } from "node:events";
import { setTimeout as pause } from "node:timers/promises";

// This fixture replaces only the external Supabase HTTP boundary.
// It does not validate Postgres RLS or the SQL rate-limit function.
const rows = new Map();
const files = new Map();
const base = "http://localhost:3101";
let signedReads = 0;
const fixture = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost:3102");
  let raw = "";
  for await (const chunk of req) raw += chunk;
  const body = raw ? JSON.parse(raw) : {};
  const json = (data, status = 200) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };
  if (url.pathname.endsWith("/rpc/consume_admin_attempt")) return json(true);
  if (url.pathname === "/rest/v1/documents") {
    const id = url.searchParams.get("id")?.replace("eq.", "");
    const rev = url.searchParams.get("revision")?.replace("eq.", "");
    let selected = [...rows.values()].filter(
      (d) =>
        (!id || d.id === id) &&
        (rev === undefined || String(d.revision) === rev) &&
        (url.searchParams.get("hidden") !== "eq.false" || !d.hidden),
    );
    if (req.method === "POST") {
      const d = {
        ...body,
        id: randomUUID(),
        revision: 1,
        created_at: new Date().toISOString(),
      };
      rows.set(d.id, d);
      return json({ id: d.id }, 201);
    }
    if (req.method === "PATCH")
      selected = selected.map((d) => {
        const next = { ...d, ...body };
        rows.set(d.id, next);
        return next;
      });
    if (req.method === "DELETE") selected.forEach((d) => rows.delete(d.id));
    if (req.method === "GET") {
      const offset = Number(url.searchParams.get("offset") || 0);
      selected = selected.slice(
        offset,
        offset + Number(url.searchParams.get("limit") || 1000),
      );
    }
    if (req.headers.accept?.includes("vnd.pgrst.object+json"))
      return json(selected[0] || null);
    return json(selected);
  }
  if (url.pathname.startsWith("/storage/v1/object/upload/sign/"))
    return json({
      url: url.pathname.replace("/storage/v1", "") + "?token=fixture-token",
    });
  if (url.pathname === "/storage/v1/object/list/math-library")
    return json(
      [...files]
        .filter(
          ([p]) => p.startsWith(body.prefix + "/") && p.endsWith(body.search),
        )
        .map(([p, metadata]) => ({
          name: p.split("/")[1],
          id: randomUUID(),
          metadata,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          last_accessed_at: new Date().toISOString(),
        })),
    );
  if (url.pathname.startsWith("/storage/v1/object/sign/")) {
    signedReads++;
    assert.equal(body.expiresIn, 60);
    return json({
      signedURL:
        url.pathname.replace("/storage/v1", "") + "?token=fixture-read",
    });
  }
  if (
    url.pathname === "/storage/v1/object/math-library" &&
    req.method === "DELETE"
  ) {
    body.prefixes.forEach((p) => files.delete(p));
    return json([]);
  }
  return json(
    {
      message: "Unexpected fixture request: " + req.method + " " + url.pathname,
    },
    500,
  );
});
fixture.listen(3102, "127.0.0.1");
await once(fixture, "listening");
const app = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", "3101"],
  {
    env: {
      ...process.env,
      SUPABASE_URL: "http://127.0.0.1:3102",
      SUPABASE_SERVICE_ROLE_KEY: "fixture-service-role",
      ADMIN_PASSWORD: "fixture-password-12345",
      SESSION_SECRET: "fixture-secret-0123456789abcdef0123456789abcdef",
      APP_URL: base,
    },
    stdio: ["ignore", "pipe", "pipe"],
  },
);
let logs = "";
app.stdout.on("data", (d) => (logs += d));
app.stderr.on("data", (d) => (logs += d));
let passed = 0;
async function check(name, fn) {
  await fn();
  passed++;
  console.log("PASS " + name);
}
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base + "/admin")).ok) {
        ready = true;
        break;
      }
    } catch {}
    await pause(200);
  }
  assert(ready, logs);
  let cookie = "";
  const request = (path, method = "GET", body, auth = true, origin = base) =>
    fetch(base + path, {
      method,
      redirect: "manual",
      headers: {
        Origin: origin,
        "Content-Type": "application/json",
        ...(auth && cookie ? { Cookie: cookie } : {}),
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
  await check(
    "unauthenticated writes cannot reach storage or database",
    async () => {
      for (const p of ["/api/admin/documents", "/api/admin/uploads"])
        assert.equal((await request(p, "POST", {})).status, 401);
    },
  );
  await check("cross-origin login is rejected", async () =>
    assert.equal(
      (
        await request(
          "/api/admin/login",
          "POST",
          { password: "fixture-password-12345" },
          false,
          "https://evil.example",
        )
      ).status,
      403,
    ),
  );
  await check("wrong password is rejected", async () =>
    assert.equal(
      (await request("/api/admin/login", "POST", { password: "wrong" })).status,
      401,
    ),
  );
  await check("valid password establishes a protected session", async () => {
    const r = await request("/api/admin/login", "POST", {
      password: "fixture-password-12345",
    });
    assert.equal(r.status, 200);
    const h = r.headers.get("set-cookie");
    assert.match(h, /HttpOnly/i);
    assert.match(h, /SameSite=strict/i);
    assert.match(h, /Secure/i);
    cookie = h.split(";")[0];
  });
  await check("invalid upload and metadata are rejected", async () => {
    assert.equal(
      (
        await request("/api/admin/uploads", "POST", {
          kind: "cover",
          size: 100,
          contentType: "image/svg+xml",
        })
      ).status,
      400,
    );
    assert.equal(
      (await request("/api/admin/documents", "POST", {})).status,
      400,
    );
  });
  const pdf = `pdf/${randomUUID()}.pdf`;
  const cover = `covers/${randomUUID()}.png`;
  const document = {
    title: "Integration calculus",
    description: "Original fixture",
    levels: ["ม.4"],
    topics: ["แคลคูลัส"],
    types: ["ชีทสอน"],
    tags: ["fixture"],
    pdf_path: pdf,
    cover_path: cover,
    hidden: false,
  };
  await check("metadata cannot reference a missing uploaded file", async () =>
    assert.equal(
      (await request("/api/admin/documents", "POST", document)).status,
      400,
    ),
  );
  files.set(pdf, { size: 1234, mimetype: "application/pdf" });
  files.set(cover, { size: 234, mimetype: "image/png" });
  await check("authorized upload returns a signed storage URL", async () => {
    const r = await request("/api/admin/uploads", "POST", {
      kind: "pdf",
      size: 1234,
      contentType: "application/pdf",
    });
    assert.equal(r.status, 200);
    const data = await r.json();
    assert.match(data.path, /^pdf\/.*\.pdf$/);
    assert.match(data.url, /token=fixture-token/);
  });
  let id;
  await check("create persists validated document metadata", async () => {
    const r = await request("/api/admin/documents", "POST", document);
    assert.equal(r.status, 201);
    id = (await r.json()).id;
    assert.equal(rows.get(id).title, "Integration calculus");
  });
  await check("public reader receives a short-lived download URL", async () => {
    const r = await request(`/api/documents/${id}/file?download=1`);
    assert.equal(r.status, 302);
    assert.match(r.headers.get("location"), /download=/);
    assert.equal(r.headers.get("cache-control"), "private, no-store");
  });
  await check(
    "hide removes metadata and both file types from public access",
    async () => {
      assert.equal(
        (
          await request(`/api/admin/documents/${id}`, "PATCH", {
            hidden: true,
            expected_revision: 1,
          })
        ).status,
        200,
      );
      const before = signedReads;
      assert.equal((await request(`/api/documents/${id}/file`)).status, 404);
      assert.equal(
        (await request(`/api/documents/${id}/file?kind=cover`)).status,
        404,
      );
      const page = await request(`/documents/${id}`);
      const html = await page.text();
      assert(html.includes("ไม่พบเอกสารนี้"));
      assert(!html.includes("Integration calculus"));
      assert.equal(signedReads, before);
    },
  );
  await check("stale saves cannot restore an obsolete PDF path", async () => {
    const r = await request(`/api/admin/documents/${id}`, "PATCH", {
      ...document,
      expected_revision: 1,
    });
    assert.equal(r.status, 409);
    assert.equal(rows.get(id).hidden, true);
  });
  await check("stale deletes cannot remove a newer document", async () => {
    assert.equal(
      (
        await request(`/api/admin/documents/${id}`, "DELETE", {
          expected_revision: 1,
        })
      ).status,
      409,
    );
    assert(rows.has(id));
  });
  await check(
    "current revision deletes row and its private objects",
    async () => {
      const revision = rows.get(id).revision;
      const r = await request(`/api/admin/documents/${id}`, "DELETE", {
        expected_revision: revision,
      });
      assert.equal(r.status, 200);
      assert.equal(rows.has(id), false);
      assert.equal(files.has(pdf), false);
      assert.equal(files.has(cover), false);
    },
  );
  await check(
    "search finds records beyond Supabase's first response page",
    async () => {
      for (let i = 0; i < 1005; i++) {
        const row = {
          ...document,
          id: randomUUID(),
          title: i === 1004 ? "PaginationTailFixture" : "Other fixture",
          revision: 1,
          created_at: new Date().toISOString(),
          cover_path: null,
        };
        rows.set(row.id, row);
      }
      const response = await request("/search?q=PaginationTailFixture");
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.match(html, /<h3>PaginationTailFixture<\/h3>/);
      rows.clear();
    },
  );
  await check("logout expires the browser session cookie", async () => {
    const r = await request("/api/admin/logout", "POST");
    assert.equal(r.status, 200);
    assert.match(r.headers.get("set-cookie"), /expires=Thu, 01 Jan 1970/i);
  });
  console.log(
    `${passed} integration checks passed (Supabase HTTP fixture; live SQL not tested).`,
  );
} catch (error) {
  console.error(logs);
  throw error;
} finally {
  app.kill();
  fixture.closeAllConnections();
  fixture.close();
}

