"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";
export function Share({ title }: { title: string }) {
  const [message, setMessage] = useState("");
  return (
    <>
      <button
        className="button secondary"
        onClick={async () => {
          try {
            if (navigator.share) {
              await navigator.share({ title, url: window.location.href });
            } else {
              await navigator.clipboard.writeText(window.location.href);
              setMessage("คัดลอกลิงก์แล้ว");
            }
          } catch (e) {
            if ((e as Error).name !== "AbortError")
              setMessage("คัดลอกลิงก์จากแถบที่อยู่ของเบราว์เซอร์ได้เลย");
          }
        }}
      >
        <Share2 size={17} /> แชร์
      </button>
      <span className="share-message" role="status">
        {message}
      </span>
    </>
  );
}

