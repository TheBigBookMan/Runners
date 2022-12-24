import { useState } from "react";
import GroupMembers from "../components/feature/groupsPage/GroupMembers";
import GroupStats from "../components/feature/groupsPage/GroupStats";

const groupNames = ["The boys", "Soccer lads", "Banter", "Crypto lads"];

const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>(groupNames[0]);
  const [selectedActivity, setSelectedActivity] = useState<string>("run");

  return (
    <div className="flex flex-col h-full p-2">
      <h1 className="font-bold text-orange-500 text-xl">Group statistics</h1>
      <select
        onChange={(e) => setSelectedGroup(e.target.value)}
        className="w-3/6 outline-0"
      >
        {groupNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <GroupMembers />

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
      <GroupStats />
    </div>
  );
};

export default Groups;
