import type { TabsProps } from "../../../types/selectionTabs";

export default function NavBar({ activeTab, setActiveTab }: TabsProps) {
  const MenuNav = [
    { name: "Home", id: "home" },
    { name: "Clearings", id: "clearings" },
    { name: "Organizations", id: "organizations" },
    { name: "Reports", id: "reports" },
  ];
  return (
    <div id="nav-bar" className="flex gap-6 text-gray-400 text-sm">
      {MenuNav.map((item) => (
        <p
          key={item.id}
          className={`cursor-pointer hover:text-white transition-colors ${activeTab === item.id ? "text-white" : ""}`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
