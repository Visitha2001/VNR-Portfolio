"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbFlower } from "react-icons/tb";

interface AluthAvuruduProps {
  date: string; // ISO date string for when to show
}

export default function AluthAvurudu({ date }: AluthAvuruduProps) {
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const target = new Date(date);
    const updateActive = () => {
      const now = new Date();
      const isSameDay =
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate();
      setIsNewYear(isSameDay);
    };

    updateActive();
    const timer = setInterval(updateActive, 60_000);
    return () => clearInterval(timer);
  }, [date]);

  if (!isNewYear) return null;

  return (
    <section
        className="relative h-[90vh] w-full overflow-hidden bg-yellow-100"
        style={{
            backgroundImage: "url('/events/awrudu.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/40 via-yellow-200/20 to-orange-400/60" />

        {/* Confetti and flowers */}
        <Particles />

        {/* Text at the top */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-30 text-center">
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1.2 }}
                className="text-5xl md:text-7xl font-bold text-red-700 drop-shadow-lg abhaya-font"
            >
                සුබ අලුත් අවුරුද්දක් වේවා!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-orange-800 mt-4 abhaya-font"
            >
                ඔබ සැමට සතුට, සෞභාග්‍ය පිරි සුභම සුභ අලුත් අව්රුද්දක් වේවා!
            </motion.p>
        </div>
    </section>
  );
}

/* ----------------- Particles: Confetti + Flowers ----------------- */
interface ParticleItem {
  isFlower: boolean;
  size: number;
  color: string;
  duration: number;
  delay: number;
  left: number;
  initialX: number;
  screenHeight: number;
}

function Particles() {
  const [particles, setParticles] = useState<ParticleItem[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Colors for flowers and confetti
    const flowerColors = ["#FF7F50", "#FFD700", "#FF4500"]; // orange, yellow, red
    const confettiColors = ["#FFEB3B", "#FF9800", "#F44336"]; // lighter confetti

    const newParticles = Array.from({ length: 50 }).map(() => {
      const isFlower = Math.random() > 0.5; // 50% chance flower vs confetti
      const size = isFlower ? Math.random() * 50 + 15 : Math.random() * 5 + 3; // Increased flower size for visibility
      const color = isFlower
        ? flowerColors[Math.floor(Math.random() * flowerColors.length)]
        : confettiColors[Math.floor(Math.random() * confettiColors.length)];
        
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 3;
      const left = Math.random() * screenWidth;
      const initialX = Math.random() * screenWidth;

      return {
        isFlower,
        size,
        color,
        duration,
        delay,
        left,
        initialX,
        screenHeight
      };
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: p.initialX, y: -20, rotate: 0 }}
          animate={{ y: [0, p.screenHeight + 40], rotate: p.isFlower ? 360 : 0 }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear", // Changed ease to 'linear' for natural falling
          }}
          style={{
            // Set initial X and Y positions within the bounds
            left: p.left, 
            top: -20,
          }}
        >
          {p.isFlower ? (
            // RENDER FLOWER ICON
            <TbFlower 
              style={{ color: p.color, width: p.size, height: p.size }}
              className="opacity-75" // Added some opacity for a softer look
            />
          ) : (
            // RENDER CONFETTI DOT
            <div 
              className="rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
