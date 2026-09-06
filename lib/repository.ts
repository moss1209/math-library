import "server-only";
import { db, configured, BUCKET } from "./supabase";
import { demoDocuments } from "./demo";
import type { LibraryDocument } from "./domain";
export async function getDocuments(admin = false): Promise<LibraryDocument[]> {
  if (!configured()) return demoDocuments;
  const documents: LibraryDocument[] = [];
  const client = db();
  // Fetch in pages so the default Supabase response limit does not truncate the library.
  for (let offset = 0; ; offset += 250) {
    let query = client
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false })
      .order("id", { ascending: true })
      .range(offset, offset + 249);
    if (!admin) query = query.eq("hidden", false);
    const { data, error } = await query;
    if (error) throw new Error("โหลดคลังเอกสารไม่สำเร็จ กรุณาลองใหม่");
    documents.push(...((data || []) as LibraryDocument[]));
    if (!data || data.length < 250) return documents;
  }
}
export async function getDocument(
  id: string,
  admin = false,
): Promise<LibraryDocument | null> {
  if (!configured()) return demoDocuments.find((d) => d.id === id) || null;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  let query = db().from("documents").select("*").eq("id", id);
  if (!admin) query = query.eq("hidden", false);
  const { data, error } = await query.maybeSingle();
  if (error) throw new Error("โหลดเอกสารไม่สำเร็จ");
  return data;
}
export async function fileUrl(
  doc: LibraryDocument,
  kind: "pdf" | "cover",
  download = false,
) {
  if (!configured()) return "/sample.pdf";
  const path = kind === "pdf" ? doc.pdf_path : doc.cover_path;
  if (!path) return null;
  const filename =
    doc.title.replace(/[\\/\r\n"<>:|?*]/g, "_").slice(0, 120) + ".pdf";
  const { data, error } = await db()
    .storage.from(BUCKET)
    .createSignedUrl(path, 60, download ? { download: filename } : undefined);
  if (error) throw new Error("เปิดไฟล์ไม่สำเร็จ");
  return data.signedUrl;
}

