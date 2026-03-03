import { memo, useMemo, useState } from "react";
import BoxContainer from "../../../components/layout/BoxContainer";
import type { Clearing } from "../../../types/clearings";
import type { OrganizationType } from "../../../types/organization";
import { FiSliders, FiSearch } from "react-icons/fi";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

interface ClearingTableProps {
  data: Clearing[];
  organizations: OrganizationType[];
}

const Table = memo(function Table({ data, organizations }: ClearingTableProps) {
  const [search, setSearch] = useState("");

  const orgMap = useMemo(() => {
    const map = new Map<OrganizationType["id"], string>();
    organizations.forEach((org) => map.set(org.id, org.name));
    return map;
  }, [organizations]);

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((item) => {
      const orgName = (orgMap.get(item.organizationId) ?? "").toLowerCase();
      return (
        String(item.id).includes(q) ||
        item.reference.toLowerCase().includes(q) ||
        orgName.includes(q) ||
        item.status.toLowerCase().includes(q)
      );
    });
  }, [data, search, orgMap]);

  return (
    <BoxContainer>
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search in results..."
            className="bg-[#0F0F0F] border border-gray-800 rounded-md pl-9 pr-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 w-64 transition-colors"
          />
        </div>
        <button className="p-2 rounded-md border border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600 transition-colors">
          <FiSliders className="w-4 h-4" />
        </button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] uppercase text-gray-500 border-b border-gray-800 tracking-wider">
            <th className="py-3 px-2">ID</th>
            <th className="py-3 px-2">Organization</th>
            <th className="py-3 px-2">Reference</th>
            <th className="py-3 px-2">Period</th>
            <th className="py-3 px-2">Currency</th>
            <th className="py-3 px-2 text-right">Amount</th>
            <th className="py-3 px-2 text-center">Status</th>
            <th className="py-3 px-2 text-center">Date</th>
            <th className="py-3 px-2 text-center">Action</th>
            <th className="py-3 px-2 text-center">Paid</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => {
            const orgName = orgMap.get(item.organizationId) ?? "Unknown";
            return <TableRow key={item.id} item={item} orgName={orgName} />;
          })}
        </tbody>
      </table>
      <TableFooter filtered={filtered} />
    </BoxContainer>
  );
});

export default Table;
