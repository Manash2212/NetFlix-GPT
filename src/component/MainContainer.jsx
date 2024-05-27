import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   This is Called early Returns > "If we try to fetch something before it add to the store"
  if (movies === null) return;

  const mainMovie = movies[1];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="box-border overflow-hidden md:pt-0 pt-[20%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
