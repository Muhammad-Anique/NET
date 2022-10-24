import React from 'react'
import Movie from '../Movie/Movie';
import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css'
import { Routes, Route, Link } from "react-router-dom";
import MovieSearched from '../MovieSearched/MovieSearched';
import MovieInfo from '../../MovieInfo/MovieInfo';

var MID=0;
const Home = (props) => {

const url =  "https://api.themoviedb.org/3/movie/popular?api_key=7d6e8ac75536860372f800cbd2a03b13&language=en-US&page=1";
const [popular, setPopular] = useState([]);
const [SingleMovie, setSingleMovie] = useState('\0');
const [CardClicked, setCardClicked] = useState(0);


useEffect(() => {
    fetchPopular();
  }, []);

const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  console.log(props.SearchedMovie);


// useEffect(()=>{
//   console.log("hehehehheh")
//   fetch(`https://api.themoviedb.org/3/movie/${MID}?api_key=7d6e8ac75536860372f800cbd2a03b13&language=en-US`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("st");
//            console.log(data);
//            console.log("ed");
//            setSingleMovie(data);
//            props.SM(data);
//         })


// },[CardClicked]);

function handleInput(event){
  console.log(event.currentTarget.id);
  MID = parseInt(event.currentTarget.id);
  console.log(`Movie ID ${MID}`);
  console.log("Card Clicked")
  setCardClicked(1);
  props.SM(MID);
}

  return (
    <div>        
      <main  style={{color:"white"}}>
        <div>
          <h2 style={{color: "white", margin:"30px"}}>Popular Movies of 2022</h2>
        <div className='movieList'> {popular.map(movie => {
        return (<Link to="/movieinfo" ><div className='CardBtn' onClick={handleInput} id={movie.id}><Movie hoverable key={movie.id} movie={movie} overview={movie.overview} /></div></Link>);
      })}</div>
     </div>
      </main>
    </div>
  )
}

export default Home

