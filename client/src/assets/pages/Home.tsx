import GroupStats from "../components/feature/homePage/GroupStats";
import SoloStats from "../components/feature/homePage/SoloStats";

const Home = () => {
  return (
    <div className="flex flex-col p-2 h-full gap-4">
      <p className="text-sm">
        Create an account and then you will be able to join a friend group. Once
        you have joined a group with your friends you will be able to compare
        Strava activities and see who has done the most this week. Get moving!
      </p>
      <SoloStats />
      <GroupStats />
    </div>
  );
};

export default Home;
