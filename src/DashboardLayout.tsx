import Menu from "./components/menu/Menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}: DashboardLayoutProps) {
  return (
    <body className="bg-gray-[#111111] min-h-screen w-full">
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{children}</main>
    </body>
  );
}
