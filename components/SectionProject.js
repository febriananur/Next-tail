import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

export default function SectionProject() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>My Project</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem
              name="HoMe Automation"
              description="Aplikasi untuk mengontrol rumah secara otomatis"
              img="/img/img1.png"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem
              name="invest"
              description="index investasi"
              img="/img/img2.jpg"
            />
          </div>
          <div className="w-6/12 px-4 ">
            <ProjectItem
              name="GO care"
              description="web untuk akses kesehatan"
              img="/img/img3.png"
            />
          </div>
          <div className="w-6/12 px-4 ">
            <ProjectItem
              name="Rent Express"
              description="sewa kendaran secara mudah"
              img="/img/img4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
