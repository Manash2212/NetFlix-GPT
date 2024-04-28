import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ poster_path }) => {
  return (
    <div className="w-[150px] ">
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movies Poster"
        className="w-[500px] cursor-pointer rounded-md"
      />
    </div>
  );
};

export default MoviesCard;
