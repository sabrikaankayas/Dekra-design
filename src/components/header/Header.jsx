import React from 'react'
import "./header.css"
import logo from "../../assets/dekra-logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react'

// import frame-motion
import { motion } from "framer-motion"

const textAnimate = {
  offscreen: {y:0, opacity:0},
  onscreen: {
    y:0, 
    opacity:1, 
    transition: {
      duration: 0.4,
      delay: 0.3
    }},
}

const Header = () => {

  const [color, setColor] = useState("")
  const changeColor = () => {
    if (window.scrollY >= 70 && window.scrollY <= 180) {
      setColor("header__color1")
    } else if (window.scrollY >= 180 && window.scrollY <= 300) {
      setColor("header__color2")
    } else if (window.scrollY <= 90) {
      setColor("header__color0")
    } else if (window.scrollY >= 300 && window.scrollY <= 420) {
      setColor("header__color3")
    } else if (window.scrollY >= 420 && window.scrollY <= 540) {
    setColor("header__color4")
    } else if (window.scrollY >= 540) {
      setColor("header__color5")
    }  
  }

  window.addEventListener("scroll", changeColor)

  return (
    <motion.div className={`header__container ${color}`} initial={"offscreen"} animate={"onscreen"}>
         <motion.img className='header__logo' src={logo} alt="dekra logo" variants={textAnimate}/>
         <motion.div className='header__icon' variants={textAnimate}>
          <GiHamburgerMenu/>
         </motion.div>
    </motion.div>
  )
}

export default Header