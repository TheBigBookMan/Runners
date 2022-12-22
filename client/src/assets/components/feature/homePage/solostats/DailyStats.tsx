//! FIX ANY TYPE
const DailyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the daily
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <li className="font-bold">Daily</li>
      <li>M- 22km 143m</li>
      <li>Tu- 2km 13m</li>
      <li>W- 5km 33m</li>
      <li>Th- 12km 133m</li>
      <li>F- 52km 533m</li>
      <li>Sa- 52km 533m</li>
      <li>Su- 2km 33m</li>
    </ul>
  );
};

export default DailyStats;
