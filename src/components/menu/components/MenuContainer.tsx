import { useState } from "react";
import type { TabsProps } from "../../../types/selectionTabs";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function MenuContainer({ activeTab, setActiveTab }: TabsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const MenuNav = [
    { name: "Home", id: "home" },
    { name: "Clearings", id: "clearings" },
    { name: "Organizations", id: "organizations" },
    { name: "Reports", id: "reports" },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center mb-2 px-4">
      <Logo />
      <div className="hidden md:flex">
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          menuNav={MenuNav}
        />
      </div>
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-gray-400 hover:text-white transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-[64px] left-0 right-0 bg-[#181818] border-b border-gray-700 z-50 px-8 py-4 flex flex-col gap-4">
          {MenuNav.map((item) => (
            <p
              key={item.id}
              className={`cursor-pointer text-sm hover:text-white transition-colors ${activeTab === item.id ? "text-white" : "text-gray-400"}`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}
