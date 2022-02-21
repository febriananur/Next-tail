import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";

export default function SectionSkill() {
  return (
    <section className="py-28 bg-primarygray" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skill</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>

        <div className="flex -mx-4 mt-20 flex-wrap ">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="C++"
              level="Lanjutan"
              image="/logo/c-plusplus.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Reactjs"
              level="pemula"
              image="/logo/react.svg"
              imageClassName="h-16 "
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="pemula"
              image="/logo/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Flutter"
              level="pemula"
              image="/logo/flutter.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Python"
              level="pemula"
              image="/logo/python.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Docker"
              level="pemula"
              image="/logo/docker-icon.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-8">
            <SkillCard
              name="Figma"
              level="pemula"
              image="/logo/figma.svg"
              imageClassName="h-16 "
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-8">
            <SkillCard
              name="Git"
              level="Lanjutan"
              image="/logo/git-icon.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-8">
            <SkillCard
              name="Linux"
              level="Lanjutan"
              image="/logo/linux-tux.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
