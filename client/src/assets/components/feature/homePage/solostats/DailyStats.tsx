//! FIX ANY TYPE
const DailyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the daily
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <h1 className="font-bold">Daily</h1>
      <li>
        <span className="font-bold  text-orange-500">M-</span> 22km 143m
      </li>
      <li>
        <span className="font-bold  text-orange-500">Tu-</span> 2km 13m
      </li>
      <li>
        <span className="font-bold text-orange-500">W-</span> 5km 33m
      </li>
      <li>
        <span className="font-bold text-orange-500">Th-</span> 12km 133m
      </li>
      <li>
        <span className="font-bold text-orange-500">F-</span> 52km 533m
      </li>
      <li>
        <span className="font-bold text-orange-500">Sa-</span> 52km 533m
      </li>
      <li>
        <span className="font-bold text-orange-500">Su-</span> 2km 33m
      </li>
    </ul>
  );
};

export default DailyStats;
