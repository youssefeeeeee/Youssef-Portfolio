import Link from "next/link";
import Navbar from "./components/page";
export default function Home() {
  return (
    <div className="text-gray-800 font-bold ">
    <Navbar/>
    <section className="flex flex-col items-end mt-20 ">
      <p className="m-2 max-w-[500px]">HI, I am Youssef, I am learning Next.js and this is my first project and if you want to know more about me click the button.</p>
      <button className="mr-55 mt-1 bg-black text-white rounded-md p-1"><Link href="/about">About Me</Link></button>
      </section>
    </div>
  );
}
