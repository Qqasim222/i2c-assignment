import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    const formSubmittedFlag = localStorage.getItem("formSubmitted");

    if (formData && formSubmittedFlag === "true") {
      setIsSubmitted(true);
    }
  }, []);

  const validate = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const newErrors: { name?: string; email?: string } = {};

    if (!trimmedName) newErrors.name = "Name is required";
    if (!trimmedEmail) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!isSubmitted) {
      const formData = { name: name.trim(), company, email: email.trim() };
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("formSubmitted", "true");

      toast.success("Form submitted successfully!");

      setName("");
      setCompany("");
      setEmail("");

      setIsSubmitted(true);
    } else {
      toast.info("Form has already been submitted.");

      setName("");
      setCompany("");
      setEmail("");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="mt-10" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-[#000000] font-medium mb-2">
          Name <span className="text-[#EB5939]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className={`lg:w-[479px] w-full h-full lg:h-[51px] px-3 py-2 mb-4 border ${
            errors.name
              ? "border-[#EB5939] focus:border-[#EB5939]"
              : "border-gray-300 focus:border-blue-500"
          } rounded-lg focus:outline-none bg-[#F9FAFF]`}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
        />
        {errors.name && (
          <p className="text-[#EB5939] mt-[-12px] text-[14px]">{errors.name}</p>
        )}

        <label
          htmlFor="company"
          className="block text-[#000000] font-medium mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter your company name"
          className="lg:w-[479px] w-full h-full lg:h-[51px] px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-[#F9FAFF]"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label
          htmlFor="email"
          className="block text-[#000000] font-medium mb-2"
        >
          Email Address <span className="text-[#EB5939]">*</span>
        </label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email"
          className={`lg:w-[479px] w-full h-full lg:h-[51px] px-3 py-2 mb-4 border ${
            errors.email
              ? "border-[#EB5939] focus:border-[#EB5939]"
              : "border-gray-300 focus:border-blue-500"
          } rounded-lg focus:outline-none bg-[#F9FAFF]`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: "" }));
          }}
        />

        {errors.email && (
          <p className="text-[#EB5939] mt-[-12px] text-[14px]">
            {errors.email}
          </p>
        )}

        <button
          type="submit"
          className="bg-[#F89D21] hover:bg-[#F89D21] text-white font-[700] py-2 px-4 rounded-full w-full h-full lg:w-[200px] lg:h-[51px] ring-[#F89D21] ring-offset-2 shadow-2xl mt-7"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
