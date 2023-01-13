import { Link } from "react-router-dom";

const hardcode = [
  {
    app: "Strava",
    activity: "run",
    distance: 10,
    time: 34,
  },
  {
    app: "Nike Fit Club",
    activity: "swim",
    distance: 4,
    time: 84,
  },
  {
    app: "Map My Run",
    activity: "walk",
    distance: 20,
    time: 314,
  },
  {
    app: "Strava",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    activity: "bike",
    distance: 100,
    time: 134,
  },
];

const RecentActivity = () => {
  return (
    <div className="flex flex-col h-full ">
      <h1 className="font-bold text-orange-600">Recent activity</h1>
      <ul className="h-3/6 flex flex-col gap-1 overflow-y-scroll">
        {hardcode.map((event, idx) => (
          <Link
            to="/post"
            key={event.app + idx}
            className={`border-b border-orange-400 flex h-[60px] pl-2 items-center justify-between group hover:rounded-lg cursor-pointer ${
              event.app === "Strava"
                ? "hover:bg-orange-300"
                : event.app === "Nike Fit Club"
                ? "hover:bg-lime-500"
                : event.app === "Map My Run"
                ? "hover:bg-sky-300"
                : ""
            }`}
          >
            <h1
              className={`font-bold ${
                event.app === "Strava"
                  ? "text-orange-600"
                  : event.app === "Nike Fit Club"
                  ? "text-lime-200"
                  : event.app === "Map My Run"
                  ? "text-sky-600"
                  : ""
              }`}
            >
              {event.app}
            </h1>
            <div className="flex gap-2 pr-2">
              <p>{event.activity}</p>
              <p>{event.distance}km</p>
              <p>{event.time}m</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
