"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const names = [
    { left: "VISITHA", right: "N. RAJAPAKS", color: "text-white", delay: 0 },
    { left: "FULL-STACK", right: "DEVELOPE", color: "text-gray-300", delay: 0.3 },
    { left: "✪ TECH", right: "ENTHUSIAST ✪", color: "text-gray-500", delay: 0.6 },
    { left: "LEARNING &", right: "GROWING", color: "text-gray-700", delay: 0.9 },
  ];

  const lastAnimationDelay = names[names.length - 1].delay + 1.8;

  return (
    <>
    <section className="relative flex flex-col items-center justify-center h-auto bg-gray-800 overflow-hidden leading-[0.85] py-25 scroll-mt-0">
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

      {/* Profile Image */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: lastAnimationDelay,
        }}
        className="absolute bottom-0 flex justify-center w-full z-10"
      >
        <Image
          src="/no-bg-me.png"
          alt="Visitha Nirmal"
          width={1280}
          height={720}
          className="object-contain pointer-events-none select-none"
        />
      </motion.div>
    </section>
    <section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: lastAnimationDelay + 0.5,
        }}
        className="hidden md:flex absolute bottom-[20px] justify-center w-full z-20"
      >
        <Link
          href="/Visitha Nirmal Rajapaksha-CV.pdf"
          download
          target="_blank"
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 shadow-lg transition"
        >
          Download CV
        </Link>
      </motion.div>
    </section>
    </>
  );
}
