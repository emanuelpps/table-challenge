export interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuNav?: { name: string; id: string }[];
}
