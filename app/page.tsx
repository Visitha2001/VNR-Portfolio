import Snowfall from "@/components/events/SnowFall";
import CrismasSection from "@/components/events/Crismas";
import AwruduSection from "@/components/events/Awrudu";
import HalloweenSection from "@/components/events/Haloween";
import NewYearSection from "@/components/events/NewYear";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ProjectsSection from "@/components/Projects";
import RollingTitles from "@/components/Roling";

export default function Home() {
  const bg = "bg-gray-900";
  const currentYear = new Date().getFullYear();

  const newYearDate = `${currentYear}-01-01T00:00:00`;
  const haloweenDate = `${currentYear}-10-31T00:00:00`;
  const awruduDate = `${currentYear}-04-14T00:00:00`;
  const crismasDate = `${currentYear}-12-25T00:00:00`;

  const today = new Date();
  const isChristmas =
    (today.getMonth() === 11 && today.getDate() >= 0 && today.getDate() <= 31)

  return (
    <>
      <Snowfall active={isChristmas} />

      <NewYearSection year={currentYear} date={newYearDate} />
      <HalloweenSection date={haloweenDate} />
      <AwruduSection date={awruduDate} />
      <CrismasSection date={crismasDate} />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RollingTitles bg={bg} />
      <ContactSection />
    </>
  );
}
