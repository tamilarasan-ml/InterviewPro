import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import StatsCards from "../features/dashboard/components/StatsCards";
import DailyGoal from "../features/dashboard/components/DailyGoal";
import QuickActions from "../features/dashboard/components/QuickActions";
import RecentActivity from "../features/dashboard/components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DailyGoal />
        <QuickActions />
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;