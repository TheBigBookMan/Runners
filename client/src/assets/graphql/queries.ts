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
