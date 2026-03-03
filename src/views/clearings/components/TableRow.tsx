import { FiCheck, FiX, FiClock } from "react-icons/fi";
import OrgAvatar from "../../../assets/icons/OrgAvatar";
import type { Clearing } from "../../../types/clearings";

interface TableRowProps {
  item: Clearing;
  orgName: string;
}

export default function TableRow({ item, orgName }: TableRowProps) {
  const isCleared = item.status === "CLEARED";

  const formattedDate =
    isCleared && item.clearingDate
      ? (() => {
          const d = new Date(item.clearingDate);
          return `${d.getDate()}/${d.toLocaleString("en", { month: "short" })}/${String(d.getFullYear()).slice(2)}`;
        })()
      : "Pending";

  return (
    <tr className="border-b border-gray-800/40 hover:bg-[#1A1A1A] transition-colors">
      <td className="py-4 px-2 text-xs text-gray-500 font-mono">#{item.id}</td>
      <td className="py-4 px-2">
        <div className="flex items-center gap-2">
          <OrgAvatar name={orgName} />
          <span className="text-sm font-medium text-white whitespace-nowrap">
            {orgName}
          </span>
        </div>
      </td>
      <td className="py-4 px-2 text-sm text-gray-300 max-w-[160px]">
        <span className="line-clamp-1">{item.reference}</span>
      </td>
      <td className="py-4 px-2 text-sm text-gray-400 whitespace-nowrap">
        {item.period === "ON_DEMAND"
          ? "On Demand"
          : item.period.charAt(0) + item.period.slice(1).toLowerCase()}
      </td>
      <td className="py-4 px-2 text-sm text-gray-400">{item.currency}</td>
      <td className="py-4 px-2 text-right">
        <span className="text-sm font-bold text-white font-mono">
          {item.currency === "EUR" ? "€" : item.currency}{" "}
          {item.grossAmount.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </td>

      <td className="py-4 px-2 text-center">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap ${
            isCleared
              ? "bg-green-500/10 text-green-400 border-green-500/20"
              : "bg-orange-500/10 text-orange-400 border-orange-500/20"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${isCleared ? "bg-green-400" : "bg-orange-400"}`}
          />
          {isCleared ? "Cleared" : "To Be Cleared"}
        </span>
      </td>

      <td className="py-4 px-2 text-center text-sm text-gray-400 whitespace-nowrap">
        {formattedDate}
      </td>

      <td className="py-4 px-2 text-center">
        {isCleared ? (
          <div className="flex justify-center">
            <button className="p-1.5 rounded-full text-orange-400 hover:bg-orange-500/10 transition-colors">
              <FiClock className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1">
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-gray-700 text-gray-300 text-xs font-medium hover:border-gray-500 hover:text-white transition-colors">
              <FiCheck className="w-3 h-3" /> Clear
            </button>
            <button className="p-1 rounded-md text-red-500 hover:bg-red-500/10 transition-colors">
              <FiX className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </td>

      <td className="py-4 px-2 text-center">
        {item.paid ? (
          <div className="flex justify-center">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <FiCheck className="w-3 h-3 text-green-400" />
            </div>
          </div>
        ) : (
          <span className="text-[10px] text-gray-600 uppercase tracking-wide">
            —
          </span>
        )}
      </td>
    </tr>
  );
}
