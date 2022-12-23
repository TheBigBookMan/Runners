import Bio from "../components/feature/profilePage/Bio";
import Friends from "../components/feature/profilePage/Friends";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 h-full p-2">
      <Bio />
      <Friends />
    </div>
  );
};

export default Profile;
