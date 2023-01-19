const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    username: String
    password: String
    joinedDate: DateTime
    apps: [String]
    profilePic: String
    stravaID: String
    NTCID: String
    MMRID: String
    followedByIDs: [String]
    followingIDs: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser(id: ID!): User
    allUsers: [User]
    following: [User]
    followedBy: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    logout: Boolean
    addAppName(appName: String!): User
    addAuthUserInfo(profilePic: String, appID: String): User
    followUser(id: ID!): User
    unfollowUser(id: ID!): User
  }
`;

module.exports = typeDefs;
