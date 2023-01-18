import axios from "axios";

// * strava API call

// https://developers.strava.com/docs/reference/

// https://www.strava.com/api/v3/athlete/activities?access_token=d80607ab2c531dd251bb4a79b624a99927927de1

//? ClientID is for the registered application
const clientID = "99017";
const myId = "55591743";
const clientSecret = "683f17caa4792c34914e0ce7af1217469ced16bd";
const refresh = "a855f824883392d03e6ce3cf6826bf069dd8be93";
const accessToken = "bb68befcce2814559ad6a09478caa40b5f258dcc";

//* 1- after user authrizes they get autorization code in url--
//TODO need to create fucton to get that
//? Link for users to be able to authorize the API connection-- get a url back which has a access code
const OAuthLink = `http://www.strava.com/oauth/authorize?client_id=99017&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all`;

//* OR 1--- need to find out if does redirect properly back to runnenrs after authorze
//? This redirects to runners with the approval token in the URL-- THIS DOESNT GO IN A FETHC CALL THE USER LITERALLY NEEDS TO BE REACT-LINK SENT TO IT AND THEN CLICK AUTHORIZE WILL THEN SEND THEM TO THE APP WITH THE CODE IN THE URL !!!!
//!!!!! ABOVE
const OAuthLinkTest = `http://www.strava.com/oauth/authorize?client_id=99017&response_type=code&redirect_uri=http://localhost:5173/exchange_token&approval_prompt=force&scope=activity:read_all`;

//* 2-- need to create function that then calls this with the authorization code from num 1 and then this returns the athletes info like id etc, and an access token which is used for accessing their data
//TODO need to make a refresher token function to continiously get their access token for data uploading
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

//!!!! put url: string as arguement
export const stravaAPI = async () => {
  try {
    const response = await axios.get(OAuthLinkTest);
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
