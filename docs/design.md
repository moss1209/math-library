# Math Library

Approved direction: Thai Netflix-inspired document library, black/charcoal surfaces, red accents, portrait typographic document covers. Next.js App Router with Supabase Postgres and private Storage, deployed on Vercel. Public visitors do not authenticate; their optional name stays on their device.

Routes: /, /browse, /search, /documents/[id], /documents/[id]/read, /admin. Search combines text, multiple education levels, topics, document types. Each document can belong to multiple categories. PDF is the supported binary format; document types mean teaching notes, exams, worksheets, exercises, answers, and teaching materials.

Server-only service role reads public rows with explicit hidden=false filtering and manages private files. Password authentication produces a signed expiring HttpOnly cookie; all mutations validate origin and session. Database-backed throttling protects password attempts across serverless instances. Browser uploads use signed URLs; metadata writes verify uploaded objects. Hidden documents are denied through public metadata and file routes. Already issued file URLs expire within 60 seconds.

Without environment configuration, read-only demo records and an original sample PDF are available. Administration fails closed. No simulated persistence is presented as real storage.

Deliverable: source project, locked dependencies, SQL migration, environment template, automated tests, Thai run/deployment guide. Supabase and Vercel account configuration is external setup and requires owner credentials.

