import Image from "next/image";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";
import RollingTitles from "@/components/Roling";
import NewYearSection from "@/components/events/NewYear";
import HalloweenSection from "@/components/events/Haloween";
import AwruduSection from "@/components/events/Awrudu";

export default function Home() {
  const bg = "bg-gray-900";
  const currentYear = new Date().getFullYear();
  const date = `${currentYear}-01-01T00:00:00`;
  const haloweenDate = `${currentYear}-10-31T00:00:00`;
  const awruduDate = `${currentYear}-04-14T00:00:00`;

  return (
    <>
      <NewYearSection year={currentYear} date={date} />
      <HalloweenSection date={haloweenDate} />
      <AwruduSection date={awruduDate} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RollingTitles bg={bg}/>
      <ContactSection />
    </>
  );
}
