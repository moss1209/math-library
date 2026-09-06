import { requireAdmin, readJson, HttpError, apiError } from "@/lib/auth";
import { documentSchema } from "@/lib/domain";
import { db } from "@/lib/supabase";
import { getDocument } from "@/lib/repository";
import { verifyFile, cleanupFiles } from "@/lib/storage";
const conflict = () =>
  new HttpError(409, "เอกสารถูกแก้ไขจากอีกแท็บ กรุณาโหลดหน้าใหม่ก่อนบันทึก");
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAdmin(request);
    const id = (await params).id;
    const old = await getDocument(id, true);
    if (!old) throw new HttpError(404, "ไม่พบเอกสาร");
    const body = await readJson(request);
    if (
      !Number.isInteger(body.expected_revision) ||
      body.expected_revision !== old.revision
    )
      throw conflict();
    const { expected_revision, ...values } = body;
    if (
      Object.keys(values).length === 1 &&
      typeof values.hidden === "boolean"
    ) {
      const { data, error } = await db()
        .from("documents")
        .update({ hidden: values.hidden, revision: old.revision + 1 })
        .eq("id", id)
        .eq("revision", expected_revision)
        .select("id")
        .maybeSingle();
      if (error) throw error;
      if (!data) throw conflict();
      return Response.json({ ok: true, revision: old.revision + 1 });
    }
    const parsed = documentSchema.safeParse(values);
    if (!parsed.success) throw new HttpError(400, "ข้อมูลไม่ครบหรือไม่ถูกต้อง");
    const x = parsed.data;
    if (x.pdf_path !== old.pdf_path) await verifyFile(x.pdf_path, "pdf");
    if (x.cover_path && x.cover_path !== old.cover_path)
      await verifyFile(x.cover_path, "cover");
    const { data, error } = await db()
      .from("documents")
      .update({ ...x, revision: old.revision + 1 })
      .eq("id", id)
      .eq("revision", expected_revision)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data) throw conflict();
    const remove = [
      old.pdf_path !== x.pdf_path ? old.pdf_path : null,
      old.cover_path !== x.cover_path ? old.cover_path : null,
    ].filter((p): p is string => !!p);
    const warning = await cleanupFiles(remove);
    return Response.json({ ok: true, revision: old.revision + 1, warning });
  } catch (e) {
    return apiError(e);
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAdmin(request);
    const id = (await params).id;
    const old = await getDocument(id, true);
    if (!old) throw new HttpError(404, "ไม่พบเอกสาร");
    const body = await readJson(request);
    if (
      !Number.isInteger(body.expected_revision) ||
      body.expected_revision !== old.revision
    )
      throw conflict();
    const { data, error } = await db()
      .from("documents")
      .delete()
      .eq("id", id)
      .eq("revision", body.expected_revision)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!data) throw conflict();
    const warning = await cleanupFiles(
      [old.pdf_path, old.cover_path].filter((x): x is string => !!x),
    );
    return Response.json({ ok: true, warning });
  } catch (e) {
    return apiError(e);
  }
}

