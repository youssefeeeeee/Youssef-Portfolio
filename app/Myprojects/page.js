"use client";
import Navbar from "../components/page";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSplash } from "../context/splashcontext";

export default function Projects() {
  const videoref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            vid.play();
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    const videos = videoref.current;
    videos.forEach((vid) => {
      if (vid) {
        observer.observe(vid);
      }
    });

    return () => {
      videos.forEach((vid) => {
        if (vid) {
          observer.unobserve(vid);
        }
      });
    };
  }, []);

  const { splashseen } = useSplash();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={splashseen ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="max-w-full text-center text-4xl md:text-6xl bg-stone-100 mb-5 font-extrabold underline">
          Projects
        </h1>
      </motion.div>

      <div className="grid grid-row-2 md:grid-cols-2 max-w-300 m-auto bg-stone-100 overflow-y-auto h-120 md:h-[400px] leading-[32px]">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={splashseen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="md:max-w-150 max-w-100">
            <h2 className="md:text-3xl text-xl font-bold ">
              Mini-Game “Super voiture 2D” – C++ & SFML
            </h2>
            <p className="mt-2 text-gray-700">
              <span className="font-bold ">Purpose:</span> Build a 2D racing game as part of my
              learning in graphics programming.
            </p>
            <p className="mt-1 text-gray-700">
              <span className="font-bold">Tools:</span> C++, SFML, Visual Studio Code.
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">What I Learned:</span> Implementing collision detection,
              handling keyboard input, and creating a scoring system. Improved my knowledge of
              event-driven programming.
            </p>
            <video
              src="/demovoi.mp4"
              muted
              playsInline
              className="rounded-sm w-100 h-50"
              ref={(el) => {
                videoref.current[0] = el;
              }}
            ></video>
            <a
              href="https://github.com/youssefeeeeee/Super-voiture-2D"
              className="bg-blue-950 text-white rounded-md block w-30 p-1 text-center mt-2"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={splashseen ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="max-w-150 mt-5 md:mt-0">
            <h2 className="md:text-3xl text-xl font-bold ">
              Relational Database Project – SQL & MySQL
            </h2>
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Purpose:</span> Design and implement a relational
              database for a mock e-commerce platform.
            </p>
            <p className="mt-1 text-gray-700">
              <span className="font-semibold">Tools:</span> MySQL, SQL, Workbench.
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">What I Learned:</span> Writing efficient SQL queries,
              joins, data reporting, and applying normalization principles. Strengthened my database
              design skills.
            </p>
            <video
              src="/demoho.mp4"
              muted
              playsInline
              className="rounded-sm w-100 h-50"
              ref={(el) => {
                videoref.current[1] = el;
              }}
            ></video>
            <a
              href="https://github.com/youssefeeeeee/Projet-BDD"
              className="bg-blue-950 text-white rounded-md w-30 p-1 block mt-2 text-center"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={splashseen ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <div className="max-w-150 mt-5 md:mt-0">
              <h2 className="md:text-3xl text-xl font-bold ">
                Secure Task Management – Full Stack
              </h2>
              
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Purpose:</span> A secure web application for managing user tasks with role-based access control and session protection.
              </p>
              
              <p className="mt-1 text-gray-700">
                <span className="font-semibold">Tools:</span> React.js, Node.js, MongoDB, Bcrypt.
              </p>
              
              <p className="mb-2 text-gray-700">
                <span className="font-semibold">What I Learned:</span> Implementing secure authentication flows using <span className="font-bold text-blue-900">HttpOnly Cookies</span> and <span className="font-bold text-blue-900">Bcrypt</span>. Prevented common XSS vulnerabilities and managed secure API states.
              </p>
              
              <video
                src="/task-manager-demo.mp4" /* REMEMBER: Rename your video file to match this */
                muted
                playsInline
                className="rounded-sm w-100 h-50"
                ref={(el) => {
                  videoref.current[2] = el; /* REMEMBER: Update this index if it conflicts with others */
                }}
              ></video>
              
              <a
                href="https://github.com/youssefeeeeee/Task-Manager-Repo" /* REMEMBER: Put your real link here */
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-950 text-white rounded-md w-30 p-1 block mt-2 text-center hover:bg-blue-800 transition-colors"
              >
                GitHub
              </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
