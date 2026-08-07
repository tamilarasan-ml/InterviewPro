import { Navigate, useNavigate } from "react-router-dom";

import { PageHeader, Card, Button } from "../components/ui";
import { usePractice } from "../hooks/usePractice";

const PracticeResult = () => {
  const navigate = useNavigate();

  const {
    categories,
    selectedCategory,
    selectedDifficulty,
    questions,
    resetPractice,
  } = usePractice();

  console.log({
  selectedCategory,
  questions,
});


  if (
    selectedCategory === null ||
    questions.length === 0
  ) {
    return <Navigate to="/practice" replace />;
  }

  const category = categories.find(
    (item) => item.id === selectedCategory
  );

  const handlePracticeAgain = () => {
    resetPractice();
    navigate("/practice");
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Practice Completed 🎉"
        subtitle="Great job! Here's your practice summary."
      />

      <Card>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              Category
            </h3>

            <p className="text-slate-600">
              {category?.name ?? "N/A"}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Difficulty
            </h3>

            <p className="text-slate-600">
              {selectedDifficulty}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Questions Completed
            </h3>

            <p className="text-slate-600">
              {questions.length}
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={handlePracticeAgain}
            >
              Practice Again
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PracticeResult;