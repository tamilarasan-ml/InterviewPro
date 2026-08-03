import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/ui";
import { usePractice } from "../../../hooks/usePractice";

const StartPracticeButton = () => {
  const navigate = useNavigate();

  const { selectedCategory } = usePractice();

  const isEnabled = selectedCategory !== null;

  const handleStartPractice = () => {
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