import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = (id) => {
  
    const dispatch = useDispatch();
  
  
  useEffect(()=>{
  const getMovieVideos = async()=>{
    
    
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)

    const data = await resp.json();
    const filterData =  data?.results?.filter((e)=>{return e.type === 'Trailer'})
    

    dispatch(addTrailerVideo(filterData[0]?.key));
      
  }
  getMovieVideos()
  
    
  },[id,dispatch])


}

export default useMovieTrailer