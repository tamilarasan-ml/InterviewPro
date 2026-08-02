import { useMemo, useState } from "react";

import { useLearning } from "../hooks/useLearning";

import LearningHeader from "../features/learn/components/LearningHeader";
import SearchBar from "../features/learn/components/SearchBar";
import FilterBar from "../features/learn/components/FilterBar";
import ContinueLearning from "../features/learn/components/ContinueLearning";
import CourseCard from "../features/learn/components/CourseCard";

const Learn = () => {
  const { courses, loading, error } = useLearning();

  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        course.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [courses, searchTerm, difficulty]);

  if (loading) {
    return (
      <div className="p-10 text-center text-lg">
        Loading learning courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-100 p-6 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <LearningHeader />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <FilterBar
        value={difficulty}
        onChange={setDifficulty}
      />

      <ContinueLearning />

      {filteredCourses.length === 0 ? (
        <div className="rounded-xl bg-white p-12 text-center shadow-md">
          <h2 className="text-2xl font-bold">
            No Courses Found
          </h2>

          <p className="mt-2 text-slate-500">
            Try changing your search or filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Learn;