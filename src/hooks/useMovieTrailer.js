import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../Redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // For Memoization
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // This is fetching the trailer videos and updating the store with trailer videos data.
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    // console.log(json.results[6]);

    // Filtering the results object, in that object filtering the type of Trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");

    // What if some there is no Trailer in the results.type object, then return the first object of results > ther could heve "Clip" or "Treser"
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
