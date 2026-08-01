import { useEffect, useState } from "react";
import { InterviewService } from "../../../services";

interface Activity {
  id: number;
  title: string;
}

const RecentActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    InterviewService.getRecentActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load recent activities.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-6 rounded bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <p className="text-red-600">
          {error}
        </p>
      </div>
    );
  }

  // Success State
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="text-gray-700"
          >
            ✅ {activity.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;