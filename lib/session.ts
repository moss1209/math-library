import { createHmac, timingSafeEqual, createHash } from "node:crypto";
export const SESSION_SECONDS = 8 * 60 * 60;
function mac(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}
export function createSession(
  secret: string,
  now = Math.floor(Date.now() / 1000),
) {
  const payload = Buffer.from(
    JSON.stringify({ exp: now + SESSION_SECONDS, role: "admin" }),
  ).toString("base64url");
  return `${payload}.${mac(payload, secret)}`;
}
export function verifySession(
  token: string | undefined,
  secret: string,
  now = Math.floor(Date.now() / 1000),
) {
  if (!token || !secret || token.length > 1024) return false;
  try {
    const [payload, sig, ...rest] = token.split(".");
    const expected = mac(payload, secret);
    if (
      rest.length ||
      !sig ||
      sig.length !== expected.length ||
      !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
    )
      return false;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return (
      data.role === "admin" &&
      Number.isInteger(data.exp) &&
      data.exp > now &&
      data.exp <= now + SESSION_SECONDS
    );
  } catch {
    return false;
  }
}
export function sameOrigin(origin: string | null, expected: string) {
  try {
    return !!origin && new URL(origin).origin === new URL(expected).origin;
  } catch {
    return false;
  }
}
export function passwordMatches(given: string, expected: string) {
  return (
    !!given &&
    !!expected &&
    timingSafeEqual(
      createHash("sha256").update(given).digest(),
      createHash("sha256").update(expected).digest(),
    )
  );
}

