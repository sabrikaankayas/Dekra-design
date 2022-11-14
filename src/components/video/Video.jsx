import React from 'react'
import "./video.css"
import {AiFillStar} from "react-icons/ai"

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import frame-motion
import { motion, Variants } from "framer-motion"

const starAnimate = {
    offscreen: {x:-40, opacity:0},
    onscreen: {
      x:0, 
      opacity:1, 
      transition: {
        duration: 0.3
      }},
  }
  const textAnimate = {
    offscreen: {x:40, opacity:0},
    onscreen: {
      x:0, 
      opacity:1, 
      transition: {
        duration: 0.3
      }},
  }
  const videoAnimate = {
    offscreen: {y:40, opacity:0},
    onscreen: {
      y:0, 
      opacity:1, 
      transition: {
        duration: 1.5
      }},
  }

const data = [
    {
      link: "https://www.dekra.dk/media/7660/ahmad-4-1.mp4",
      review: `'"JEG VIL HELT KLART ANBEFALE ANDRE AT SPRINGE UD I DET"'`,
      name: 'AHMAD'
    },
    {
      link: "https://www.dekra.dk/media/7662/moed-victoria-2.mp4",
      review: `'"JEG SYNES DET ER FEDT AT VÆRE EN KVINDELIG LASTBILCHAUFFØR"'`,
      name: 'VICTORIA'
    },
    {
      link: "https://www.dekra.dk/media/7663/m-2-1.mp4",
      review: `'"JEG DRØMTE OM AT KØRE MED DE HELT STORE BILER"'`,
      name: 'MIHAELA'
    }
  ]

const Video = () => {
  return (
    <div className='video__container'>
        <motion.div className='video__star' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.8}} transition={{staggerChildren:0.3}}>
            <motion.div variants={starAnimate}>
                <AiFillStar/>
            </motion.div>
            <motion.div variants={starAnimate}>
                <AiFillStar/>
            </motion.div>
            <motion.div variants={starAnimate}>
                <AiFillStar/>
            </motion.div>
            <motion.div variants={starAnimate}>
                <AiFillStar/>
            </motion.div>
            <motion.div variants={starAnimate}>
                <AiFillStar/>
            </motion.div>
        </motion.div>
        <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.8}} transition={{staggerChildren:0.4}}>
            <motion.div className='video__text' variants={textAnimate}>
                <h2>HØR HVAD NOGLE AF VORES TIDLIGERE KURSISTER SIGER.</h2>
            </motion.div>
            <motion.div className='video__text2' variants={textAnimate}>
                <h4>De stod for kort tid siden i samme situation som dig, og drømte om en karriere med frihed og massere af muligheder.</h4>
            </motion.div>
        </motion.div>
        <motion.div className='motion__container' initial={"offscreen"} whileInView={"onscreen"} viewport={{once:true, amount:0.3}} variants={videoAnimate}>
            <Swiper className='video__container__testimonials__container'
            // install Swiper modules
            pagination={{
                type: "progressbar",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y ]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}>
            {
            data.map(({link, review, name}, index) => {
                return(
                    <SwiperSlide key={index} className='video__videos'>
                        <video controls width="100%">
                        <source src={link} type="video/mp4" />
                    </video>
                    <div className='video__text3'>
                        <h2>{review}</h2>  
                        <h1>{name}</h1>
                    </div>        
                    </SwiperSlide> 
                )
            })
            }
            </Swiper>
         </motion.div>

    </div>
  )
}

export default Video