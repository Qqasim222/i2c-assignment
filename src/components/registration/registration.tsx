import RegistrationImg from "./registrationImg-section";
import RegistrationForm from "./registration-form";

const Registration = () => {
  return (
    <div className="mt-10 lg:mt-20 lg:flex lg:justify-between lg:mx-6 lg:space-x-10">
      <div className="lg:h-[631px] h-full">
        <RegistrationImg />
      </div>
      <div
        className="lg:h-[631px] h-full w-full lg:w-[575px] bg-[#FFFFFF] rounded-[10px] mt-10 lg:mt-0 p-6"
        id="registration"
      >
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
