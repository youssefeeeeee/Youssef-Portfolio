"use client";

import { useState,useEffect } from "react";

export default function Splashscreen() {
    const [ismounted, setismounted] = useState(true);
    const [isfadingout,setisfadingout] = useState(false);
    useEffect(() => {
        const fadeout = setTimeout(() => {
            setisfadingout(true);
        }, 2000);
        const unmount = setTimeout(() => {
            setismounted(false);
        },2500);
        return () => {
            clearTimeout(fadeout);
            clearTimeout(unmount);
        };
        },[]);
        if (!ismounted) {
            return null;
        }
    return(
        <div className={`z-100 fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isfadingout ?'opacity-0' : 'opacity-100'} `}>
            <h1 className="text-3xl md:text-3xl font-bold text-white animate-fadeIn">
                ElRhomari  Youssef  Portfolio
            </h1>
        </div>
    );
}