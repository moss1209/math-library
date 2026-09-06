import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import type { LibraryDocument } from "@/lib/domain";
const symbols: Record<string, string> = {
  แคลคูลัส: "∫",
  เซต: "∪",
  ความน่าจะเป็น: "P(A)",
  เรขาคณิต: "△",
  ตรรกศาสตร์: "∀",
  สถิติ: "σ",
  พีชคณิตเชิงเส้น: "[A]",
  พีชคณิต: "x²",
  ตรีโกณมิติ: "sin θ",
  ฟังก์ชัน: "ƒ(x)",
  ทฤษฎีจำนวน: "ℕ",
};
const tones: Record<string, string> = {
  แคลคูลัส: "red",
  เซต: "blue",
  ความน่าจะเป็น: "purple",
  เรขาคณิต: "green",
  ตรรกศาสตร์: "gold",
  สถิติ: "blue",
  พีชคณิตเชิงเส้น: "purple",
  พีชคณิต: "green",
  ตรีโกณมิติ: "gold",
};
export function Cover({
  doc,
  large = false,
}: {
  doc: LibraryDocument;
  large?: boolean;
}) {
  return (
    <div
      className={`cover tone-${tones[doc.topics[0]] || "red"} ${large ? "cover-large" : ""}`}
    >
      {doc.cover_path ? (
        <img
          src={`/api/documents/${doc.id}/file?kind=cover`}
          alt={`ปก ${doc.title}`}
          loading="lazy"
        />
      ) : (
        <>
          <div className="cover-top">
            <span>MATHFLIX / STUDY SERIES</span>
            <ArrowUpRight size={16} />
          </div>
          <div className="cover-symbol">{symbols[doc.topics[0]] || "∞"}</div>
          <div className="cover-copy">
            <span className="cover-en">{doc.topics[0]}</span>
            <strong>{doc.title}</strong>
            <div className="cover-bottom">
              <span>{doc.levels.join(" · ")}</span>
              <span>PDF</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export function Card({ doc }: { doc: LibraryDocument }) {
  return (
    <Link className="document-card" href={`/documents/${doc.id}`}>
      <Cover doc={doc} />
      <div className="card-meta">
        <span>{doc.types[0]}</span>
        <span>
          <FileText size={12} /> PDF
        </span>
      </div>
      <h3>{doc.title}</h3>
      <p>
        {doc.levels.join(" · ")}
        <span> / </span>
        {doc.topics[0]}
      </p>
    </Link>
  );
}
export function Shelf({
  title,
  subtitle,
  docs,
  href = "/browse",
}: {
  title: string;
  subtitle?: string;
  docs: LibraryDocument[];
  href?: string;
}) {
  if (!docs.length) return null;
  return (
    <section className="shelf">
      <div className="section-heading">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <Link href={href}>
          ดูทั้งหมด <ArrowRight size={16} />
        </Link>
      </div>
      <div className="card-row">
        {docs.map((doc) => (
          <Card key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}
export function Empty() {
  return (
    <div className="empty">
      <FileText size={38} />
      <h2>ยังไม่พบเอกสาร</h2>
      <p>ลองใช้คำค้นอื่น หรือเลือกหมวดหมู่อีกครั้ง</p>
      <Link className="button secondary" href="/browse">
        ดูคลังทั้งหมด
      </Link>
    </div>
  );
}

