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
        "service_8tni19f", // replace with EmailJS Service ID
        "template_56goul5", // replace with EmailJS Template ID
        e.target,
        "7-13cwxsLHFVMluHa" // replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
        },
        () => {
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={splashseen ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-2xl md:text-4xl text-center font-extrabold underline mb-3">
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
              className="md:w-full md:max-w-md max-w-screen p-6 rounded-xl shadow-lg bg-white"
            >
              <label className="font-bold block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
                required
              />

              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
                required
              />

              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="w-full p-3 mb-6 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={4}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 cursor-pointer rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-3 text-center text-gray-700 font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
