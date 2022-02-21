import Hero from "../components/Hero";
import Profile from "../components/Profile";
import SkillSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SkillSection />
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
}
