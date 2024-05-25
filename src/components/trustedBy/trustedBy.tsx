import TrustedBy_Image from "../../assets/trusted_by.svg";
import SimpleSlider from "./slider/slider";
const TrustedBy = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 w-full lg:w-[441px] mx-auto">
        <img src={TrustedBy_Image} alt="Trusted By" />
        <div className="mt-4 text-center">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
          }
        </div>
      </div>
      <div className="mt-8 w-full lg:w-[1000px] mx-auto">
        <SimpleSlider />
      </div>
      <div className="overlay blur-[150px]  absolute left-[60%] h-80 w-30 md:h-80 md:w-60 inset-0 bg-[#E49192] opacity-70 z-0 rounded-xl shadow-md"></div>
    </div>
  );
};

export default TrustedBy;
