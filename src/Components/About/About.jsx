import React from 'react'
import './About.css'
import profil from '../../assets/profil.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
          <img src={profil} alt="" />
        <div className="about-right">
          <div className="about-para">
            <p>I am a an experienced Front-end developer. I have been into this field for the past 4years now.</p>
            <p>My passion for frontend development doesn't only rely on the money but to grow my skill in all aspect of web development.</p>
          </div>
          <div className="about-skills">
                 <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                 <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                 <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                 <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETETED</p>
        </div>
        
        
      </div>
        
    </div>
  )
}

export default About