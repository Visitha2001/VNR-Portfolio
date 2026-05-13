"use client";

import { TbSnowflake } from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Flake {
  size: number;
  left: number;
  duration: number;
  delay: number;
  rotate: number;
  screenHeight: number;
}

export default function Snowfall() {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const today = new Date();
    const isChristmas = today.getMonth() === 11 && today.getDate() >= 0 && today.getDate() <= 31;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(isChristmas);

    if (!isChristmas) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newFlakes = Array.from({ length: 100 }).map(() => ({
      size: Math.random() * 10 + 3,
      left: Math.random() * screenWidth,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      screenHeight
    }));

    setFlakes(newFlakes);
  }, []);

  if (!active || flakes.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flakes.map((flake, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ y: -10, rotate: 0, opacity: 0.8 }}
          animate={{ y: [0, flake.screenHeight + 10], rotate: flake.rotate }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: "linear",
          }}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            backgroundColor: "#ffffff",
            borderRadius: "50%",
          }}
        >
          <TbSnowflake style={{ width: flake.size, height: flake.size }} />
        </motion.div>
      ))}
    </div>
  );
}
