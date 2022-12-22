//! FIX ANY TYPE
const WeeklyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the weekly
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <h1 className="font-bold">Weekly</h1>
      <li>
        <span className="font-bold text-orange-500">50-</span> 22km 143m
      </li>
      <li>
        <span className="font-bold text-orange-500">49-</span> 2km 13m
      </li>
      <li>
        <span className="font-bold text-orange-500">48-</span> 5km 33m
      </li>
      <li>
        <span className="font-bold text-orange-500">47-</span> 12km 133m
      </li>
      <li>
        <span className="font-bold text-orange-500">46-</span> 52km 533m
      </li>
      <li>
        <span className="font-bold text-orange-500">45-</span> 52km 533m
      </li>
      <li className="font-bold">...</li>
    </ul>
  );
};

export default WeeklyStats;
