import { Navigate } from "react-router-dom";

import { PageHeader, Card } from "../components/ui";
import { usePractice } from "../hooks/usePractice";

const PracticeSession = () => {
  const {
    questions,
    currentQuestionIndex,
  } = usePractice();

  if (questions.length === 0) {
    return <Navigate to="/practice" replace />;
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Practice Session"
        subtitle="Answer interview questions one by one."
      />

      <Card>
        <h2 className="text-xl font-semibold text-cyan-600">
          Question {currentQuestionIndex + 1}
        </h2>

        <p className="mt-6 text-lg text-slate-700">
          {currentQuestion.question}
        </p>
      </Card>
    </div>
  );
};

export default PracticeSession;