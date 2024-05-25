import AboutImg from "../../assets/about_img.svg";
import AboutContent from "./about-content";
import AboutUsDetail from "./aboutUs-detail";

const About = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between lg:items-center lg:my-20 lg:mx-6">
        <div >
          <AboutContent />
        </div>
        <div className="mt-10 lg:mt-0 relative">
          <img src={AboutImg} />
          <div className="overlay blur-[70px]  absolute left-[10%] h-52 w-32 inset-0 bg-[#F0B80D] opacity-70 z-0 rounded-xl shadow-md"></div>
        </div>
      </div>

      <AboutUsDetail />
    </div>
  );
};

export default About;
