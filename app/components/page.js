"use client";
{/*navbar page*/}
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){

    const pathname = usePathname();
    const links = [
        {href: "/",label: "Home"},
        {href: "/about",label: "About"},
        {href: "/skills",label: "My Skills"},
        {href: "/Myprojects",label: "My Projects"},
        {href: "/contact",label: "Contact"}
    ];
    return (
        <nav className="text-gray-800 font-bold">
            <div className="m-7 ">
            <h1 className="text-[30px] ">El Rhomari Youssef </h1>
            <p className="text-xs">Developer & Designer</p>
            </div>
            <ul className=" flex flex-col gap-y-[15px] ml-7 text-2xl mt-20">
                {links.map((link) => {
                    const isactive = pathname === link.href;
                    return (
                        <li key={link.href}>
                    {isactive && (
                        <div className="text-lg opacity-[0.25]">{link.label}</div>
                    )}
                    {!isactive && (
                        <Link href={link.href} className="transition-opacity duration-[0.4s] ease-[cubic-bezier(0.1, 0.4, 0.2, 1)] hover:opacity-[0.25]">{link.label}</Link>
                    )}
                    </li>
                    );
                })}
            </ul>
        </nav>
    )
}