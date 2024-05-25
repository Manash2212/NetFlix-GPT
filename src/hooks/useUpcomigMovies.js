import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Redux/movieSlice";

const useUpcomigMovies = () => {
  const dispatch = useDispatch();

  // For Memoization only
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomigMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomigMovies();
  }, []);
};

export default useUpcomigMovies;
