begin;
create extension if not exists pgcrypto;
create table if not exists public.documents (
 id uuid primary key default gen_random_uuid(),
 title text not null check (length(btrim(title)) between 1 and 180),
 description text not null default '' check (length(description)<=5000),
 levels text[] not null check (cardinality(levels) between 1 and 7 and levels <@ array['ม.1','ม.2','ม.3','ม.4','ม.5','ม.6','มหาวิทยาลัย']),
 topics text[] not null check (cardinality(topics) between 1 and 11 and topics <@ array['เซต','ตรรกศาสตร์','แคลคูลัส','พีชคณิต','พีชคณิตเชิงเส้น','ความน่าจะเป็น','ทฤษฎีจำนวน','เรขาคณิต','สถิติ','ตรีโกณมิติ','ฟังก์ชัน']),
 types text[] not null check (cardinality(types) between 1 and 6 and types <@ array['ชีทสอน','ข้อสอบ','ใบงาน','แบบฝึกหัด','เฉลย','สื่อการสอน']),
 tags text[] not null default '{}' check (cardinality(tags)<=12),
 pdf_path text not null unique check (pdf_path ~ '^pdf/[0-9a-f-]{36}\.pdf$'),
 cover_path text unique check (cover_path ~ '^covers/[0-9a-f-]{36}\.(jpg|png|webp)$'),
 hidden boolean not null default false,
 revision integer not null default 1 check (revision>0),
 created_at timestamptz not null default now()
);
create index if not exists documents_public_recent on public.documents(created_at desc) where hidden=false;
alter table public.documents enable row level security;
revoke all on public.documents from anon, authenticated;
grant all on public.documents to service_role;

create table if not exists public.admin_attempts (
 key text primary key,
 started_at timestamptz not null default now(),
 attempts integer not null default 1
);
alter table public.admin_attempts enable row level security;
revoke all on public.admin_attempts from anon, authenticated;
grant all on public.admin_attempts to service_role;

-- Atomic, persistent throttling shared by every Vercel instance.
create or replace function public.consume_admin_attempt(attempt_key text)
returns boolean language plpgsql security definer set search_path=public as $$
declare local_count integer; global_count integer;
begin
 perform pg_advisory_xact_lock(74290103);
 delete from public.admin_attempts where started_at < now()-interval '1 day';
 insert into public.admin_attempts(key) values ('global')
 on conflict(key) do update set
 attempts=case when admin_attempts.started_at<now()-interval '15 minutes' then 1 else admin_attempts.attempts+1 end,
 started_at=case when admin_attempts.started_at<now()-interval '15 minutes' then now() else admin_attempts.started_at end
 returning attempts into global_count;
 if global_count>100 then return false; end if;
 insert into public.admin_attempts(key) values (attempt_key)
 on conflict(key) do update set
 attempts=case when admin_attempts.started_at<now()-interval '15 minutes' then 1 else admin_attempts.attempts+1 end,
 started_at=case when admin_attempts.started_at<now()-interval '15 minutes' then now() else admin_attempts.started_at end
 returning attempts into local_count;
 return local_count<=10;
end;
$$;
revoke all on function public.consume_admin_attempt(text) from public,anon,authenticated;
grant execute on function public.consume_admin_attempt(text) to service_role;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('math-library','math-library',false,52428800,array['application/pdf','image/jpeg','image/png','image/webp'])
on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
-- Intentionally no anonymous Storage policies. Only signed uploads/downloads are exposed.
commit;

