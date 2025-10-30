"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { techStack } from "@/app/consts/tech";

export default function TechStack() {
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
    <section className="mt-16">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10 text-gray-100"
      >
        Tech Stack & Tools
      </motion.h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={showAllTech ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
            {visibleTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.15, rotate: 2, y: -5 }}
                className="flex flex-col items-center p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm shadow-lg text-gray-300 hover:text-teal-400 transition-colors duration-200 w-full max-w-[100px] group"
              >
                <div className="text-4xl mb-2 group-hover:text-white transition-colors duration-200">
                  {tech.icon}
                </div>
                <p className="text-xs font-medium text-center">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* See More Button (mobile only) */}
      {isMobile && (
        <div className="flex items-center justify-center mt-12 gap-4">
          <div className="flex-1 h-px bg-white opacity-50"></div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllTech(!showAllTech)}
            className="border-2 border-blue-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-black shadow-lg transition"
          >
            {showAllTech ? "Show Less" : "See More"}
          </motion.button>
          <div className="flex-1 h-px bg-white opacity-50"></div>
        </div>
      )}
    </section>
  );
}
