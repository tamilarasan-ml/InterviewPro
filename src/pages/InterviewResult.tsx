import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  PageHeader,
  Card,
  Button,
} from "../components/ui";

import { useInterview } from "../hooks/useInterview";

const InterviewResult = () => {
  const navigate = useNavigate();

  const {
    categories,
    selectedCategory,
    selectedDifficulty,
    questions,
    resetInterview,
  } = useInterview();

  if (
    selectedCategory === null ||
    questions.length === 0
  ) {
    return (
      <Navigate
        to="/mock-interview"
        replace
      />
    );
  }

  const category = categories.find(
    (item) =>
      item.id === selectedCategory
  );

  const handleInterviewAgain = () => {
    resetInterview();
    navigate("/mock-interview");
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Interview Completed 🎉"
        subtitle="Great job! Here's your interview summary."
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
              onClick={
                handleInterviewAgain
              }
            >
              Interview Again
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InterviewResult;