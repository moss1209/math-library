import { Search, SlidersHorizontal } from "lucide-react";
import { getDocuments } from "@/lib/repository";
import {
  LEVELS,
  TOPICS,
  TYPES,
  filterDocuments,
  type Filters,
} from "@/lib/domain";
import { Card, Empty } from "./library";
export async function Catalog({
  filters,
  search = false,
}: {
  filters: Filters;
  search?: boolean;
}) {
  const docs = filterDocuments(await getDocuments(), filters);
  return (
    <div className="page-container">
      <div className="eyebrow red">EXPLORE THE LIBRARY</div>
      <h1 className="page-title">
        {search ? "ค้นหาความรู้หน้าถัดไป" : "คลังทั้งหมด"}
        <span className="red">.</span>
      </h1>
      <p className="muted">
        บทเรียน แบบฝึกหัด และข้อสอบ ที่เลือกเรียนรู้ได้ด้วยตัวเอง
      </p>
      <form action={search ? "/search" : "/browse"} className="filter-form">
        <div className="search-input">
          <Search size={21} />
          <input
            name="q"
            aria-label="ค้นหาเอกสาร"
            defaultValue={filters.q}
            placeholder="ค้นหาชื่อเอกสาร หัวข้อ หรือแท็ก..."
          />
          <button className="button primary" type="submit">
            ค้นหา
          </button>
        </div>
        <div className="filter-row">
          <SlidersHorizontal size={18} />
          {(
            [
              ["level", "ทุกระดับชั้น", LEVELS],
              ["topic", "ทุกหัวข้อ", TOPICS],
              ["type", "ทุกประเภท", TYPES],
            ] as const
          ).map(([key, label, values]) => (
            <label key={key}>
              <span className="sr-only">{label}</span>
              <select name={key} defaultValue={filters[key] || ""}>
                <option value="">{label}</option>
                {values.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
          ))}
          <button className="button secondary" type="submit">
            ใช้ตัวกรอง
          </button>
          <a className="muted" href={search ? "/search" : "/browse"}>
            ล้างตัวกรอง
          </a>
        </div>
      </form>
      <div className="result-heading">
        <span>พบ {docs.length} เอกสาร</span>
        <span className="muted">เพิ่มล่าสุดก่อน</span>
      </div>
      {docs.length ? (
        <div className="card-grid">
          {docs.map((d) => (
            <Card key={d.id} doc={d} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

