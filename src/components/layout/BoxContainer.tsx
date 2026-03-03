import PrimaryTitle from "../titles/PrimaryTitle";

interface BoxContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function BoxContainer({
  children,
  title,
  className,
}: BoxContainerProps) {
  return (
    <section
      className={`bg-[#141414] border border-gray-800 rounded-xl p-6 w-full mb-10 ${className}`}
    >
      {title && <PrimaryTitle primaryTitle={title} description="" />}
      {children}
    </section>
  );
}
