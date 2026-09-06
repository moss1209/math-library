"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="empty">
      <h1>โหลดข้อมูลไม่สำเร็จ</h1>
      <p>กรุณาตรวจสอบการเชื่อมต่อ แล้วลองอีกครั้ง</p>
      <button className="button primary" onClick={reset}>
        ลองอีกครั้ง
      </button>
    </div>
  );
}

