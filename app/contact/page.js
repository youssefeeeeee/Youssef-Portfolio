import Navbar from "../components/page";
export default function Contact(){
    return (
        <div>
            <Navbar/>
            <div className="text-white mr-10">
                <form className="flex flex-col items-end">
                    <label className="mr-58 mb-1">Name : </label>
                    <input type="text" className="bg-white text-black rounded-md w-70 h-7 " placeholder="Enter your name"/>
                    <label className="mr-59 mb-1 mt-1">Email : </label>
                    <input type="email"  className="bg-white text-black rounded-md w-70 h-7" placeholder="Enter your email"/>
                    <label className="mr-53 mb-1 mt-1" >Message : </label>
                    <textarea placeholder="Enter your message"  className="bg-white text-black rounded-md w-70"></textarea>
                </form>
            </div>
        </div>
    )
}
