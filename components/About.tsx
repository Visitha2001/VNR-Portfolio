"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiThreedotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiTensorflow,
  SiJupyter,
  SiFramer,
  SiFastapi,
  SiTypescript,
  SiAppwrite,
  SiPytorch,
  SiCloudinary,
  SiAmazonwebservices,
  SiGooglegemini,
  SiElasticcloud
} from "react-icons/si";
import { DiAws, DiDjango, DiGithub, DiJava, DiLaravel, DiPhp } from "react-icons/di";
import { GrGithub, GrGraphQl } from "react-icons/gr";
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { Zap } from "lucide-react";
import { GiGemini } from "react-icons/gi";

// TechIcon component
const TechIcon = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <div 
    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold shadow-md"
    title={name}
  >
    {icon}
  </div>
);

function AboutSection() {
  const techStack = [
    { icon: <SiReact color="#61DAFB" />, name: "React" },
    { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
    { icon: <Zap color="#F7DF1E" />, name: "Zustand" },
    { icon: <SiThreedotjs color="#03DAC5" />, name: "Three.js" },
    { icon: <TbBrandReactNative color="#F7DF1E" />, name: "React Native" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#326CE5" />, name: "TypeScript" },
    { icon: <FaGolang color="#00758F" />, name: "Go" },
    { icon: <SiNodedotjs color="#8CC84B" />, name: "Node.js" },
    { icon: <SiExpress color="#306998" />, name: "Express.js" },
    { icon: <GrGraphQl color="#F7DF1E" />, name: "GraphQl" },
    { icon: <DiPhp color="#F7DF1E" />, name: "PHP" },
    { icon: <DiLaravel color="orange" />, name: "Laravel" },
    { icon: <SiPython color="yellow" />, name: "Python" },
    { icon: <SiFastapi color="#306998" />, name: "FastAPI" },
    { icon: <DiDjango color="#F7DF1E" />, name: "Django" },
    { icon: <DiJava color="#F8981D" />, name: "Java" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL" },
    { icon: <SiAppwrite color="red" />, name: "Appwrite" },
    { icon: <SiGit color="#F05032" />, name: "Git" },
    { icon: <GrGithub color="white" />, name: "Github" },
    { icon: <SiTensorflow color="#FF6F00" />, name: "TensorFlow" },
    { icon: <SiPytorch color="#FFCA28" />, name: "Pytorch" },
    { icon: <SiJupyter color="#F37626" />, name: "Jupyter" },
    { icon: <SiFramer color="#0055FF" />, name: "Framer Motion" },
    { icon: <SiDocker color="#2496ED" />, name: "Docker" },
    { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes" },
    { icon: <SiGooglecloud color="#4285F4" />, name: "Google Cloud" },
    { icon: <SiGooglegemini color="#4285F4" />, name: "Gemini API" },
    { icon: <VscAzureDevops color="#0055FF" />, name: "DevOps" },
    { icon: <SiAmazonwebservices color="#F37626" />, name: "AWS" },
    { icon: <SiCloudinary color="#F37626" />, name: "Cloudinary" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 sm:px-12 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 scroll-mt-15 h-auto sm:overflow-auto"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 tracking-tight"
        >
            Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed text-center mb-16"
        >
          I'm a passionate full-stack developer who loves building scalable applications and exploring
          cutting-edge technologies. My expertise lies in backend development, frontend development,
          cloud infrastructure, DevOps, and Machine Learning.
        </motion.p>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 lg:hidden" // centers button and hides on large screens
        >
            <a
                href="/Visitha Nirmal Rajapaksha-CV.pdf"
                download
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 shadow-lg transition"
            >
                Download CV
            </a>
        </motion.div>

        {/* Education Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10 text-gray-100"
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }, // sequential animation
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100">School</h3>
            <p className="text-gray-400">Wariyapola Sri Sumangala Vidyalaya / Kandy</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100">Campus</h3>
            <p className="text-gray-400">ICBT Campus</p>
            <p className="text-gray-400">Bsc. Software Engineering</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full text-center"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-100">University</h3>
            <p className="text-gray-400">Cardiff Metropolitan University / UK</p>
            <p className="text-gray-400">Bsc. Software Engineering</p>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10 text-gray-100"
        >
          Tech Stack & Tools
        </motion.h3>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, scale: 0.6, y: 20 }, show: { opacity: 1, scale: 1, y: 0 } }}
              whileHover={{ scale: 1.15, rotate: 2, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="flex flex-col items-center p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm shadow-lg text-gray-300 hover:text-teal-400 transition-colors duration-200 w-full max-w-[100px] group"
            >
              <div className="text-4xl mb-2 group-hover:text-white transition-colors duration-200">
                {tech.icon}
              </div>
              <p className="text-xs font-medium text-center">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
