import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { NetflixLogo } from "../utils/constants";

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

  return (
    <div className=" absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black w-full z-10">
      <img className="w-44" src={NetflixLogo} alt="Netflix-logo" />

      {MyUser && (
        <div className="dropDoenMenu">
          <button
            className="btn pt-4 flex items-center gap-2"
            onMouseEnter={() => setIsOpen(true)}
          >
            <img
              className="w-12 h-12 rounded-md"
              src={MyUser.photoURL}
              alt="Profile-img"
            />
            {isOpen ? "▼" : "▲"}
            {isOpen && <Dropdown leaveState={setIsOpen} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
