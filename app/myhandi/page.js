import Navbar from "../components/page";
export default function MyHandi() {
    return (
        <div>
            <Navbar/>
            <div className="mt-10 flex flex-col items-end mr-10">
                <ul className="text-gray-800 font-bold list-disc ">
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