const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    username: String
    password: String
    joinedDate: DateTime
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    singleUser(username: String!): User
    allUsers: [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    logout: Boolean
  }
`;

module.exports = typeDefs;
