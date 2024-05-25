import Navbar from "../components/navbar";
import About from "../components/about/about";
import TrustedBy from "../components/trustedBy/trustedBy";
import Registration from "../components/registration/registration";
import Footer from "../components/footer/footer";

const Main = () => {
  return (
    <>
      <div className="my-6 md:mx-12 md:my-10">
        <Navbar />
      </div>
      <div className="mx-12 my-10">
        <About />
      </div>
      <div className="mx-12 my-10">
        <TrustedBy />
      </div>
      <div className="mx-12 my-10">
        <Registration />
      </div>

      <div className="mx-12 my-10 mt-36">
        <hr className="border-none h-[1px] bg-[#CBCBCB] my-4" />
        <Footer />
      </div>
    </>
  );
};

export default Main;
