import { Link } from "react-router-dom";
import { useState } from "react";
import UseUserContext from "../../contexts/UserContext";

//! FIX ANY TYPE
const NavLinks = ({ setNavOpen }: any) => {
  const [isActive, setIsActive] = useState<string>("Home");
  const { isLoggedIn, logoutUser } = UseUserContext();

  const changeLink = (input: string): void => {
    setIsActive(input);
  };

  return (
    <>
      <Link
        className={`text-orange-${
          isActive === "Home" ? "600 font-bold" : "400"
        }`}
        onClick={() => {
          changeLink("Home");
          setNavOpen(false);
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`text-orange-${
          isActive === "Groups" ? "600 font-bold" : "400"
        }`}
        onClick={() => {
          changeLink("Groups");
          setNavOpen(false);
        }}
        to="/groups"
      >
        Groups
      </Link>
      <Link
        className={`text-orange-${
          isActive === "Solo" ? "600 font-bold" : "400"
        }`}
        onClick={() => {
          setNavOpen(false);
          changeLink("Solo");
        }}
        to="/solo"
      >
        Solo
      </Link>
      <Link
        className={`text-orange-${
          isActive === "Profile" ? "600 font-bold" : "400"
        }`}
        onClick={() => {
          setNavOpen(false);
          changeLink("Profile");
        }}
        to="/profile"
      >
        Profile
      </Link>
      <Link
        className={`text-orange-${
          isActive === "Settings" ? "600 font-bold" : "400"
        }`}
        onClick={() => {
          setNavOpen(false);
          changeLink("Settings");
        }}
        to="/settings"
      >
        Settings
      </Link>

      {isLoggedIn ? (
        <p onClick={logoutUser} className={`cursor-pointer text-orange-400`}>
          Logout
        </p>
      ) : (
        <>
          <Link
            className={`text-orange-${
              isActive === "Login" ? "600 font-bold" : "400"
            }`}
            onClick={() => {
              setNavOpen(false);
              changeLink("Login");
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`text-orange-${
              isActive === "Signup" ? "600 font-bold" : "400"
            }`}
            onClick={() => {
              setNavOpen(false);
              changeLink("Signup");
            }}
            to="/signup"
          >
            Signup
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
