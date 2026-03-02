import { useState } from "react";
import DashboardLayout from "./DashboardLayout";

function App() {
  const [activeTab, setActiveTab] = useState("clearings");

  const renderContent = () => {
    switch (activeTab) {
      case "clearings":
        return <div>Clearings Content</div>;
      case "organizations":
        return <div>Organizations Content</div>;
      case "reports":
        return <div>Reports Content</div>;
      default:
        return <div>Home Content</div>;
    }
  };
  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;
