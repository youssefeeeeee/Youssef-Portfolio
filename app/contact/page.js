import Navbar from "../components/page";
export default function Contact(){
    return (
        <div>
            <Navbar/>
            <div className="text-gray-800 absolute translate-x-130 -translate-y-50" >
                <form className="flex flex-col">
                    <label className="m-1 font-bold text-2xl">Name : </label>
                    <input type="text" className="bg-black text-white rounded-md w-100 h-10 " placeholder="Enter your name"/>
                    <label className="font-bold m-1 text-2xl">Email : </label>
                    <input type="email"  className="bg-black text-white rounded-md w-100 h-10" placeholder="Enter your email"/>
                    <label className="font-bold text-2xl" >Message : </label>
                    <textarea placeholder="Enter your message"  className="bg-black text-white rounded-md w-100 " rows={5}></textarea>
                </form>
            </div>
        </div>
    )
}
