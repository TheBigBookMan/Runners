const { PrismaClient } = require("@prisma/client");
const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime scalar type",

    serialize(value) {
      const date = new Date(value);

      return date.toUTCString();
    },
    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }

      return null;
    },
    serialize(value) {
      const date = new Date(value);
      return new Intl.DateTimeFormat("en-au", { dateStyle: "short" }).format(
        date
      );
    },
  }),

  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
    singleUser: async (parent, { username }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!user) {
        return "No user found.";
      }
      return user;
    },
  },
  //
  Mutation: {
    addUser: async (parent, { username, password }, { res }) => {
      //TODO add in bcryprt hashing
      const findUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (findUser) {
        return "User already exists";
      }

      const saltRounds = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, saltRounds);

      const createdUser = await prisma.user.create({
        data: { username, password },
      });
      return createdUser;
    },
    login: async (parent, { username, password }, { res }) => {
      //TODO add in password compare hashs
      const findUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });
    },
  },
};

module.exports = resolvers;
