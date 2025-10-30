"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/consts/skill";

export default function SkillComponent() {
  return (
    <section className="mb-16 text-gray-200">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10 text-gray-100"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.03, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="inline-block px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg text-gray-200 font-semibold hover:text-teal-400 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
