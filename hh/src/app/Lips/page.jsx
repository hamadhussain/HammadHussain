'use client'
import NN  from "../Components/Nav/Order/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import  About  from "../Components/Nav/About/page";
import C from "../Components/Nav/Contact/page";
import F from "../Components/Nav/Footer/page";
import S from "../Components/Nav/Skills/page";
import St from "../Components/Nav/Starter/page";
import L from "../Components/Nav/Layout/page";
import { useEffect ,useState } from 'react';

const Page = () => {
    useEffect(() => {
        AOS.init({
          once: true
        });
        AOS.refresh();
      }, []);
    const [Div, setDiv] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setDiv(true);
      }, 6000);
    });
  return (
    <div>
      {Div &&(<L>
  
    <NN/>
    <br /><br /><br /><br />
    <St/>
    <div className="bg-black text-white">
    <br /><br /><br /><br /><br />
    <About/>
    <br /><br /><br /><br />
    <S/>
    <br /><br /><br /><br />
    <C/>
    <br /><br /><br />
    <F/>
    </div>
    {/* <NN/> */}
    </L>)}
    </div>
  )
}

export default Page
