import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { MdOutlineEdit } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Dropdown = ({ leaveState }) => {
  const navigate = useNavigate();

  const handleNavigator = () => {
    signOut(auth)
      .then(() => {
        //  If Sign-out successful then navigate to the Login page.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="detailsMenuItem absolute top-20 right-5 border-2 border-black">
      <ul
        className="bg-formBg text-white py-2 pr-2 "
        onMouseLeave={() => leaveState(false)}
      >
        <li className=" hover:border-b-2 py-2 border-white w-full text-left flex gap-2 text-lg ">
          <span className="text-xl pt-1">
            <MdOutlineEdit />
          </span>
          <Link to="/masnh">Manage Profile</Link>
        </li>
        <li className="mt-2 hover:border-b-2 py-2 border-white w-full text-left flex gap-2 text-lg">
          <span className="text-xl pt-1">
            <IoPerson />
          </span>
          <Link to="/masnh">Account</Link>
        </li>
        <li className="mt-2 hover:border-b-2 py-2 border-white w-full text-left flex gap-2 text-lg">
          <span className="text-2xl pt-1">
            <IoIosHelpCircleOutline />
          </span>
          <Link to="/masnh">Help Center</Link>
        </li>
        <li className="mt-2 w-full border-b border-lightGray"></li>
        <li
          className="hover:border-b-2 border-netRed  w-full text-center pr-2 py-2  text-lg"
          onClick={handleNavigator}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
