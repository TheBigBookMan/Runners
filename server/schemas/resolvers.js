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

      const user = await prisma.user.create({
        data: { username, password },
      });
      return { user };
    },
    login: async (parent, { username, password }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
      const hashedPassword = user.password;
      if (bcrypt.compareSync(password, hashedPassword) === true) {
        return { user };
      } else {
        throw Error("Not work");
      }
    },
    logout: async (parent, args, { res, user }) => {
      if (!user) {
        return false;
      }
      return true;
    },
  },
};

module.exports = resolvers;
