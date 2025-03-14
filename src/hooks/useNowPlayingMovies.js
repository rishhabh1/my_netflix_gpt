import  { useCallback, useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlaying = useCallback(async () => {
      try {
        const resp = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
  
        const data = await resp.json();
  
        dispatch(addNowPlayingMovies(data.results));
      } catch (err) {
        console.error(err);
      }
    },[dispatch]);
  
    useEffect(() => {
      getNowPlaying();
    }, [getNowPlaying]);
  
}

export default useNowPlayingMovies