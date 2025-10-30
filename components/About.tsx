"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { educationData } from "@/app/consts/edu";
import { techStack } from "@/app/consts/tech";
import SkillComponent from "./Skill";
import TechStack from "./TechStack";

function AboutSection() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTech = isMobile && !showAllTech ? techStack.slice(0, 12) : techStack;

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500"
        >
          Who I Am
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed text-center mb-16"
        >
          I'm a passionate full-stack developer who loves building scalable applications and exploring
          cutting-edge technologies. My expertise lies in backend development, frontend development,
          cloud infrastructure, DevOps, and Machine Learning.
        </motion.p>

        {/* Download CV (mobile only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 lg:hidden"
        >
          <a
            href="/Visitha Nirmal Rajapaksha-CV.pdf"
            download
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 shadow-lg transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Education Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10 text-gray-100"
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index} // Use a unique ID here if available
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full text-center"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-100">{item.title}</h3>
              {item.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-400">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
        
        <SkillComponent />

        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </section>
  );
}

export default AboutSection;
