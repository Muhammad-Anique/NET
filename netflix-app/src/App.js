import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from './Components/Movie/Movie';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import MovieSearched from './Components/MovieSearched/MovieSearched';
import MovieInfo from './MovieInfo/MovieInfo';


function App() {

const [Thedata, setData]=useState('\0');
const [BtnPressed, SetPress] =useState(false);
const [movieName, setmovieName] = useState('\0');
const[Smovie, setSmovie]=useState('\0');
const [cc, setcc] =useState(0);

  function MovieNameHandler(event){
    event.preventDefault();
    var Mname = event.target.value;
    Mname = Mname.trim();
    Mname = Mname.replaceAll(" ","-");
    setmovieName(event.target.value);
  }


  function movieSearched() {
    console.log(movieName);
    if(BtnPressed) SetPress(false); else SetPress(true); 
  }


  useEffect(() => {
     fetch(`http://www.omdbapi.com/?apikey=4d717a8e&t=${movieName}`)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setData(data);
        })
  },[BtnPressed]);

  function singleMovieClicked(movie){
    console.log("here");
    console.log(movie);
  setcc(movie);
  console.log(`cc = ${cc}`)
  console.log("hereclose");
  }


  useEffect(()=>{
      console.log("hehehehheh")
      fetch(`https://api.themoviedb.org/3/movie/${cc}?api_key=7d6e8ac75536860372f800cbd2a03b13&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
              console.log("st");
               console.log(data);
               console.log("ed");
              //  setSingleMovie(data);
               setSmovie(data);
              //  props.SM(data);
            })
    
    
    },[cc]);

  return (
    <div className="App">
    <Navbar about="About US" contact="Contact US" home="Home" search={movieSearched} MovieNameHandler={MovieNameHandler}/>
    <Routes>
      <Route path="/" element={<Home SM={singleMovieClicked}/>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="moviesearched" element={<MovieSearched title={Thedata.Title} Poster={Thedata.Poster} Plot={Thedata.Plot} actors={Thedata.Actors} country={Thedata.country} box={Thedata.BoxOffice}/>} />
      <Route path="movieinfo" element={<MovieInfo title={Smovie.title} img={Smovie.backdrop_path} overview={Smovie.overview} run={Smovie.runtime} pop={Smovie.popularity} />}/>
    </Routes>
  </div>
  );

  }

export default App;
