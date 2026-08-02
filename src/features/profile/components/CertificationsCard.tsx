import { Award } from "lucide-react";
import { useProfile } from "../../../hooks/useProfile";

const CertificationsCard = () => {
  const { profile } = useProfile();

  if (!profile) {
    return null;
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-5 flex items-center gap-3">
        <Award className="h-6 w-6 text-amber-500" />

        <h2 className="text-2xl font-semibold text-slate-800">
          Certifications
        </h2>
      </div>

      <div className="space-y-3">
        {profile.certifications.map((certification) => (
          <div
            key={certification}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50"
          >
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-amber-500" />

              <span className="font-medium text-slate-700">
                {certification}
              </span>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Verified
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsCard;