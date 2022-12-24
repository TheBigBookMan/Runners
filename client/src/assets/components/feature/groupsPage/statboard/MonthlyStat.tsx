const distanceDa = [
  {
    name: "Benjamin",
    distance: 8,
  },
  {
    name: "Andymamacita",
    distance: 1,
  },
  {
    name: "Justiantino",
    distance: 8,
  },
];

const timeDa = [
  {
    name: "Andymamacia",
    time: 23,
  },
  {
    name: "Benjamin",
    time: 2,
  },
  {
    name: "Justiantino",
    time: 2,
  },
  {
    name: "Andymamacia",
    time: 231,
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
  },
  {
    name: "andrewmamacita",
    speed: 3.2,
  },
  {
    name: "Justiantino",
    speed: 1.2,
  },
  {
    name: "andrewmamacita",
    speed: 1.2,
  },
];

const MonthlyStat = () => {
  return (
    <div className="h-full ">
      <div className="flex w-full h-full gap-1">
        <ul className="border-r flex flex-col w-2/6 gap-2">
          <h1 className="mx-auto font-bold text-orange-500">Distance</h1>
          {distanceDa.map((data) => (
            <li className="flex justify-between text-xs">
              <p className="font-bold text-orange-500 w-[80px] truncate">
                {data.name}
              </p>
              <p>{data.distance}km</p>
            </li>
          ))}
        </ul>
        <ul className="border-r  flex flex-col  w-2/6 gap-2">
          <h1 className="mx-auto font-bold text-orange-500 ">Time</h1>
          {timeDa.map((data) => (
            <li className="flex justify-between text-xs">
              <p className="font-bold text-orange-500  w-[80px] truncate">
                {data.name}
              </p>
              <p>{data.time}km</p>
            </li>
          ))}
        </ul>
        <ul className="border-r  flex flex-col  w-2/6 gap-2">
          <h1 className="mx-auto font-bold text-orange-500">Speed</h1>
          {speedDa.map((data) => (
            <li className="flex justify-between text-xs">
              <p className="font-bold text-orange-500  w-[80px] truncate">
                {data.name}
              </p>
              <p>{data.speed}kp/h</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MonthlyStat;
