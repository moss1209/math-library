import Link from "next/link";
import { ArrowRight, BookOpen, Play } from "lucide-react";
import { getDocuments } from "@/lib/repository";
import { configured } from "@/lib/supabase";
import { LEVELS } from "@/lib/domain";
import { Cover, Shelf, Empty } from "@/components/library";
import { Greeting } from "@/components/profile";
export const dynamic = "force-dynamic";
export default async function Home() {
  const docs = await getDocuments();
  const hero = docs[0];
  return (
    <>
      <section className="home-intro">
        <div className="eyebrow">
          <span className="live-dot" /> YOUR NEXT CHAPTER STARTS HERE
        </div>
        <div className="greeting">
          <Greeting />
        </div>
      </section>
      {hero ? (
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow red">
              <span className="tiny-line" /> เอกสารแนะนำประจำคลัง
            </div>
            <h1>
              คณิตศาสตร์
              <br />
              เข้าใจได้<span className="outline-text"> ทีละหน้า</span>
            </h1>
            <p className="hero-description">
              {hero.title}
              <br />
              <span>{hero.description.split(" • ")[0]}</span>
            </p>
            <div className="hero-tags">
              <span>{hero.levels.join(" · ")}</span>
              <span>{hero.topics[0]}</span>
              <span>PDF</span>
            </div>
            <div className="button-row">
              <Link
                className="button primary"
                href={`/documents/${hero.id}/read`}
              >
                <Play size={17} fill="currentColor" /> เริ่มอ่าน
              </Link>
              <Link className="button secondary" href={`/documents/${hero.id}`}>
                รายละเอียด <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-note">
              <BookOpen size={16} /> เรียนรู้ได้ตามจังหวะของคุณ
            </div>
          </div>
          <Link
            href={`/documents/${hero.id}`}
            className="hero-book"
            aria-label={hero.title}
          >
            <Cover doc={hero} large />
          </Link>
          <div className="hero-number">
            01<span> / LIBRARY</span>
          </div>
        </section>
      ) : (
        <Empty />
      )}
      <section className="level-section">
        <span>เลือกชั้นเรียนของคุณ</span>
        <div className="level-list">
          <Link className="selected" href="/browse">
            ทั้งหมด
          </Link>
          {LEVELS.map((level) => (
            <Link
              key={level}
              href={`/browse?level=${encodeURIComponent(level)}`}
            >
              {level}
            </Link>
          ))}
        </div>
      </section>
      {!configured() && (
        <p className="demo-notice">
          โหมดตัวอย่าง · เอกสารสำหรับทดลองเว็บไซต์ ยังไม่ใช่คลังเอกสารจริง
        </p>
      )}
      <Shelf
        title="เพิ่มล่าสุด"
        subtitle="เปิดหน้าถัดไปของความเข้าใจ"
        docs={docs.slice(0, 6)}
      />
      <Shelf
        title="เตรียมพร้อม มัธยมปลาย"
        docs={docs.filter((d) =>
          d.levels.some((l) => ["ม.4", "ม.5", "ม.6"].includes(l)),
        )}
        href="/browse?level=ม.4"
      />
      <Shelf
        title="ก้าวต่อไป ระดับมหาวิทยาลัย"
        docs={docs.filter((d) => d.levels.includes("มหาวิทยาลัย"))}
        href="/browse?level=มหาวิทยาลัย"
      />
    </>
  );
}

