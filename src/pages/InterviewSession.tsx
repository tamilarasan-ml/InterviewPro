import { Navigate } from "react-router-dom";

import { PageHeader, Card } from "../components/ui";
import { useInterview } from "../hooks/useInterview";

const InterviewSession = () => {
  const {
    questions,
    currentQuestionIndex,
  } = useInterview();

  if (questions.length === 0) {
    return <Navigate to="/mock-interview" replace />;
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Mock Interview"
        subtitle="Answer each question as if you are in a real interview."
      />

      <Card>
        <h2 className="text-xl font-semibold text-cyan-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>

        <p className="mt-6 text-lg text-slate-700">
          {currentQuestion.question}
        </p>
      </Card>
    </div>
  );
};

export default InterviewSession;