import { useState } from "react";
import { activityStyles } from "../../../utils/activityStyles";

//* and have columns for daily, weekly, month, year etc stats of distance and time

const SoloStats = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className=" rounded-2xl shadow-md flex flex-col h-2/6 p-3 bg-orange-200">
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
    </div>
  );
};

export default SoloStats;
