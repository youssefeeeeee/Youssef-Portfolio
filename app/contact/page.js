"use client";
import Navbar from "../components/page";
import { motion } from "framer-motion";
import { useSplash } from "../context/splashcontext";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const { splashseen } = useSplash();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tni19f",     // replace with EmailJS Service ID
        "template_56goul5",    // replace with EmailJS Template ID
        e.target,
        "7-13cwxsLHFVMluHa"      // replace with EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
        },
        (error) => {
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="md:-translate-y-20 translate-y-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={splashseen ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-2xl md:text-5xl text-center font-extrabold underline mb-5">
            Get in Touch
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={splashseen ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="flex justify-center p-2">
            <form
              onSubmit={sendEmail}
              className="md:w-full md:max-w-md max-w-screen p-6 rounded-xl shadow-lg bg-[#161B22]"
            >
              <label className="font-bold block text-[#E6E6E6] mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 mb-4 rounded-lg bg-[#0D1117] text-[#E6E6E6] border border-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                placeholder="Enter your name"
                required
              />

              <label className="block text-[#E6E6E6] mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 mb-4 rounded-lg bg-[#0D1117] text-[#E6E6E6] border border-[#00FF99] focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                placeholder="Enter your email"
                required
              />

              <label className="block text-[#E6E6E6] mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="w-full p-3 mb-6 rounded-lg bg-[#0D1117] text-[#E6E6E6] border border-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
                rows={4}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#00FF99] text-[#0D1117] font-semibold hover:bg-[#00BFFF] transition duration-300"
              >
                Send Message
              </button>

              {status && <p className="mt-3 text-center text-white">{status}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
