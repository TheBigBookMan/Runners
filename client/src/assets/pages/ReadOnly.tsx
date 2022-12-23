import { Link } from "react-router-dom";

const ReadOnly = () => {
  return (
    <div className="rounded-2xl shadow-md flex flex-col gap-8 h-5/6 p-2 m-2 bg-orange-200">
      <p className="text-orange-600 font-bold">
        Runners is an application where users create an account and sign in to
        their strava application. You will be able to add friends and join
        activity groups to compare your activities. Great way for people to
        compete against friends to see who has been the most active on different
        time scales!
      </p>
      <h1 className="font-bold text-xl">
        You need to login or signup to use the awesome features of this
        application.
      </h1>
      <div className="flex gap-10 justify-center">
        <Link
          to="/login"
          className="w-[100px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-[100px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default ReadOnly;
