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
    }
  }
`;

//?? just temp, will probably have this for when clicking on user profile
export const GET_SINGLE_USER = gql`
  query getSingleUser($username: String!) {
    singleUser(username: $username) {
      id
      username
      joinedDate
      apps
    }
  }
`;

//? Add an application name to the database upon OAuth confirmation
export const ADD_APPLICATION = gql`
  mutation AddApplication($appName: String!) {
    addAppName(appName: $appName) {
      apps
    }
  }
`;

//? Following another user
export const FOLLOW_USER = gql`
  mutation FollowUser($username: String!) {
    followUser(username: $username) {
      followedByIDs
      followingIDs
    }
  }
`;
