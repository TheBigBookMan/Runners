//! FIX ANY TYPE
const MonthlyStats = ({ selectedActivity }: any) => {
  return (
    <ul className="flex flex-col gap-1 border-solid border-r h-full w-full text-xs overflow-y-scroll">
      <h1 className="font-bold">Monthly</h1>
      <li>
        <span className="font-bold text-orange-500">Benjamin- </span>1234km
      </li>
      <li>
        <span className="font-bold text-orange-500">Andrewmamacita- </span>134km
      </li>
      <li>
        <span className="font-bold text-orange-500">Justininamoboty- </span>
        124km
      </li>
      <li>
        <span className="font-bold text-orange-500">Justininamoboty- </span>
        124km
      </li>
      <li>
        <span className="font-bold text-orange-500">Justininamoboty- </span>
        124km
      </li>
      <li>
        <span className="font-bold text-orange-500">Nobody- </span>34km
      </li>
      <li className="font-bold">...</li>
    </ul>
  );
};

export default MonthlyStats;
