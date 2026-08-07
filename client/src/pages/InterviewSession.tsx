import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
  PageHeader,
  Card,
  Button,
  TextArea,
} from "../components/ui";

import { useInterview } from "../hooks/useInterview";
import useInterviewTimer from "../hooks/useInterviewTimer";

import { AIInterviewService } from "../services";

const InterviewSession = () => {
  const navigate = useNavigate();

  const {
    questions,
    currentQuestionIndex,
    timeRemaining,
    nextQuestion,
    finishInterview,
    addInterviewAnswer,
  } = useInterview();

  useInterviewTimer();

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] =
    useState(false);

  if (questions.length === 0) {
    return (
      <Navigate
        to="/mock-interview"
        replace
      />
    );
  }

  const currentQuestion =
    questions[currentQuestionIndex];

  const isLastQuestion =
    currentQuestionIndex ===
    questions.length - 1;

  const minutes = Math.floor(
    timeRemaining / 60
  );

  const seconds = timeRemaining % 60;

  const formattedTime = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  const handleSubmit = async () => {
    if (!answer.trim()) {
      alert("Please enter your answer.");
      return;
    }

    try {
      setLoading(true);

      const feedback =
        await AIInterviewService.generateFeedback(
          answer
        );

      addInterviewAnswer({
        questionId: currentQuestion.id,
        answer,
        feedback,
      });

      setAnswer("");

      if (isLastQuestion) {
        finishInterview();
        navigate(
          "/mock-interview/result"
        );
      } else {
        nextQuestion();
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to generate AI feedback."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Mock Interview"
        subtitle="Answer each question as if you are in a real interview."
      />

      <Card>
        <h2 className="text-xl font-semibold text-cyan-600">
          Question{" "}
          {currentQuestionIndex + 1} of{" "}
          {questions.length}
        </h2>

        <div className="mt-2 text-lg font-semibold text-red-600">
          Time Remaining:
          {" "}
          {formattedTime}
        </div>

        <p className="mt-6 text-lg text-slate-700">
          {currentQuestion.question}
        </p>

        <div className="mt-6">
          <TextArea
            label="Your Answer"
            placeholder="Type your interview answer here..."
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            required
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "Evaluating..."
              : isLastQuestion
              ? "Finish Interview"
              : "Submit & Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InterviewSession;