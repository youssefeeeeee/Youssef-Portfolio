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
            <div className="text-gray-800 flex justify-between ">
                <div className="ml-10 mt-3">
                <h2 className="text-2xl font-bold ">Mini-Game “Super voiture 2D” – C++ & SFML </h2>
                <p> Developed a 2D car game using SFML library. </p>
                <p> Implemented collision logic, scoring system, and obstacle generation. </p>
                <video src="/demovoi.mp4" muted playsInline className=" rounded-sm  w-100 h-50" ref={ (el) => {videoref.current[0] = el}}></video>
                <a href="https://github.com/youssefeeeeee/Super-voiture-2D" className="bg-blue-950 text-white rounded-md block w-30 p-1 text-center mt-2">GitHub</a>
                </div>
                <div className="mt-3">
                <h2 className="text-2xl font-bold ">Relational Database Project – SQL & MySQL </h2>
                <p>Designed and implemented a relational database for a mock e-commerce store.</p>
                <p> Created SQL queries for data management, reporting, and joins. </p>
                <video src="/demoho.mp4" muted playsInline className=" rounded-sm  w-100 h-50" ref={(el) => {videoref.current[1] = el}}></video>
                <a href="https://github.com/youssefeeeeee/Projet-BDD" className="bg-blue-950 text-white rounded-md w-30 p-1 block mt-2 text-center">GitHub</a>
                </div>
            </div>
        </div>
    );
}