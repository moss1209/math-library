import "server-only";
import { createClient } from "@supabase/supabase-js";
export const configured = () =>
  Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
export function db() {
  if (!configured()) throw new Error("กรุณาตั้งค่า Supabase ก่อนใช้งาน");
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
export const BUCKET = "math-library";

