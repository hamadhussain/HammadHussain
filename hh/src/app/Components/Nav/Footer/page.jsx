import React from 'react'
import { motion } from "framer-motion";
const Page = () => {
  return (
    <>
     <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1 , scale:[1,1.1,1,1.1,1]}}

     className='flex h-80 gap-14 p-28 justify-center footer '>
        {/* <div></div> */}
        <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="900" >
            <b><h1 className='fh text-4xl'>What can i Offer</h1></b><br /><br />
            <b><h3 className=' font-extralight'>you can contact me through my email address or telephone number for any kind of service you want to hire.</h3></b>
            <br />
            <b><h3 className=' font-extralight'>I am an intern full stack web developer and eager to work with potential clients and company and develop my experience in this field</h3></b>

        </div>
        <div className=' -my-0' data-aos="fade-up" data-aos-delay="700" data-aos-duration="900">
            <b><h1 className='fh text-4xl'>Contact Me .....</h1></b><br /><br />
            <b className=' font-extralight'>Email: hammad31012004@gmail.com</b><br />
            <br />
            <b className=' font-extralight'>Phone: +923462351008</b>

        </div>
       <div className=' -my-0' data-aos="fade-left" data-aos-delay="700" data-aos-duration="900">
            <b><h1 className='fh text-4xl '>Socials</h1></b>
            <br />
            <img className=' cursor-pointer rounded-full w-10' src="https://tse4.mm.bing.net/th?id=OIP.Q7V27pjgyelBqH0iwvAUEAD6D6&pid=Api&P=0&h=180" alt="" /><br />
            <img className=' rounded-full w-10 cursor-pointer' src="https://tse2.mm.bing.net/th?id=OIP.IG0EvDJ2o8m2PUPbzmPpNAHaHp&pid=Api&P=0&h=180" alt="" />
            
       </div>

        </motion.div>
    </>
  )
}

export default Page
