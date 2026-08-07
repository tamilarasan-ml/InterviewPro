import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui";
import { usePractice } from "../../../hooks/usePractice";
import { PracticeService } from "../../../services/practice.service";

const StartPracticeButton = () => {
  const navigate = useNavigate();

  const {
    selectedCategory,
    selectedDifficulty,
    setQuestions,
  } = usePractice();

  const isEnabled = selectedCategory !== null;

  const handleStartPractice = async () => {
    if (!selectedCategory) return;

    const questions =
      await PracticeService.getQuestions(
        selectedCategory,
        selectedDifficulty
      );

    setQuestions(questions);

    navigate("/practice/session");
  };

  return (
    <div className="mt-8 flex justify-end">
      <Button
        variant="primary"
        disabled={!isEnabled}
        onClick={handleStartPractice}
      >
        Start Practice
      </Button>
    </div>
  );
};

export default StartPracticeButton;