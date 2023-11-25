import React from 'react'
import '../../../globals.css'
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div  className='flex p-7 gap-3 about '
    initial={{scale: 0, opacity: 0, y: "-100%"}}
        whileInView={{ opacity: 1, scale: 1, y: 0}}
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
        >
        <div className="imgA"data-aos="fade-down" data-aos-delay="200" data-aos-duration="900" 
>
            {/* <img 
             data-aos="fade-down" data-aos-delay="200" data-aos-duration="900" 
             className='imgAA w-96 rounded-md' src="" alt="" /> */}
        </div>
        <div  className="A text-center">
            <h1  className=' text-center text-2xl'><b  data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">ABOUT ME</b></h1>
            <br /><hr/><br />
            <b  data-aos="fade-up" data-aos-delay="800" data-aos-duration="900">I am a skilled Full-Stack Web Developer with over 2 years of experience, currently pursuing a Bachelor's degree in Computer Science at Sir Syed University Karachi, Pakistan. Fluent in both English and Urdu, I possess effective communication skills that allow me to articulate technical concepts effortlessly and work seamlessly with diverse teams and clients. My passion for web development and academic pursuits drive me to create innovative solutions that deliver exceptional user experiences.</b>
        </div>
    </motion.div>
  )
}

export default page
