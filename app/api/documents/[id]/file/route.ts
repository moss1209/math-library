import { getDocument, fileUrl } from "@/lib/repository";
import { configured } from "@/lib/supabase";
import { apiError } from "@/lib/auth";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const dynamic = "force-dynamic";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const doc = await getDocument((await params).id);
    if (!doc) return new Response("ไม่พบเอกสาร", { status: 404 });
    const query = new URL(request.url).searchParams;
    const kind = query.get("kind") === "cover" ? "cover" : "pdf";
    if (kind === "cover" && !doc.cover_path)
      return new Response(null, { status: 404 });
    if (!configured()) {
      const file = await readFile(
        path.join(process.cwd(), "public/sample.pdf"),
      );
      return new Response(file, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `${query.has("download") ? "attachment" : "inline"}; filename="math-library-sample.pdf"`,
          "Cache-Control": "no-store",
        },
      });
    }
    const url = await fileUrl(doc, kind, query.has("download"));
    if (!url) return new Response(null, { status: 404 });
    return new Response(null, {
      status: 302,
      headers: { Location: url, "Cache-Control": "private, no-store" },
    });
  } catch (e) {
    return apiError(e);
  }
}

