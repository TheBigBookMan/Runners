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
    singleUser: async (parent, { id }, context) => {
      //TODO will have to use context to check if they are in your followedBy array and then send back a true or false to render out the follow/unfollow buttons
      const user = await prisma.user.findUnique({
        where: {
          id,
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
    addAuthUserInfo: async (parent, { profilePic, appID }, { user }) => {
      const { id } = user;
      const newerSplit = appID.split(" ");
      const idNum = newerSplit[1];
      let appName;

      if (newerSplit[0] === "Strava") {
        appName = "Strava";
        stravaID = idNum;
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: { profilePic, stravaID, apps: { push: appName } },
        });
        return updatedUser;
      } else if (newerSplit[0] === "NTC") {
        appName = "Nike Training Club";
        NTCID = idNum;
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: { profilePic, NTCID, apps: { push: appName } },
        });
        return updatedUser;
      } else if (newerSplit[0] === "MMRID") {
        appName = "Map My Run";
        MMRID = idNum;
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: { profilePic, MMRID, apps: { push: appName } },
        });
        return updatedUser;
      }
    },
    followUser: async (parent, { id }, { user }) => {
      const userId = user.id;
      const followedByUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          followedByIDs: { push: userId },
        },
      });

      const followingUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          followingIDs: { push: followedByUser.id },
        },
      });

      return followingUser;
    },
    unfollowUser: async (parent, { id }, { user }) => {
      const userId = user.id;
      //? Find the user they are following and get their list of followedByIDs
      const followedByUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      const followedByIDs = await followedByUser.followedByIDs;

      //? Update the followedByIDs list with a filter !== id
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          followedByIDs: {
            set: followedByIDs.filter((usersId) => usersId !== userId),
          },
        },
      });

      //? Find the context user and get their list of followingIDs
      const followingUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      const followingIDs = await followingUser.followingIDs;

      //? Update the followingIDs list with a filter !== followedByUser.id
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          followingIDs: {
            set: followingIDs.filter(
              (followingUserId) => followingUserId !== id
            ),
          },
        },
      });

      return updatedUser;
    },
  },
};

module.exports = resolvers;
