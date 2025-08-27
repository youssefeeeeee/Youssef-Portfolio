"use client";
import Link from "next/link";
import Navbar from "./components/page";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="text-gray-800 font-bold ">
    <Navbar/>
    <section className="flex flex-row-reverse translate-y-10 translate-x-50  items-center  justify-between max-w-[900px]">
      <motion.div  
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <Image src="/port pic.jpg" width={300} height={300} className="rounded-full " alt="pic" />
      </motion.div>
      <div className="flex flex-col max-w-[500px]">
      <motion.div  
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <p className="m-2  bg-stone-100 text-2xl">HI, I am Youssef, I am learning Next.js you can download the resume.</p>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="flex items-center gap-2 m-2">
      <Image src="/location-pin.png" width={20} height={20} alt="location " className="mb-3"/>
      <p className="mb-3">Based in Morocco, Marrakech</p>
      </div>
      <a href="/Youssef_Elrhomari_IT_Internship_CV.pdf" download className="bg-blue-950 text-white font-bold max-w-[200px] text-center rounded-md p-3 hover:bg-blue-800 my-4 mx-2">Download CV</a>
      </motion.div>

       <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="flex items-center gap-4 mt-5">
        <a href="https://github.com/youssefeeeeee"><Image src="/github.png" height={25} width={25} alt="github"/></a>
        <a href="https://www.linkedin.com/in/youssef-elrhomari-240a21335/"><Image src="/linkedin.png" height={25} width={25} alt="linkedin"/></a>
        <a href="mailto:youssefelrho005@gmail.com"><Image src="/email.png" height={25} width={25} alt="email"/></a>
      </div>
      </motion.div>
      </div>
      </section>
    </div>
  );
}
