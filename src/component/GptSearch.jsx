import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { Netflix_Background_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="w-screen h-screen absolute overflow-x-hidden  ">
      <img src={Netflix_Background_IMG} className="fixed" alt="" />
      <div className=" ">
        <div className="">
          <GptSearchBar />
        </div>
        <div className="overflow-hidden ">
          <GptMovieSuggetion />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
