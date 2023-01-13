const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    username: String
    password: String
    joinedDate: DateTime
    apps: [String]
    followedByIDs: [ID]
    followingIDs: [ID]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser(username: String!): User
    allUsers: [User]
    following: [User]
    followedBy: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    logout: Boolean
    addAppName(appName: String!): User
    followUser(username: String!): User
  }
`;

module.exports = typeDefs;
