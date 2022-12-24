import DailyStat from "./statboard/DailyStat";
import WeeklyStat from "./statboard/WeeklyStat";
import MonthlyStat from "./statboard/MonthlyStat";
import YearlyStat from "./statboard/YearlyStat";
import { useState } from "react";

const GroupStats = () => {
  const [selectedTime, setSelectedTime] = useState<string>("daily");

  return (
    <div className="flex flex-col p-2 bg-orange-200 h-full rounded-xl">
      <h1 className="font-bold text-xl text-orange-600">Leaderboard</h1>
      <div className="h-full">
        <ul className="flex flex-end gap-2">
          <li
            onClick={() => setSelectedTime("daily")}
            className={`text-orange-500 cursor-pointer ${
              selectedTime === "daily" && "font-bold"
            }`}
          >
            daily
          </li>
          <li
            onClick={() => setSelectedTime("weekly")}
            className={`text-orange-500 cursor-pointer ${
              selectedTime === "weekly" && "font-bold"
            }`}
          >
            weekly
          </li>
          <li
            onClick={() => setSelectedTime("monthly")}
            className={`text-orange-500 cursor-pointer ${
              selectedTime === "monthly" && "font-bold"
            }`}
          >
            monthly
          </li>
          <li
            onClick={() => setSelectedTime("yearly")}
            className={`text-orange-500 cursor-pointer ${
              selectedTime === "yearly" && "font-bold"
            }`}
          >
            yearly
          </li>
        </ul>
        {selectedTime === "daily" ? (
          <DailyStat />
        ) : selectedTime === "weekly" ? (
          <WeeklyStat />
        ) : selectedTime === "monthly" ? (
          <MonthlyStat />
        ) : selectedTime === "yearly" ? (
          <YearlyStat />
        ) : (
          <DailyStat />
        )}
      </div>
    </div>
  );
};

export default GroupStats;
