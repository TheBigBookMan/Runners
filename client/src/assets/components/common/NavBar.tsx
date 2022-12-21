import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="font-bold text-lg">Runners</h1>
      <Navigation />
    </div>
  );
};

export default NavBar;
