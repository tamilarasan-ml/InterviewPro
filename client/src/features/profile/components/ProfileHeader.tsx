import { Pencil } from "lucide-react";
import { useProfile } from "../../../hooks/useProfile";

const ProfileHeader = () => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-md">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-24 w-24 rounded-full border-4 border-cyan-100 object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {profile.name}
            </h1>

            <p className="text-lg text-gray-600">
              {profile.role}
            </p>

            <p className="text-gray-500">
              {profile.email}
            </p>

            <p className="text-sm text-gray-400">
              {profile.location}
            </p>

            <div className="mt-4 flex flex-wrap gap-6">
              <div>
                <p className="text-xs text-gray-500">
                  Experience
                </p>
                <p className="font-semibold">
                  {profile.experience}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Interviews
                </p>
                <p className="font-semibold">
                  {profile.completedInterviews}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Current Streak
                </p>
                <p className="font-semibold">
                  {profile.currentStreak} Days
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => alert("Edit Profile - Coming Soon")}
          className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
        >
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;