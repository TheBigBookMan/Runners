import { gql } from "@apollo/client";

//? User provide username and password to signup
export const SIGNUP = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        id
        username
        password
        joinedDate
      }
    }
  }
`;

//? User provide username and password to login
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        password
      }
    }
  }
`;

//? Logout
export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

//? Query the user logged in based off context
export const ME = gql`
  query Me {
    me {
      id
      username
      joinedDate
      apps
      profilePic
    }
  }
`;

//? Get user logged in following and followers
export const MY_FRIENDS = gql`
  query MyFriends {
    me {
      followedByIDs
      followingIDs
    }
  }
`;

//?? just temp, will probably have this for when clicking on user profile
export const GET_SINGLE_USER = gql`
  query getSingleUser($id: ID!) {
    singleUser(id: $id) {
      id
      username
      joinedDate
      profilePic
      apps
    }
  }
`;

//? Gets info on authenticated user after they authenticate with an app
export const ADD_AUTH_USER = gql`
  mutation AddAuthUserInfo($profilePic: String, $appID: String) {
    addAuthUserInfo(profilePic: $profilePic, appID: $appID) {
      profilePic
      stravaID
      NTCID
      MMRID
      id
      apps
    }
  }
`;

//? Following another user
export const FOLLOW_USER = gql`
  mutation FollowUser($id: ID!) {
    followUser(id: $id) {
      followedByIDs
      followingIDs
    }
  }
`;

//? Unfollow another user
export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($id: ID!) {
    unfollowUser(id: $id) {
      followedByIDs
      followingIDs
    }
  }
`;
