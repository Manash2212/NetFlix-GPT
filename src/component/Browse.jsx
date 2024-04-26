import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  // This hook is for Fetching the API and Store it the customHook.
  useNowPlayingMovies();
  return (
    <div>
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
