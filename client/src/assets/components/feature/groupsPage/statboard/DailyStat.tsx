const distanceDa = [
  {
    name: "Benjamin",
    distance: 8,
    app: "NRC",
  },
  {
    name: "Andymamacita",
    distance: 1,
    app: "Strava",
  },
  {
    name: "Justiantino",
    distance: 8,
    app: "MMR",
  },
];

const timeDa = [
  {
    name: "Andymamacia",
    time: 23,
    app: "MMR",
  },
  {
    name: "Benjamin",
    time: 2,
    app: "MMR",
  },
  {
    name: "Justiantino",
    time: 2,
    app: "MMR",
  },
  {
    name: "Andymamacia",
    time: 231,
    app: "MMR",
  },
  {
    name: "Justiantino",
    time: 23,
  },
];

const speedDa = [
  {
    name: "Justiantino",
    speed: 4.5,
    app: "MMR",
  },
  {
    name: "andrewmamacita",
    speed: 3.2,
    app: "MMR",
  },
  {
    name: "Justiantino",
    speed: 1.2,
    app: "MMR",
  },
  {
    name: "andrewmamacita",
    speed: 1.2,
  },
];

//TODO link the username of the full line to the user page
import { Link } from "react-router-dom";

const DailyStat = () => {
  return (
    <div className="h-full ">
      <div className="flex w-full h-full gap-1">
        <ul className="border-r flex flex-col w-2/6 gap-1">
          <h1 className="mx-auto font-bold text-orange-500">Distance</h1>
          {distanceDa.map((data) => (
            <Link
              to="/post"
              className="flex flex-col justify-between text-xs hover:bg-orange-300 hover:text-orange-600 hover:rounded p-1"
            >
              <p className="font-bold text-orange-500  w-[90px] truncate">
                {data.name}
              </p>
              <div className="flex gap-2">
                <p>{data.app}- </p>
                <p>{data.distance}km</p>
              </div>
            </Link>
          ))}
        </ul>
        <ul className="border-r  flex flex-col  w-2/6 gap-2">
          <h1 className="mx-auto font-bold text-orange-500 ">Time</h1>
          {timeDa.map((data) => (
            <Link
              to="/post"
              className="flex flex-col p-1 justify-between text-xs hover:bg-orange-300 hover:text-orange-600 hover:rounded"
            >
              <p className="font-bold text-orange-500 w-[80px] truncate">
                {data.name}
              </p>
              <div className="flex gap-2">
                <p>{data.app}- </p>
                <p>{data.time}mins</p>
              </div>
            </Link>
          ))}
        </ul>
        <ul className="border-r  flex flex-col  w-2/6 gap-2">
          <h1 className="mx-auto font-bold text-orange-500">Speed</h1>
          {speedDa.map((data) => (
            <Link
              to="/post"
              className="flex flex-col p-1 justify-between text-xs hover:bg-orange-300 hover:text-orange-600 hover:rounded"
            >
              <p className="font-bold text-orange-500 w-[80px] truncate">
                {data.name}
              </p>
              <div className="flex gap-2">
                <p>{data.app}- </p>
                <p>{data.speed}kp/h</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyStat;
