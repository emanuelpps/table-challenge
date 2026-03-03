import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import Clearings from "./views/clearings/Clearings";
import Organizations from "./views/organizations/Organizations";

function App() {
  const [activeTab, setActiveTab] = useState("clearings");

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "clearings" && <Clearings />}
      {activeTab === "organizations" && <Organizations />}
    </DashboardLayout>
  );
}

export default App;
