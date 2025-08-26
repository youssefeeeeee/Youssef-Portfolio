"use client";
import Navbar from "../components/page";
import { useEffect, useRef } from "react";
export default function Projects() {
    const videoref = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if(entry.isIntersecting){
                        video.play();
                    }
                    else{
                        video.pause();
                    }
                });
            },
            {threshold: 0.5}
        );
        videoref.current.forEach((video) =>{
            if(video){
                observer.observe(video);
            }
        })
        return () => {
           videoref.current.forEach((video) =>{
            if(video){
                observer.unobserve(video);
            }
        })
        };
    },[]);

    return (
        <div className="overflow-hidden">
            <Navbar/>
            <div className="absolute text-gray-800 h-[500px] overflow-y-auto overflow-x-hidden  translate-x-200 -translate-y-80 max-w-180 " > {/*scroll box*/}
                <div className=" mt-3 ">
                <h2 className="text-3xl font-bold ">Mini-Game “Super voiture 2D” – C++ & SFML </h2>
                    <p className="mt-2 text-gray-700">
                        <span className="font-bold ">Purpose:</span> Build a 2D racing game as part of my learning in graphics programming.
                    </p>
                    <p className="mt-1 text-gray-700">
                        <span className="font-bold">Tools:</span> C++, SFML, Visual Studio Code.
                    </p>
                    <p className="mt-1 text-gray-700">
                        <span className="font-bold">What I Learned:</span> Implementing collision detection, handling keyboard input,
                         and creating a scoring system. Improved my knowledge of event-driven programming.
                    </p>
                <video src="/demovoi.mp4" muted playsInline className=" rounded-sm  w-100 h-50" ref={ (el) => {videoref.current[0] = el}}></video>
                <a href="https://github.com/youssefeeeeee/Super-voiture-2D" className="bg-blue-950 text-white rounded-md block w-30 p-1 text-center mt-2">GitHub</a>
                </div>



                <div className="mt-3">
                    <h2 className="text-3xl font-bold ">Relational Database Project – SQL & MySQL </h2>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Purpose:</span> Design and implement a relational database for a mock e-commerce platform.
                    </p>
                    <p className="mt-1 text-gray-700">
                        <span className="font-semibold">Tools:</span> MySQL, SQL, Workbench.
                    </p>
                    <p className="mt-1 text-gray-700">
                        <span className="font-semibold">What I Learned:</span> Writing efficient SQL queries, joins, data reporting,
                        and applying normalization principles. Strengthened my database design skills.
                    </p>
                    <video src="/demoho.mp4" muted playsInline className=" rounded-sm  w-100 h-50" ref={(el) => {videoref.current[1] = el}}></video>
                    <a href="https://github.com/youssefeeeeee/Projet-BDD" className="bg-blue-950 text-white rounded-md w-30 p-1 block mt-2 text-center">GitHub</a>
                </div>
            </div>
        </div>
    );
}