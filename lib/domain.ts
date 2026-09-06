import { z } from "zod";
export const LEVELS = [
  "ม.1",
  "ม.2",
  "ม.3",
  "ม.4",
  "ม.5",
  "ม.6",
  "มหาวิทยาลัย",
] as const;
export const TOPICS = [
  "เซต",
  "ตรรกศาสตร์",
  "แคลคูลัส",
  "พีชคณิต",
  "พีชคณิตเชิงเส้น",
  "ความน่าจะเป็น",
  "ทฤษฎีจำนวน",
  "เรขาคณิต",
  "สถิติ",
  "ตรีโกณมิติ",
  "ฟังก์ชัน",
] as const;
export const TYPES = [
  "ชีทสอน",
  "ข้อสอบ",
  "ใบงาน",
  "แบบฝึกหัด",
  "เฉลย",
  "สื่อการสอน",
] as const;
const uuid =
  "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
export const documentSchema = z.object({
  title: z.string().trim().min(1).max(180),
  description: z.string().trim().max(5000),
  levels: z.array(z.enum(LEVELS)).min(1).max(7),
  topics: z.array(z.enum(TOPICS)).min(1).max(11),
  types: z.array(z.enum(TYPES)).min(1).max(6),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
  pdf_path: z.string().regex(new RegExp(`^pdf/${uuid}\\.pdf$`)),
  cover_path: z
    .string()
    .regex(new RegExp(`^covers/${uuid}\\.(jpg|png|webp)$`))
    .nullable(),
  hidden: z.boolean(),
});
export const uploadSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("pdf"),
    size: z
      .number()
      .int()
      .positive()
      .max(50 * 1024 * 1024),
    contentType: z.literal("application/pdf"),
  }),
  z.object({
    kind: z.literal("cover"),
    size: z
      .number()
      .int()
      .positive()
      .max(5 * 1024 * 1024),
    contentType: z.enum(["image/jpeg", "image/png", "image/webp"]),
  }),
]);
export type DocumentInput = z.infer<typeof documentSchema>;
export type LibraryDocument = DocumentInput & {
  id: string;
  created_at: string;
  revision: number;
  cover_url?: string | null;
};
export type Filters = {
  q?: string;
  level?: string;
  topic?: string;
  type?: string;
};
export function normalizeFilters(
  raw: Record<string, string | string[] | undefined>,
): Filters {
  const first = (value: string | string[] | undefined) =>
    (Array.isArray(value) ? value[0] : value) || "";
  return {
    q: first(raw.q).slice(0, 300),
    level: first(raw.level),
    topic: first(raw.topic),
    type: first(raw.type),
  };
}
export function filterDocuments(docs: LibraryDocument[], f: Filters) {
  const query = (f.q || "").trim().toLocaleLowerCase();
  return docs.filter(
    (d) =>
      !d.hidden &&
      (!f.level || d.levels.includes(f.level as (typeof LEVELS)[number])) &&
      (!f.topic || d.topics.includes(f.topic as (typeof TOPICS)[number])) &&
      (!f.type || d.types.includes(f.type as (typeof TYPES)[number])) &&
      (!query ||
        [
          d.title,
          d.description,
          ...d.tags,
          ...d.topics,
          ...d.levels,
          ...d.types,
        ]
          .join(" ")
          .toLocaleLowerCase()
          .includes(query)),
  );
}

