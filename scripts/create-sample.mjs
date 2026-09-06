import { mkdirSync, writeFileSync } from "node:fs";
// Original sample, not a third-party textbook. Plain vector text keeps this PDF portable.
const content = [
  "BT /F1 26 Tf 55 765 Td (MATHFLIX / SAMPLE LESSON) Tj",
  "0 -42 Td /F1 15 Tf (A small step into calculus) Tj",
  "0 -45 Td /F1 12 Tf (This is the original demo PDF included with Math Library.) Tj",
  "0 -24 Td (Upload your own Thai PDF from the admin panel to replace demo content.) Tj",
  "0 -50 Td /F1 18 Tf (1. The derivative of a square) Tj",
  "0 -32 Td /F1 12 Tf (Let f\(x\) = x^2. The slope at x is f_prime\(x\) = 2x.) Tj",
  "0 -25 Td (At x = 3, the slope is 6.) Tj",
  "0 -48 Td /F1 18 Tf (2. Try it yourself) Tj",
  "0 -30 Td /F1 12 Tf (a. Find the derivative of f\(x\) = 3x^2.) Tj",
  "0 -25 Td (b. Evaluate that derivative at x = 2.) Tj",
  "0 -48 Td /F1 18 Tf (3. Check your answer) Tj",
  "0 -30 Td /F1 12 Tf (a. f_prime\(x\) = 6x.) Tj",
  "0 -25 Td (b. f_prime\(2\) = 12.) Tj",
  "0 -70 Td /F1 10 Tf (Demo content / Created for this project / 2026) Tj ET",
].join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 6\n0000000000 65535 f \n${offsets
  .slice(1)
  .map((o) => String(o).padStart(10, "0") + " 00000 n \n")
  .join("")}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
mkdirSync("public", { recursive: true });
writeFileSync("public/sample.pdf", pdf);

