import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute object-cover ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        />
      </div>
      <form className="absolute bg-formBg rounded-md w-3/12 p-12 my-24 mx-auto right-0 left-0 ">
        <h1 className="text-white text-[34px] font-bold">Sign In</h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full font-medium mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full font-medium mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <br />
        <button className="w-full p-2 bg-netRed rounded-md mt-5 text-lg font-medium text-white ">
          Sign In
        </button>
        <br />
        <h2 className="text-center text-white my-3">OR</h2>
        <button className="text-lg text-white py-2 rounded-md bg-grayTranse w-full">
          Use a sign-in code
        </button>
        <h3 className="text-white hover:underline my-4 text-center">
          <Link to="/">Forgot password?</Link>
        </h3>

        <input type="checkbox" className="w-4 h-4" />
        <span className="ml-4  text-white">Remember me</span>
        <h3 className="text-white my-5">
          New to Netflix? &nbsp;
          <span className="hover:underline">
            <Link to="/">Sign up now.</Link>
          </span>{" "}
        </h3>

        <h3 className="text-white text-sm font-thin leading-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue">
            <Link to="/"> Learn more.</Link>
          </span>
        </h3>
      </form>
    </div>
  );
};

export default Login;
