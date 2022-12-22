//! FIX ANY TYPE
const WeeklyStats = ({ selectedActivity }: any) => {
  //* depending on the selected activity type- walk, run etc then call the info from the database for the weekly
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs">
      <li className="font-bold">Weekly</li>
      <li>50- 22km 143m</li>
      <li>49- 2km 13m</li>
      <li>48- 5km 33m</li>
      <li>47- 12km 133m</li>
      <li>46- 52km 533m</li>
      <li>45- 52km 533m</li>
      <li>...</li>
    </ul>
  );
};

export default WeeklyStats;
