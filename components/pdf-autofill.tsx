"use client";
import { useEffect, useRef, useState } from "react";
import { FileUp, LoaderCircle, X } from "lucide-react";
import { analyzePdf } from "@/lib/pdf-analysis";
import type { MetadataSuggestion } from "@/lib/analysis";
export function PdfAutofill({
  disabled,
  onFile,
  onResult,
  onBusyChange,
}: {
  disabled: boolean;
  onFile: (file: File) => void;
  onResult: (s: MetadataSuggestion, cover: File | null) => void;
  onBusyChange: (busy: boolean) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const current = useRef<AbortController | null>(null);
  const [working, setWorking] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("");
  useEffect(
    () => () => {
      current.current?.abort();
      onBusyChange(false);
    },
    [onBusyChange],
  );
  useEffect(
    () => () => {
      if (preview) URL.revokeObjectURL(preview);
    },
    [preview],
  );
  async function choose(files: File[]) {
    if (disabled) return;
    if (files.length !== 1) {
      setWarnings(["กรุณาเลือก PDF ครั้งละหนึ่งไฟล์"]);
      return;
    }
    const selected = files[0];
    if (!/\.pdf$/i.test(selected.name) || selected.size > 50 * 1024 * 1024) {
      setWarnings(["เลือก PDF ขนาดไม่เกิน 50 MB"]);
      return;
    }
    current.current?.abort();
    const controller = new AbortController();
    current.current = controller;
    setWorking(true);
    onBusyChange(true);
    setWarnings([]);
    setPreview("");
    setName(selected.name);
    setMessage("กำลังเปิด PDF…");
    try {
      const header = await selected.slice(0, 1024).text();
      controller.signal.throwIfAborted();
      if (!header.includes("%PDF-"))
        throw new Error("ไฟล์นี้ไม่ใช่ PDF ที่อ่านได้");
      const file =
        selected.type === "application/pdf"
          ? selected
          : new File([selected], selected.name, { type: "application/pdf" });
      onFile(file);
      const result = await analyzePdf(file, controller.signal, setMessage);
      controller.signal.throwIfAborted();
      onResult(result.suggestion, result.cover);
      if (result.cover) setPreview(URL.createObjectURL(result.cover));
      setWarnings(result.suggestion.warnings);
      setMessage(
        `กรอกช่องที่ว่างให้แล้ว · อ่าน ${result.pagesRead} จาก ${result.pageCount} หน้า · ตรวจข้อมูลก่อนบันทึก`,
      );
    } catch (e) {
      if (current.current !== controller) return;
      if (controller.signal.aborted) {
        setMessage("ยกเลิกการอ่านแล้ว เลือกไฟล์ใหม่หรือกรอกข้อมูลเองได้");
      } else {
        setMessage("ยังกรอกข้อมูลอัตโนมัติไม่ได้");
        setWarnings([
          (e as Error).message || "อ่าน PDF ไม่สำเร็จ กรอกข้อมูลเองได้",
        ]);
      }
    } finally {
      if (current.current === controller) {
        setWorking(false);
        onBusyChange(false);
      }
    }
  }
  return (
    <section className="autofill-panel" aria-label="นำเข้า PDF อัตโนมัติ">
      <button
        type="button"
        className={`pdf-drop ${dragging ? "dragging" : ""}`}
        disabled={disabled}
        onClick={() => input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (!disabled) void choose(Array.from(e.dataTransfer.files));
        }}
      >
        <FileUp size={30} />
        <strong>ลาก PDF มาวางตรงนี้</strong>
        <span>หรือคลิกเลือกไฟล์ · ไม่เกิน 50 MB</span>
        <small>ช่วยกรอกชื่อ คำอธิบาย หมวดหมู่ และสร้างภาพปก</small>
      </button>
      <input
        className="sr-only"
        tabIndex={-1}
        ref={input}
        type="file"
        accept="application/pdf,.pdf"
        aria-label="PDF สำหรับกรอกข้อมูลอัตโนมัติ"
        disabled={disabled}
        onChange={(e) => {
          if (e.target.files?.length) void choose(Array.from(e.target.files));
          e.target.value = "";
        }}
      />
      <p className="autofill-hint">
        อ่านในเครื่อง ไม่มีค่าบริการ · ข้อมูลที่กรอกไว้แล้วจะคงเดิม
      </p>
      {name && <p className="autofill-filename">{name}</p>}
      {message && (
        <div className="autofill-status" role="status">
          {working && <LoaderCircle size={17} className="spin" />}
          <span>{message}</span>
          {working && (
            <button
              type="button"
              className="icon-button"
              onClick={() => current.current?.abort()}
              aria-label="ยกเลิกการอ่าน"
            >
              <X size={17} />
            </button>
          )}
        </div>
      )}
      {preview && (
        <img
          className="autofill-cover"
          src={preview}
          alt="ภาพปกที่สร้างจากหน้าแรกของ PDF"
        />
      )}
      {warnings.length > 0 && (
        <ul className="autofill-warnings" aria-live="polite">
          {warnings.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

