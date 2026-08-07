import ProfileHeader from "../features/profile/components/ProfileHeader";
import ProfileCard from "../features/profile/components/ProfileCard";
import SkillsCard from "../features/profile/components/SkillsCard";
import CertificationsCard from "../features/profile/components/CertificationsCard";
import ProgressCard from "../features/profile/components/ProgressCard";
import InterviewStatsCard from "../features/profile/components/InterviewStatsCard";

const Profile = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <ProfileHeader />

      <ProfileCard />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SkillsCard />
        <CertificationsCard />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProgressCard />
        <InterviewStatsCard />
      </div>
    </div>
  );
};

export default Profile;