import { StatCard } from "../../../components/ui";
import { usePractice } from "../../../hooks/usePractice";

const PracticeSummary = () => {
  const {
    categories,
    selectedCategory,
    selectedDifficulty,
  } = usePractice();

  const category = categories.find(
    (item) => item.id === selectedCategory
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <StatCard
        title="Category"
        value={category?.name ?? "Not Selected"}
      />

      <StatCard
        title="Difficulty"
        value={selectedDifficulty}
      />
    </div>
  );
};

export default PracticeSummary;