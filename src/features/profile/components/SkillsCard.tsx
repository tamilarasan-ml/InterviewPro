import { Brain } from "lucide-react";
import { useProfile } from "../../../hooks/useProfile";

const SkillsCard = () => {
  const { profile } = useProfile();

  if (!profile) {
    return null;
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-5 flex items-center gap-3">
        <Brain className="h-6 w-6 text-cyan-500" />

        <h2 className="text-2xl font-semibold text-slate-800">
          Skills
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="cursor-pointer rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;