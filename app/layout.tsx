import type { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { Profile } from "@/components/profile";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "MATHFLIX — คลังคณิตศาสตร์", template: "%s | MATHFLIX" },
  description:
    "คลังบทเรียน ชีทสอน แบบฝึกหัด และข้อสอบคณิตศาสตร์ ตั้งแต่มัธยมถึงมหาวิทยาลัย",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <a className="skip" href="#main">
          ข้ามไปเนื้อหา
        </a>
        <header className="header">
          <Link href="/" className="brand">
            MATH<span>FLIX</span>
            <small>THE MATH LIBRARY</small>
          </Link>
          <nav aria-label="เมนูหลัก">
            <Link href="/">หน้าแรก</Link>
            <Link href="/browse">คลังทั้งหมด</Link>
            <Link href="/browse?type=ข้อสอบ">ข้อสอบ</Link>
            <Link href="/browse?type=ใบงาน">ใบงาน</Link>
          </nav>
          <div className="header-actions">
            <Link href="/search" aria-label="ค้นหาเอกสาร">
              <Search size={21} />
            </Link>
            <Profile />
          </div>
        </header>
        <main id="main">{children}</main>
        <footer>
          <Link href="/" className="brand footer-brand">
            MATH<span>FLIX</span>
          </Link>
          <p>พื้นที่เล็ก ๆ สำหรับความเข้าใจที่มากขึ้น</p>
          <Link href="/admin">
            สำหรับผู้ดูแล <ArrowUpRight size={15} />
          </Link>
        </footer>
      </body>
    </html>
  );
}

