import React from 'react'
import MovieSearched from '../Components/MovieSearched/MovieSearched';
import '../Components/Movie/Movie.css'
const MovieInfo = (props) => {
  return (
    <div>
        {/* <img src={"https://image.tmdb.org/t/p/w500" + props.img} alt="" />
      <h2 style={{color:"white"}}>{props.title}</h2> */}


<div className='cardsearch'>
       <img src={"https://image.tmdb.org/t/p/w500" + props.img}/>
       <div className='searchDetails'>
       <h1 style={{
        margin:"10px"

       }}>{props.title}</h1>
       <p style={{
        margin:"10px"

       }}
       >{props.overview}</p>
       
       <h4
       style={{
        margin:"10px"}}
       >
        Popularity : 
        {props.pop}
       </h4>

       <h4
       style={{
        margin:"10px", color:"Yellow"}}
       >
        Runtime :   
        {props.run}
       </h4>
       </div>
    </div>
    </div>


  )
}

export default MovieInfo
