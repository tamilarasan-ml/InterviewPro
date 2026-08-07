import { Brain } from "lucide-react";

import { useProfile } from "../../../hooks/useProfile";
import { Card } from "../../../components/ui";
import { Badge } from "../../../components/ui";

const SkillsCard = () => {
  const { profile } = useProfile();

  if (!profile) {
    return null;
  }

  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <Brain className="h-6 w-6 text-cyan-500" />

        <h2 className="text-2xl font-semibold text-slate-800">
          Skills
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.skills.map((skill) => (
          <Badge
            key={skill}
            variant="primary"
            className="cursor-pointer transition-all duration-300 hover:scale-105"
        >
          {skill}
        </Badge>
        ))}
      </div>
    </Card>
  );
};

export default SkillsCard;