import React from 'react'
import logo from "../Contact/svg.png";
import '../../../globals.css'

const page = () => {
  return (
    <div className='flex justify-center cc gap-12  '>
                  
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="900" className="cn text-center">
        <b className=' text-3xl font-serif'>Contact Form</b>
        <div className="form border-2 rounded-3xl  font-mono  " >
          <legend>
            <form   action="" className=' m-10   text-center '>
                <label className=' text-zinc-400 text-lg font-serif' htmlFor="">Name </label><br />
                <input  className='my-2 font-serif text-center rounded-lg formm  p-2' required="required" type="text" name="" id="" placeholder='Enter Name'/><br />
                <label className=' text-zinc-400 text-lg font-serif' htmlFor="">Email </label><br />
                <input type="email" name="" required="required" className='my-2 font-serif formm  p-2 rounded-lg text-center' id=""  placeholder='Enter Email'/><br />
                <label className=' text-zinc-400 text-lg font-serif' htmlFor="">Text </label><br />
                <textarea required="required" className='font-serif rounded-lg my-2 text-center formm p-2' name="" placeholder='Enter Your Text' id="" cols="30" rows="4"></textarea>
                <br />
                <button type="submit" className='bn font-serif text-gray-400'>SUBMIT</button>
                {/* <input type="button" value="Submit" className='bn' /> */}
            </form>
            </legend>
        </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="900" className="imgC  cursor-pointer bg-no-repeat   opacity-80">
            {/* <img   className="imgC  cursor-pointer bg-no-repeat " src='' alt="" /> */}
        </div>
    </div>
  )
}

export default page
