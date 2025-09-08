"use client";
{/*navbar page*/}
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu , X} from "lucide-react";
import Image from "next/image";
import {motion,AnimatePresence} from "framer-motion"
export default function Navbar(){

    const pathname = usePathname();
    const links = [
        {href: "/",label: "Home"},
        {href: "/about",label: "About"},
        {href: "/skills",label: "My Skills"},
        {href: "/Myprojects",label: "My Projects"},
        {href: "/contact",label: "Contact"}
    ];

    const [isopen, setisopen] = useState(false);

    const socials = [
        {href:"https://github.com/youssefeeeeee",label:"Github",img:"/github.png"},
        {href:"https://www.linkedin.com/in/youssef-elrhomari-240a21335/",label:"LinkedIn",img:"/linkedin.png"},
        {href:"mailto:youssefelrho005@gmail.com", label:"Email",img:"/email.png"}
    ];
    return (
        <nav className="text-gray-800 font-bold">
            <div className="m-7 flex justify-between">
            <div>
            <h1 className="text-[25px] md:text-[30px] bg-stone-100 ">El Rhomari Youssef </h1>
            <p className="text-xs">Developer & Designer</p>
            </div>
            {pathname !== "/" && (
            <div className=" md:flex md:gap-x-4">
                {socials.map((social) => (
                    <a key={social.href} href={social.href}><Image src={social.img} height={25} width={25} alt={social.label}></Image></a>
                ))}
            </div>
            )}
            <button className="md:hidden bg-stone-100" onClick={() => setisopen(!isopen)}>
                {isopen ?  <X/>: <Menu/>}
            </button>
            </div>

            <ul className="hidden gap-8 md:flex  md:gap-x-[35px] text-xl md:fixed md:top-15 md:w-371 md:justify-center ">
                {links.map((link) => {
                    const isactive = pathname === link.href;
                    return (
                        <li key={link.href}>
                    {isactive && (
                        <div className="text-2xl text-black font-extrabold underline">{link.label}</div>
                    )}
                    {!isactive && (
                        <Link href={link.href} className="transition-opacity duration-[0.4s] ease-[cubic-bezier(0.1, 0.4, 0.2, 1)] hover:opacity-[0.25]">{link.label}</Link>
                    )}
                    </li>
                    );
                })}
            </ul>
            <div className="md:hidden">
            <AnimatePresence>
            {isopen && (
                <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center gap-6 text-2xl z-40"
                >
                <div className="md:hidden fixed top-0 right-0 w-full h-full z-40 p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold"><Menu/></h2>
                        <button onClick={() => setisopen(false)}><X/></button>
                    </div>
                    <ul>
                        {links.map((link) => (
                            <li key={link.href} className="my-3">
                                <Link href={link.href} onClick={()=> setisopen(false)} >{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-6" />
                    <ul className="flex flex-col gap-4">
                        {socials.map((social) => (
                            <li key={social.href}>
                                <Link href={social.href} onClick={()=> setisopen(false)} className="hover:text-blue-600">{social.label} ↗</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </motion.div>
            )}
            </AnimatePresence>
            </div>
        </nav>
    )
}