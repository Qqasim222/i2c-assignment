import { AboutUsDetailsData } from "../constants";

const AboutUsDetail = () => {
  return (
    <div
      className="w-full 2xl:m-auto 2xl:mx-6 relative bg-[#F6FBF8] h-full lg:h-[116px] rounded-xl p-[10px] lg:items-center lg:grid lg:grid-cols-3 ring-[#46B0E6] ring-offset-2 shadow-2xl mt-10 lg:mt-0 lg:mx-6"
      id="about"
    >
      <div className="overlay hidden lg:block blur-[90px] absolute top-[-100%]   w-60 inset-0 bg-[#F89D21] opacity-70 z-[-10] rounded-xl shadow-md"></div>
      {AboutUsDetailsData?.map((item, index) => {
        return (
          <div
            className="lg:flex lg:items-center lg:space-x-6 mt-5 mb-3 lg:mb-0 lg:mt-0"
            key={item.id || index}
          >
            <div className="flex items-center justify-center lg:flex-none lg:items-start lg:justify-start">
              <img src={item?.image_url} alt={item?.title} />
            </div>

            <div className="lg:w-[242px] w-full text-center lg:text-left">
              <p className="text-[#F89D21] font-semibold">{item?.title}</p>
              <p>{item?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsDetail;
