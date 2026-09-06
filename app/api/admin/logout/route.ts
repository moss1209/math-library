import { cookies } from "next/headers";
import { checkOrigin, apiError, COOKIE } from "@/lib/auth";
export async function POST(request: Request) {
  try {
    checkOrigin(request);
    (await cookies()).delete(COOKIE);
    return Response.json({ ok: true });
  } catch (e) {
    return apiError(e);
  }
}

