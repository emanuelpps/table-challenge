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
      {activeTab === "reports" && <div>Reports Content</div>}
      {activeTab === "home" && <div>Home Content</div>}
    </DashboardLayout>
  );
}

export default App;
