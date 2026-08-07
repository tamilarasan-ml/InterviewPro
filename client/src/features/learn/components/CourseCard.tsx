import { BookOpen, Clock3, TrendingUp } from "lucide-react";
import type { LearningCourse } from "../../../types";

interface CourseCardProps {
  course: LearningCourse;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <BookOpen className="h-7 w-7 text-cyan-500" />

        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
          {course.difficulty}
        </span>
      </div>

      <h2 className="text-xl font-bold text-slate-800">
        {course.title}
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        {course.description}
      </p>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {course.duration}
        </div>

        <span>{course.category}</span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-cyan-500"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-white transition hover:bg-cyan-600">
        <TrendingUp className="h-4 w-4" />
        Continue Learning
      </button>
    </div>
  );
};

export default CourseCard;