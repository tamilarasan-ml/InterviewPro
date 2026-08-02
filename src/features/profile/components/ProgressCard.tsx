import { useProfile } from "../../../hooks/useProfile";

const ProgressCard = () => {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Learning Progress
      </h2>

      <div className="w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-cyan-500"
          style={{
            width: `${profile.learningProgress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-600">
        {profile.learningProgress}% Completed
      </p>
    </div>
  );
};

export default ProgressCard;