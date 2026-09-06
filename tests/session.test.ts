import test from "node:test";
import assert from "node:assert/strict";
import {
  createSession,
  verifySession,
  sameOrigin,
  passwordMatches,
} from "../lib/session";
const secret = "0123456789abcdef0123456789abcdef";
test("sessions expire and reject tampering or a different secret", () => {
  const token = createSession(secret, 1000);
  assert.equal(verifySession(token, secret, 1001), true);
  assert.equal(verifySession(token + "x", secret, 1001), false);
  assert.equal(
    verifySession(token, "another-secret-with-32-characters", 1001),
    false,
  );
  assert.equal(verifySession(token, secret, 1000 + 8 * 3600), false);
  assert.equal(verifySession(undefined, secret, 1001), false);
});
test("cross-site mutations and missing origins are rejected", () => {
  assert.equal(
    sameOrigin("https://math.example", "https://math.example"),
    true,
  );
  assert.equal(
    sameOrigin("https://attacker.example", "https://math.example"),
    false,
  );
  assert.equal(sameOrigin(null, "https://math.example"), false);
});
test("password comparison rejects missing and incorrect values", () => {
  assert.equal(passwordMatches("correct-password", "correct-password"), true);
  assert.equal(passwordMatches("wrong", "correct-password"), false);
  assert.equal(passwordMatches("", ""), false);
});

