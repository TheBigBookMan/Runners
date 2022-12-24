import { Link } from "react-router-dom";

const hardcode = [
  {
    type: "run",
    date: "22/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "walk",
    date: "20/12/2022",
    location: "Adelaide, South Australia",
    distance: 23,
    time: 143,
    speed: 15.4,
  },
  {
    type: "swim",
    date: "18/12/2022",
    location: "Adelaide, South Australia",
    distance: 1,
    time: 42,
    speed: 1.4,
  },
  {
    type: "run",
    date: "11/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
  {
    type: "run",
    date: "17/12/2022",
    location: "Adelaide, South Australia",
    distance: 12,
    time: 43,
    speed: 5.4,
  },
];

const DailyStat = () => {
  return (
    <ul className="h-full flex flex-col gap-2 overflow-y-scroll">
      {hardcode.map((item) => (
        <Link
          to="/post"
          key={item.date + item.distance}
          className="p-1 flex justify-between h-[50px] group hover:bg-orange-400 hover:rounded-lg cursor-pointer"
        >
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
                {item.type}
              </h1>
              <p className="text-xs text-zinc-500 group-hover:text-zinc-50">
                {item.date}
              </p>
            </div>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm">{item.distance}km</p>
            <p className="text-sm">{item.time}min</p>
            <p className="text-sm">{item.speed}kp/h</p>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default DailyStat;
