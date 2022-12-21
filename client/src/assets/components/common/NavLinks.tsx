import { Link } from "react-router-dom";

const NavLinks = () => {
  // ? temporary login
  const isIn = false;
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/solo">Solo</Link>
      <Link to="/settings">Settings</Link>

      {isIn ? (
        <p>Logout</p>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
