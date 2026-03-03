import OrgAvatar from "../../../assets/icons/OrgAvatar";
import type { organizationsProps } from "../types";

export default function TableRow({ org }: organizationsProps) {
  return (
    <div className="border-b border-gray-800 last:border-0">
      <div className="hidden md:grid grid-cols-12 items-center px-2 py-3 hover:bg-[#1a1a1a] transition-colors duration-150">
        <div className="col-span-3 flex items-center gap-3">
          <OrgAvatar name={org.name} />
          <span className="text-sm text-white font-medium truncate">
            {org.name}
          </span>
        </div>
        <span className="col-span-3 text-sm text-gray-400 truncate pr-4">
          {org.legalName}
        </span>
        <span className="col-span-2 text-sm text-gray-400">{org.country}</span>
        <span className="col-span-1 text-sm text-gray-300 text-center font-mono">
          {org.defaultCurrency}
        </span>
        <span className="col-span-2 text-sm text-gray-400 truncate pr-4">
          {org.email}
        </span>
        <div className="col-span-1 flex justify-center">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
              org.status === "ACTIVE"
                ? "bg-green-900/50 text-green-400 border border-green-800"
                : "bg-red-900/50 text-red-400 border border-red-800"
            }`}
          >
            {org.status}
          </span>
        </div>
      </div>
    </div>
  );
}
