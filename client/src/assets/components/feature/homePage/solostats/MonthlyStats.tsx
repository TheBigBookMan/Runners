//! FIX ANY TYPE
const MonthlyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the monthlys
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <li className="font-bold">Monthly</li>
      <li>Mar- 22km 143m</li>
      <li>Ap- 2km 13m</li>
      <li>May- 5km 33m</li>
      <li>Jun- 12km 133m</li>
      <li>Jul- 52km 533m</li>
      <li>Au- 52km 533m</li>
      <li>...</li>
    </ul>
  );
};

export default MonthlyStats;
