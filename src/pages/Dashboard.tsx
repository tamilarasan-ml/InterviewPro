import { useEffect } from "react";

import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import StatsCards from "../features/dashboard/components/StatsCards";
import DailyGoal from "../features/dashboard/components/DailyGoal";
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
      <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsCards />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DailyGoal />
        <QuickActions />
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;