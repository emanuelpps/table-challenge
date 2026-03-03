import type { ButtonProps } from "./types";

export default function SecondaryButton({ children, icon }: ButtonProps) {
  return (
    <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#181818] transition-colors duration-200 cursor-pointer">
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
