import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute aspect-video flex flex-col items-center justify-center bg-gradient-to-r from-formBg ">
      <div className="children px-12 text-white ">
        <h1 className="text-white  text-[50px] font-bold  font-Fugaz mb-4">
          {title}
        </h1>
        <p className="text-white text-lg w-4/12 my-6 font-DM font-bold leading-6">
          {overview}
        </p>
        <div className="2btn flex gap-4 mt-4">
          <button className="flex rounded-md border-black py-2 px-6 gap-2 text-xl font-bold font-DM bg-white hover:bg-opacity-80 text-black">
            {" "}
            <span className="m-auto text-2xl">
              <FaRegCirclePlay />
            </span>{" "}
            Play
          </button>
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
  );
};

export default VideoTitle;
