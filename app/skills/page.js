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
  const { splashseen } = useSplash();

  return (
    <div>
      <Navbar />
      <section className="max-w-6xl mx-auto py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={splashseen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 underline">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={splashseen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        >
          <p className="text-center text-gray-600 mb-10">
            Technologies, tools & languages I work with.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={splashseen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="
              hidden md:grid 
              md:grid-cols-5 gap-8
            "
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="relative flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 cursor-pointer transition duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 mb-3"
                />
                <p className="font-semibold">{skill.name}</p>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold opacity-0 hover:opacity-100 rounded-xl transition duration-300">
                  {skill.level}
                </div>
              </motion.div>
            ))}
          </div>

          
          <div className="grid grid-cols-2 md:hidden gap-4 overflow-y-auto  scrollbar-hide h-110">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="min-w-[120px] flex-shrink-0 flex flex-col items-center bg-white shadow-md rounded-xl p-4"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                />
                <p className="font-semibold">{skill.name}</p>
                <span className="text-sm text-gray-500">{skill.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
