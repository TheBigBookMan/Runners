import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formDetails, setFormDetails] = useState<UserInfo>({
    username: "",
    // email: "",
    password: "",
  });

  const changeDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    console.log(formDetails);
  };

  return (
    <div className="rounded-2xl shadow-md flex flex-col gap-8 h-5/6 p-2 m-2 bg-orange-200">
      <h1 className="font-bold text-orange-600 text-3xl mx-auto">Login</h1>
      <form className="flex flex-col gap-6 w-5/6">
        <input
          className="rounded-lg pl-2 h-[30px]"
          type="text"
          name="username"
          value={formDetails.username}
          placeholder="username"
          onChange={(e) => changeDetails(e)}
        />
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
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Login;
