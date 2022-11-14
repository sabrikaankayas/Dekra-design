import React from 'react'
import "./Hero.css"
import { useState } from 'react'

// import frame-motion
import { motion } from "framer-motion"

const textAnimate = {
    offscreen: {y:40, opacity:0},
    onscreen: {
      y:0, 
      opacity:1, 
      transition: {
        duration: 0.7,
        delay: 0.7
      }},
  }

const Hero = () => {

  const [color, setColor] = useState("")
  const changeColor = () => {
    if (window.scrollY >= 270 && window.scrollY <= 380) {
      setColor("hero__color1")
    } else if (window.scrollY >= 380 && window.scrollY <= 500) {
      setColor("hero__color2")
    } else if (window.scrollY <= 270) {
      setColor("hero__color0")
    } else if (window.scrollY >= 500 && window.scrollY <= 620) {
      setColor("hero__color3")
    } else if (window.scrollY >= 620 && window.scrollY <= 700) {
    setColor("hero__color4")
    } else if (window.scrollY >= 700) {
      setColor("hero__color5")
    } 
  }

  window.addEventListener("scroll", changeColor)

  return (
    <motion.div className={`hero__container ${color}`} initial={"offscreen"} animate={"onscreen"}>
      <motion.div className="hero__textDiv" variants={textAnimate} >
          <h2>Er du</h2>
          <h1>jobsøgende</h1>
          <h3>eller ønsker du </h3>
          <h2>at skifte  <span className='bold'> branche?</span></h2>
        </motion.div>
        <motion.div className='hero__video container2' variants={textAnimate}>
          <video controls width="100%">
            <source src="https://www.dekra.dk/media/7665/brand-video-lastbil-1.mp4" type="video/mp4" />
          </video>
        </motion.div>
    </motion.div>
  )
}

export default Hero