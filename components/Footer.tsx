"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { GrGithub, GrMedium } from "react-icons/gr";
import { SiFacebook, SiKaggle, SiMedium } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 sm:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About / Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src="/no-bg2.png" alt="png" width={200} height={200} className="mb-4"/>
          <p className="text-gray-400 text-sm">
            I'm a full-stack developer passionate about building scalable web applications
            and exploring new technologies. I love clean code, minimal design, and innovation.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-teal-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/Visitha Nirmal Rajapaksha-CV.pdf" className="hover:text-teal-400 transition-colors" download>
                Download CV
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: <a href="mailto:your.email@example.com" className="hover:text-teal-400 transition-colors">visitha2001@gmail.com</a></li>
            <li>Phone: <a href="tel:+94123456789" className="hover:text-teal-400 transition-colors">+94 76 4 632 042 | +94 781 262 257</a></li>
            <li>Location: Kandy, Sri Lanka</li>
          </ul>
        </motion.div>

        {/* social media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Social Media</h3>
          {/* icon bubble */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/visitha-nirmal-rajapaksha-5809a3300" className="hover:text-teal-400 transition-colors rounded-full p-2 bg-gray-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/visitha2001" className="hover:text-teal-400 transition-colors rounded-full p-2 bg-gray-700">
              <GrGithub size={24} />
            </a>
            <a href="https://www.facebook.com/share/1WxGYkugpM/" className="hover:text-teal-400 transition-colors rounded-full p-2 bg-gray-700">
              <SiFacebook size={24} />
            </a>
            <a href="https://www.kaggle.com/visithanrajapaksha" className="hover:text-teal-400 transition-colors rounded-full p-2 bg-gray-700">
              <SiKaggle size={24} />
            </a>
            <a href="https://medium.com/@visitha2001" className="hover:text-teal-400 transition-colors rounded-full p-2 bg-gray-700">
              <SiMedium size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Visitha Nirmal Rajapaksha. All rights reserved.
      </div>
    </footer>
  );
}
