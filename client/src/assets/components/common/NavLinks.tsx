import { Link } from "react-router-dom";

//! FIX ANY TYPE
const NavLinks = ({ setNavOpen }: any) => {
  // ? temporary login
  const isIn = false;
  return (
    <>
      <Link onClick={() => setNavOpen(false)} to="/">
        Home
      </Link>
      <Link onClick={() => setNavOpen(false)} to="/groups">
        Groups
      </Link>
      <Link onClick={() => setNavOpen(false)} to="/solo">
        Solo
      </Link>
      <Link onClick={() => setNavOpen(false)} to="/profile">
        Profile
      </Link>
      <Link onClick={() => setNavOpen(false)} to="/settings">
        Settings
      </Link>

      {isIn ? (
        <p>Logout</p>
      ) : (
        <>
          <Link onClick={() => setNavOpen(false)} to="/login">
            Login
          </Link>
          <Link onClick={() => setNavOpen(false)} to="/signup">
            Signup
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
