import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { NetflixLogo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { toggleGptSearchView } from "../Redux/gptSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MyUser = useSelector((store) => store.user);
  // console.log(MyUser.photoURL);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className=" flex justify-between px-8 py-2 bg-gradient-to-b from-black w-full z-10 fixed text-center">
      <div className="img">
        <img className="w-44" src={NetflixLogo} alt="Netflix-logo" />
      </div>

      <div className="flex items-center justify-center">
        <select className="p-[4px] mr-2 mt-2 rounded-md font-bold outline-none">
          {SUPPORTED_LANGUAGES.map((item) => (
            <option
              key={item.indentifier}
              value={item.indentifier}
              className=" font-bold"
            >
              {item.name}
            </option>
          ))}
        </select>
        <button
          className="bg-grayTranse text-white py-2 px-4 mr-4 mt-2 rounded-lg"
          onClick={handleGptSearchToggle}
        >
          GPT Search
        </button>
        {MyUser && (
          <div className="">
            <button
              className="btn pt-4 flex items-start justify-start gap-2"
              onMouseEnter={() => setIsOpen(true)}
            >
              <img
                className="w-8 h-8 rounded-md"
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
