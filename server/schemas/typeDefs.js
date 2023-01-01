const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    _id: ID
    name: String
    password: String
    joinedDate: DateTime
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    singleUser(name: String!): User
    allUsers: User[]
  }

  type Mutation {
    addUser(name: String!, password: String!): Auth
    login(name: String!, password: String!): Auth
    logout: Boolean
  }
`;

module.exports = typeDefs;
