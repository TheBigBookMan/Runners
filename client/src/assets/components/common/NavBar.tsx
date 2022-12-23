import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const NavBar = () => {
  //!!! temporary is logged in variable
  const isLog = true;
  return (
    <div className="flex justify-between p-3 items-center ">
      <Link to="/" className="font-bold text-2xl text-orange-500">
        Runners
      </Link>
      {isLog ? (
        <Navigation />
      ) : (
        <div className="flex gap-4">
          <Link className="text-orange-500 font-bold text-lg" to="/signup">
            Signup
          </Link>
          <Link className="text-orange-500 font-bold text-lg" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;