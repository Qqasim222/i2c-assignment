import Form from "./form";
const RegistrationForm = () => {
  return (
    <div>
      <p className="font-extrabold text-[100%] lg:text-[36px]">
        {"Registration"}
      </p>
      <p className="lg:w-[441px] w-full text-[#515151] mt-4">
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        }
      </p>
      <Form />
    </div>
  );
};

export default RegistrationForm;
