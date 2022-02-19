import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <div className="bg-hero h-[710px]">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className=" text-3xl text-white font-mono w-8/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, IoT Dev, dan juga UI designer
          </h1>
          <p className="text-white w-4/12 mx-auto mt-6 leading-relaxed">
            Sejak SMA mulai mendalami apa itu teknologi jaringan dan berpindah
            menjadi programmer pada saat Kuliah
          </p>
          <Button pill variant="yellow" className="mt-14">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
