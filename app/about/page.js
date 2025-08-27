import Navbar from "../components/page";
import Image from "next/image";
export default function About() {
  return (
    <div >
      <Navbar/>
            <div className="absolute translate-x-230 -translate-y-60 max-w-400 ">
              {/*<Image src="/port pic.jpg" width={100} height={100} className="rounded-md " alt="pic" />*/}
              <div className="m-2">
                <h1 className="text-gray-900 font-extrabold text-2xl mb-2 max-w-110 text-center bg-stone-100">About Me</h1>
                <h2 className="text-gray-900 font-bold text-xl bg-stone-100 max-w-120">Brief description : </h2>
                <p className="text-gray-800 font-bold w-1/3 bg-stone-100"> 
                    My name is <strong>Youssef Elrhomari</strong>, a Computer Science student passionate 
                    about software development and cybersecurity.  
                    My goal is to become a cybersecurity expert by combining my skills in 
                    programming, networking, and systems to build secure and innovative solutions.
                </p>
              </div>
               <div className="m-2 bg-stone-100 max-w-120" >
                <h2 className="text-gray-900 font-bold text-xl">My Hobbies & Interests : </h2>
                <ul className="text-gray-800 font-bold list-disc ml-10">
                    <li>Web development and creating personal projects</li>
                    <li>Learning new techniques in cybersecurity</li>
                    <li>Reading books on computer science and new technologies</li>
                    <li>Sports & fitness to maintain a healthy balance</li>
                    <li>Video games as a way to relax and boost creativity</li>
                </ul>
              </div>
            </div>
    </div>
  )
}
