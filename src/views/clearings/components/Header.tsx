import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Title from "./Title";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 px-4 p-10">
      <Title />
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <SecondaryButton icon={<IoMdDownload />} children="Export CSV" />
        <PrimaryButton
          icon={<MdOutlinePayments />}
          children="Generate Payment File"
        />
      </div>
    </div>
  );
}
