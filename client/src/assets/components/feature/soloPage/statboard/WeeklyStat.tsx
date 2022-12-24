import { Link } from "react-router-dom";

const hardcode = [
  {
    week: 50,
    dates: ["17/12/2022", "24/12/2022"],
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    week: 49,
    dates: ["09/12/2022", "16/12/2022"],
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    week: 48,
    dates: ["01/12/2022", "08/12/2022"],
    distance: 153,
    time: 853,
    speed: 4.5,
  },
  {
    week: 47,
    dates: ["17/12/2022", "24/12/2022"],
    distance: 153,
    time: 853,
    speed: 4.5,
  },
];

const WeeklyStat = () => {
  return (
    <ul className="h-full flex flex-col gap-2 overflow-y-scroll">
      {hardcode.map((item) => (
        <Link
          to="/listposts"
          key={item.week}
          className="p-1 flex justify-between h-[50px] group hover:bg-orange-400 hover:rounded-lg cursor-pointer"
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
              Week {item.week}
            </h1>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-50">
              {item.dates[0]} - {item.dates[1]}
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

export default WeeklyStat;
