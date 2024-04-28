import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomigMovies from "../hooks/useUpcomigMovies";
const Browse = () => {
  // This hook is for Fetching the API and Store it the customHook.
  useNowPlayingMovies();

  usePopularMovies();

  useTopRatedMovies();

  useUpcomigMovies();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 

      💫Planning of Making Browse page💫
        - Main Container 
          - Video BackGround
          - Video Title

        - Secondary Container
          - Movie List * n
          - Cards * n
       */}
    </div>
  );
};

export default Browse;
