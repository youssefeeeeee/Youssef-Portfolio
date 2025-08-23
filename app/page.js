import Link from "next/link";
import Navbar from "./components/page";
export default function Home() {
  return (
    <div className="text-white">
    <Navbar/>
    <section className="flex flex-col items-end mt-20 ">
      <p className="mr-25">HI, I am Youssef</p>
      <p className="m-2">I am learning Next.js and this is my first project.</p>
      <button className="mr-55 mt-1 bg-white text-black rounded-md p-1"><Link href="/about">About Me</Link></button>
      </section>
    </div>
  );
}
