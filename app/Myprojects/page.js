
import Navbar from "../components/page";
export default function Projects() {
    return (
        <div className="overflow-hidden">
            <Navbar/>
            <div className="text-white flex justify-between ">
                <div className="ml-10 mt-3">
                <h2 className="text-2xl font-bold ">Mini-Game “Super voiture 2D” – C++ & SFML </h2>
                <p> Developed a 2D car game using SFML library. </p>
                <p> Implemented collision logic, scoring system, and obstacle generation. </p>
                <a href="https://github.com/youssefeeeeee/Super-voiture-2D" className="bg-blue-950 rounded-md block w-30 p-1 text-center mt-2">GitHub</a>
                </div>
                <div className="mt-3">
                <h2 className="text-2xl font-bold ">Relational Database Project – SQL & MySQL </h2>
                <p>Designed and implemented a relational database for a mock e-commerce store.</p>
                <p> Created SQL queries for data management, reporting, and joins. </p>
                <a href="https://github.com/youssefeeeeee/Projet-BDD" className="bg-blue-950 rounded-md w-30 p-1 block mt-2 text-center">GitHub</a>
                </div>
            </div>
        </div>
    );
}