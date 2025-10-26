"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const names = [
    { left: "VISITHA", right: "N. RAJAPAKS", color: "text-white", delay: 0 },
    { left: "FULL-STACK", right: "DEVELOPE", color: "text-gray-300", delay: 0.3 },
    { left: "✪ TECH", right: "ENTHUSIAST ✪", color: "text-gray-500", delay: 0.6 },
    { left: "LEARNING &", right: "GROWING", color: "text-gray-700", delay: 0.9 },
  ];

  // Calculate when all text is done animating
  const lastAnimationDelay = names[names.length - 1].delay + 1.8; // 1.8s = motion duration + stagger buffer

  return (
    <section className="relative flex flex-col items-center justify-center h-auto bg-black overflow-hidden leading-[0.85] py-16">
      {/* Text Animation */}
      {names.map((name, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full overflow-hidden"
        >
          {/* Left Half */}
          <motion.span
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: name.delay,
            }}
            className={`text-[9.5vw] font-extrabold tracking-tight ${name.color} whitespace-nowrap`}
          >
            {name.left}&nbsp;
          </motion.span>

          {/* Right Half */}
          <motion.span
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: name.delay + 0.4,
            }}
            className={`text-[9.5vw] font-extrabold tracking-tight ${name.color} whitespace-nowrap`}
          >
            {name.right}
          </motion.span>
        </div>
      ))}

      {/* 👇 Animated Image (comes from bottom after text) */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: lastAnimationDelay,
        }}
        className="absolute bottom-0 flex justify-center w-full"
      >
        <Image
          src="/no-bg-me.png"
          alt="Visitha Nirmal"
          width={1280}
          height={720}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
