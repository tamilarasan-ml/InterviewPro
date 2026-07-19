import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Learn from "../pages/Learn";
import Practice from "../pages/Practice";
import Analytics from "../pages/Analytics";
import MockInterview from "../pages/MockInterview";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
      <Route   path="/mock-interview"   element={<MockInterview />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;