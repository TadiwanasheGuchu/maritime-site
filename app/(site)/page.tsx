import Hero from "./components/Hero";
import Services from "./components/Services";
import ImpactStats from "./components/ImpactStats";
import TrainingPrograms from "./components/TrainingPrograms";
import Story from "./components/Story";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ImpactStats />
      <TrainingPrograms />
      <Story />
      <Contact />
    </>
  );
}
