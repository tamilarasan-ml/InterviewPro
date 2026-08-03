import { Button } from "../../../components/ui";
import { usePractice } from "../../../hooks/usePractice";

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

const DifficultySelector = () => {
  const {
    selectedDifficulty,
    selectDifficulty,
  } = usePractice();

  return (
    <div className="flex gap-3">
      {levels.map((level) => (
        <Button
          key={level}
          variant={
            selectedDifficulty === level
              ? "primary"
              : "outline"
          }
          onClick={() =>
            selectDifficulty(level)
          }
        >
          {level}
        </Button>
      ))}
    </div>
  );
};

export default DifficultySelector;