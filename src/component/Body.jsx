import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    //Reason of using UseEffect : - i want to call this function once.
    // Reaseon for using this onAuthStateChanged : - If any user Sign up then this Function will be called,
    //  If any user Sign In then this Function will also be called, If any user Sign Out then this Function will be called also, so all those updates we can do it from one Place
    onAuthStateChanged(auth, (user) => {
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
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
