import { useEffect, useState } from "react";
import Card from "../../../components/ui/Card";
import { InterviewService } from "../../../services";

interface DashboardStats {
  progress: number;
  mockInterviews: number;
  accuracy: number;
  currentStreak: number;
}

const StatsCards = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  InterviewService.getDashboard()
    .then((response) => {
      setStats(response.data);
    })
    .catch((err) => {
      console.error(err);
      setError("Unable to load dashboard statistics.");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  if (loading) {
  return (
    <Card className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-28 animate-pulse rounded-xl bg-gray-200"
        />
      ))}
    </Card>
  );
}
  if (error) {
  return (
    <Card className="p-6 text-center text-red-600">
      {error}
    </Card>
  );
}
  if (!stats) {
  return null;
}
  return (
    <Card className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h3 className="text-sm text-gray-500">Progress</h3>
        <p className="mt-2 text-3xl font-bold text-cyan-600">
          {stats.progress}%
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h3 className="text-sm text-gray-500">Mock Interviews</h3>
        <p className="mt-2 text-3xl font-bold text-cyan-600">
          {stats.mockInterviews}
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h3 className="text-sm text-gray-500">Accuracy</h3>
        <p className="mt-2 text-3xl font-bold text-cyan-600">
          {stats.accuracy}%
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md border">
        <h3 className="text-sm text-gray-500">Current Streak</h3>
        <p className="mt-2 text-3xl font-bold text-cyan-600">
          {stats.currentStreak} Days
        </p>
      </div>
    </Card>
  );
};

export default StatsCards;