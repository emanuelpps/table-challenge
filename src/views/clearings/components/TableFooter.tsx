import type { Clearing } from "../../../types/clearings";

interface TableFooterProps {
  filtered: Clearing[];
}

export default function TableFooter({ filtered }: TableFooterProps) {
  const totalPlatformFees = filtered.reduce(
    (s, i) => s + i.totalPlatformFees,
    0,
  );
  const totalServiceFees = filtered.reduce((s, i) => s + i.totalServiceFees, 0);

  return (
    <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
      <div className="flex justify-between">
        <span>Total Transaction Costs</span>
        <span className="text-white font-bold font-mono">
          ANG{" "}
          {totalPlatformFees.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Total Service Costs</span>
        <span className="text-white font-bold font-mono">
          ANG{" "}
          {totalServiceFees.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
