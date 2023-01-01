import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
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
        _id
        username
        password
        joinedDate
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query getSingleUser($username: String!) {
    singleUser(username: $username) {
      _id
      username
      password
      joinedDate
    }
  }
`;
