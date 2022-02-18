import Hero from "../components/Hero";
import Profile from "../components/Profile";
import SectionSkill from "../components/SectionSkills";
import SectionProject from "../components/SectionProject";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkill />
      <SectionProject></SectionProject>
    </>
  );
}
