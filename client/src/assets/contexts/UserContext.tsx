import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { SIGNUP, LOGIN, LOGOUT } from "../graphql/queries";
import createCtx from "./index";
import { useNavigate } from "react-router";

interface CtxUser {
  user: UserInfo | null;
  isLoggedIn: boolean;
  loading: boolean;
  signUpUser: (newUser: UserInfo) => void;
  loginUser: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  logoutUser: () => void;
}

const localUser = JSON.parse(localStorage.getItem("user") as string) || null;
const [useCtx, UserProvider] = createCtx<CtxUser>();

export const Provider = ({ children }: Prototypes) => {
  const nav = useNavigate();
  const [user, setUser] = useState<UserInfo | null>(localUser);
  const [signUpMutation, { data: signUpData, loading }] = useMutation(SIGNUP);
  const [loginMutation, { data: loginData, error }] = useMutation(LOGIN);
  const [logoutMutation] = useMutation(LOGOUT);

  //? When user state changes, it is stored onto local storage as the user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //? If the signupdata is changed (someone signs up) then that data is automatically logged in
  useEffect(() => {
    if (signUpData) {
      authenticateUser(signUpData.addUser);
    }
  }, [signUpData]);

  //? If the logindata is changed (someone is logged in) then the user will be logged in
  useEffect(() => {
    if (loginData) {
      authenticateUser(loginData.login);
    }
  }, [loginData]);

  //? Function that sets the user info as the logged in user
  const authenticateUser = (user: UserInfo) => {
    setUser(user);
  };

  //? Function to sign up the user using the signup mutation from Apollo
  const signUpUser = async (newUser: UserInfo) => {
    try {
      await signUpMutation({ variables: { ...newUser } });
      nav("/");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //? Function to login the user using the login mutation from Apollo
  const loginUser = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      await loginMutation({ variables: { username, password } });
      nav("/");
    } catch (error) {
      console.log(error);
      // throw Error("not work");
      return error;
    }
  };

  //? Function that uses the logout mutation from Apollo and sets the user to null so no one is signed in
  const logoutUser = () => {
    logoutMutation();
    setUser(null);
  };

  //? Variable to tell if user is logged in or not for conditional rendering
  const isLoggedIn = !!user;

  return (
    <UserProvider
      value={{ user, isLoggedIn, loading, signUpUser, loginUser, logoutUser }}
    >
      {children}
    </UserProvider>
  );
};

export default useCtx;
