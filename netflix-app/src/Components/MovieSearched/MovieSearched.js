import React from 'react'
import './MovieSearched.css'

const MovieSearched = (props) => {
  return (
    <div className='cardsearch'>
       <img src={props.Poster}/>
       <div className='searchDetails'>
       <h1 style={{
        margin:"10px"

       }}>{props.title}</h1>
       <p style={{
        margin:"10px"

       }}
       >{props.Plot}</p>
       <h4 style={{
        margin:"10px",
        color: "red"

       }}
       >{props.actors}</h4>

       <h4>
        {props.country}
       </h4>

       <h3
       style={{
        margin:"10px"}}
       >
        BoxOffice :  
        {props.box}
       </h3>
       </div>
    </div>
  )
}

export default MovieSearched
