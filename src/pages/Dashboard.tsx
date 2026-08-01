import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import StatsCards from "../features/dashboard/components/StatsCards";
import DailyGoal from "../features/dashboard/components/DailyGoal";
import QuickActions from "../features/dashboard/components/QuickActions";
import RecentActivity from "../features/dashboard/components/RecentActivity";

import Button from "../components/ui/Button/Button";
import Input from "../components/ui/Input/Input";

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

      {/* ---------------- Button Component Test ---------------- */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Button Component Test
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </div>

      {/* ---------------- Input Component Test ---------------- */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold">
          Input Component Test
        </h2>

        <Input
          label="Full Name"
          placeholder="Enter your name"
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          helperText="We'll never share your email."
        />

        <Input
          label="Password"
          required
          placeholder="Enter your password"
        />

        <Input
          label="Username"
          error="Username already exists"
        />

        <Input
          label="Phone Number"
          disabled
          placeholder="Disabled Input"
        />
      </div>
    </div>
  );
};

export default Dashboard;