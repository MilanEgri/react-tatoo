import React from 'react'
import './Hero.css'
import img from './hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={img} alt='' />
      <h1>Tatoo Expert</h1>
    </div>
  )
}

export default Hero
   