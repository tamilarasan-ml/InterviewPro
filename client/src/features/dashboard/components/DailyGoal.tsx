import Card from "../../../components/ui/Card";
const DailyGoal = () => {
  return (
    <Card className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-semibold mb-4">
        Today's Goal
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-cyan-500 h-4 rounded-full w-4/5"></div>
      </div>

      <p className="mt-3 text-gray-600">
        80% completed
      </p>
    </Card>
  );
};

export default DailyGoal;