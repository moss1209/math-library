import assert from "node:assert/strict";
const base = process.env.TEST_URL || "http://localhost:3000";
let count = 0;
for (const route of [
  "/",
  "/browse",
  "/search?q=set",
  "/search?q=set&q=calculus",
  "/browse?level=" + encodeURIComponent("ม.4"),
  "/documents/demo-1",
  "/documents/demo-1/read",
  "/admin",
]) {
  const r = await fetch(base + route);
  assert.equal(r.status, 200, route);
  const html = await r.text();
  assert(html.includes("MATHFLIX"), route);
  assert(!html.includes("โหลดข้อมูลไม่สำเร็จ"), route);
  console.log("PASS " + route);
  count++;
}
for (const route of [
  "/api/documents/demo-1/file",
  "/api/documents/demo-1/file?download=1",
]) {
  const r = await fetch(base + route);
  assert.equal(r.status, 200);
  assert.match(r.headers.get("content-type"), /application\/pdf/);
  const bytes = await r.arrayBuffer();
  assert.equal(Buffer.from(bytes).subarray(0, 5).toString(), "%PDF-");
  assert.match(
    r.headers.get("content-disposition"),
    route.includes("download") ? /attachment/ : /inline/,
  );
  console.log("PASS " + route);
  count++;
}
assert.equal(
  (await fetch(base + "/api/documents/does-not-exist/file")).status,
  404,
);
count++;
const denied = await fetch(base + "/api/admin/documents", {
  method: "POST",
  headers: {
    Origin: "https://invalid.example",
    "Content-Type": "application/json",
  },
  body: "{}",
});
assert.equal(denied.status, 403);
count++;
console.log(`${count} demo smoke checks passed.`);

