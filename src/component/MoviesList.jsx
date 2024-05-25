import React from "react";
import MoviesCard from "./MoviesCard";
import { IoIosArrowForward } from "react-icons/io";
// import { useSelector } from "react-redux";

const MoviesList = ({ title, movies }) => {
  //   const movie = useSelector((store) => store.movies);
  //   console.log(movie.popularMovies);

  const sliderRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="p-4  ">
      <h1 className="text-xl font-bold pl-6 pb-2 text-white">{title}</h1>
      <div className="">
        {/* <span className="text-[30px] text-white m-auto">
          <IoIosArrowBack
            onClick={sliderLeft}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
        </span> */}
        <div
          id="slider"
          className="1 flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <div className=" flex gap-4 ">
            {movies?.map((movie) => (
              <MoviesCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
        {/* <span className="text-[30px] text-white m-auto">
          <IoIosArrowForward
            onClick={sliderRight}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
        </span> */}
      </div>
    </div>
  );
};

export default MoviesList;
