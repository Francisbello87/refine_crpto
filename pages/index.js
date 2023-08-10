import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
// import './GSAPComponent.css'
import { gsap } from "gsap";


export default function Home() {
  const [email, setEmail] = useState("");
  const header = useRef()

  useEffect(() => {
    gsap.fromTo(
      header.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );
  
    gsap.fromTo(
      '.heading',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );

    gsap.fromTo(
      '.paragraph',
      {  opacity: 0 },
      {  opacity: 1, duration: 3 }
    );
    
    gsap.fromTo(
      '.early-access',
      {  opacity: 0 },
      {  opacity: 1,  }
    );

    gsap.fromTo(
      '.button',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1,  }
    );
    
  }, []);
 
  return (
    <Layout>
      <main className=" text-center w-full m-auto ">
        <div className=" flex flex-col  w-full   items-center bg-[#000] rounded-full justify-center  text-white px-4">
          <div className="font-bold text-[15vw] md:text-[7vw] mb-4  ">
            <h1 ref={header} >
              Your crypto.
            </h1>
            <h1 className=" heading">Family style.</h1>
          </div>
          <p className=" md:text-xlhidden paragraph text-sm bg-opacity-25 text-center text-[#484848] whitespace-nowrap">
            Explore Ethereum with the best wallet for iOS. <br />
            Interacting with crypto has never been so simple.
          </p>
          <div className=" bg-black gradient-border-mask self-stretch bg-opacity-20 my-8 text-white  rounded-[3.25rem] w-full max-w-[690px] mx-auto flex items-center justify-between">
            <input
              value={email}
              type="email"
              className=" bg-transparent placeholder:text-white w-full self-stretch z-40  outline-none p-6"
              placeholder=" Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="  rounded-[30px] button  px-1 gradient-border-mask btn  mr-2 ">
              <button className=" bg-white bg-opacity-0 sheen border py-3 text-sm whitespace-nowrap rounded-[30px] md:w-[152px] px-5 h-[58px] md:text-lg">
                Join Waitlist
              </button>
            </div>
          </div>
          <p className="text-white text-base early-access">
            <span className=" text-[#484848]">Want early access?</span> Learn
            how
          </p>
        </div>
      </main>
    </Layout>
  );
}
