import { useProfile } from "../../../hooks/useProfile";

const InterviewStatsCard = () => {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Interview Statistics
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Completed Interviews</span>
          <span className="font-bold">
            {profile.completedInterviews}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Current Streak</span>
          <span className="font-bold">
            {profile.currentStreak} Days
          </span>
        </div>
      </div>
    </div>
  );
};

export default InterviewStatsCard;