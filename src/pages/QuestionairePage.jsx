import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import PaymentButtons from "../components/PaypalButtons";
import ReviewDetails from "../components/ReviewDetails";
import { FaUser, FaCreditCard } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const steps = ["Personal Information", "Payment"];
const stepIcons = {
  0: <FaUser className="text-blue-400 text-2xl" />,
  1: <FaCreditCard className="text-blue-400 text-2xl" />,
};

const Stepper = ({ currentStep }) => {
  return (
    <div className="flex items-center space-x-8 text-white bg-gray-900 p-4 rounded-lg">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          <span
            className={`flex items-center space-x-2 text-sm font-medium ${
              index === currentStep ? "text-blue-400" : "text-gray-400"
            }`}
          >
            <span className="text-lg mx-2">
              {index <= currentStep ? (
                <IoIosCheckmarkCircle />
              ) : (
                <IoIosCheckmarkCircleOutline />
              )}
            </span>
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className="flex-grow border-t border-gray-600 mx-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const QuestionnairePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    vinNumber: "",
    packageType: "Basic",
  });
  const [searchParams] = useSearchParams();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.number || !form.vinNumber) {
      toast.error("All fields are required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Enter a valid email!");
      return false;
    }
    if (!/^\d{4,15}$/.test(form.number)) {
      toast.error("Enter a valid phone number (4-15 digits)!");
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch(`${process.env.REACT_APP_BASE_API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        toast.success("Payment successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(`Failed to send message: ${err.message}`);
      });
  };

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (currentStep === 0 && !validateForm()) return;
    // if (currentStep === 1
    //     // && !isPaid
    //     ) {
    //     toast.error("Please complete payment before proceeding!");
    //     return;
    // }
    setCurrentStep(currentStep + 1);
  };

  // const handlePaymentSuccess = () => {
  //     setIsPaid(true);
  //     toast.success("Payment successful!");
  // };

  // const handleSubmit = () => {
  //     toast.success("Form submitted successfully!");
  // };

  useEffect(() => {
    if (searchParams.get("package")) {
      setForm({ packageType: searchParams.get("package") });
    }
    if (searchParams.get("vin")) {
      setForm({ vinNumber: searchParams.get("vin") });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-4 my-14">
        <div className="md:block hidden">
          <Stepper currentStep={currentStep} />
        </div>
        <h2 className="md:text-2xl  text-xl font-bold text-center my-6 flex items-center justify-center space-x-2">
          {stepIcons[currentStep]}
          <span>{steps[currentStep]}</span>
        </h2>

        {currentStep === 0 && (
          <form>
            <div className="md:grid block grid-cols-2 gap-4 md:space-y-0 space-y-3">
              <div>
                <label className="block text-gray-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-400">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-400">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-400">VIN Number</label>
                <input
                  type="text"
                  name="vinNumber"
                  value={form.vinNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-400">Package Type</label>
                <select
                  name="packageType"
                  value={form.packageType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                >
                  <option value="Basic">Basic - £30</option>
                  <option value="Advance">Advance - £50</option>
                  <option value="Premium">Premium - £100</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleNextStep}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block m-auto my-4"
            >
              Proceed to Payment
            </button>
          </form>
        )}

        {currentStep === 1 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Select Payment Method</h3>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between mt-2">
              <span>PayPal</span>
              <input
                type="radio"
                name="payment"
                checked
                readOnly
                className="w-5 h-5"
              />
            </div>
            <PaymentButtons
              action={submitForm}
              amount={
                form.packageType === "Premium"
                  ? 100
                  : form.packageType === "Advance"
                  ? 50
                  : 30
              }
            />
          </div>
        )}

        {currentStep === 2 && (
          <ReviewDetails form={form} handleSubmit={submitForm} />
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default QuestionnairePage;
