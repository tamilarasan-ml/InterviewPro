import { recentActivities } from "../data/dashboardData";

const RecentActivity = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {recentActivities.map((activity) => (
          <li
            key={activity.id}
            className="text-gray-700"
          >
            ✅ {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;      