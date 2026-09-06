# Math Library Implementation Plan

Goal: complete the approved Math Library in Next.js + Supabase.

Architecture: server-only repository and private storage, signed admin sessions, direct-to-storage upload, React public and admin interfaces. Stack: Next.js, React, TypeScript, Supabase, Zod. Spec: design.md.

- [x] Domain and security: tests for expired/tampered sessions, invalid categories, unsafe upload paths, combined filtering; implement lib/domain.ts and lib/session.ts; run npm test.
- [x] Public library: repository, sample PDF, Home/Browse/Search/detail/reader, download and sharing, optional device-local name. Compile and request the main route; open preview.
- [x] Administration: login/logout, durable rate limit SQL, signed upload and validation, add/edit/hide/delete, schema with denied anonymous writes; exercise HTTP authorization and failure paths.
- [x] Verify and deliver: npm test, npm run typecheck, npm run build; HTTP route checks; document external integration limits and complete Thai setup/deploy instructions.

