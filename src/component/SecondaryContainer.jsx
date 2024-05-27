import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies);
  // console.log(movies.popularMovies);
  // console.log(movies.topRatedMovies);

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-52 relative z-7">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Toprated Movies" movies={movies.topRatedMovies} />
        <MoviesList title="Popular Movies" movies={movies.popularMovies} />
        <MoviesList title="Upcomming Movies" movies={movies.upcomingMovies} />
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
