import { useState } from "react";
import { Link } from "react-router-dom";
import { activityStyles } from "../../../utils/activityStyles";
import DailyStats from "./solostats/DailyStats";
import WeeklyStats from "./solostats/WeeklyStats";
import MonthlyStats from "./solostats/MonthlyStats";

const SoloStats = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className=" rounded-2xl shadow-md flex flex-col h-2/6 p-2 bg-orange-200">
      <div className="flex justify-between">
        <h1 className="font-bold">Solo stats</h1>
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
      <div className="h-full w-full flex">
        <DailyStats selectedActivity={selectedActivity} />
        <WeeklyStats selectedActivity={selectedActivity} />
        <MonthlyStats selectedActivity={selectedActivity} />
      </div>
      <Link to="/solo" className="text-right underline cursor-pointer text-sm">
        view all solo stats
      </Link>
    </div>
  );
};

export default SoloStats;
