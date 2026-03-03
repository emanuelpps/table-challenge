import OrgAvatar from "../../../assets/icons/OrgAvatar";
import type { organizationsProps } from "../types";

export default function MobileCard({ org }: organizationsProps) {
  return (
    <div className="md:hidden flex items-start gap-3 px-2 py-4 hover:bg-[#1a1a1a] transition-colors duration-150">
      <OrgAvatar name={org.name} />
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm text-white font-medium truncate">
            {org.name}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0 ${
              org.status === "ACTIVE"
                ? "bg-green-900/50 text-green-400 border border-green-800"
                : "bg-red-900/50 text-red-400 border border-red-800"
            }`}
          >
            {org.status}
          </span>
        </div>
        <span className="text-xs text-gray-500 truncate">{org.legalName}</span>
        <div className="flex gap-3 mt-1 flex-wrap">
          <span className="text-[11px] text-gray-400">{org.country}</span>
          <span className="text-[11px] text-gray-600">·</span>
          <span className="text-[11px] text-gray-300 font-mono">
            {org.defaultCurrency}
          </span>
          <span className="text-[11px] text-gray-600">·</span>
          <span className="text-[11px] text-gray-400 truncate">
            {org.email}
          </span>
        </div>
      </div>
    </div>
  );
}
