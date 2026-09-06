import test from "node:test";
import assert from "node:assert/strict";
import {
  documentSchema,
  filterDocuments,
  uploadSchema,
  normalizeFilters,
  type DocumentInput,
  type LibraryDocument,
} from "../lib/domain";
const valid: DocumentInput = {
  title: "  เซต ม.4 ",
  description: "บทเรียนเรื่องเซต",
  levels: ["ม.4"],
  topics: ["เซต"],
  types: ["ชีทสอน"],
  tags: ["พื้นฐาน"],
  pdf_path: "pdf/12345678-1234-4234-8234-123456789012.pdf",
  cover_path: null,
  hidden: false,
};
test("metadata trims titles and rejects empty or unknown categories", () => {
  assert.equal(documentSchema.parse(valid).title, "เซต ม.4");
  assert.equal(
    documentSchema.safeParse({ ...valid, levels: [] }).success,
    false,
  );
  assert.equal(
    documentSchema.safeParse({ ...valid, topics: ["anything"] }).success,
    false,
  );
  assert.equal(
    documentSchema.safeParse({ ...valid, title: " " }).success,
    false,
  );
});
test("rejects traversal, external URLs and oversized uploads", () => {
  assert.equal(
    documentSchema.safeParse({ ...valid, pdf_path: "../secret.pdf" }).success,
    false,
  );
  assert.equal(
    documentSchema.safeParse({
      ...valid,
      pdf_path: "https://example.com/a.pdf",
    }).success,
    false,
  );
  assert.equal(
    uploadSchema.safeParse({
      kind: "pdf",
      size: 51 * 1024 * 1024,
      contentType: "application/pdf",
    }).success,
    false,
  );
  assert.equal(
    uploadSchema.safeParse({
      kind: "cover",
      size: 100,
      contentType: "image/svg+xml",
    }).success,
    false,
  );
});
test("search combines text and independent category facets without hidden records", () => {
  const rows: LibraryDocument[] = [
    {
      ...valid,
      id: "a",
      revision: 1,
      created_at: "2026-01-01",
      title: "เซต ม.4",
    },
    { ...valid, id: "b", revision: 1, created_at: "2026-01-02", hidden: true },
    {
      ...valid,
      id: "c",
      revision: 1,
      created_at: "2026-01-03",
      levels: ["ม.5"],
    },
  ];
  assert.deepEqual(
    filterDocuments(rows, {
      q: "พื้นฐาน",
      level: "ม.4",
      topic: "เซต",
      type: "ชีทสอน",
    }).map((x) => x.id),
    ["a"],
  );
  assert.equal(filterDocuments(rows, { q: "ไม่มีเนื้อหานี้" }).length, 0);
});
test("repeated query parameters use the first value instead of crashing search", () => {
  assert.deepEqual(
    normalizeFilters({
      q: ["เซต", "สถิติ"],
      level: ["ม.4", "ม.5"],
      topic: undefined,
      type: "ใบงาน",
    }),
    { q: "เซต", level: "ม.4", topic: "", type: "ใบงาน" },
  );
});

