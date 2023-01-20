import axios from "axios";
import { ADD_AUTH_USER } from "../graphql/queries";
import { useMutation } from "@apollo/client";

// * strava API call

// https://developers.strava.com/docs/reference/

// https://www.strava.com/api/v3/athlete/activities?access_token=d80607ab2c531dd251bb4a79b624a99927927de1

//? ClientID is for the registered application
const clientID = "99017";
const myId = "55591743";
const clientSecret = "683f17caa4792c34914e0ce7af1217469ced16bd";
const refresh = "a855f824883392d03e6ce3cf6826bf069dd8be93";
const accessToken = "9c32a6526881b90ae6643b349de62339fecd4a1f";

//* OR 1--- need to find out if does redirect properly back to runnenrs after authorze
//? This redirects to runners with the approval token in the URL-- THIS DOESNT GO IN A FETHC CALL THE USER LITERALLY NEEDS TO BE REACT-LINK SENT TO IT AND THEN CLICK AUTHORIZE WILL THEN SEND THEM TO THE APP WITH THE CODE IN THE URL !!!!
//!!!!! ABOVE
const OAuthLinkTest = `http://www.strava.com/oauth/authorize?client_id=99017&response_type=code&redirect_uri=http://localhost:5173/connect/exchange_token&approval_prompt=force&scope=activity:read_all`;

//* 2-- need to create function that then calls this with the authorization code from num 1 and then this returns the athletes info like id etc, and an access token which is used for accessing their data
//TODO need to make a refresher token function to continiously get their access token for data uploading
//TODO Will pobably need to useParams to get the url link and then break it down to et the code
const authLink = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&code=1d0c6b28399a17b1e09d80651ed35355f2147bc3&grant_type=authorization_code`;

//? My strava data with accessToken
const me = `https://www.strava.com/api/v3/athlete?access_token=${accessToken}`;

//? This API call just gets overall distance/moving time (can divide by distance for speed) and overall count of numberof activities
//TODO function to get users basic data uploaded
const athleteStat = `https://www.strava.com/api/v3/athletes/${myId}/stats?access_token=${accessToken}`;

//* 3-- using that access token from num 2 and then getting a list of activities
//TODO database and functions to extract data
//? This api call is a list of the athlete actiities--- need to make a function for current epoch time and do before epoch time to something really ages ago
const athleteActivities = `https://www.strava.com/api/v3/athlete/activities?before=1671954505&after=1670658505&page=1&per_page=200&scope=activity%3Aread?access_token=${accessToken}`;

//? Will get activity by the specific ID
//TODO function to call for just the post idea when looking at a post
const activityID = `https://www.strava.com/api/v3/activities/${myId}?include_all_efforts=true`;

//TODO could get location from the data from this call????
//? Function that gets the auth code to then get the access code
export const stravaAuthToken = async (code: string) => {
  const [addAuth] = useMutation(ADD_AUTH_USER);
  try {
    const { data } = await axios.post("https://www.strava.com/oauth/token", {
      client_id: clientID,
      client_secret: clientSecret,
      code,
    });
    const athleteInfo = data.athlete;
    const profilePic = athleteInfo.profile_medium;
    const appID = `Strava ${athleteInfo.id.toString()}`;
    await addAuth({
      variables: {
        profilePic,
        appID,
      },
    });
    const accessToken = data.access_token;
    getAthleteTotalInfo(accessToken);
    getActivities(accessToken);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//? Function that gets the total distance/time for run
const getAthleteTotalInfo = async (accessToken: string) => {
  try {
    const { data } = await axios.get(
      `https://www.strava.com/api/v3/athletes/${myId}/stats?access_token=${accessToken}`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//? Function that gets users activities
//TODO need to make this update regularly with the epoch timestap for day before-- COULD GET THE DATE THE USER JOINED AND THEN
//TODO need to somehow make it scan through the different pages as users can have more than 200-- just need to have a counter for the page={counter} and increment it
const getActivities = async (accessToken: string) => {
  try {
    const { data } = await axios.get(
      `https://www.strava.com/api/v3/athlete/activities?before=1671954505&after=1232349016&page=1&per_page=200`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(data);
  } catch (err) {
    console.log(err);
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
