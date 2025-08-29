"use client";

import { createContext, useContext, useEffect, useState } from "react";

const splashcontext = createContext({splashseen: false});

export function  SplashProvider({ children }){
    const [splashseen, setsplashseen] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(() => {
            setsplashseen(true);
        }, 2500);
    },[]);
    return(
        <splashcontext.Provider value={{splashseen}}>
            {children}
        </splashcontext.Provider>
    );
}

export function usesplash(){
    return useContext(splashcontext);
}