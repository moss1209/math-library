import test from "node:test";
import assert from "node:assert/strict";
import {
  suggestMetadata,
  selectSamplePages,
  mergeSuggestions,
  clearSuggestions,
} from "../lib/analysis";
import type { DocumentInput } from "../lib/domain";
test("Thai worksheet content fills explicit grade, topic, type and description", () => {
  const s = suggestMetadata({
    filename: "upload_123.pdf",
    text: "ใบงาน เรื่อง เซตและการดำเนินการของเซต\nชั้นมัธยมศึกษาปีที่ ๔\nแบบฝึกหัด จงเขียนแผนภาพเวนน์ แสดงยูเนียนและอินเตอร์เซกชันของเซตที่กำหนดให้",
    pageCount: 4,
  });
  assert.deepEqual(s.levels, ["ม.4"]);
  assert(s.topics.includes("เซต"));
  assert(s.types.includes("ใบงาน"));
  assert(s.types.includes("แบบฝึกหัด"));
  assert.match(s.title, /เซต/);
  assert.match(s.description, /เซต/);
  assert(s.tags.includes("แผนภาพเวนน์"));
});
test("calculus content alone does not invent an education level", () => {
  const s = suggestMetadata({
    filename: "calculus.pdf",
    text: "บทเรียนแคลคูลัส\nคำอธิบายอนุพันธ์และปริพันธ์ พร้อมตัวอย่างการหาความชันของเส้นสัมผัสและการประยุกต์",
    pageCount: 10,
  });
  assert(s.topics.includes("แคลคูลัส"));
  assert.deepEqual(s.levels, []);
  assert(s.warnings.some((w) => w.includes("ระดับชั้น")));
});
test("scan-only content does not invent a summary from the filename", () => {
  const s = suggestMetadata({
    filename: "ใบงาน_ม.2.pdf",
    text: "",
    pageCount: 3,
  });
  assert.equal(s.description, "");
  assert.equal(s.readable, false);
  assert.deepEqual(s.levels, ["ม.2"]);
  assert(s.warnings.some((w) => w.includes("สแกน")));
});
test("grade ranges and university references are normalized without invalid categories", () => {
  const s = suggestMetadata({
    filename: "สถิติ ม.4-ม.6.pdf",
    text: "บทเรียนสถิติ ค่าเฉลี่ย มัธยฐาน และส่วนเบี่ยงเบนมาตรฐาน พร้อมตัวอย่างสำหรับทบทวนก่อนสอบ",
    pageCount: 6,
  });
  assert.deepEqual(s.levels, ["ม.4", "ม.5", "ม.6"]);
  const uni = suggestMetadata({
    filename: "linear-algebra.pdf",
    text: "พีชคณิตเชิงเส้น ระดับมหาวิทยาลัย\nบทเรียนเวกเตอร์ เมทริกซ์ และระบบสมการเชิงเส้น พร้อมนิยามและตัวอย่างประกอบ",
    pageCount: 20,
  });
  assert.deepEqual(uni.levels, ["มหาวิทยาลัย"]);
  assert(uni.topics.includes("พีชคณิตเชิงเส้น"));
});
test("page samples include the beginning, middle and end within a fixed budget", () => {
  assert.deepEqual(selectSamplePages(3), [1, 2, 3]);
  const pages = selectSamplePages(500);
  assert(pages.length <= 12);
  assert.equal(pages[0], 1);
  assert.equal(pages.at(-1), 500);
  assert(pages.some((p) => p > 200 && p < 300));
  assert.equal(new Set(pages).size, pages.length);
});
test("automatic suggestions never overwrite metadata already entered by the admin", () => {
  const draft: DocumentInput = {
    title: "ชื่อที่ครูเลือก",
    description: "คำอธิบายของครู",
    levels: ["ม.5"],
    topics: [],
    types: [],
    tags: ["ทบทวน"],
    pdf_path: "",
    cover_path: null,
    hidden: true,
  };
  const s = suggestMetadata({
    filename: "ใบงาน ม.4 เซต.pdf",
    text: "ใบงานเรื่องเซต ม.4\nแบบฝึกหัดแผนภาพเวนน์ ยูเนียน อินเตอร์เซกชัน และการดำเนินการของเซต",
    pageCount: 2,
  });
  const result = mergeSuggestions(draft, s);
  assert.equal(result.title, "ชื่อที่ครูเลือก");
  assert.equal(result.description, "คำอธิบายของครู");
  assert.deepEqual(result.levels, ["ม.5"]);
  assert(result.topics.includes("เซต"));
  assert.deepEqual(result.tags, ["ทบทวน"]);
  assert.equal(result.hidden, true);
});
test("changing PDFs clears prior automatic values but preserves manual corrections", () => {
  const old = suggestMetadata({
    filename: "เซต ม.4.pdf",
    text: "บทเรียนเซต ม.4 พร้อมตัวอย่างการเขียนแผนภาพเวนน์ ยูเนียนและอินเตอร์เซกชันของเซต",
    pageCount: 2,
  });
  const draft: DocumentInput = {
    ...old,
    title: "ชื่อที่แก้เอง",
    pdf_path: "",
    cover_path: null,
    hidden: false,
  };
  const cleared = clearSuggestions(draft, old);
  assert.equal(cleared.title, "ชื่อที่แก้เอง");
  assert.equal(cleared.description, "");
  assert.deepEqual(cleared.levels, []);
  assert.deepEqual(cleared.topics, []);
  const next = suggestMetadata({
    filename: "สถิติ ม.6.pdf",
    text: "บทเรียนสถิติ ม.6 ค่าเฉลี่ย มัธยฐาน ส่วนเบี่ยงเบนมาตรฐาน พร้อมตัวอย่างและนิยาม",
    pageCount: 3,
  });
  const merged = mergeSuggestions(cleared, next);
  assert.equal(merged.title, "ชื่อที่แก้เอง");
  assert.deepEqual(merged.levels, ["ม.6"]);
  assert(merged.topics.includes("สถิติ"));
  assert(!merged.topics.includes("เซต"));
});

