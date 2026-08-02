import { useProfile } from "../../../hooks/useProfile";

const ProfileCard = () => {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Career Goal
      </h2>

      <p className="text-gray-700">
        {profile.careerGoal}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Experience
          </p>
          <p className="font-semibold">
            {profile.experience}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Completed Interviews
          </p>
          <p className="font-semibold">
            {profile.completedInterviews}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;