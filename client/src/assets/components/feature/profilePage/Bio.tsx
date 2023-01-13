import Me from "../../../images/Me.jpg";
import RecentActivity from "./RecentActivity";
import { ME } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//? get user info from the context of the resolver and use that as a findUnique

const Bio = () => {
  const [userInfo, setUserInfo] = useState<UserBio>();
  const { loading, data: meData } = useQuery(ME);

  useEffect(() => {
    let dataInfo = meData?.me;
    if (dataInfo) {
      setUserInfo(meData.me);
    }
  }, [meData]);

  //?? on the "connect to application" button, the user will get a choice for what app to connect to and then the authenitcation from that application will come up through API and user can connect and then it will show underneath with the database what they have connected to

  return (
    <div
      className={`rounded-2xl shadow-md flex flex-col h-3/6 p-2 bg-orange-200 `}
    >
      {!userInfo ? (
        <h1 className="font-bold text-3xl text-center text-orange-500">
          Loading...
        </h1>
      ) : (
        <>
          <div className="flex gap-2">
            <img src={Me} className="h-28 w-28 rounded-xl" />
            <div className="flex flex-col h-5/6">
              <h1 className="font-bold text-orange-500 text-2xl">
                {userInfo.username}
              </h1>
              <Link to="/connect" className="text-sm cursor-pointer underline">
                Connect to application
              </Link>
              <ul className="flex gap-1">
                {userInfo.apps.map((app) => (
                  <li
                    key={app}
                    className={`text-sm text-${
                      app === "Strava"
                        ? "orange-500"
                        : app === "Nike Fit Club"
                        ? "lime-200"
                        : app === "Map My Run"
                        ? "sky-500"
                        : ""
                    } `}
                  >
                    {app}
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                Joined on- <span>{userInfo.joinedDate}</span>
              </p>
            </div>
          </div>
          <RecentActivity />
        </>
      )}
    </div>
  );
};

export default Bio;
