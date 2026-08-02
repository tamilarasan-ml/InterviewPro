import { Button } from "../../../components/ui";

const ContinueLearning = () => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold">
        Ready for today's learning?
      </h2>

      <p className="mt-2">
        Pick up where you left off and continue improving your interview skills.
      </p>

      <Button 
        variant="primary"
        className="mt-5"
      >
        Continue Learning
      </Button>
    </div>
  );
};

export default ContinueLearning;