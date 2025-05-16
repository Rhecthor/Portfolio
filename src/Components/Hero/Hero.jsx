import React from 'react'
import './Hero.css'
import profil from '../../assets/profil.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profil} alt="" />
        <h1><span>I'm Miracle Chimechefulam,</span> frontend developer based in Nigeria. </h1>
        <p>I am a front-end developer from Abia state, Nigeria with 5years of experience in this field.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero 