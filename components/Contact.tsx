"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaKaggle, FaLinkedin, FaMedium } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Error sending message.");
    }
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 bg-black text-gray-200">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 tracking-tight"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 w-full mx-auto"
          >
            {/* Top info */}
            <div className="flex items-center bg-gray-900 p-6 rounded-3xl shadow-lg w-full">
              <div className="mr-6">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center text-gray-200">
                <h3 className="text-xl font-bold mb-2">Visitha Nirmal Rajapaksha</h3>
                <p className="text-gray-400"> Pronouns: He/Him</p>
                <p className="text-gray-400"> Location: Kandy, Sri Lanka</p>
                <p className="text-gray-400"> Phone: +94 764 632 042</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 bg-gray-900 p-6 rounded-3xl shadow-lg w-full">
              <h4 className="text-lg font-semibold mb-2">Find me on:</h4>
              <div className="flex flex-col gap-4 sm:flex-col items-start">
                {/* gmail */}
                <span className="flex flex-col sm:flex-row items-start mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <SiGmail className="text-blue-400 mr-2" />
                    <span className="text-white mr-2">Gmail :</span>
                  </div>
                  <a href="mailto:visitha2001@gmail.com" target="_blank" className="text-blue-400 hover:text-blue-500 transition">
                    visitha2001@gmail.com
                  </a>  
                </span>
                <span className="flex flex-col sm:flex-row items-start mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <SiGithub className="text-blue-400 mr-2" />
                    <span className="text-white mr-2">GitHub :</span>
                  </div>
                  <a href="https://github.com/Visitha2001" target="_blank" className="text-blue-400 hover:text-blue-500 transition">
                    https://github.com/Visitha2001
                  </a>
                </span>
                <span className="flex flex-col sm:flex-row items-start mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <FaLinkedin className="text-blue-400 mr-2" />
                    <span className="mr-2">LinkedIn :</span>
                  </div>
                  <a href="https://www.linkedin.com/in/visitha-nirmal-rajapaksha-5809a3300" target="_blank" className="text-blue-400 hover:text-blue-500 transition">
                    https://www.linkedin.com/in/visitha-nirmal-rajapaksha-5809a3300
                  </a>
                </span>
                <span className="flex flex-col sm:flex-row items-start mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <FaMedium className="text-blue-400 mr-2" />
                    <span className="mr-2">Medium :</span>
                  </div>
                  <a href="https://medium.com/@visitha2001" target="_blank" className="text-blue-400 hover:text-blue-500 transition">
                    https://medium.com/@visitha2001
                  </a>
                </span>
                <span className="flex flex-col sm:flex-row items-start mt-2 sm:mt-0">
                  <div className="flex items-center">
                    <FaKaggle className="text-blue-400 mr-2" />
                    <span className="mr-2">Kaggle :</span>
                  </div>
                  <a href="https://www.kaggle.com/visithanrajapaksha" target="_blank" className="text-blue-400 hover:text-blue-500 transition">
                    https://www.kaggle.com/visithanrajapaksha
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 bg-gray-900 p-8 rounded-3xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent!"
                : status === "error"
                ? "Failed to Send"
                : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
