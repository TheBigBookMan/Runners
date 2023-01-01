const { PrismaClient } = require("@prisma/client");
const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");

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
    singleUser: async (parent, { name }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          name,
        },
      });

      if (!user) {
        return "No user found.";
      }
      return user;
    },
  },

  Mutation: {
    addUser: async (parent, { name, password }, { res }) => {
      //TODO add in bcryprt hashing
      const user = await prisma.user.create({ name, password });
      return { user };
    },
    login: async (parent, { name, password }, { res }) => {
      //TODO add in password compare hashs
      const user = await prisma.user.findUnique({
        user,
      });
    },
  },
};

module.exports = resolvers;
