import PrimaryButton from "../../../components/buttons/PrimaryButton";
import FilterInput from "../../../components/inputs/FilterInput";
import BoxContainer from "../../../components/layout/BoxContainer";
import { IoIosSearch } from "react-icons/io";

export default function FilterBox() {
  return (
    <div className="flex w-full justify-center items-center">
      <BoxContainer className="flex">
        <div className="flex gap-6 w-full">
          <FilterInput label="Filter" placeholder="Filter" />
          <FilterInput label="Filter" placeholder="Filter" />
          <FilterInput label="Filter" placeholder="Filter" />
          <FilterInput label="Filter" placeholder="Filter" />
        </div>
        <div className="flex w-full justify-end">
          <PrimaryButton icon={<IoIosSearch />} children="Search" />
        </div>
      </BoxContainer>
    </div>
  );
}
