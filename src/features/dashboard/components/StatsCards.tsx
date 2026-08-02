import Card from "../../../components/ui/Card";
import { useDashboardStore } from "../../../store";

const StatsCards = () => {
  const { stats } = useDashboardStore();

  return (
    <Card className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-xl border bg-white p-6 shadow-md"
        >
          <h3 className="text-sm text-gray-500">
            {stat.title}
          </h3>

          <p className="mt-2 text-3xl font-bold text-cyan-600">
            {stat.value}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default StatsCards;