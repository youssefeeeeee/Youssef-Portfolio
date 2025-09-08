"use client";
import Navbar from "../components/page";
import { useState, useEffect } from "react";
import { useSplash } from "../context/splashcontext";
import {motion} from "framer-motion";

export default function About() {
  const badges = [
    "CS Student",
    "Passionate about Cybersecurity",
    "Linux & Open-Source Enthusiast",
    "Aspiring Cybersecurity Engineer",
    "Self-Motivated Learner"
  ];
  const [index, setindex] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
        setindex((prevind) => (prevind + 1) % badges.length);
  }, 2500);
      return () => clearInterval(interval);
  },[badges.length]);
 const {splashseen} = useSplash();
  return (
    <div >
      <Navbar/>
            <div className="w-full m-auto mt-5 md:mt-10">
              <div className="md:w-150 md:m-auto ">
                  <motion.div  
                    initial={{ opacity: 0, y: 50 }}
                    animate={ splashseen ? { opacity: 1, y: 0 } : {}}        
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                       <h1 className="text-center text-2xl md:text-5xl my-5 font-extrabold bg-stone-100 underline">Who Am I</h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                     animate={ splashseen ? { opacity: 1, x: 0 } : {}}           
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                <p className="text-center text-[13px] md:text-xl font-bold bg-stone-100 my-5"> 
                    My name is <strong >Youssef Elrhomari</strong>, a Computer Science student passionate 
                    about software development and cybersecurity.  
                    My goal is to become a cybersecurity expert by combining my skills in 
                    programming, networking, and systems to build secure and innovative solutions.
                    Outside of coding, I focus on self-improvement, fitness, and lifelong learning, which I believe help me stay disciplined and creative.
                </p>
                </motion.div>
              </div>
              <motion.div
              initial = {{ opacity: 0,transform: "translateX(-100px)" }}
              animate={ splashseen ? { opacity: 1,transform: "translateX(0px)" } : {}}
              transition={{ type: "spring" }}
              >
              <div className="flex justify-center items-center h-90 md:h-40 overflow-hidden">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6">
                  {badges.map((badge,i) => {
                    let position = (i - index + badges.length) % badges.length;
                    let baseclass =  "min-w-[200px] px-4 py-2 text-center whitespace-nowrap rounded-md transition-all duration-700 ease-in-out";
                    if (position === 0){
                      return (
                         <div
                            key={i}
                            className={`${baseclass} bg-gradient-to-r from-gray-100 to-gray-200 text-black text-xl scale-100 md:scale-125 blur-0 shadow-lg`}
                          >
                            {badge}
                          </div>
                      );
                    }else if (position === 1 || position === badges.length - 1){
                      return (
                        <div
                           key={i}
                           className={`${baseclass} bg-gradient-to-r from-gray-100 to-gray-200 text-black text-lg scale-90 md:scale-110 blur-sm shadow-md`}
                         >
                           {badge}
                         </div>
                     );
                  }else{
                      return (
                           <div
                              key={i}
                              className={`${baseclass} bg-gradient-to-r from-gray-100 to-gray-200 text-black text-sm scale-70 md:scale-90 blur-md opacity-50`}
                            >
                              {badge}
                            </div>
                   );
                  }
                })};
                </div>

              </div>
              </motion.div>
            </div>
    </div>
  )
}
