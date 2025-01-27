import React from "react";
import { welcomeData } from "../utils/Data";


const Welcome = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('./images/welcome-bg.jpg')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            WELCOME TO <span className="text-[#45a29e]">VIN SOLUTION DNA</span>
          </h1>
          <p className="text-black max-w-3xl mb-4">
            Everything you need to uncover the history of your vehicle is right here at VIN Solution DNA.
          </p>
          <p className="text-[#7a7b7e] max-w-xl mb-8">
            We specialize in providing comprehensive vehicle history reports to help you make informed decisions. Our services are designed to offer clarity and transparency, whether you're buying, selling, or simply curious about your vehicle's past. We gather data from reliable sources globally, ensuring you have access to the most accurate and up-to-date information. At VIN Solution DNA, our mission is to unlock the secrets of your vehicle’s history, giving you the confidence and peace of mind you deserve...
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src={'./images/car.png'} alt="Car" className="w-full max-w-lg object-contain" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:m-16 m-4">
        {welcomeData.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg text-left hover:bg-[#45a29e] transition-all duration-300"
          >
            <div className="text-[#000] hover:text-white mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 hover:text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
