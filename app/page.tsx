import Image from "next/image";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
