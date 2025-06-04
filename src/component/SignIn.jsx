import React, { useState } from "react";
import logo from "../assets/gpt.png";
import banner from "../assets/background_banner.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
    
  const [Switch, setSwitch] = useState(false);

  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="loginContainer text-white  min-h-screen w-screen relative p-5 flex flex-col items-center justify-center"
    >
      <img className="h-32 w-32 rounded-full mb-6" src={logo} alt="No image" />
      <div className="loginForm border-white border-2 bg-[#000000a4] p-6 w-full max-w-md rounded-lg">
        <h1 className="font-bold text-2xl text-center mb-4">Sign In</h1>
        <form className="w-full flex flex-col items-center gap-6">
          <input
            className="bg-[#000000da] rounded h-9 w-full px-3"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-[#000000da] rounded h-9 w-full px-3"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 px-4 py-2 w-full rounded">
            Sign In
          </button>
          <div className="form-help flex text-sm items-center justify-between w-full">
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <span>Need Help</span>
          </div>
          <small>
            New to Streamify?
            <Link to="/signup" className="text-red-500 font-semibold" >SignUp</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
