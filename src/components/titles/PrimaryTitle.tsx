import type { TitleProps } from "./types";

export default function PrimaryTitle({
  primaryTitle,
  description,
}: TitleProps) {
  return (
    <div className="font-bold flex flex-col items-start gap-2 mb-4 text-white">
      <h2 className="text-4xl">{primaryTitle}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
