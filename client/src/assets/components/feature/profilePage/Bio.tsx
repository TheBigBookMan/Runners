import Me from "../../../images/Me.jpg";

const Bio = () => {
  return (
    <div className="rounded-2xl shadow-md flex flex-col h-3/6 p-2 bg-orange-200">
      <div className="flex gap-2">
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
      <div className="flex flex-col h-full">
        <h1 className="font-bold text-orange-600">Recent posts</h1>
        <ul className="h-full flex flex-col gap-1">
          <li className="border-b border-orange-400 flex h-[40px] pl-2 items-center justify-between group hover:bg-green-500 rounded-lg cursor-pointer">
            <h1 className="font-bold text-green-400 group-hover:text-green-200">
              Nike Fit Club
            </h1>
            <div className="flex gap-2 pr-2">
              <p>Run</p>
              <p>10km</p>
              <p>34m</p>
            </div>
          </li>
          <li className="border-b border-orange-400 flex h-[40px] pl-2 items-center justify-between group hover:bg-orange-500 rounded-lg cursor-pointer">
            <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
              Strava
            </h1>
            <div className="flex gap-2 pr-2">
              <p>Bike</p>
              <p>40km</p>
              <p>134m</p>
            </div>
          </li>
          <li className="border-b border-orange-400 flex h-[40px] pl-2 items-center justify-between group hover:bg-orange-500 rounded-lg cursor-pointer">
            <h1 className="font-bold text-orange-500 group-hover:text-orange-200">
              Strava
            </h1>
            <div className="flex gap-2 pr-2">
              <p>Run</p>
              <p>4km</p>
              <p>34m</p>
            </div>
          </li>
          <li className="border-b border-orange-400 flex h-[40px] pl-2 items-center justify-between group hover:bg-teal-500 rounded-lg cursor-pointer">
            <h1 className="font-bold text-teal-500 group-hover:text-teal-200">
              Map My Run
            </h1>
            <div className="flex gap-2 pr-2">
              <p>Walk</p>
              <p>14km</p>
              <p>64m</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
