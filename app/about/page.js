import Navbar from "../components/page";
export default function About() {
  return (
    <div className="">
      <Navbar/>
            {/*<h1 className="">About Me</h1>*/}
            <div className="flex flex-col items-end mt-20">
            <p className="text-white w-1/3"> 
                My name is <strong>Youssef Elrhomari</strong>, a Computer Science student passionate 
                about software development and cybersecurity.  
                My goal is to become a cybersecurity expert by combining my skills in 
                programming, networking, and systems to build secure and innovative solutions.
            </p>
            </div>
    </div>
  )
}
