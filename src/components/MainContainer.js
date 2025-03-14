import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies= useSelector((store)=> store.movies?.nowPlayingMovies)

    // const randomNumber = Math.floor(Math.random() * 21); // Generates a number between 0 and 20
if(!movies) return

const mainMovie = movies[1];
const {original_title,overview,id}=mainMovie
// console.log(original_title,"original_title")
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer