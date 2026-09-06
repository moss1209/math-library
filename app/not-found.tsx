import Link from "next/link";
export default function NotFound() {
  return (
    <div className="empty">
      <div className="eyebrow red">404 / NOT FOUND</div>
      <h1>ไม่พบเอกสารนี้</h1>
      <p>เอกสารอาจถูกซ่อนหรือลบออกจากคลังแล้ว</p>
      <Link href="/browse" className="button primary">
        กลับไปคลังเอกสาร
      </Link>
    </div>
  );
}

