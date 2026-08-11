import HeroSection from "../components/common/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactsSection from "../components/sections/ContactsSection";
import FadeIn from "../components/UI/FadeIn"


export default function Home() {
  return (
    <div className="">
      <FadeIn>
          <HeroSection></HeroSection>
      </FadeIn>
      <FadeIn>
          <AboutSection></AboutSection>
      </FadeIn>
      <FadeIn>
          <SkillsSection></SkillsSection>
      </FadeIn>
      <FadeIn>
          <ProjectsSection></ProjectsSection>
      </FadeIn>
      <FadeIn>
          <ContactsSection></ContactsSection>
      </FadeIn>
    </div>
  );
}
