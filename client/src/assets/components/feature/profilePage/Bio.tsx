import Me from "../../../images/Me.jpg";
import RecentActivity from "./RecentActivity";
import { ME } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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

  //?? temporary button to add in an application name, will actually trigger once a user connects up to the application through the API and agrees to connect data

  return (
    <div className="rounded-2xl shadow-md flex flex-col h-3/6 p-2 bg-orange-200">
      {!userInfo ? (
        <h1 className="font-bold text-3xl text-center">Loading...</h1>
      ) : (
        <>
          <div className="flex gap-2">
            <img src={Me} className="h-28 w-28 rounded-xl" />
            <div className="flex flex-col h-5/6">
              <h1 className="font-bold text-orange-500 text-2xl">
                {userInfo.username}
              </h1>
              <p className="text-sm cursor-pointer underline">
                Connect to application
              </p>
              <p className="text-sm">Strava, Nike Fit Club, Map My Run</p>
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
