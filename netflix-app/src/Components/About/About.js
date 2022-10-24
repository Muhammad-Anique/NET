import React from 'react'
import '../About/About.css'
import '../Contact/Contact.css'

const About = () => {
  return (
    <div className='page'>
    <div className='container'>
      <div className='contactdiv'>
        <div className='form'>
        <h2>About US</h2>
        <div className='li'></div>
        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows,
           movies, anime, documentaries, and more on thousands of internet-connected devices.
           You can watch as much as you want, whenever you want without a single commercial – 
           all for one low monthly price. There's always something new to discover and new TV 
           shows and movies are added every week!</p><br/><p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
        </div>
      </div>
      <div className='Infodiv'>

        <h2>Features</h2>
        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">accessibility_new</span></div>
        <h4><b>Unlimited Moives </b></h4>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">info</span></div>
        <h4><b>Full Information for Movies </b></h4>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">sentiment_satisfied</span></div>
        <h4><b>Movies Everywhere & Everytime</b></h4>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">search</span></div>
        <h4><b>Search Any Moie</b></h4>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">attach_money</span></div>
        <h4><b>Box Office of Every Movie</b></h4>
        </div>

        <div className='infoline'>
        <div className='circle'><span className="material-symbols-outlined mg">language</span></div>
        <h4><b>Website : Netflix.com </b></h4>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default About
