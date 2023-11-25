// import Image from 'next/image'
'use client'
// import NN  from "./Components/Nav/Order/page";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import  About  from "./Components/Nav/About/page";
// import C from "./Components/Nav/Contact/page";
// import F from "./Components/Nav/Footer/page";
// import S from "./Components/Nav/Skills/page";
// import St from "./Components/Nav/Starter/page";
// import L from "./Components/Nav/Layout/page";
import { useEffect ,useState } from 'react';
import { InfinitySpin } from  'react-loader-spinner'
import Portfolio from './Lips/page'

export default function Home() {
  
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  });
  
  return (
    <>
{Loader && (<div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-bgPrimary" >
<InfinitySpin 
  width='200'
  color="#4fa94d"
/>

</div> )}

<Portfolio/>

    </> 
  )
}
