import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3 items-center ">
      <h1 className="font-bold text-2xl">Runners</h1>
      <Navigation />
    </div>
  );
};

export default NavBar;
