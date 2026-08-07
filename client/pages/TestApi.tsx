import { useEffect } from "react";
import { DashboardService } from "../src/services";

const TestApi = () => {
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const dashboard = await DashboardService.getDashboard();

        console.log("Dashboard:", dashboard);
      } catch (error) {
        console.error("Dashboard API Error:", error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Testing Dashboard API...
      </h1>
    </div>
  );
};

export default TestApi;