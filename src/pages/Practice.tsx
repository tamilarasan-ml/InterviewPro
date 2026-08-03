
import PracticeHeader from "../features/practice/components/PracticeHeader";
import CategoryCard from "../features/practice/components/CategoryCard";
import DifficultySelector from "../features/practice/components/DifficultySelector";
import PracticeSummary from "../features/practice/components/PracticeSummary";
import StartPracticeButton from "../features/practice/components/StartPracticeButton";

const Practice = () => {
   return(

    <div className="space-y-8">
      <PracticeHeader />

      <CategoryCard />

      <DifficultySelector />

      <PracticeSummary />

      <StartPracticeButton />
    </div>
  );
};

export default Practice;
