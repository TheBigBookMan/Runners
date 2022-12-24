import { useState } from "react";
import ActivityStats from "../components/feature/soloPage/ActivityStats";

const Solo = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className="flex flex-col h-full p-2">
      <h1 className="font-bold text-orange-500 text-xl">Solo statistics</h1>
      <ul className="flex justify-end gap-2">
        <li
          onClick={(): void => setSelectedActivity("run")}
          className={`${
            selectedActivity === "run" && "font-bold"
          } text-orange-600`}
        >
          run
        </li>
        <li
          onClick={(): void => setSelectedActivity("walk")}
          className={`${
            selectedActivity === "walk" && "font-bold"
          } text-orange-600`}
        >
          walk
        </li>
        <li
          onClick={(): void => setSelectedActivity("bike")}
          className={`${
            selectedActivity === "bike" && "font-bold"
          } text-orange-600`}
        >
          bike
        </li>
      </ul>
      <ActivityStats selectedActivity={selectedActivity} />
    </div>
  );
};

export default Solo;
