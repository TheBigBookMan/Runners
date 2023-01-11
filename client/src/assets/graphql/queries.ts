import { gql } from "@apollo/client";

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

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

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
    }
  }
`;
