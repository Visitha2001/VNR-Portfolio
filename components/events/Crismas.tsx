"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbSnowflake } from "react-icons/tb";

interface ChristmasProps {
  date: string; // ISO date string to show the component
}

export default function Christmas({ date }: ChristmasProps) {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const target = new Date(date);
    const updateActive = () => {
      const now = new Date();
      const isSameDay =
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate();
      setIsChristmas(isSameDay);
    };

    updateActive();
    const timer = setInterval(updateActive, 60_000);
    return () => clearInterval(timer);
  }, [date]);

  if (!isChristmas) return null;

  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden bg-blue-900"
      style={{
        backgroundImage: "url('/events/christmas-bg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Snowflakes */}
      <Snowflakes />

      {/* Text at bottom center */}
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-30 text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg christmas-font"
        >
          Merry Christmas!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-white mt-4 christmas-font"
        >
          Wishing you joy, peace, and festive cheer!
        </motion.p>
      </div>
    </section>
  );
}

/* ----------------- Snowflakes Animation ----------------- */
function Snowflakes() {
  if (typeof window === "undefined") return null;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const flakes = Array.from({ length: 60 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flakes.map((_, i) => {
        const size = Math.random() * 50 + 5;
        const left = Math.random() * screenWidth;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -20, rotate: 0 }}
            animate={{ y: [0, screenHeight + 20], rotate: 360 }}
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
              color: "#ffffff",
            }}
          >
            <TbSnowflake style={{ width: size, height: size }} />
          </motion.div>
        );
      })}
    </div>
  );
}
