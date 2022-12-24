import { Link } from "react-router-dom";

const hardcode = [
  {
    month: "December",
    activities: 23,
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    month: "November",
    activities: 23,
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    month: "October",
    activities: 23,
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    month: "September",
    activities: 23,
    distance: 153,
    time: 853,
    speed: 4.5,
  },
];

const MonthlyStat = () => {
  return (
    <ul className="h-full flex flex-col gap-2 overflow-y-scroll">
      {hardcode.map((item) => (
        <Link
          to="/listposts"
          key={item.month}
          className="p-1 flex justify-between h-[50px] group hover:bg-orange-400 hover:rounded-lg cursor-pointer"
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
              {item.month}
            </h1>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-50">
              {item.activities} activities
            </p>
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

export default MonthlyStat;
