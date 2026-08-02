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

  if (!profile) {
    return null;
  }

  return (
    <div className="flex items-center gap-6 rounded-xl bg-white p-6 shadow-md">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="h-24 w-24 rounded-full border object-cover"
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
      </div>
    </div>
  );
};

export default ProfileHeader;