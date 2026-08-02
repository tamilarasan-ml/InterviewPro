import { useEffect } from "react";

import StatsCards from "../features/dashboard/components/StatsCards";
import QuickActions from "../features/dashboard/components/QuickActions";
import RecentActivity from "../features/dashboard/components/RecentActivity";

import { useDashboardStore } from "../store";

const Dashboard = () => {
  const {
    fetchDashboard,
    loading,
    error,
  } = useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <h2 className="text-xl text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;