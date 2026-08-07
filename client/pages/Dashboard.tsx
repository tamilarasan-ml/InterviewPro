import DashboardHeader from "../src/features/dashboard/components/DashboardHeader";
import StatsCards from "../src/features/dashboard/components/StatsCards";
import DailyGoal from "../src/features/dashboard/components/DailyGoal";
import QuickActions from "../src/features/dashboard/components/QuickActions";
import RecentActivity from "../src/features/dashboard/components/RecentActivity";

import { EmptyState } from "../src/components/ui";
import { useDashboard } from "../../hooks/useDashboard";

const Dashboard = () => {
  const {
    loading,
    error,
    refresh,
  } = useDashboard();

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <EmptyState
        title="Unable to load Dashboard"
        description={error}
        actionLabel="Retry"
        onAction={refresh}
      />
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