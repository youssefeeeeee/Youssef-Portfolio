import Navbar from "../components/page";
import Image from "next/image";
export default function MyHandi() {
    return (
        <div>
            <Navbar/>
                <div className=" absolute text-black max-w-300  translate-x-155 -translate-y-20">
                    <h2 className="text-center text-2xl font-bold bg-black text-white w-30 rounded-md m-auto mb-4">My Skills</h2>
                    <div className="grid grid-cols-5 gap-5">
                    <div className="flex flex-col items-center">
                        <Image src="/c-.png" height={100} width={100} alt="c++"/>
                        <h3 className="font-extrabold text-xl">C++</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/python.png" height={100} width={100} alt="c++"/>
                        <h3 className="font-extrabold text-xl">Python</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/database.png" height={100} width={100} alt="sql" />
                        <h3 className="font-extrabold text-xl">SQL / MySQL</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/linux.png" height={100} width={100} alt="linux"/>
                        <h3 className="font-extrabold text-xl">Linux (Ubuntu, Kali)</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src="/computer.png" height={100} width={100} alt="networking"/>
                        <h3 className="font-extrabold text-xl ">Networking</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/html.png" height={100} width={100} alt="html"/>
                        <h3 className="font-extrabold text-xl">HTML</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/css-3.png" height={100} width={100} alt="CSS"/>
                        <h3 className="font-extrabold text-xl">CSS</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/js.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">JavaScript</h3>
                    </div>
                    <div className="flex flex-col items-center">
                         <Image src="/react.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">REACTJS</h3>
                    </div>
                    <div className="flex flex-col items-center">
                         <Image src="/nextjs.png" height={100} width={100} alt="js"/>
                        <h3 className="font-extrabold text-xl">NEXTJS</h3>
                    </div>
                    </div>
                </div>
        </div>
    );
}