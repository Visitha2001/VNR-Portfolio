"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HalloweenSectionProps {
  date: string; // ISO date when Halloween section should appear
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
}

export default function HalloweenSection({ date }: HalloweenSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHalloween, setIsHalloween] = useState(false);

  useEffect(() => {
    const target = new Date(date);
    const updateActive = () => {
      const now = new Date();
      const isSameDay =
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate();
      setIsHalloween(isSameDay);
    };

    updateActive();
    const timer = setInterval(updateActive, 60_000);
    return () => clearInterval(timer);
  }, [date]);

  useEffect(() => {
    if (!isHalloween) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const colors = ["#ff7518", "#ffdd00", "#ff4500", "#a52a2a"]; // pumpkin/orange tones

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create falling particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 15 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let p of particles) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speed;
        if (p.y > canvas.height) {
          p.y = -p.size;
          p.x = Math.random() * canvas.width;
        }
      }

      // Optional: draw bats
      const batCount = 5;
      for (let i = 0; i < batCount; i++) {
        const batX = Math.sin(Date.now() / 1000 + i) * 100 + (canvas.width / 2);
        const batY = (i * 50 + Date.now() / 20) % canvas.height;
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(batX, batY);
        ctx.lineTo(batX - 20, batY + 10);
        ctx.lineTo(batX - 10, batY + 5);
        ctx.lineTo(batX - 20, batY - 10);
        ctx.closePath();
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isHalloween]);

  if (!isHalloween) return null;

  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/events/halloween-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.2 }}
        className="relative z-30 text-6xl md:text-8xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_0_25px_rgba(0,0,0,0.7)] halloween-font"
      >
        Happy Halloween!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-30 text-gray-200 text-lg md:text-xl"
      >
        Wishing you a spooky and fun-filled night!
      </motion.p>
    </section>
  );
}
