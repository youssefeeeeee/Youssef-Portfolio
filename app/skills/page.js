"use client";
import { motion } from "framer-motion";
import Navbar from "../components/page";
import { useSplash } from "../context/splashcontext";
const skills = [
  { name: "HTML", img: "/html.png", level: "Advanced" },
  { name: "CSS", img: "/css-3.png", level: "Advanced" },
  { name: "JavaScript", img: "/js.png", level: "Intermediate" },
  { name: "ReactJS", img: "/react.png", level: "Intermediate" },
  { name: "NextJS", img: "/nextjs.png", level: "Beginner" },
  { name: "Python", img: "/python.png", level: "Advanced" },
  { name: "C++", img: "/c-.png", level: "Advanced" },
  { name: "Linux", img: "/linux.png", level: "Advanced" },
  { name: "Networking", img: "/computer.png", level: "Intermediate" },
  { name: "SQL/MySQL", img: "/database.png", level: "Intermediate" },
];


export default function MyHandi() {
    const {splashseen } = useSplash();
  return (
    <div>
       <Navbar/>
    <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut"}}
                    >
            <h2 className="text-4xl font-bold text-center mb-4 underline">My Skills</h2>
        </motion.div>
       <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5,delay:1, ease: "easeOut"}}
                    >
            <p className="text-center text-gray-600 mb-10">
                Technologies, tools & languages I work with.
            </p>
        </motion.div>
        <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut" , delay: 0.1}}
                    >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 ">
                {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.3 }}
                    className="relative flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 cursor-pointer transition duration-300"
                >
                    {/* Image */}
                    <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-3" />

                    {/* Skill name */}
                    <p className="font-semibold">{skill.name}</p>

                    {/* Hidden Level (shows on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold opacity-0 hover:opacity-100 rounded-xl transition duration-300">
                    {skill.level}
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
    </div>
  );
}




{/*"use client";
import Navbar from "../components/page";

import {motion} from "framer-motion";

export default function MyHandi() {
    
    return (
        <div>
            
                <div className="  text-black max-w-300 m-auto mt-10 md:mt-5">
                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut"}}
                    >
                    <h2 className="text-center text-4xl md:text-6xl font-extrabold bg-stone-100 m-auto mb-4 underline">My Skills</h2>
                    <p className="text-center font-bold bg-stone-100 mb-4"> Technologies, tools & languages I work with.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-3">

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut" , delay: 0.1}}
                    > 
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/c-.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="c++"/>
                        <h3 className="font-extrabold text-xl ">C++</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.2 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/python.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="c++"/>
                        <h3 className="font-extrabold text-xl">Python</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.3 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/database.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="sql" />
                        <h3 className="font-extrabold text-xl">SQL / MySQL</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut" , delay: 0.4 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/linux.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="linux"/>
                        <h3 className="font-extrabold text-xl">Linux (Ubuntu, Kali)</h3>
                    </div>
                    </motion.div>


                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.5 }}>
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/computer.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="networking"/>
                        <h3 className="font-extrabold text-xl ">Networking</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.6 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/html.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="html"/>
                        <h3 className="font-extrabold text-xl">HTML</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.7 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/css-3.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="CSS"/>
                        <h3 className="font-extrabold text-xl">CSS</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.8 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/js.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="js"/>
                        <h3 className="font-extrabold text-xl">JavaScript</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" ,delay: 0.9 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                         <Image src="/react.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="js"/>
                        <h3 className="font-extrabold text-xl">REACTJS</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 1 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                         <Image src="/nextjs.png" height={100} width={100} className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]" alt="js"/>
                        <h3 className="font-extrabold text-xl">NEXTJS</h3>
                    </div>
                    </motion.div>
                    </div>
                </div>
        </div>
    );
}*/}