import { AboutUs } from "./AboutUs/AboutUs";
import { ClientAboutArea } from "./ClientAboutArea/ClientAboutArea";
import { ProjectArea } from "./ProjectArea/ProjectArea";
import { ServicesOffered } from "./ServicesOffered/ServicesOffered";
import { TopSection } from "./TopSection/TopSection";
import { WhyChooseEPe } from "./WhyChooseEPe/WhyChooseEPe";

export const HomeScreen = () => {
  return (
    <>
      <TopSection />
      <WhyChooseEPe />
      <AboutUs />
      <ServicesOffered />
      <ProjectArea />
      <ClientAboutArea/>
    </>
  );
};
