interface FilterBarProps {
  value: string;
  onChange: (value: string) => void;
}

const difficultyLevels = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const FilterBar = ({
  value,
  onChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {difficultyLevels.map((level) => (
        <button
          key={level}
          type="button"
          onClick={() => onChange(level)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            value === level
              ? "bg-cyan-500 text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700"
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;