import WelcomeImg from "../../assets/welcomeImg.png";
import reviewsData from "../constants";
import "../../index.css";

const AboutContent = () => {
  return (
    <div>
      <div className="lg:w-[577PX] lg:h-[115px] rounded-xl relative">
        <img src={WelcomeImg} />
        <div className="overlay blur-[100px]  absolute top-[-80px] left-[54%] h-52 w-32 inset-0 bg-[#5380EA] opacity-70 z-0 rounded-xl shadow-md"></div>
      </div>
      <div className="h-[430px] mt-5 rounded-2xl overflow-y-auto hide-scrollbar outer-blur-container">
        {reviewsData?.map((item, index) => {
          return (
            <div key={index} className="relative">
              <div className="overlay blur-[60px] absolute top-[90%]  w-32 inset-0 bg-[#F89D21] opacity-70 z-[-10] rounded-xl shadow-md"></div>
              <div className="lg:w-[582px] relative w-full bg-[#F6FBF8] lg:h-[116px] rounded-xl p-[24px] gap-[28px] mt-4 lg:flex lg:items-center bottom-shadow">
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-28 h-28 rounded-full"
                      src={item?.image_url}
                      alt="Rounded avatar"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center lg:mt-0 lg:text-left">
                  <div className="font-medium">{item?.name}</div>
                  <div className="font-medium text-[#515151]">
                    {item?.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
