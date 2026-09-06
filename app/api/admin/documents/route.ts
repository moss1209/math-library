import { requireAdmin, readJson, HttpError, apiError } from "@/lib/auth";
import { documentSchema } from "@/lib/domain";
import { db } from "@/lib/supabase";
import { verifyFile } from "@/lib/storage";
export async function POST(request: Request) {
  try {
    await requireAdmin(request);
    const parsed = documentSchema.safeParse(await readJson(request));
    if (!parsed.success)
      throw new HttpError(
        400,
        "ข้อมูลไม่ครบหรือไม่ถูกต้อง กรุณาตรวจชื่อ หมวดหมู่ และไฟล์",
      );
    const x = parsed.data;
    await verifyFile(x.pdf_path, "pdf");
    if (x.cover_path) await verifyFile(x.cover_path, "cover");
    const { data, error } = await db()
      .from("documents")
      .insert(x)
      .select("id")
      .single();
    if (error) throw error;
    return Response.json({ id: data.id }, { status: 201 });
  } catch (e) {
    return apiError(e);
  }
}

