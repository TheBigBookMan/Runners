//! FIX ANY TYPE
const MonthlyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the monthlys
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <h1 className="font-bold">Monthly</h1>
      <li>
        <span className="font-bold text-orange-500">Mar-</span> 22km 143m
      </li>
      <li>
        <span className="font-bold text-orange-500">Ap-</span> 2km 13m
      </li>
      <li>
        <span className="font-bold text-orange-500">May-</span> 5km 33m
      </li>
      <li>
        <span className="font-bold text-orange-500">Jun-</span> 12km 133m
      </li>
      <li>
        <span className="font-bold text-orange-500">Jul-</span> 52km 533m
      </li>
      <li>
        <span className="font-bold text-orange-500">Au-</span> 52km 533m
      </li>
      <li className="font-bold">...</li>
    </ul>
  );
};

export default MonthlyStats;
