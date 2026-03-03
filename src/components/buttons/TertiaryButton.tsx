import type { ButtonProps } from "./types";

export default function TertiaryButton({
  children,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="flex items-center gap-1 text-red-500 text-[10px] font-bold hover:text-red-400 mb-3 ml-2 transition-colors uppercase tracking-wider cursor-pointer"
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
