import { isAdmin, adminConfigured } from "@/lib/auth";
import { configured } from "@/lib/supabase";
import { getDocuments } from "@/lib/repository";
import { AdminLogin, AdminDashboard } from "@/components/admin";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "จัดการคลังเอกสาร",
  robots: { index: false, follow: false },
};
export default async function Admin() {
  const ready = configured() && adminConfigured();
  if (!ready || !(await isAdmin())) return <AdminLogin ready={ready} />;
  return <AdminDashboard documents={await getDocuments(true)} />;
}

