"use client";

import { TbSnowflake } from "react-icons/tb";
import { motion } from "framer-motion";

interface SnowfallProps {
  active: boolean;
}

export default function Snowfall({ active }: SnowfallProps) {
  if (!active || typeof window === "undefined") return null;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const flakes = Array.from({ length: 100 });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flakes.map((_, i) => {
        const size = Math.random() * 10 + 3;
        const left = Math.random() * screenWidth;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -10, rotate: 0, opacity: 0.8 }}
            animate={{ y: [0, screenHeight + 10], rotate: Math.random() * 360 }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
            style={{
              left,
              width: size,
              height: size,
              backgroundColor: "#ffffff",
              borderRadius: "50%",
            }}
          >
            <TbSnowflake style={{ width: size, height: size }} />
          </motion.div>
        );
      })}
    </div>
  );
}
