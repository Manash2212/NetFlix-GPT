import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggetion = () => {
  const gpt = useSelector((state) => state.gpt);
  const { movieNames, movieResult } = gpt;

  if (!movieResult) return null;
  return (
    <div className="bg-black m-4  p-1 w-[92%]  md:w-screen min-h-screen text-white absolute top-[35%] bg-opacity-90 scrollbar-hide mt-[15%] md:mt-0 ">
      <div className="scrollbar-hide  md:pr-8  ">
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={index}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetion;
