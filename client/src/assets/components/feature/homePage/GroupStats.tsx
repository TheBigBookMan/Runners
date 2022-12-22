import { activityStyles } from "../../../utils/activityStyles";
import DailyStats from "./groupstats/DailyStats";
import WeeklyStats from "./groupstats/WeeklyStats";
import MonthlyStats from "./groupstats/MonthlyStats";
import { useState } from "react";
import { Link } from "react-router-dom";

const fakeGroups = ["The boys", "soccer lads", "groovy team"];

const GroupStats = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className="rounded-2xl shadow-md flex flex-col h-2/6 p-2 bg-orange-200">
      <div className="flex justify-between">
        <h1 className="font-bold">Group leaderboard</h1>

        <ul className="flex gap-3">
          {activityStyles.map((style) => (
            <li
              key={style}
              className={`${
                selectedActivity === style && "font-bold italic text-orange-500"
              }`}
              onClick={(): void => setSelectedActivity(style)}
            >
              {style}
            </li>
          ))}
        </ul>
      </div>
      <select className="w-3/6 text-sm rounded-lg pl-1 focus:outline-none">
        {fakeGroups.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="h-full w-full flex overflow-y-hidden">
        <DailyStats selectedActivity={selectedActivity} />
        <WeeklyStats selectedActivity={selectedActivity} />
        <MonthlyStats selectedActivity={selectedActivity} />
      </div>
      <Link
        to="/groups"
        className="text-right underline cursor-pointer text-sm"
      >
        view all groups
      </Link>
    </div>
  );
};

export default GroupStats;
