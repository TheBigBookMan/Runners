import Me from "../../../images/Me.jpg";
import RecentActivity from "./RecentActivity";
import { Link } from "react-router-dom";

//? get user info from the context of the resolver and use that as a findUnique

const Bio = () => {
  return (
    <div className="rounded-2xl shadow-md flex flex-col h-3/6 p-2 bg-orange-200">
      <div className="flex gap-2">
        <img src={Me} className="h-28 w-28 rounded-xl" />
        <div className="flex flex-col h-5/6">
          <h1 className="font-bold text-orange-500 text-2xl">Ben Smerd</h1>
          <p className="text-sm">Strava, Nike Fit Club, Map My Run</p>
          <p className="text-sm">
            Joined on- <span>12/12/2022</span>
          </p>
          <p className="italic">walker, runner, swimmer</p>
        </div>
      </div>
      <RecentActivity />
    </div>
  );
};

export default Bio;
