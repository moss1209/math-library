"use client";
import { useEffect, useState } from "react";
import { UserRound, X } from "lucide-react";
export function Profile() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      setName(localStorage.getItem("math-name") || "");
    } catch {}
  }, []);
  return (
    <>
      <button
        className="profile"
        onClick={() => {
          setDraft(name);
          setOpen(true);
        }}
        aria-label="ตั้งชื่อของคุณ"
      >
        <UserRound size={17} />
        <span>{name || "ผู้เยี่ยมชม"}</span>
      </button>
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            className="modal"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "Tab") {
                const elements =
                  e.currentTarget.querySelectorAll<HTMLElement>("button,input");
                const first = elements[0],
                  last = elements[elements.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              }
            }}
          >
            <button
              className="icon-button close"
              onClick={() => setOpen(false)}
              aria-label="ปิด"
            >
              <X />
            </button>
            <h2 id="profile-title">ให้เราเรียกคุณว่าอะไร?</h2>
            <p className="muted">
              จำชื่อไว้เฉพาะในเครื่องนี้ ไม่ต้องสมัครสมาชิก
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                try {
                  localStorage.setItem("math-name", draft.trim());
                  setName(draft.trim());
                  setOpen(false);
                  window.dispatchEvent(new Event("math-name-change"));
                } catch {
                  setError("เบราว์เซอร์ไม่อนุญาตให้บันทึกชื่อ");
                }
              }}
            >
              <label>
                ชื่อที่ใช้
                <input
                  autoFocus
                  maxLength={40}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="เช่น มอส"
                />
              </label>
              <button className="button primary">บันทึกชื่อ</button>
              <p role="alert">{error}</p>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
export function Greeting() {
  const [name, setName] = useState("");
  useEffect(() => {
    const read = () => {
      try {
        setName(localStorage.getItem("math-name") || "");
      } catch {}
    };
    read();
    window.addEventListener("math-name-change", read);
    return () => window.removeEventListener("math-name-change", read);
  }, []);
  return (
    <span>
      สวัสดี{name ? ` ${name}` : ""} <span className="red">✦</span>{" "}
      วันนี้อยากเรียนรู้อะไร?
    </span>
  );
}

