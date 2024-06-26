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
import { addUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { Netflix_Background_IMG, USER_AVATAR } from "../utils/constants";

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
          className="object-cover h-screen w-screen"
          src={Netflix_Background_IMG}
          alt="Netflix Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-formBg rounded-md md:w-3/12 w-3/4 p-8 my-24 mx-auto right-0 left-0 "
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
            <p className="text-white hover:underline my-4 text-center">
              <Link to="/">Forgot password?</Link>
            </p>
          </div>
        )}

        <h3 className="text-white my-5">
          {isSignInForm ? "New to Netflix?" : "Allready Registered!"}
          <span
            className="font-bold hover:underline"
            onClick={toggleSignInForm}
          >
            <Link to="/">{isSignInForm ? "Sign up now." : "Sign in"}</Link>
          </span>{" "}
        </h3>
      </form>
      {/* <div className="absolute footer w-full h-[310px] bg-formBg bottom-0 top-full my-5">
        this is div
      </div> */}
    </div>
  );
};

export default Login;
