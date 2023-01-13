export {};

declare module "react";
declare module "react/jsq-runtime";

declare global {
  interface ActivityStyle {
    run: string;
    walk: string;
    bike: string;
    swim: string;
  }

  interface UserInfo {
    username: string;
    // email: string;
    password: string;
  }

  interface UserBio {
    id: string;
    username: string;
    joinedDate: string;
    apps: [string];
    followedByIDs: [string];
    followingIDs: [string];
  }

  interface Prototypes {
    children: React.ReactNode;
  }
}
