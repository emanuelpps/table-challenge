import FilterBox from "./components/FilterBox";
import Header from "./components/Header";

export default function Clearings() {
  return (
    <section className="flex flex-col w-[90%] mx-auto">
      <Header />
      <FilterBox />
    </section>
  );
}
