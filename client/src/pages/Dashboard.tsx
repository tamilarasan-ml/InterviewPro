import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import StatsCards from "../features/dashboard/components/StatsCards";
import DailyGoal from "../features/dashboard/components/DailyGoal";
import QuickActions from "../features/dashboard/components/QuickActions";
import RecentActivity from "../features/dashboard/components/RecentActivity";

import { EmptyState } from "../components/ui";
import { useDashboard } from "../hooks/useDashboard";

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