import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, BookOpen } from "lucide-react";
import { getDocument, getDocuments } from "@/lib/repository";
import { Cover, Shelf } from "@/components/library";
import { Share } from "@/components/share";
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const d = await getDocument((await params).id);
  return { title: d?.title || "ไม่พบเอกสาร", description: d?.description };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const d = await getDocument((await params).id);
  if (!d) notFound();
  const related = (await getDocuments())
    .filter(
      (x) =>
        x.id !== d.id &&
        (x.topics.some((t) => d.topics.includes(t)) ||
          x.levels.some((l) => d.levels.includes(l))),
    )
    .slice(0, 6);
  return (
    <div className="page-container">
      <Link href="/browse" className="back-link">
        <ArrowLeft size={16} /> กลับไปคลังเอกสาร
      </Link>
      <section className="detail">
        <Cover doc={d} large />
        <div>
          <div className="eyebrow red">THE MATH COLLECTION</div>
          <h1>{d.title}</h1>
          <div className="hero-tags">
            {[...d.levels, ...d.topics, ...d.types].map((t) => (
              <Link key={t} href={`/search?q=${encodeURIComponent(t)}`}>
                {t}
              </Link>
            ))}
          </div>
          <p className="detail-description">{d.description}</p>
          <dl className="document-facts">
            <div>
              <dt>รูปแบบ</dt>
              <dd>เอกสาร PDF</dd>
            </div>
            <div>
              <dt>เพิ่มเมื่อ</dt>
              <dd>
                {new Date(d.created_at).toLocaleDateString("th-TH", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  timeZone: "Asia/Bangkok",
                })}
              </dd>
            </div>
          </dl>
          <div className="button-row">
            <Link href={`/documents/${d.id}/read`} className="button primary">
              <BookOpen size={18} /> อ่าน PDF
            </Link>
            <a
              href={`/api/documents/${d.id}/file?download=1`}
              className="button secondary"
            >
              <Download size={18} /> ดาวน์โหลด
            </a>
            <Share title={d.title} />
          </div>
          <div className="tags">
            {d.tags.map((t) => (
              <Link key={t} href={`/search?q=${encodeURIComponent(t)}`}>
                #{t}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Shelf title="เนื้อหาที่เกี่ยวข้อง" docs={related} />
    </div>
  );
}

