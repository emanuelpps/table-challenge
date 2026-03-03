import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Dropdown from "../../../components/dropdowns/Dropdown";
import FilterInput from "../../../components/inputs/FilterInput";
import BoxContainer from "../../../components/layout/BoxContainer";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import type { OrganizationType } from "../../../types/organization";
import type { FilterValues } from "../types";
import TertiaryButton from "../../../components/buttons/TertiaryButton";

interface FilterBoxProps {
  filterValues: FilterValues;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValues>>;
  onSearch: (filters: FilterValues) => void;
  onReset: () => void;
  organizations: OrganizationType[];
}

export default function FilterBox({
  filterValues,
  setFilterValues,
  onSearch,
  onReset,
  organizations,
}: FilterBoxProps) {
  const orgOptions = [
    { label: "All Organizations", value: "all" },
    ...organizations.map((org) => ({
      label: org.name,
      value: String(org.id),
    })),
  ];

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilterValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex w-full justify-center items-center py-4">
      <BoxContainer className="flex flex-col gap-4 w-full">
        <div className="flex gap-6 w-full items-end">
          <FilterInput
            label="Year"
            placeholder="Filter"
            type="text"
            value={filterValues.year}
            onChange={(e) => handleChange("year", e.target.value)}
          />
          <FilterInput
            label="Week"
            placeholder="Filter"
            type="number"
            value={filterValues.week}
            onChange={(e) => handleChange("week", e.target.value)}
          />
          <Dropdown
            label="Organization"
            options={orgOptions}
            value={filterValues.org}
            onChange={(val) => handleChange("org", val)}
            className="w-64"
          />
          <Dropdown
            label="Status"
            options={[
              { label: "All Status", value: "all" },
              { label: "To Be Cleared", value: "to_be_cleared" },
              { label: "Cleared", value: "cleared" },
            ]}
            value={filterValues.status}
            onChange={(val) => handleChange("status", val)}
            className="w-48"
          />
          <div className="ml-auto flex justify-end w-full items-center">
            <div className="flex gap-10 w-full justify-end items-center">
              <TertiaryButton onClick={onReset} icon={<HiOutlineTrash />}>
                Clear
              </TertiaryButton>
              <PrimaryButton
                onClick={() => onSearch(filterValues)}
                icon={<IoIosSearch />}
              >
                Search For Clearing
              </PrimaryButton>
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
