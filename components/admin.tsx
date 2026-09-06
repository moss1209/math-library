"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Plus, LogOut, Save, Upload } from "lucide-react";
import { PdfAutofill } from "@/components/pdf-autofill";
import {
  mergeSuggestions,
  clearSuggestions,
  type MetadataSuggestion,
} from "@/lib/analysis";
import {
  LEVELS,
  documentSchema,
  TOPICS,
  TYPES,
  type DocumentInput,
  type LibraryDocument,
} from "@/lib/domain";
async function api(path: string, method: string, body?: unknown) {
  const res = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "ดำเนินการไม่สำเร็จ");
  return data;
}
export function AdminLogin({ ready }: { ready: boolean }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <div className="page-container">
      <section className="login-panel">
        <LockKeyhole color="#ef3b43" size={30} />
        <h1 className="page-title">ผู้ดูแลคลัง</h1>
        <p className="muted">เข้าสู่ระบบเพื่อจัดการเอกสารของคุณ</p>
        {!ready ? (
          <div className="status">
            ยังไม่ได้เชื่อมต่อระบบผู้ดูแล กรุณาตั้งค่า Supabase
            และรหัสผ่านตามคู่มือ README ก่อนใช้งาน
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              setError("");
              const form = new FormData(e.currentTarget);
              try {
                await api("/api/admin/login", "POST", {
                  password: form.get("password"),
                });
                router.refresh();
              } catch (e) {
                setError((e as Error).message);
              } finally {
                setBusy(false);
              }
            }}
          >
            <label>
              รหัสผ่านผู้ดูแล
              <input
                autoFocus
                required
                type="password"
                name="password"
                maxLength={256}
                autoComplete="current-password"
              />
            </label>
            <button className="button primary" disabled={busy}>
              {busy ? "กำลังตรวจสอบ…" : "เข้าสู่ระบบ"}
            </button>
          </form>
        )}
        {error && (
          <p role="alert" className="status error-status">
            {error}
          </p>
        )}
      </section>
    </div>
  );
}
const empty: DocumentInput = {
  title: "",
  description: "",
  levels: [],
  topics: [],
  types: [],
  tags: [],
  pdf_path: "",
  cover_path: null,
  hidden: false,
};
export function AdminDashboard({
  documents,
}: {
  documents: LibraryDocument[];
}) {
  const router = useRouter();
  const [draft, setDraft] = useState<DocumentInput>({ ...empty });
  const [editing, setEditing] = useState<string | null>(null);
  const [revision, setRevision] = useState(1);
  const [saving, setBusy] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const busy = saving || analyzing;
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [tags, setTags] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [key, setKey] = useState(0);
  const [query, setQuery] = useState("");
  const editor = useRef<HTMLFormElement>(null);
  const previousSuggestion = useRef<MetadataSuggestion | null>(null);
  const previousAutoCover = useRef<File | null>(null);
  function acceptPdf(file: File) {
    const previous = previousSuggestion.current;
    if (previous) {
      setDraft((d) => clearSuggestions(d, previous));
      setTags((t) =>
        JSON.stringify(
          t
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
        ) === JSON.stringify(previous.tags)
          ? ""
          : t,
      );
    }
    const autoCover = previousAutoCover.current;
    if (autoCover) setCover((c) => (c === autoCover ? null : c));
    previousSuggestion.current = null;
    previousAutoCover.current = null;
    setPdf(file);
    setError("");
    setStatus("");
  }
  function reset() {
    previousSuggestion.current = null;
    previousAutoCover.current = null;
    setDraft({ ...empty });
    setEditing(null);
    setTags("");
    setPdf(null);
    setCover(null);
    setKey((k) => k + 1);
  }
  function edit(d: LibraryDocument) {
    previousSuggestion.current = null;
    previousAutoCover.current = null;
    setDraft({ ...d });
    setEditing(d.id);
    setRevision(d.revision);
    setTags(d.tags.join(", "));
    setPdf(null);
    setCover(null);
    setKey((k) => k + 1);
    setError("");
    setStatus("");
    editor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  async function upload(file: File, kind: "pdf" | "cover") {
    const max = kind === "pdf" ? 50 : 5;
    if (file.size > max * 1024 * 1024)
      throw new Error(`ไฟล์ต้องไม่เกิน ${max} MB`);
    const data = await api("/api/admin/uploads", "POST", {
      kind,
      size: file.size,
      contentType: file.type,
    });
    const result = await fetch(data.url, {
      method: "PUT",
      headers: { "Content-Type": file.type, "x-upsert": "false" },
      body: file,
    });
    if (!result.ok)
      throw new Error("อัปโหลดไม่สำเร็จ กรุณาตรวจการเชื่อมต่อแล้วลองใหม่");
    return data.path as string;
  }
  async function action(work: () => Promise<void>) {
    if (busy) return;
    setBusy(true);
    setError("");
    setStatus("");
    try {
      await work();
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  const rows = documents.filter((d) =>
    d.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="page-container">
      <div className="admin-heading">
        <div>
          <div className="eyebrow red">LIBRARY STUDIO</div>
          <h1 className="page-title">จัดการคลังเอกสาร</h1>
          <p className="muted">
            {documents.length} เอกสาร · เผยแพร่{" "}
            {documents.filter((d) => !d.hidden).length} · ซ่อน{" "}
            {documents.filter((d) => d.hidden).length}
          </p>
        </div>
        <button
          disabled={busy}
          className="button secondary"
          onClick={() =>
            action(async () => {
              await api("/api/admin/logout", "POST");
              router.refresh();
            })
          }
        >
          <LogOut size={16} /> ออกจากระบบ
        </button>
      </div>
      {status && (
        <div className="status" role="status">
          {status}
        </div>
      )}
      {error && (
        <div className="status error-status" role="alert">
          {error}
        </div>
      )}
      <div className="admin-layout">
        <section className="admin-list">
          <div className="section-heading">
            <h2>เอกสารทั้งหมด</h2>
            <button className="button primary" disabled={busy} onClick={reset}>
              <Plus size={16} /> เพิ่มใหม่
            </button>
          </div>
          <input
            placeholder="ค้นหาเอกสารเพื่อจัดการ…"
            aria-label="ค้นหาเอกสารเพื่อจัดการ"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {!rows.length && (
            <p className="admin-empty">ยังไม่มีเอกสารในรายการนี้</p>
          )}
          {rows.map((d) => (
            <article className="admin-item" key={d.id}>
              <h3>{d.title}</h3>
              <p>
                {d.levels.join(", ")} · {d.types.join(", ")} ·{" "}
                {d.hidden ? "ซ่อนอยู่" : "เผยแพร่แล้ว"}
              </p>
              <div className="admin-item-actions">
                <button
                  disabled={busy}
                  className="button secondary"
                  onClick={() => edit(d)}
                >
                  แก้ไข
                </button>
                <button
                  disabled={busy}
                  className="button secondary"
                  onClick={() =>
                    action(async () => {
                      await api(`/api/admin/documents/${d.id}`, "PATCH", {
                        hidden: !d.hidden,
                        expected_revision: d.revision,
                      });
                      if (editing === d.id && revision === d.revision) {
                        setDraft((x) => ({ ...x, hidden: !d.hidden }));
                        setRevision(d.revision + 1);
                      }
                      setStatus(
                        d.hidden ? "เผยแพร่เอกสารแล้ว" : "ซ่อนเอกสารแล้ว",
                      );
                    })
                  }
                >
                  {d.hidden ? "เผยแพร่" : "ซ่อน"}
                </button>
                {!d.hidden && (
                  <a
                    className="button secondary"
                    href={`/documents/${d.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ดูหน้าเว็บ
                  </a>
                )}
                <button
                  disabled={busy}
                  className="button danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        `ลบ “${d.title}” พร้อม PDF และภาพปกถาวรหรือไม่?`,
                      )
                    )
                      action(async () => {
                        const r = await api(
                          `/api/admin/documents/${d.id}`,
                          "DELETE",
                          { expected_revision: d.revision },
                        );
                        if (editing === d.id) reset();
                        setStatus(r.warning || "ลบเอกสารแล้ว");
                      });
                  }}
                >
                  ลบ
                </button>
              </div>
            </article>
          ))}
        </section>
        <form
          ref={editor}
          className="editor"
          onSubmit={(e) => {
            e.preventDefault();
            action(async () => {
              if (!pdf && !draft.pdf_path)
                throw new Error("กรุณาเลือกไฟล์ PDF");
              const parsedTags = tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean);
              if (
                !documentSchema
                  .omit({ pdf_path: true, cover_path: true })
                  .safeParse({ ...draft, tags: parsedTags }).success
              )
                throw new Error(
                  "กรุณาระบุชื่อ เลือกอย่างน้อยหนึ่งหมวดในแต่ละกลุ่ม และใส่แท็กไม่เกิน 12 รายการ",
                );
              setStatus("กำลังอัปโหลดและบันทึก…");
              let pdfPath = draft.pdf_path,
                coverPath = draft.cover_path;
              if (pdf) {
                pdfPath = await upload(pdf, "pdf");
                setDraft((x) => ({ ...x, pdf_path: pdfPath }));
                setPdf(null);
              }
              if (cover) {
                coverPath = await upload(cover, "cover");
                setDraft((x) => ({ ...x, cover_path: coverPath }));
                setCover(null);
              }
              const payload = {
                ...draft,
                expected_revision: revision,
                pdf_path: pdfPath,
                cover_path: coverPath,
                tags: parsedTags,
              };
              const r = await api(
                editing
                  ? `/api/admin/documents/${editing}`
                  : "/api/admin/documents",
                editing ? "PATCH" : "POST",
                payload,
              );
              reset();
              setStatus(r.warning || "บันทึกเอกสารเรียบร้อยแล้ว");
            });
          }}
        >
          <h2>{editing ? "แก้ไขเอกสาร" : "เพิ่มเอกสารใหม่"}</h2>
          <PdfAutofill
            key={`autofill-${key}`}
            disabled={saving}
            onBusyChange={setAnalyzing}
            onFile={acceptPdf}
            onResult={(suggestion, autoCover) => {
              setDraft((previous) => mergeSuggestions(previous, suggestion));
              setTags((previous) =>
                previous.trim() ? previous : suggestion.tags.join(", "),
              );
              if (!draft.cover_path)
                setCover((previous) => previous || autoCover);
              previousSuggestion.current = suggestion;
              previousAutoCover.current = autoCover;
            }}
          />
          <fieldset
            disabled={busy}
            style={{ border: 0, padding: 0, margin: 0 }}
          >
            <label>
              ชื่อเอกสาร
              <input
                required
                maxLength={180}
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </label>
            <label>
              คำอธิบาย
              <textarea
                maxLength={5000}
                value={draft.description}
                onChange={(e) =>
                  setDraft({ ...draft, description: e.target.value })
                }
              />
            </label>
            {(
              [
                ["levels", "ระดับชั้น", LEVELS],
                ["topics", "หัวข้อ", TOPICS],
                ["types", "ประเภทเอกสาร", TYPES],
              ] as const
            ).map(([field, title, options]) => (
              <fieldset key={field}>
                <legend>{title} · เลือกได้หลายรายการ</legend>
                <div className="checks">
                  {options.map((value) => (
                    <label key={value}>
                      <input
                        type="checkbox"
                        checked={(draft[field] as string[]).includes(value)}
                        onChange={(e) =>
                          setDraft({
                            ...draft,
                            [field]: e.target.checked
                              ? [...draft[field], value]
                              : (draft[field] as string[]).filter(
                                  (x) => x !== value,
                                ),
                          })
                        }
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <label>
              แท็ก (คั่นด้วยเครื่องหมาย ,)
              <input
                maxLength={480}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="พื้นฐาน, ทบทวน, เตรียมสอบ"
              />
            </label>
            <label>
              <Upload size={14} /> PDF{" "}
              {draft.pdf_path ? "· มีไฟล์แล้ว เปลี่ยนได้" : "*"}
              <p className="autofill-filename">
                {pdf
                  ? pdf.name
                  : draft.pdf_path
                    ? "ใช้ PDF เดิม · เปลี่ยนได้ด้วยช่องลากไฟล์ด้านบน"
                    : "เลือก PDF จากช่องลากไฟล์ด้านบน"}
              </p>
              <small>PDF ไม่เกิน 50 MB</small>
            </label>
            <label>
              ภาพปก (ไม่บังคับ)
              <input
                key={`cover-${key}`}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => setCover(e.target.files?.[0] || null)}
              />
              <small>JPG, PNG, WebP ไม่เกิน 5 MB · แนะนำอัตราส่วน 3:4</small>
            </label>
            {draft.cover_path && (
              <label className="checkbox-line">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => setDraft({ ...draft, cover_path: null })}
                />
                นำภาพปกเดิมออก
              </label>
            )}
            <label className="checkbox-line">
              <input
                type="checkbox"
                checked={draft.hidden}
                onChange={(e) =>
                  setDraft({ ...draft, hidden: e.target.checked })
                }
              />
              ซ่อนเอกสารจากหน้าสาธารณะ
            </label>
            <div className="button-row">
              <button className="button primary" disabled={busy}>
                <Save size={16} />
                {saving
                  ? "กำลังบันทึก…"
                  : analyzing
                    ? "กำลังอ่าน PDF…"
                    : "บันทึกเอกสาร"}
              </button>
              {editing && (
                <button
                  type="button"
                  className="button secondary"
                  onClick={reset}
                >
                  ยกเลิก
                </button>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

