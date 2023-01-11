import { useState } from "react";
import { Link } from "react-router-dom";
import UseUserContext from "../contexts/UserContext";

const Signup = () => {
  const [formDetails, setFormDetails] = useState<UserInfo>({
    username: "",
    // email: "",
    password: "",
  });
  const { signUpUser, loading } = UseUserContext();

  const changeDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    signUpUser({ ...formDetails });
  };

  return (
    <div className="rounded-2xl shadow-md flex flex-col gap-4 h-5/6 p-2 m-2 bg-orange-200">
      <h1 className="font-bold text-orange-600 text-3xl mx-auto">Signup</h1>
      <form className="flex flex-col gap-6 w-5/6">
        <input
          className="rounded-lg pl-2 h-[30px]"
          type="text"
          name="username"
          value={formDetails.username}
          placeholder="username"
          onChange={(e) => changeDetails(e)}
        />
        {/* <input
          className="rounded-lg pl-2 h-[30px]"
          type="email"
          name="email"
          value={formDetails.email}
          placeholder="email"
          onChange={(e) => changeDetails(e)}
        /> */}
        <input
          className="rounded-lg pl-2 h-[30px]"
          type="password"
          name="password"
          value={formDetails.password}
          placeholder="password"
          onChange={(e) => changeDetails(e)}
        />
        <Link
          onClick={() => submitForm()}
          to="/"
          className="w-[100px] h-[50px] bg-orange-500 flex items-center justify-center rounded-xl font-bold text-orange-200 hover:bg-orange-600"
        >
          {loading ? "Loading..." : "Submit"}
        </Link>
      </form>
      <p>
        We will not send any emails out to the address entered, it will only be
        used for account recovery and security purposes...
      </p>
    </div>
  );
};

export default Signup;
