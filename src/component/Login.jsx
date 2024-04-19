import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the Form
    const messege = checkValidData(email.current.value, password.current.value);
    console.log(messege);
    setErrorMessage(messege);

    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className="h-full">
      <Header />
      <div className="absolute ">
        <img
          className="object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-formBg rounded-md w-3/12 p-12 my-24 mx-auto right-0 left-0 "
      >
        <h1 className="text-white text-[34px] font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div className="isSighnUpOption">
            <input
              type="text"
              placeholder="Full name"
              className="w-full font-medium mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full font-medium mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
            />
          </div>
        )}
        <input
          ref={email}
          type="email"
          placeholder={isSignInForm ? "Email or phone number" : "Email"}
          className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <p className="text-netRed mt-2">{errorMessage}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <p className="text-netRed mt-2">{errorMessage}</p>
        <br />
        <button
          className="w-full p-2 my-2 bg-netRed rounded-md  text-lg font-medium text-white "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <br />
        {isSignInForm && (
          <div className="isSignIn">
            <p className="text-center text-white my-3">OR</p>
            <button className="text-lg text-white py-2 rounded-md bg-grayTranse w-full">
              Use a sign-in code
            </button>
            <p className="text-white hover:underline my-4 text-center">
              <Link to="/">Forgot password?</Link>
            </p>
          </div>
        )}

        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        <span className="ml-4  text-white">Remember me</span>
        <h3 className="text-white my-5">
          {isSignInForm ? "New to Netflix?" : "Allready Registered!"}
          <span
            className="font-bold hover:underline"
            onClick={toggleSignInForm}
          >
            <Link to="/">{isSignInForm ? "Sign up now." : "Sign in"}</Link>
          </span>{" "}
        </h3>

        <h3 className="text-white text-sm font-thin leading-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue">
            <Link to="/"> Learn more.</Link>
          </span>
        </h3>
      </form>
      {/* <div className="absolute footer w-full h-[310px] bg-formBg bottom-0 top-full my-5">
        this is div
      </div> */}
    </div>
  );
};

export default Login;
