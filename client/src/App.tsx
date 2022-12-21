import NavBar from "./assets/components/common/NavBar";
import Home from "./assets/pages/Home";
import Groups from "./assets/pages/Groups";
import Solo from "./assets/pages/Solo";
import Settings from "./assets/pages/Settings";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import { Routes, Route } from "react-router-dom";

// * running application where import strava data on runs
// https://developers.strava.com/docs/reference/

//* have user login and have friends

//* create specific groups with people

//* strava API gets the users logged runs everyday and uploads the data to the page

// * can have categories- most km run this week/month/year, quickest run, furthest run etc

//* goup can create a betting system and it automaticall calculate the winner by calculating that specific category

//* if wanted to take step further, add in crypto wallet and smart contracts so users can actually put friendly wages on and automatically gets transacted

//* database use MongoDB because not relational, just adding running data and then comparing to others

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="groups" element={<Groups />} />
        <Route path="solo" element={<Solo />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
