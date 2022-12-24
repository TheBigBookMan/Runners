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

const GroupMembers = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col h-full w-full">
        <h1 className="font-bold">Members</h1>
        <ul className="flex flex-col gap-1 h-[100px] w-full overflow-y-scroll">
          {fake.map((person) => (
            <li className="flex gap-1 items-center">
              <img
                src={person.image}
                className="w-8 rounded-lg h-8 rounded-lg"
              />
              <p className="font-bold text-orange-500 text-sm">{person.name}</p>
              {person.admin && <p className="text-xs text-gray-400">admin</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupMembers;
