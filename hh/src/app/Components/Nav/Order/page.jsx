'use client'
import React from 'react'
import { motion } from "framer-motion";
// import '../../globals.css';
import '../../../globals.css'
import {dp} from "../Order/dp.png";
// import motion  from "framer-motion";

const page = () => {
  return (
    <>
    <div className=" justify-center  fixed  bg-white  bg-bgPrimary shadow-2xl  z-40 py-8 md:px-20 px-10  w-screen flex items-center gap-96 navp">
        
        {/* <div className="name ">
      <ellipse cx="100" cy="70" rx="85" ry="55" className="bg "  />
        <motion.text initial={{opacity:0}}
        animate={{opacity:1, scale:1.2 }}
        transition={{duration:2,yoyo:22 ,repeat:Infinity}}
        // exit={{scale:1}}
        className=' font-extrabold  font-serif   ' font-size="39" font-family="Fantasy"
        x="22" y="73" fontSize={23} >
            <h1 className='h1h1 spin circle '>
                <span className="n1 ">H</span>
                <span className="n2">a</span>
                <span className="n3">m</span>
                <span className="n4">m</span>
                <span className="n5">a</span>
                <span className="n6">d</span>
            </h1>


        </motion.text>
        </div> */}
      < motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        // transition={{}}

      className="menu cursor-pointer hover:text-fuchsia-600">
        <div className="logo"><b >H<span>A</span>MM<span>A</span>D</b></div>
      </motion.div>
      </div>

    </>
  )
}

export default page
