import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MyUser = useSelector((store) => store.user);
  // console.log(MyUser.photoURL);

  return (
    <div className=" absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black w-full z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />

      {MyUser && (
        <div className="dropDoenMenu">
          <button
            className="btn pt-4 flex items-center gap-2"
            onMouseEnter={() => setIsOpen(true)}
          >
            <img
              className="w-12 h-12 rounded-full"
              // src="https://avatars.githubusercontent.com/u/94735446?v=4"
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
