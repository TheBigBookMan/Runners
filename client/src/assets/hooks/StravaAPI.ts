import axios from "axios";

// * strava API call

// https://developers.strava.com/docs/reference/

// https://www.strava.com/api/v3/athlete/activities?access_token=d80607ab2c531dd251bb4a79b624a99927927de1

const clientID = "99017";
const myId = "55591743";
const clientSecret = "683f17caa4792c34914e0ce7af1217469ced16bd";
const refresh = "a855f824883392d03e6ce3cf6826bf069dd8be93";
const accessToken = "e10f141b2a182ec5e965b22b0185583bb1eafa28";

const authLink = "https://www.strava.com/oauth/token";
const me = `https://www.strava.com/api/v3/athlete?access_token=${accessToken}`;

//? This API call just gets overall distance/moving time (can divide by distance for speed) and overall count of numberof activities
const athleteStat = `https://www.strava.com/api/v3/athletes/${myId}/stats?access_token=${accessToken}`;

//? This api call is a list of the athlete actiities
const athleteActivities = `https://www.strava.com/api/v3/athlete/activities?before=1671954505&after=1670658505&page=1&per_page=30&scope=activity%3Aread?access_token=${accessToken}`;

//? Will get activity by the specific ID
const activityID = `https://www.strava.com/api/v3/activities/${myId}?include_all_efforts=true`;

export const stravaAPI = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

//* this function auto gets the new access token because it expires every 6 hours
// const reAuth = async () => {
//   const options = {
//     url: authLink,
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//     },
//   };
//   try {
//     const response = axios.post(options);
//   } catch (error) {
//     console.log(error);
//   }
// };
