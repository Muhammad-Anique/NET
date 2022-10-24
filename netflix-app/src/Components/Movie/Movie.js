import React from 'react'
import { useInsertionEffect } from 'react'
import { useState } from 'react'
import './Movie.css'

const Movie = ({movie}) => {

  return (
  
    <div className='card'>
      <img className='img' src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
      <div className='overlay'></div>
      <div className='details'>
      <h2>{movie.title}</h2><br/>
      <p>{movie.overview.substring(0, 200)}...</p> 
      </div>
    </div>
   
  )
}

export default Movie
