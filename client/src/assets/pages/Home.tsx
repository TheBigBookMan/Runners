import GroupStats from "../components/feature/homePage/GroupStats";
import SoloStats from "../components/feature/homePage/SoloStats";

const Home = () => {
  return (
    <div className="flex flex-col p-2">
      <p className="text-sm">
        Create an account and then you will be able to join a running group.
        Once you have joined a group with your friends you will be able to
        compare Strava runs and see who has ran the most this week. Get running!
      </p>
      <GroupStats />
      <SoloStats />
    </div>
  );
};

export default Home;
