import Me from "../../../images/Me.jpg";

const fake = [
  {
    name: "Benjamino",
    image: Me,
    admin: true,
  },
  {
    name: "Andrewmamacia",
    image: Me,
    admin: false,
  },
  {
    name: "Justinotino",
    image: Me,
    admin: false,
  },
  {
    name: "Benjamino",
    image: Me,
    admin: false,
  },
  {
    name: "Benjamino",
    image: Me,
    admin: false,
  },
  {
    name: "Benjamino",
    image: Me,
    admin: false,
  },
];

import { Link } from "react-router-dom";

const GroupMembers = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col h-full w-full">
        <h1 className="font-bold">Members</h1>
        <ul className="flex flex-col gap-1 h-[100px] w-full overflow-y-scroll">
          {fake.map((person) => (
            <Link
              to={`/user/${person.name}`}
              className="flex gap-1 items-center hover:bg-orange-200 hover:rounded-xl p-1"
            >
              <img
                src={person.image}
                className="w-8 rounded-lg h-8 rounded-lg"
              />
              <p className="font-bold text-orange-500 text-sm">{person.name}</p>
              {person.admin && <p className="text-xs text-gray-400">admin</p>}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupMembers;
