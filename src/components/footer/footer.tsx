import I2C_Logo from "../../assets/i2clogo.svg";

const Footer = () => {
  return (
    <div className="2xl:mx-6">
      <div className="md:flex md:items-center md:justify-between md:mt-6">
        <div className="md:mt-0 mt-1">
          <img src={I2C_Logo} alt="I2C Logo" />
        </div>
        <div className="md:flex md:justify-center md:items-center md:space-x-6 md:text-[16px] md:mt-0 mt-3 font-normal text-[#515151]">
          <div className="md:mt-0 mt-1 ">FAQs</div>
          <div className="md:mt-0 mt-1 ">Privacy Policy</div>
          <div className="md:mt-0 mt-1 ">Other</div>
          <button className="bg-[#46B0E6] hover:bg-blue-700 mt-2 w-[200px] h-[51px] text-white font-[700] py-2 px-4 rounded-full md:w-[150px] md:h-[51px] ring-[#46B0E6] ring-offset-0 shadow-btn-contact">
            Contact us
          </button>
        </div>
      </div>

      <div className="md:text-[11px] mt-8">
        {"Copyright © 2023 i2c inc. All rights reserved."}
      </div>
    </div>
  );
};

export default Footer;
