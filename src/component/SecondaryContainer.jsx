import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.nowPlayingMovies);
  console.log(movies.popularMovies);

  return (
    <div className=" bg-black">
      <div className="-mt-52 relative z-7">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular Movies" movies={movies.popularMovies} />
        <MoviesList title="Trending Movies" movies={movies.nowPlayingMovies} />
        <MoviesList title="Upcomming Movies" movies={movies.nowPlayingMovies} />
      </div>
      {/* 
    MoviesList - popular
      MoviesCard * n
    MoviesList - Now Playing
      MoviesCard * n
    MoviesList - Trending
      MoviesCard * n
    MoviesList - Upcoming Movies
      MoviesCard * n

   */}
    </div>
  );
};

export default SecondaryContainer;
