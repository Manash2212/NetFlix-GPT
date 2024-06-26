import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute aspect-video flex flex-col md:pl-8 justify-center items-start  bg-gradient-to-r from-formBg  w-full ">
      <div className="children px-4 md:px-2 text-white ">
        <h1 className="text-white text-[20px] md:text-[50px] font-bold  font-Fugaz mb-4">
          {title}
        </h1>
        <p className="text-white text-lg w-4/12 my-6 font-DM font-bold leading-6 hidden md:inline-block">
          {overview}
        </p>
        <div className="2btn flex gap-4 mt-4">
          <button className="flex rounded-md border-black pt-2 px-2 md:py-2 md:px-6 gap-2 text-lg md:text-xl font-bold font-DM bg-white hover:bg-opacity-80 text-black ">
            {" "}
            <span className="m-auto text-lg md:text-2xl">
              <FaRegCirclePlay />
            </span>{" "}
            Play
          </button>
          <div className="hidden md:inline-block">
            <button className="flex rounded-md border-black py-2 px-6 gap-2 text-xl font-bold font-DM bg-grayTranse hover:bg-alphaWhite">
              {" "}
              <span className="m-auto text-3xl font-bold">
                <MdOutlineInfo />
              </span>{" "}
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
