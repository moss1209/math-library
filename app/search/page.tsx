import { Catalog } from "@/components/catalog";
import { normalizeFilters } from "@/lib/domain";
export const dynamic = "force-dynamic";
export const metadata = { title: "ค้นหาเอกสาร" };
export default async function Search({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return <Catalog filters={normalizeFilters(await searchParams)} search />;
}

