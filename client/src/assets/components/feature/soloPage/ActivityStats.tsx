import { useState } from "react";
import StatBoard from "./StatBoard";

//? could add in D3 and use graphs with the statistics, similar to strava graphs

const apps = ["All", "Strava", "Nike Run Club", "Map My Run"];

//! FIX ANY TYPE
const ActivityStats = ({ selectedActivity }: any) => {
  const [selectedApp, setSelectedApp] = useState<string>("All");
  return (
    <div className="fex flex-col h-5/6 gap-2">
      <select
        className="outline-0"
        onChange={(e) => setSelectedApp(e.target.value)}
      >
        {apps.map((app) => (
          <option key={app} value={app}>
            {app}
          </option>
        ))}
      </select>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h1 className="font-bold">Total time: </h1>
          <p>1345min</p>
        </div>
        <div className="flex gap-2">
          <h1 className="font-bold">Total distance: </h1>
          <p>234km</p>
        </div>
        <div className="flex gap-2">
          <h1 className="font-bold">Average pace: </h1>
          <p>1.3kp/h</p>
        </div>
      </div>
      <StatBoard />
    </div>
  );
};

export default ActivityStats;
