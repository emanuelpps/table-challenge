import type { TabsProps } from "../../../types/selectionTabs";

export default function NavBar({
  activeTab,
  setActiveTab,
  menuNav,
}: TabsProps) {
  return (
    <div id="nav-bar" className="flex gap-6 text-gray-400 text-sm">
      {menuNav &&
        menuNav.map((item) => (
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
