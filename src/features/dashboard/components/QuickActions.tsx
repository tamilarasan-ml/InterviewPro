import { quickActions } from "../data/dashboardData";

const QuickActions = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="space-y-3">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="w-full rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600 transition"
          >
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;