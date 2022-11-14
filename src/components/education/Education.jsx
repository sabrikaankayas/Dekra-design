import React from 'react'
import "./education.css"
import Form1 from "../form/Form1"

import truckPic from "../../assets/Dekra-truck.jpg" 

import { useState } from 'react'


// import frame-motion
import { motion, Variants } from "framer-motion"


const textAnimate = {
    offscreen: {y:40, opacity:0},
    onscreen: {
      y:0, 
      opacity:1, 
      transition: {
        duration: 0.7
      }},
  }
  const buttonAnimate = {
    offscreen: {y:40, opacity:0},
    onscreen: {
      y:0, 
      opacity:1, 
      transition: {
        duration: 1.5
      }},
  }


const Education = () => {

  const[openModal, setOpenModal] = useState(false)

  const modal = () => {
    setOpenModal(true)

    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  }

  return (
    <>
        <div className='education__transparent'>

        </div>
        <motion.div className='education__container'>
            <div className="education__textDiv">
            <h2>Bliv uddannet</h2>
            <h1>lastbilchauffør</h1>
            <h2>på <span className='boldText'> KUN </span> 30 dage </h2>
            </div>
            <motion.div className='education__priceBox container' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.3}} variants={textAnimate}>
            <h1>KUN 3.840,-</h1>
            <div className='education__price'>
                <h3>Normalt kr. 36.753,98</h3>
            </div>
            <p>En gennemsnits månedsløn er kr. 33.736,64.</p>
            <p>Tjen helt op til kr. 50.000,- pr. måned.</p>
            </motion.div>
            <motion.div className="education__textDiv2" initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.3}} variants={textAnimate}>
                <h2>Interesseret i</h2>
                <h1>uddannelsen?</h1>
            </motion.div>
            <motion.div className='education__dekraTruck container' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.4}} variants={textAnimate}>
            <img src={truckPic} alt="dekra-lastbiller" />
            </motion.div>
            <motion.div className='education__textDiv3' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.1}} variants={textAnimate}>
            <p>Besvar 7 hurtige spørgsmål, så ringer en af vores uddannelseskonsulenter dig op til en fuldstændig uforpligtende samtale, hvor vi finder ud af om uddannelsen er noget for dig.</p>
            </motion.div>
            <motion.div className='education__train' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.5}} variants={buttonAnimate}>
            <button className='education__button' onClick={modal}>Jeg vil gerne høre mere <br/> om uddannelsen</button>
            </motion.div>
        </motion.div>
        {openModal && <Form1 closeModal={setOpenModal}/>}
    </>
  )
}

export default Education