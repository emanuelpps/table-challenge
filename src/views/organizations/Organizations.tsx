import BoxContainer from "../../components/layout/BoxContainer";
import Title from "./components/Title";
import organizationsData from "../../data/organizations.json";
import MobileCard from "./components/MobileCard";
import TableRow from "./components/TableRow";

export default function Organizations() {
  const titlesTable = [
    { label: "Organization", span: 3 },
    { label: "Legal Name", span: 3 },
    { label: "Country", span: 2 },
    { label: "Currency", span: 1, center: true },
    { label: "Email", span: 2 },
    { label: "Status", span: 1, center: true },
  ];
  return (
    <section className="flex flex-col w-[90%] mx-auto mt-10">
      <Title />
      <BoxContainer>
        <div className="hidden md:grid grid-cols-12 text-[10px] uppercase text-gray-500 font-bold tracking-wider border-b border-gray-800 pb-3 mb-1 px-2">
          {titlesTable.map((t) => (
            <span
              key={t.label}
              className={`col-span-${t.span} ${t.center ? "text-center" : ""}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        {organizationsData.map((org) => (
          <div key={org.id}>
            <TableRow org={org} />
            <MobileCard org={org} />
          </div>
        ))}
      </BoxContainer>
    </section>
  );
}
