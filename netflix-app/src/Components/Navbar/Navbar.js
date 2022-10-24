import React from 'react'
import './Navbar.css'
import netflix from '../../Assets/Netflix.png'
import {
  Link
} from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
    <div className='NavigationBar'>
        <div className='Bar'>
            <div>
            <img className='logo' src={netflix} alt="logo" />
            </div>
            <div className='Block'>
              <input 
              name='Movie'
              type="text" 
              placeholder="Movie Name" 
              onChange={props.MovieNameHandler}
              className='searchBar'/>
            <Link to="/moviesearched"><button className='btnnone' onClick={()=>{props.search()}}> <span className="material-symbols-outlined icon">search</span></button></Link> 
            </div>
            <div className='Attributes'>
            
                <Link to="/" className='At'>{props.home}</Link>
                <Link to="/about" className='At'>{props.about}</Link>   
                <Link to="/contact" className='At'>{props.contact}</Link> 
                <span className="material-symbols-outlined icon">menu</span>

            </div>
        </div>
        <div className='line'></div>
    </div>
    </div>
    
  )
}

export default Navbar
