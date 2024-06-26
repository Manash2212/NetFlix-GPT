import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-[100px] md:w-[150px] ">
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movies Poster"
        className="w-[500px] cursor-pointer rounded-md"
      />
    </div>
  );
};

export default MoviesCard;
