import Navbar from "../components/page";
export default function MyHandi() {
    return (
        <div className="  ">
            <Navbar/>
            <div className="mt-20 flex flex-col items-end ">
                <ul className="text-white list-disc " >
                    <li>Web development and creating personal projects</li>
                    <li>Learning new techniques in cybersecurity</li>
                    <li>Reading books on computer science and new technologies</li>
                    <li>Sports & fitness to maintain a healthy balance</li>
                    <li>Video games as a way to relax and boost creativity</li>
                </ul>
            </div>
        </div>
    );
}