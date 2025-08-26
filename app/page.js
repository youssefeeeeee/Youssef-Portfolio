import Link from "next/link";
import Navbar from "./components/page";
export default function Home() {
  return (
    <div className="text-gray-800 font-bold ">
    <Navbar/>
    <section className="flex flex-col items-end mt-20 ">
      <p className="m-2 max-w-[500px]">HI, I am Youssef, I am learning Next.js and this is my first project and if you want to know more about me click the button.</p>
      <button className="mr-55 mt-1 bg-black text-white rounded-md p-1 hover:bg-gray-400"><Link href="/about">About Me</Link></button>
      <a href="/Youssef_Elrhomari_IT_Internship_CV.pdf" download className="bg-blue-950 text-white font-bold -translate-x-100 rounded-md p-3 hover:bg-blue-800">Download CV</a>
      </section>
    </div>
  );
}
