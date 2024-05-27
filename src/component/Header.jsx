import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import MoviesList from "./MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { NetflixLogo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { addGptMovieResult, toggleGptSearchView } from "../Redux/gptSlice";
import { changeLanguage } from "../Redux/configSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MyUser = useSelector((store) => store.user);
  // console.log(MyUser.photoURL);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonRef = useRef();
  useEffect(() => {
    //Reason of using UseEffect : - i want to call this function once.
    // Reaseon for using this onAuthStateChanged : - If any user Sign up then this Function will be called,
    //  If any user Sign In then this Function will also be called, If any user Sign Out then this Function will be called also, so all those updates we can do it from one Place
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or Sign Up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ... If user Login then it will Redirect to Browse page.
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // ... If user Login out OR Sign out from Browse page then it will Redirect to Sign up page.
        navigate("/");
      }
    });
    // This will unSubscribe when "onAuthStateChanged" component unmount.
    return () => unsubscribe();
  }, []);

  const handleGptSearchToggle = (e) => {
    dispatch(toggleGptSearchView());
    if (buttonRef.current.childNodes[0].data === "GPT Search") {
      dispatch(addGptMovieResult({ movieNames: null, movieResult: null }));
    }
    console.log(buttonRef.current.childNodes[0].data);
  };

  const handleChangeLanguage = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" flex justify-between md:flex-row flex-col px-8 py-2 bg-gradient-to-b from-black w-full z-10 absolute top-0 text-center mt-0 ">
      <div className="img">
        <img
          className="w-32 mx-auto md:m-0 md:w-44 "
          src={NetflixLogo}
          alt="Netflix-logo"
        />
      </div>

      <div className="flex items-center md:justify-center justify-between text-sm md:text-lg">
        {showGptSearch && (
          <select
            className="p-[4px] mr-2 mt-2 rounded-md font-bold outline-none"
            onClick={handleChangeLanguage}
          >
            {SUPPORTED_LANGUAGES.map((item) => (
              <option
                key={item.indentifier}
                value={item.indentifier}
                className=" font-bold"
                onClick={handleChangeLanguage}
              >
                {item.name}
              </option>
            ))}
          </select>
        )}
        <button
          ref={buttonRef}
          className="bg-lightRed text-white py-1 px-2 md:py-2 md:px-4 mr-4 mt-2 font-bold rounded-lg"
          onClick={handleGptSearchToggle}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        {MyUser && (
          <div className="">
            <button
              className="btn pt-2 md:pt-4 flex items-start justify-start gap-2"
              onMouseEnter={() => setIsOpen(true)}
            >
              <img
                className="w-6 md:w-8   rounded-md"
                src={MyUser.photoURL}
                alt="Profile-img"
              />
              {isOpen ? (
                <span className="text-xl text-white">
                  <GoTriangleUp />
                </span>
              ) : (
                <span className="text-xl text-white">
                  <GoTriangleDown />
                </span>
              )}
              {isOpen && <Dropdown leaveState={setIsOpen} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
