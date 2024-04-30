import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { Netflix_Background_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img src={Netflix_Background_IMG} alt="" />
      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  );
};

export default GptSearch;
