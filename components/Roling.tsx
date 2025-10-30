"use client";

import { motion } from "framer-motion";

export default function TiltedLettersRolling({bg}: {bg: string}) {
  const texts = [
    "VISITHA DEV ✪ ",
    "TECH ENTHUSIAST ✪ ",
    "FULL STACK DEVELOPER ✪ ",
    "PROBLEM SOLVER ✪ ",
    "EAGER TO LEARN ✪ ",
  ];

  // Duplicate for seamless looping
  const loopTexts = [...texts, ...texts];

  return (
    <div className={`w-full overflow-hidden bg-black ${bg}`}>
      <motion.div
        className="flex whitespace-nowrap text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: { repeat: Infinity, ease: "linear", duration: 15 },
        }}
      >
        {loopTexts.map((txt, idx) => (
          <span key={idx} className="inline-block">
            {txt.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block ${char === "✪" ? "text-blue-400" : "text-white"} italic`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
