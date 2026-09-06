import { Catalog } from "@/components/catalog";
import { normalizeFilters } from "@/lib/domain";
export const dynamic = "force-dynamic";
export const metadata = { title: "คลังทั้งหมด" };
export default async function Browse({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <Catalog filters={normalizeFilters(await searchParams)} />;
}

