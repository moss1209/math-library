import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { getDocument } from "@/lib/repository";
export const dynamic = "force-dynamic";
export const metadata = { title: "อ่านเอกสาร" };
export default async function Reader({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const d = await getDocument((await params).id);
  if (!d) notFound();
  const url = `/api/documents/${d.id}/file`;
  return (
    <div className="reader">
      <div className="reader-toolbar">
        <Link href={`/documents/${d.id}`} aria-label="กลับไปหน้ารายละเอียด">
          <ArrowLeft />
        </Link>
        <h1>{d.title}</h1>
        <a
          className="button secondary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} /> เปิดแท็บใหม่
        </a>
        <a className="button primary" href={`${url}?download=1`}>
          <Download size={16} /> ดาวน์โหลด
        </a>
      </div>
      <iframe title={`อ่าน ${d.title}`} src={url} />
      <p className="muted">
        หากอุปกรณ์นี้ไม่แสดง PDF ให้เลือกเปิดแท็บใหม่หรือดาวน์โหลด
      </p>
    </div>
  );
}

