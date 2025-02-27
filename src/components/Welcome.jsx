import React from "react";
import { welcomeData } from "../utils/Data";

const Welcome = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 mt-8"
      style={{ backgroundImage: "url('./images/welcome-bg.jpg')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            WELCOME TO <span className="text-accent">PRO INSPECT AUTO</span>
          </h1>

          <p className="text-accent max-w-xl mb-8">
            At PRO INSPECT AUTO, we are dedicated to ensuring your vehicle is safe, reliable, and roadworthy. With years of experience in the automotive industry, our certified inspectors use the latest technology and techniques to provide thorough inspections.
          </p>

        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={'./images/car.png'} alt="Car" className="w-full max-w-lg object-contain" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:m-16 m-4">
        {welcomeData.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-background shadow-md rounded-lg text-left transition-all duration-300 hover:bg-secondary hover:text-background"
          >
            <div className="mb-4 transition-all duration-300">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 transition-all duration-300">{feature.title}</h3>
            <p className="transition-all duration-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
