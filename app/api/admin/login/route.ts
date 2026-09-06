import { cookies } from "next/headers";
import { createHmac } from "node:crypto";
import { db, configured } from "@/lib/supabase";
import {
  adminConfigured,
  checkOrigin,
  readJson,
  HttpError,
  apiError,
  COOKIE,
} from "@/lib/auth";
import { createSession, passwordMatches, SESSION_SECONDS } from "@/lib/session";
export async function POST(request: Request) {
  try {
    checkOrigin(request);
    if (!configured() || !adminConfigured())
      throw new HttpError(
        503,
        "ยังไม่ได้ตั้งค่าระบบผู้ดูแล กรุณาดูคู่มือการติดตั้ง",
      );
    const body = await readJson(request);
    if (typeof body.password !== "string" || body.password.length > 256)
      throw new HttpError(400, "กรุณาระบุรหัสผ่าน");
    // Vercel overwrites x-vercel-forwarded-for; never trust user-controlled forwarding headers.
    const ip = process.env.VERCEL
      ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() ||
        "unknown"
      : "local";
    const key = createHmac("sha256", process.env.SESSION_SECRET!)
      .update(ip)
      .digest("hex");
    const { data: allowed, error } = await db().rpc("consume_admin_attempt", {
      attempt_key: key,
    });
    if (error) throw error;
    if (!allowed)
      throw new HttpError(429, "ลองรหัสผ่านเกินจำนวนที่กำหนด กรุณารอ 15 นาที");
    if (!passwordMatches(body.password, process.env.ADMIN_PASSWORD!))
      throw new HttpError(401, "รหัสผ่านไม่ถูกต้อง");
    (await cookies()).set(COOKIE, createSession(process.env.SESSION_SECRET!), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_SECONDS,
    });
    return Response.json({ ok: true });
  } catch (e) {
    return apiError(e);
  }
}

