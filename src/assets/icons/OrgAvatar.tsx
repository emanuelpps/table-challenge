export default function OrgAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const colors = [
    "bg-blue-500/20 text-blue-400",
    "bg-purple-500/20 text-purple-400",
    "bg-pink-500/20 text-pink-400",
    "bg-teal-500/20 text-teal-400",
    "bg-yellow-500/20 text-yellow-400",
  ];
  const color = colors[initials.charCodeAt(0) % colors.length];

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${color}`}
    >
      {initials}
    </div>
  );
}
