import NavBar from "../components/common/NavBar";
import ReadOnly from "./ReadOnly";
import Home from "./Home";
import Groups from "./Groups";
import Solo from "./Solo";
import Profile from "./Profile";
import User from "./User";
import Post from "./Post";
import ListPosts from "./ListPosts";
import Settings from "./Settings";
import Login from "./Login";
import Signup from "./Signup";
import UseUserContext from "../contexts/UserContext";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  const { isLoggedIn } = UseUserContext();

  return (
    <div className="h-screen w-full">
      <NavBar />
      {!isLoggedIn ? (
        <>
          <Routes>
            <Route index path="/" element={<ReadOnly />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="groups" element={<Groups />} />
            <Route path="solo" element={<Solo />} />
            <Route path="profile" element={<Profile />} />
            <Route path="user" element={<User />} />
            <Route path="settings" element={<Settings />} />
            <Route path="post" element={<Post />} />
            <Route path="listposts" element={<ListPosts />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Pages;
