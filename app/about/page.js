import Navbar from "../components/page";
import Image from "next/image";
export default function About() {
  return (
    <div className="">
      <Navbar/>
            <div className="flex  mt-10 translate-x-100">
            <Image src="/port pic.jpg" width={200} height={200} className="rounded-full " alt="pic"/>
            <div className="m-2">
            <h1 className="text-gray-900 font-extrabold text-2xl mr-50 mb-2">About Me</h1>
            <p className="text-gray-800 font-bold w-1/3"> 
                My name is <strong>Youssef Elrhomari</strong>, a Computer Science student passionate 
                about software development and cybersecurity.  
                My goal is to become a cybersecurity expert by combining my skills in 
                programming, networking, and systems to build secure and innovative solutions.
            </p>
            </div>
            </div>
    </div>
  )
}
