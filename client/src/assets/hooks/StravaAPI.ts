import axios from "axios";

// * strava API call

// https://developers.strava.com/docs/reference/

// https://www.strava.com/api/v3/athlete/activities?access_token=d80607ab2c531dd251bb4a79b624a99927927de1

const authLink = "https://www.strava.com/oauth/token";

export const stravaAPI = async () => {
  try {
    const response = await axios.get(
      "https://www.strava.com/api/v3/athlete?access_token=d80607ab2c531dd251bb4a79b624a99927927de1"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

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
