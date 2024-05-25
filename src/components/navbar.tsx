import { useState } from "react";
import I2C_Logo from "../assets/i2clogo.svg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:mx-6 lg:w-full">
        <div>
          <img src={I2C_Logo} alt="I2C Logo" />
        </div>
        <div className="flex justify-center items-center space-x-6 text-[16px] font-normal text-[#515151]">
          <div>About us</div>
          <div>Registration</div>
          <div>Careers</div>
          <button className="bg-[#46B0E6] hover:bg-blue-700 text-white font-[700] py-2 px-4 rounded-full w-[150px] h-[51px] ring-[#46B0E6] ring-offset-2 shadow-2xl">
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex justify-between items-center w-full">
        <div className="z-20 mx-4">
          <img src={I2C_Logo} alt="I2C Logo" />
        </div>
        <div
          className="w-5 mx-5 z-20 absolute right-0 top-0 mt-4 mr-4"
          onClick={handleClick}
        >
          {!nav ? <MenuIcon /> : <XIcon />}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-10 top-0 left-0 font-bold w-full h-full bg-zinc-200 flex flex-col items-center justify-center"
          }
        >
          <li className="hover:cursor-pointer p-5 border-b-2 border-zinc-300 w-full text-center">
            About us
          </li>
          <li className="hover:cursor-pointer p-5 border-b-2 border-zinc-300 w-full text-center">
            Registration
          </li>
          <li className="hover:cursor-pointer p-5 border-b-2 border-zinc-300 w-full text-center">
            Careers
          </li>
          <div className="flex justify-center items-center w-full">
            <button className="bg-[#46B0E6] hover:bg-blue-700 text-white font-[700] py-2 px-4 rounded-full w-[150px] h-[51px] ring-[#46B0E6] ring-offset-2 shadow-2xl mt-5">
              Contact us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
