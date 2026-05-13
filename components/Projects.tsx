"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/app/consts/projects";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-200"
    >
      <div className="container mx-auto px-6 sm:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 tracking-tight"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group"
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-0 group-hover:opacity-100 transition duration-300 blur-[1px] z-0" />

              {/* Inner Dark Container */}
              <div className="relative z-10 bg-gray-900 rounded-[10px] flex flex-col h-full">
                <div 
                  className="overflow-hidden rounded-lg mb-4 cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={500}
                    className="object-cover w-full h-50 rounded-lg transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-teal-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex ${
                      project.urls && project.urls.length > 1
                        ? "justify-between"
                        : "justify-center"
                    } gap-3`}
                  >
                    {!project.urls || project.urls.length === 0 ? (
                      <div className="flex-1 text-center text-sm font-semibold text-gray-400 border border-gray-600 rounded-lg py-2 bg-gray-800/50 cursor-not-allowed select-none">
                        Private Project
                      </div>
                    ) : (
                      project.urls.map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 text-center text-sm font-semibold text-white border border-blue-500 rounded-lg py-2 transition-all duration-300 hover:bg-blue-500 hover:text-black"
                        >
                          {link.name}
                        </motion.a>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {projects.length > 6 && (
          <div className="flex items-center justify-center mt-12 gap-4">
            {/* Left Line */}
            <div className="flex-1 h-px bg-white opacity-50"></div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="border-2 border-blue-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-black shadow-lg transition"
            >
              {showAll ? "Show Less Projects" : "See More Projects"}
            </motion.button>

            {/* Right Line */}
            <div className="flex-1 h-px bg-white opacity-50"></div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project Modal"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-900 text-white rounded-full p-2 backdrop-blur-sm transition-all"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
