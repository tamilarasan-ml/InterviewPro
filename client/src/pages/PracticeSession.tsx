import { Navigate, useNavigate } from "react-router-dom";

import {
  PageHeader,
  Card,
  Button,
  ProgressBar,
} from "../components/ui";

import { usePractice } from "../hooks/usePractice";

const PracticeSession = () => {
  const navigate = useNavigate();

  const {
    questions,
    currentQuestionIndex,
    nextQuestion,
  } = usePractice();

  if (questions.length === 0) {
    return <Navigate to="/practice" replace />;
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  const isLastQuestion =
    currentQuestionIndex === questions.length - 1;

  const progress =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  const progressLabel = `${currentQuestionIndex + 1} of ${questions.length}`;

  const handleNext = () => {
    if (isLastQuestion) {
      navigate("/practice/result");
      return;
    }

    nextQuestion();
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Practice Session"
        subtitle="Answer interview questions one by one."
      />

      <Card>
        <h2 className="text-xl font-semibold text-cyan-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm font-medium text-slate-600">
            <span>Interview Progress</span>
            <span>{progressLabel}</span>
          </div>

          <ProgressBar
            value={progress}
            showLabel={false}
          />
        </div>

        <p className="mt-6 text-lg text-slate-700">
          {currentQuestion.question}
        </p>

        <div className="mt-8 flex justify-end">
          <Button
            variant="primary"
            onClick={handleNext}
          >
            {isLastQuestion
              ? "Finish Practice"
              : "Next Question"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PracticeSession;