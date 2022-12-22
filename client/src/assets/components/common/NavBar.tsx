import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3 items-center ">
      <Link to="/" className="font-bold text-2xl">
        Runners
      </Link>
      <Navigation />
    </div>
  );
};

export default NavBar;
