'use client'
import React from 'react'
import '../../../globals.css'
// import {dp} from "../Order/dp.png";
import { motion } from "framer-motion";
import { useState ,useEffect } from 'react';

const page = () => {
  const [Let, setLet] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLet(false);
    }, 3000);
  });  return (
    <>
    <div className='flex nn justify-center bg-slate-50 ll'>
        
        <div className='  mx-2.5 '>
          <p data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100">Hello, I'm</p>
          <h1 className='h1'><b className=' text-9xl h text-purple-600'>H</b><b className='hh text-7xl gradient-text' data-aos="fade-down" data-aos-duration="1800" data-aos-delay="400"
          >ammad</b><b className='text-3xl hy gradient-text' data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"> Hussain </b></h1>
          <motion.b
          initial={{opacity:0}}
          animate={{
            opacity:1
          }}
          transition={{delay:0.9 ,duration:5}}
          
          className="p sd text-center px-40">
          As a Senior <b className=' text-purple-800 shadow-white'> Full-Stack Developer </b>, I excel in the MERN stack and possess expertise in NextJS, Node.js, and other web technologies. I am dedicated to crafting cutting-edge web solutions that seamlessly merge backend functionality with visually striking frontend designs.


          </motion.b>
        </div>

     <div className="ims flex">
        < motion.div animate={{ x: [0, 100, 0] }} className="imgSt z-30   "></motion.div>

        {  Let &&    (<motion.div animate={{ x: [0, 100, 0] }}  className="imgStp xc   "></motion.div>)
        }  
        </div>    
    </div>
    </>
  )
}

export default page
