import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui";
import { useInterview } from "../../../hooks/useInterview";

import { interviewQuestions } from "../../../data/interviewQuestions.data";

const StartInterviewButton = () => {
  const navigate = useNavigate();

  const {
    selectedCategory,
    setQuestions,
  } = useInterview();

  const isEnabled = selectedCategory !== null;

  const handleStartInterview = () => {
    if (!selectedCategory) {
      return;
    }

    const questions = interviewQuestions.filter(
      (question) =>
        question.categoryId === selectedCategory
    );

    setQuestions(questions);

    navigate("/mock-interview/session");
  };

  return (
    <div className="mt-8 flex justify-end">
      <Button
        variant="primary"
        disabled={!isEnabled}
        onClick={handleStartInterview}
      >
        Start Interview
      </Button>
    </div>
  );
};

export default StartInterviewButton;