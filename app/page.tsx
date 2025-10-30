import Image from "next/image";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";
import RollingTitles from "@/components/Roling";

export default function Home() {
  const bg = "bg-gray-900";
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RollingTitles bg={bg}/>
      <ContactSection />
    </>
  );
}
