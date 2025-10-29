import Image from "next/image";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
