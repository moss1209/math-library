import type { DocumentInput } from "./domain";
export type MetadataSuggestion = Pick<
  DocumentInput,
  "title" | "description" | "levels" | "topics" | "types" | "tags"
> & { warnings: string[]; readable: boolean };
const thaiDigits = "๐๑๒๓๔๕๖๗๘๙";
const normalize = (s: string) =>
  s
    .normalize("NFKC")
    .replace(/[๐-๙]/g, (c) => String(thaiDigits.indexOf(c)))
    .replace(/\u0000/g, "");
const rules: [DocumentInput["topics"][number], RegExp][] = [
  ["เซต", /เซต|แผนภาพเวนน์|ยูเนียน|อินเตอร์เซกชัน|\bset theory\b|\bunion\b/i],
  ["ตรรกศาสตร์", /ตรรกศาสตร์|ประพจน์|ตารางค่าความจริง|\blogic\b|proposition/i],
  [
    "แคลคูลัส",
    /แคลคูลัส|อนุพันธ์|ปริพันธ์|ลิมิต|calculus|derivative|integral/i,
  ],
  [
    "พีชคณิตเชิงเส้น",
    /พีชคณิตเชิงเส้น|เมทริกซ์|เวกเตอร์|linear algebra|matri(?:x|ces)|vector/i,
  ],
  [
    "พีชคณิต",
    /พีชคณิต(?!เชิงเส้น)|สมการ|อสมการ|พหุนาม|\balgebra\b|equation|polynomial/i,
  ],
  [
    "ความน่าจะเป็น",
    /ความน่าจะเป็น|การเรียงสับเปลี่ยน|การจัดหมู่|probability|permutation|combination/i,
  ],
  [
    "ทฤษฎีจำนวน",
    /ทฤษฎีจำนวน|จำนวนเฉพาะ|การหารลงตัว|number theory|prime number/i,
  ],
  [
    "เรขาคณิต",
    /เรขาคณิต|สามเหลี่ยม|วงกลม|รูปหลายเหลี่ยม|geometry|triangle|circle/i,
  ],
  [
    "สถิติ",
    /สถิติ|ค่าเฉลี่ย|มัธยฐาน|ฐานนิยม|ส่วนเบี่ยงเบน|statistics|standard deviation/i,
  ],
  ["ตรีโกณมิติ", /ตรีโกณมิติ|ไซน์|โคไซน์|trigonometry|\bsin\b|\bcos\b/i],
  ["ฟังก์ชัน", /ฟังก์ชัน|โดเมน|เรนจ์|function|domain|range of/i],
];
const typeRules: [DocumentInput["types"][number], RegExp][] = [
  ["ข้อสอบ", /ข้อสอบ|แบบทดสอบ|\bexam\b|\btest\b|\bquiz\b/i],
  ["ใบงาน", /ใบงาน|worksheet|work sheet/i],
  [
    "แบบฝึกหัด",
    /แบบฝึกหัด|แบบฝึกทักษะ|จง(?:หา|คำนวณ|เขียน)|exercise|practice|problem set/i,
  ],
  ["เฉลย", /เฉลย|แนวคำตอบ|answer key|solutions?/i],
  [
    "สื่อการสอน",
    /สื่อการสอน|กิจกรรมการเรียน|teaching material|classroom activity/i,
  ],
  [
    "ชีทสอน",
    /ชีท|บทเรียน|เนื้อหา|เอกสารประกอบ|นิยาม|ทฤษฎีบท|ตัวอย่าง|lecture|lesson|definition|theorem/i,
  ],
];
export function selectSamplePages(count: number) {
  if (!Number.isInteger(count) || count < 1) return [];
  if (count <= 12) return Array.from({ length: count }, (_, i) => i + 1);
  const pages = new Set([1, 2, 3, 4, 5]);
  for (let i = 1; i <= 7; i++) pages.add(Math.round(5 + ((count - 5) * i) / 7));
  return [...pages].sort((a, b) => a - b);
}
export function suggestMetadata({
  filename,
  text,
  pageCount,
  pdfTitle,
}: {
  filename: string;
  text: string;
  pageCount: number;
  pdfTitle?: string;
}): MetadataSuggestion {
  const clean = normalize(text)
    .replace(/[ \t]+/g, " ")
    .trim();
  const fileTitle = normalize(
    filename.replace(/\.pdf$/i, "").replace(/[_]+/g, " "),
  ).trim();
  const all = fileTitle + "\n" + clean;
  const levels: DocumentInput["levels"] = [];
  const addGrade = (n: number) => {
    if (
      n >= 1 &&
      n <= 6 &&
      !levels.includes(`ม.${n}` as DocumentInput["levels"][number])
    )
      levels.push(`ม.${n}` as DocumentInput["levels"][number]);
  };
  for (const match of all.matchAll(
    /(?:มัธยมศึกษาปีที่|มัธยมปีที่|ม\s*\.)\s*([1-6])\s*[-–ถึง]+\s*(?:(?:มัธยมศึกษาปีที่|ม\s*\.)\s*)?([1-6])/g,
  )) {
    for (let n = Number(match[1]); n <= Number(match[2]); n++) addGrade(n);
  }
  for (const match of all.matchAll(
    /(?:มัธยมศึกษาปีที่|มัธยมปีที่|ม\s*\.)\s*([1-6])(?!\d)/g,
  ))
    addGrade(Number(match[1]));
  for (const match of all.matchAll(/\bgrade\s*(7|8|9|10|11|12)\b/gi))
    addGrade(Number(match[1]) - 6);
  if (/มัธยม(?:ศึกษา)?ตอนต้น/.test(all)) [1, 2, 3].forEach(addGrade);
  if (/มัธยม(?:ศึกษา)?ตอนปลาย/.test(all)) [4, 5, 6].forEach(addGrade);
  levels.sort();
  if (
    /มหาวิทยาลัย|อุดมศึกษา|ปริญญา|university|undergraduate|college/i.test(all)
  )
    levels.push("มหาวิทยาลัย");
  const readable = (clean.match(/[ก-๙a-zA-Z]/g) || []).length >= 40;
  const topics = rules.filter(([, r]) => r.test(all)).map(([name]) => name);
  // A specific linear-algebra heading should not also match the generic English word.
  if (
    topics.includes("พีชคณิตเชิงเส้น") &&
    /linear algebra/i.test(all) &&
    !/(สมการ|พหุนาม|อสมการ)/.test(all)
  )
    topics.splice(
      topics.indexOf("พีชคณิต"),
      topics.includes("พีชคณิต") ? 1 : 0,
    );
  const types = typeRules.filter(([, r]) => r.test(all)).map(([name]) => name);
  const lines = clean
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(
      (s) =>
        s.length >= 6 &&
        s.length <= 160 &&
        !/^(หน้า\s*\d|page\s*\d|https?:|ชื่อ[ :]|เลขที่[ :])/i.test(s),
    );
  const generic =
    /^(upload|scan|sample|document|untitled|image|img|file)[\s\d_-]*$/i;
  const first =
    lines.find((s) =>
      /เรื่อง|บทที่|ใบงาน|แคลคูลัส|พีชคณิต|สถิติ|worksheet|calculus|algebra/i.test(
        s,
      ),
    ) || lines[0];
  const validPdfTitle =
    pdfTitle &&
    pdfTitle.length <= 160 &&
    !generic.test(pdfTitle) &&
    !/^Microsoft (Word|PowerPoint)/i.test(pdfTitle)
      ? pdfTitle
      : undefined;
  const title = (
    validPdfTitle ||
    (generic.test(fileTitle) ? first : undefined) ||
    fileTitle ||
    first ||
    "เอกสารคณิตศาสตร์"
  ).slice(0, 180);
  const excerpts = lines
    .filter(
      (s) =>
        s !== title &&
        s.length >= 28 &&
        !/^(ชื่อ|โรงเรียน|ผู้จัดทำ|จัดทำโดย|อีเมล|email|โทร)/i.test(s),
    )
    .slice(0, 2)
    .join(" ")
    .slice(0, 450);
  const description = readable
    ? [
        `${types.length ? types.join(" / ") : "เอกสารคณิตศาสตร์"}${topics.length ? " เรื่อง" + topics.join(" และ ") : ""}${levels.length ? " สำหรับ" + levels.join(", ") : ""} จำนวน ${pageCount} หน้า`,
        excerpts ? "เนื้อหาที่พบ: " + excerpts : "",
      ]
        .filter(Boolean)
        .join("\n")
    : "";
  const details = [
    "แผนภาพเวนน์",
    "ยูเนียน",
    "อินเตอร์เซกชัน",
    "อนุพันธ์",
    "ปริพันธ์",
    "ลิมิต",
    "เมทริกซ์",
    "เวกเตอร์",
    "จำนวนเฉพาะ",
    "ค่าเฉลี่ย",
    "มัธยฐาน",
    "พหุนาม",
  ].filter((s) => all.includes(s));
  const tags = [...new Set([...topics, ...details])].slice(0, 12);
  const warnings: string[] = [];
  if (!readable)
    warnings.push(
      "อ่านข้อความได้น้อยหรือไม่ได้ ไฟล์อาจเป็นภาพสแกน จึงยังไม่สร้างคำอธิบายให้อัตโนมัติ",
    );
  if (!levels.length)
    warnings.push("ไม่พบระดับชั้นที่ระบุชัดเจน กรุณาเลือกระดับชั้น");
  if (!topics.length) warnings.push("ยังระบุหัวข้อไม่ได้ กรุณาเลือกหัวข้อ");
  if (!types.length)
    warnings.push("ยังระบุประเภทเอกสารไม่ได้ กรุณาเลือกประเภท");
  return {
    title,
    description,
    levels,
    topics,
    types,
    tags,
    warnings,
    readable,
  };
}
export function mergeSuggestions(
  draft: DocumentInput,
  s: MetadataSuggestion,
): DocumentInput {
  return {
    ...draft,
    title: draft.title.trim() ? draft.title : s.title,
    description: draft.description.trim() ? draft.description : s.description,
    levels: draft.levels.length ? draft.levels : s.levels,
    topics: draft.topics.length ? draft.topics : s.topics,
    types: draft.types.length ? draft.types : s.types,
    tags: draft.tags.length ? draft.tags : s.tags,
  };
}
export function clearSuggestions(
  draft: DocumentInput,
  previous: MetadataSuggestion,
): DocumentInput {
  const cleared = { ...draft };
  for (const field of ["title", "description"] as const)
    if (draft[field] === previous[field]) cleared[field] = "";
  for (const field of ["levels", "topics", "types", "tags"] as const)
    if (JSON.stringify(draft[field]) === JSON.stringify(previous[field]))
      cleared[field] = [];
  return cleared;
}

