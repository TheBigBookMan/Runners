import Me from "../images/Me.jpg";
import { Link } from "react-router-dom";

const hardcode = [
  {
    app: "Strava",
    color: "orange",
    activity: "run",
    distance: 10,
    time: 34,
  },
  {
    app: "Nike Fit Club",
    color: "green",
    activity: "swim",
    distance: 4,
    time: 84,
  },
  {
    app: "Map My Run",
    color: "sky",
    activity: "walk",
    distance: 20,
    time: 314,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
  {
    app: "Strava",
    color: "orange",
    activity: "bike",
    distance: 100,
    time: 134,
  },
];

const User = () => {
  //TODO addin add friend, invite buttons and have a isFriend conditional for the buttons

  //! TEMP ISFRIEND VARIABLE
  let isFriend = true;

  const addFriend = (): void => {};

  return (
    <div className="rounded-2xl shadow-md flex flex-col h-5/6 p-2 m-2 bg-orange-200">
      <div className="flex gap-2 h-2/6">
        <img src={Me} className="h-28 w-28 rounded-xl" />
        <div className="flex flex-col h-5/6">
          <h1 className="font-bold text-orange-500 text-2xl">Ben Smerd</h1>
          <p className="text-sm">Strava, Nike Fit Club, Map My Run user</p>
          <p className="text-sm">
            Joined on- <span>12/12/2022</span>
          </p>
          <p className="italic">walker, runner, swimmer</p>
        </div>
      </div>
      <div className="flex flex-col h-5/6 gap-4">
        <h1 className="font-bold text-orange-600">Recent activity</h1>
        <ul className="h-4/6 flex flex-col gap-1 overflow-y-scroll">
          {hardcode.map((event, idx) => (
            <Link to="/post" key={event.app + idx}>
              <li
                className={`border-b border-orange-400 flex h-[60px] pl-2 items-center justify-between group hover:bg-${event.color}-500 hover:rounded-lg cursor-pointer`}
              >
                <h1
                  className={`font-bold text-${event.color}-500 group-hover:text-${event.color}-100`}
                >
                  {event.app}
                </h1>
                <div className="flex gap-2 pr-2">
                  <p>{event.activity}</p>
                  <p>{event.distance}km</p>
                  <p>{event.time}m</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 justify-center">
          {isFriend ? (
            <>
              <button className="w-[140px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600">
                Remove friend
              </button>
              <button className="w-[140px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600">
                Invite to group
              </button>
            </>
          ) : (
            <button
              onClick={(): void => addFriend()}
              className="w-[100px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600"
            >
              Add friend
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
