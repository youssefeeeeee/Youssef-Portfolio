"use client";
import Navbar from "../components/page";
import Image from "next/image";
import {motion} from "framer-motion";
import { usesplash } from "../context/splashcontext";
export default function MyHandi() {
    const {splashseen } = usesplash();
    return (
        <div>
            <Navbar/>
                <div className="  text-black max-w-300 m-auto">
                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut"}}
                    >
                    <h2 className="text-center text-6xl font-extrabold bg-stone-100 m-auto mb-4 underline">My Skills</h2>
                    <p className="text-center font-bold bg-stone-100 mb-4"> Technologies, tools & languages I work with.</p>
                    </motion.div>
                    <div className="grid grid-cols-5 gap-5">

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut" , delay: 0.1}}
                    > 
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/c-.png" height={100} width={100} alt="c++"/>
                        <h3 className="font-extrabold text-xl ">C++</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.2 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/python.png" height={100} width={100} alt="c++"/>
                        <h3 className="font-extrabold text-xl">Python</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.3 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/database.png" height={100} width={100} alt="sql" />
                        <h3 className="font-extrabold text-xl">SQL / MySQL</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut" , delay: 0.4 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/linux.png" height={100} width={100} alt="linux"/>
                        <h3 className="font-extrabold text-xl">Linux (Ubuntu, Kali)</h3>
                    </div>
                    </motion.div>


                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.5, ease: "easeOut", delay: 0.5 }}>
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/computer.png" height={100} width={100} alt="networking"/>
                        <h3 className="font-extrabold text-xl ">Networking</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.6 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/html.png" height={100} width={100} alt="html"/>
                        <h3 className="font-extrabold text-xl">HTML</h3>
                    </div>
                    </motion.div>


                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.7 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/css-3.png" height={100} width={100} alt="CSS"/>
                        <h3 className="font-extrabold text-xl">CSS</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 0.8 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                        <Image src="/js.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">JavaScript</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" ,delay: 0.9 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                         <Image src="/react.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">REACTJS</h3>
                    </div>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:50}}
                    animate={splashseen ? {opacity:1, y:0} : {}}
                    transition={{duration:0.6, ease: "easeOut" , delay: 1 }}
                    >
                    <div className="flex flex-col items-center bg-stone-100">
                         <Image src="/nextjs.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">NEXTJS</h3>
                    </div>
                    </motion.div>
                    </div>
                </div>
        </div>
    );
}