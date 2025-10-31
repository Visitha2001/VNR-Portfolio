"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface NewYearSectionProps {
  /** Year to display, e.g. 2026 */
  year: number;
  /** ISO date/time string when the section becomes active, e.g. "2026-01-01T00:00:00" */
  date: string;
}

interface Particle {
  x: number;
  y: number;
  angle: number;
  speed: number;
  radius: number;
  color: string;
  life: number;
}

export default function NewYearSection({ year, date }: NewYearSectionProps) {
  const [isNewYear, setIsNewYear] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    if (!isNewYear) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffd24d", "#ff4da6"];
    const particles: any[] = [];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 2);
      for (let i = 0; i < 60; i++) {
        particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 1,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 100,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 0.5;
        p.life -= 2;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      if (Math.random() < 0.05) createFirework();
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isNewYear]);

  if (!isNewYear) return null;

  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center items-center text-center bg-gray-500 overflow-hidden"
      style={{
        backgroundImage: "url('/events/city.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.2 }}
        className="festive-font relative z-30 text-6xl md:text-8xl font-extrabold text-white mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
      >
        Happy New Year {year}!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="festive-font relative z-30 text-gray-200 text-lg md:text-xl"
      >
        Wishing you joy, success, and new adventures in {year}.
      </motion.p>
    </section>
  );
}

/* ----------------- Fireworks Canvas ----------------- */
function Fireworks({ active }: { active: boolean }) {
  useEffect(() => {
    if (!active || typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "20";
    document.body.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const colors = ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffd24d", "#ff4da6"];

    function createFirework() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 2);
      for (let i = 0; i < 60; i++) {
        particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 1,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 100,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 0.5;
        p.life -= 2;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      if (Math.random() < 0.05) createFirework();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, [active]);

  return null;
}

/* ----------------- Confetti ----------------- */
function Confetti() {
  if (typeof window === "undefined") return null;

  const confettiPieces = Array.from({ length: 40 });
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-sm"
          initial={{ x: Math.random() * screenWidth, y: -20, rotate: 0 }}
          animate={{ y: [0, screenHeight + 40], rotate: 360 }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
