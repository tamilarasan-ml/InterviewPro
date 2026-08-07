import { useDashboardStore } from "../../../store";

const RecentActivity = () => {
  const { activities } = useDashboardStore();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {activities.map((activity) => (
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