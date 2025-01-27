import React from 'react';
import { FaFileAlt, FaHeadset, FaGlobe, FaTrophy, FaCarCrash, FaMobileAlt } from "react-icons/fa";


const About = () => {
  const features = [
    {
      icon: <FaFileAlt className="text-4xl text-[#45a29e]" />,
      title: "Comprehensive Reports",
      description:
        "Access detailed reports that cover everything from accident history. We leave no stone unturned in delivering the information you need.",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#45a29e]" />,
      title: "Free Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any questions or issues. We’re here to ensure your experience hassle-free.",
    },
    {
      icon: <FaGlobe className="text-4xl text-[#45a29e]" />,
      title: "Global Reach",
      description:
        "Our extensive database pulls information from reliable sources worldwide, ensuring you receive the most accurate and up-to-date vehicle history available.",
    },
    {
      icon: <FaTrophy className="text-4xl text-[#45a29e]" />,
      title: "Affordable Pricing",
      description:
        "Get detailed vehicle history reports at competitive prices. We believe in providing value without compromising on quality or accuracy.",
    },
    {
      icon: <FaCarCrash className="text-4xl text-[#45a29e]" />,
      title: "Accident History",
      description:
        "Access detailed accident history and damage reports to make informed decisions about your vehicle.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#45a29e]" />,
      title: "User-Friendly Interface",
      description:
        "Our interface is designed for ease of use, delivering instant results for your convenience.",
    },
  ];
  return (
    <>
      <div
        className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[60vh] md:h-[70vh]"
        style={{
          backgroundImage: "url('./images/about-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative flex flex-col justify-center h-full z-20 px-6 lg:px-20">
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      <div className="px-6 py-6 lg:px-20">
        {/* Breadcrumb */}
        <div className="text-lg font-semibold text-gray-600 mb-6 pb-4 border-b-2">
          <span className="text-[#45a29e] cursor-pointer">Home</span> &gt; <span>About Us</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 my-6">ABOUT VIN SOLUTION DNA</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed max-w-screen-lg">
          <p>
            At VIN Solution DNA, we specialize in delivering comprehensive vehicle history reports that empower our
            customers to make well-informed decisions. Whether you’re buying, selling, or simply curious about your
            vehicle's past, our services provide the clarity and transparency you need. We understand the importance of
            knowing a vehicle’s history, which is why we gather data from reliable and trusted sources globally. This
            ensures that you receive the most accurate and up-to-date information available.
          </p>

          <p>
            Our reports cover a wide range of details, including accident history, ownership records, maintenance logs,
            and more. We aim to leave no stone unturned in our quest to provide you with a complete picture of your
            vehicle's past. This thorough approach helps you avoid potential pitfalls, such as undisclosed damage or
            hidden issues, saving you time, money, and hassle in the long run.
          </p>

          <p>
            At VIN Solution DNA, our mission is to unlock the secrets of your vehicle’s history, giving you the confidence
            and peace of mind you deserve. Our user-friendly website and instant report delivery make it easy for you to
            access the information you need, when you need it. Trust us to be your partner in making smart and informed
            vehicle-related decisions.
          </p>
        </div>
      </div>
      <div className="px-6 py-12 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 space-x-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
