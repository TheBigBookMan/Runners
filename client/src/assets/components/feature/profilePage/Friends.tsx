import { Link } from "react-router-dom";

const hardcode = [
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Anymamacita",
    apps: ["Strava", "NRC"],
    activities: ["runner", "biker"],
  },
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Justina",
    apps: ["Strava", "NRC", "MMR"],
    activities: ["runner", "biker", "swimmer"],
  },
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Nobody",
    apps: ["NRC"],
    activities: ["biker"],
  },
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Anymamacitas",
    apps: ["Strava", "NRC"],
    activities: ["runner", "biker"],
  },
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Anymamacitad",
    apps: ["Strava", "NRC"],
    activities: ["runner", "biker"],
  },
  {
    id: "63c0f2ca1d019372b4e4c8a9",
    name: "Anymamacitaf",
    apps: ["Strava", "NRC"],
    activities: ["runner", "biker"],
  },
];

const Friends = () => {
  return (
    <div className=" rounded-2xl shadow-md flex flex-col h-2/6 p-2 bg-orange-200">
      <h1 className="font-bold text-orange-600">Friends</h1>
      <ul className="flex flex-col h-full overflow-y-scroll">
        {hardcode.map((item) => (
          <Link
            key={item.name}
            to={`/user/${item.id}`}
            className="flex flex-col p-1 border-orange-400 border-b h-[50px] group hover:cursor-pointer hover:bg-orange-500 hover:rounded-lg"
          >
            <div className="flex justify-between">
              <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
                {item.name}
              </h1>
              <ul className="flex gap-1">
                {item.apps.map((app) => (
                  <li key={app} className="text-xs">
                    {app},{" "}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex gap-1">
              {item.activities.map((activity) => (
                <li key={activity} className="italic text-sm">
                  {activity}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
