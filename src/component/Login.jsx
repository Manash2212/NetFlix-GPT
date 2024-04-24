import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/Redux/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validateing the Form
    // console.log(email.current.value);
    // console.log(password.current.value);

    const messege = checkValidData(email.current.value, password.current.value);
    setErrorMessage(messege);

    if (messege) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // After successful Sign up update the user Details.
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // After updated the profile we can dispatch an action for photoURLBug.!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }

    // Sign in  and Sign Up
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
              ref={name}
              type="text"
              placeholder="Full name"
              className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
            />
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder={isSignInForm ? "Email or phone number" : "Email"}
          className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full font-medium text-white mt-5 px-4 py-4 bg-inputBg border-2 border-white rounded-md"
        />
        <p className="text-netRed mt-4">{errorMessage}</p>
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
