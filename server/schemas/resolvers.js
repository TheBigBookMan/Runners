const { PrismaClient } = require("@prisma/client");
const { AuthenticationError } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth");

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
    singleUser: async (parent, { username }, context) => {
      //TODO will have to use context to check if they are in your followedBy array and then send back a true or false to render out the follow/unfollow buttons
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
    me: async (parent, args, { user }) => {
      const { id } = user;
      const findUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return findUser;
    },
  },

  Mutation: {
    addUser: async (parent, { username, password }, { res }) => {
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
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { username, password }, { res }) => {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
      const hashedPassword = user.password;
      if (bcrypt.compareSync(password, hashedPassword) === true) {
        const token = signToken(user);
        return { user, token };
      } else {
        throw Error(
          "Could not login, please check your details and try again..."
        );
      }
    },
    logout: async (parent, args, { res, user }) => {
      if (!user) {
        return false;
      }
      return true;
    },
    addAppName: async (parent, { appName }, { user }) => {
      //TODO add in logic to not add if there is already that application in there
      const { id } = user;
      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          apps: { push: appName },
        },
      });
      return updatedUser;
    },
    followUser: async (parent, { username }, { user }) => {
      const { id } = user;
      const followedByUser = await prisma.user.update({
        where: {
          username,
        },
        data: {
          followedByIDs: { push: id },
        },
      });

      const followingUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          followingIDs: { push: followedByUser.id },
        },
      });

      return followingUser;
    },
  },
};

module.exports = resolvers;
