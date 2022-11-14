import React from 'react'
import "./review.css"
import AVTR1 from "../../assets/AVTR1.png"
import AVTR2 from "../../assets/AVTR2.png"
import AVTR3 from "../../assets/AVTR3.png"


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import frame-motion
import { motion, Variants } from "framer-motion"


const data = [
  {
    avatar: AVTR1,
    name: "Samuel",
    review: '"Tusind tak DEKRA. Jeg er så glad for mit arbejde for Carlsberg som lastbilchauffør. Tusind tak til jeres JobTeam."'
  },
  {
    avatar: AVTR2,
    name: "Susan Nielsen Hansen",
    review: '"Kan helt klart anbefale DEKRA Vejen. Har taget forvogen og ADR. Jeg kunne ikke komme igennem det uden hjælp fra de mange kompetente undervirsere. 5 store stjerner herfra."'
  },
  {
    avatar: AVTR3,
    name: "Henrik Hansen",
    review: '"Jeg har lige afsluttet et 10 ugers forløb med forvogn og anhænger. Jeg kan kun give topkarakterer til alle medarbejdere i Braband. Super godt sted at være."'
  }
]

const textAnimate = {
    offscreen: {y:100, opacity:0},
    onscreen: {
      y:0, 
      opacity:1, 
      transition: {
        duration: 0.4,
        delay: 0.3
      }},
  }

const Review = () => {
  return (
    <div className='review__container'>
        <motion.section id='testimonials' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.3}} variants={textAnimate}>
                <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) =>{
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                        <div className='client__avatar'>
                            <img src={avatar} alt="Avatar one" />
                        </div>
                        <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                            {review}
                            </small>
                        </SwiperSlide> 
                        )
                    })
                }
                </Swiper>
        </motion.section>
    </div>
  )
}

export default Review