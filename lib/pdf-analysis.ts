import { selectSamplePages, suggestMetadata } from "./analysis";
export async function analyzePdf(
  file: File,
  signal: AbortSignal,
  onProgress: (message: string) => void,
) {
  if (file.size > 50 * 1024 * 1024)
    throw new Error("PDF ต้องมีขนาดไม่เกิน 50 MB");
  const header = await file.slice(0, 1024).text();
  if (!header.includes("%PDF-"))
    throw new Error("ไฟล์นี้ไม่ใช่ PDF ที่อ่านได้ กรุณาเลือกไฟล์ PDF");
  signal.throwIfAborted();
  const pdfjs = await import("../vendor/pdfjs/pdf.mjs");
  signal.throwIfAborted();
  pdfjs.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.mjs";
  const data = new Uint8Array(await file.arrayBuffer());
  signal.throwIfAborted();
  const task = pdfjs.getDocument({
    data,
    cMapUrl: "/vendor/pdfjs/cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "/vendor/pdfjs/standard_fonts/",
    wasmUrl: "/vendor/pdfjs/wasm/",
    iccUrl: "/vendor/pdfjs/iccs/",
    isEvalSupported: false,
    enableXfa: false,
    maxImageSize: 16000000,
    canvasMaxAreaInBytes: 24000000,
  });
  const stop = () => {
    void task.destroy().catch(() => {});
  };
  signal.addEventListener("abort", stop, { once: true });
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    stop();
  }, 45000);
  try {
    const pdf = await task.promise;
    const pages = selectSamplePages(pdf.numPages);
    let text = "";
    let cover: File | null = null;
    const warnings: string[] = [];
    let pdfTitle: string | undefined;
    try {
      pdfTitle = (await pdf.getMetadata()).info.Title;
    } catch {}
    let pagesRead = 0;
    for (const number of pages) {
      signal.throwIfAborted();
      onProgress(`กำลังอ่านหน้า ${number} จาก ${pdf.numPages} หน้า…`);
      const page = await pdf.getPage(number);
      try {
        const content = await page.getTextContent();
        text +=
          content.items
            .map((item) =>
              typeof item.str === "string"
                ? item.str + (item.hasEOL ? "\n" : " ")
                : "",
            )
            .join("") + "\n";
        pagesRead++;
        if (number === 1) {
          try {
            const original = page.getViewport({ scale: 1 });
            const viewport = page.getViewport({
              scale: Math.min(600 / original.width, 900 / original.height, 1.5),
            });
            const canvas = document.createElement("canvas");
            canvas.width = Math.max(1, Math.floor(viewport.width));
            canvas.height = Math.max(1, Math.floor(viewport.height));
            const context = canvas.getContext("2d");
            if (!context) throw new Error("Canvas unavailable");
            await page.render({
              canvas,
              canvasContext: context,
              viewport,
              background: "rgb(255,255,255)",
              annotationMode: 0,
            }).promise;
            const blob = await new Promise<Blob | null>((resolve) =>
              canvas.toBlob(resolve, "image/jpeg", 0.85),
            );
            if (blob)
              cover = new File([blob], "pdf-cover.jpg", { type: "image/jpeg" });
            canvas.width = canvas.height = 0;
          } catch {
            warnings.push(
              "สร้างภาพปกไม่ได้ สามารถเลือกภาพปกเองหรือใช้ปกตัวอักษรได้",
            );
          }
        }
      } finally {
        page.cleanup();
      }
      if (text.length >= 24000) {
        text = text.slice(0, 24000);
        break;
      }
    }
    signal.throwIfAborted();
    const suggestion = suggestMetadata({
      filename: file.name,
      text,
      pageCount: pdf.numPages,
      pdfTitle,
    });
    return {
      suggestion: {
        ...suggestion,
        warnings: [...suggestion.warnings, ...warnings],
      },
      cover,
      pagesRead,
      pageCount: pdf.numPages,
    };
  } catch (error) {
    if (signal.aborted)
      throw new DOMException("ยกเลิกการอ่านไฟล์", "AbortError");
    if (timedOut)
      throw new Error(
        "อ่านไฟล์นานเกินไป ลอง PDF ที่เล็กลงหรือกรอกข้อมูลเองได้",
      );
    if ((error as Error).name === "PasswordException")
      throw new Error("PDF นี้มีรหัสผ่าน กรุณาปลดล็อกไฟล์ก่อนนำเข้า");
    throw error;
  } finally {
    clearTimeout(timeout);
    signal.removeEventListener("abort", stop);
    await task.destroy().catch(() => {});
  }
}

