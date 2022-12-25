//* this is the page to view the post uploaded from the site, this will just be a simple API call to whatever place and have that specific activity details uploaded, better to have it called from the API rather than stored from the database as it will grow too much

//* Surely each app will have an ID stored with each activity and so can store that ID into the database here and then use that as the API call

import Me from "../images/Me.jpg";
import { stravaAPI } from "./../hooks/StravaAPI";
import { Link } from "react-router-dom";

const hardcode = [
  {
    name: "Distance",
    data: "4.3km",
  },
  {
    name: "Time",
    data: "45min",
  },
  {
    name: "Speed",
    data: "3.5kp/h",
  },
  {
    name: "Elevation",
    data: "300m",
  },
  {
    name: "Average heart rate",
    data: "175bpm",
  },
];

const Post = () => {
  // stravaAPI();

  //TODO in bottom section, can add in more random stats like elevation etc

  //TODO the app name will be in the same coloras the app theme

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-1">
        <img src={Me} className="h-44 w-44" />
        <div className="flex flex-col">
          <Link to="/user" className="font-bold text-orange-500">
            Ben Smerd
          </Link>
          <p className="text-sm text-gray-400">Adelaide, South Australia</p>
          <p className="text-sm">23/12/2022</p>
          <h1 className="font-bold text-orange-500">run</h1>
        </div>
      </div>
      <h1 className="font-bold text-lg">Strava</h1>
      <ul className="flex flex-col h-full w-full gap-3">
        {hardcode.map((info) => (
          <li className="flex justify-between border-b border-orange-300">
            <h1 className="text-orange-400">{info.name}</h1>
            <p className="text-orange-600">{info.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
