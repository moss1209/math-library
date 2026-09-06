import "server-only";
import { cookies } from "next/headers";
import { sameOrigin, verifySession } from "./session";
export const COOKIE = "math_library_admin";
export const adminConfigured = () =>
  Boolean(
    process.env.ADMIN_PASSWORD &&
    process.env.ADMIN_PASSWORD.length >= 12 &&
    process.env.ADMIN_PASSWORD.length <= 256 &&
    process.env.SESSION_SECRET &&
    process.env.SESSION_SECRET.length >= 32 &&
    process.env.APP_URL,
  );
export async function isAdmin() {
  return (
    adminConfigured() &&
    verifySession(
      (await cookies()).get(COOKIE)?.value,
      process.env.SESSION_SECRET!,
    )
  );
}
export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function checkOrigin(request: Request) {
  if (!sameOrigin(request.headers.get("origin"), process.env.APP_URL || ""))
    throw new HttpError(403, "คำขอไม่ถูกต้อง กรุณาเปิดจากเว็บไซต์โดยตรง");
}
export async function requireAdmin(request: Request) {
  checkOrigin(request);
  if (!(await isAdmin())) throw new HttpError(401, "กรุณาเข้าสู่ระบบผู้ดูแล");
}
export function apiError(error: unknown) {
  if (error instanceof HttpError)
    return Response.json({ error: error.message }, { status: error.status });
  console.error(error instanceof Error ? error.message : "API error");
  return Response.json(
    { error: "ดำเนินการไม่สำเร็จ กรุณาลองใหม่หรือตรวจการตั้งค่าระบบ" },
    { status: 500 },
  );
}
export async function readJson(request: Request) {
  const text = await request.text();
  if (text.length > 24000) throw new HttpError(413, "ข้อมูลมีขนาดใหญ่เกินไป");
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error();
    return parsed;
  } catch {
    throw new HttpError(400, "รูปแบบข้อมูลไม่ถูกต้อง");
  }
}

