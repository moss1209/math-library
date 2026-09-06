import "server-only";
import { db, BUCKET } from "./supabase";
import { HttpError } from "./auth";
export async function verifyFile(path: string, kind: "pdf" | "cover") {
  const slash = path.indexOf("/");
  const { data, error } = await db()
    .storage.from(BUCKET)
    .list(path.slice(0, slash), { search: path.slice(slash + 1), limit: 2 });
  if (error) throw error;
  const item = data.find((x) => x.name === path.slice(slash + 1));
  const max = kind === "pdf" ? 50 * 1024 * 1024 : 5 * 1024 * 1024;
  const type =
    kind === "pdf"
      ? "application/pdf"
      : path.endsWith(".jpg")
        ? "image/jpeg"
        : path.endsWith(".png")
          ? "image/png"
          : "image/webp";
  if (
    !item ||
    !item.metadata ||
    item.metadata.size <= 0 ||
    item.metadata.size > max ||
    item.metadata.mimetype !== type
  )
    throw new HttpError(
      400,
      "ไฟล์ยังอัปโหลดไม่เสร็จ หรือขนาด/ชนิดไฟล์ไม่ถูกต้อง",
    );
}
export async function cleanupFiles(paths: string[]) {
  if (!paths.length) return;
  const { error } = await db().storage.from(BUCKET).remove(paths);
  if (error) console.error("Storage cleanup failed:", error.message);
  return error
    ? "บันทึกข้อมูลแล้ว แต่ลบไฟล์เก่าบางส่วนไม่สำเร็จ กรุณาตรวจ Storage"
    : undefined;
}

