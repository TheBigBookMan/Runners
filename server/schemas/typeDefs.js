const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    _id: ID
    name: String
    password: String
    joinedDate: DateTime
  }
`;

module.exports = typeDefs;
