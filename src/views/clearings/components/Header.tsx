import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Title from "./Title";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4 px-4 p-10">
      <Title />
      <div className="flex gap-5">
        <SecondaryButton icon={<IoMdDownload />} children="Export CSV" />
        <PrimaryButton
          icon={<MdOutlinePayments />}
          children="Generate Payment File"
        />
      </div>
    </div>
  );
}
