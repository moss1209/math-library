import { randomUUID } from "node:crypto";
import { requireAdmin, readJson, HttpError, apiError } from "@/lib/auth";
import { uploadSchema } from "@/lib/domain";
import { db, BUCKET } from "@/lib/supabase";
export async function POST(request: Request) {
  try {
    await requireAdmin(request);
    const input = uploadSchema.safeParse(await readJson(request));
    if (!input.success)
      throw new HttpError(
        400,
        "รองรับ PDF ไม่เกิน 50 MB หรือภาพ JPG/PNG/WebP ไม่เกิน 5 MB",
      );
    const x = input.data;
    const ext =
      x.kind === "pdf"
        ? "pdf"
        : x.contentType === "image/jpeg"
          ? "jpg"
          : x.contentType === "image/png"
            ? "png"
            : "webp";
    const path = `${x.kind === "pdf" ? "pdf" : "covers"}/${randomUUID()}.${ext}`;
    const { data, error } = await db()
      .storage.from(BUCKET)
      .createSignedUploadUrl(path);
    if (error) throw error;
    return Response.json({ path, url: data.signedUrl });
  } catch (e) {
    return apiError(e);
  }
}

