import { activityStyles } from "../../../utils/activityStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

const GroupStats = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className="rounded-2xl shadow-md flex flex-col h-2/6 p-2 bg-orange-200">
      <div className="flex justify-between">
        <h1 className="font-bold">Group stats</h1>
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
      <div className="h-full w-full flex"></div>
      <Link
        to="/groups"
        className="text-right underline cursor-pointer text-sm"
      >
        view all group stats
      </Link>
    </div>
  );
};

export default GroupStats;
