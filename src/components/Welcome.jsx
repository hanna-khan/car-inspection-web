import React from "react";
import { CiSettings } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { IoBarChartOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";

const Welcome = () => {
    return (
        <div
            className="relative bg-cover bg-center py-16"
            style={{
                backgroundImage: "url('./images/welcome-bg.jpg')",
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 px-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        WELCOME TO <span className="text-[#45a29e]">VIN SOLUTION DNA</span>
                    </h1>
                    <p className="text-black max-w-3xl mb-4">
                        Everything you need to uncover the history of your vehicle is right
                        here at VIN <br /> Solution DNA.
                    </p>
                    <p className="text-[#7a7b7e] max-w-xl mb-8">
                        We specialize in providing comprehensive vehicle history reports to
                        help you make informed decisions. Our services are designed to offer
                        clarity and transparency, whether you're buying, selling, or simply
                        curious about your vehicle's past. We gather data from reliable
                        sources globally, ensuring you have access to the most accurate and
                        up-to-date information. At VIN Solution DNA, our mission is to unlock
                        the secrets of your vehicle’s history, giving you the confidence and
                        peace of mind you deserve...
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <img
                        src={'./images/car.png'}
                        alt="Car"
                        className="w-full max-w-lg object-contain"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-16">
                {[
                    {
                        title: "COMPREHENSIVE REPORTS",
                        description:
                            "Access detailed reports that cover everything from accident history. We leave no stone unturned in delivering the information you need.",
                        icon: <CiSettings size={50} />,
                    },
                    {
                        title: "FREE SUPPORT",
                        description:
                            "Our dedicated customer support team is available 24/7 to assist you with any questions or issues. We’re here to ensure your experience is hassle-free.",
                        icon: <BiSupport size={50} />,
                    },
                    {
                        title: "GLOBAL REACH",
                        description:
                            "Our extensive database pulls information from reliable sources worldwide, ensuring you receive the most accurate and up-to-date vehicle history available.",
                        icon: <IoBarChartOutline size={50} />,
                    },
                    {
                        title: "AFFORDABLE PRICING",
                        description:
                            "Get detailed vehicle history reports at competitive prices. We believe in providing value without compromising on quality or accuracy.",
                        icon: <CiTrophy size={50} />,
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-md rounded-lg text-left"
                    >
                        <div className="text-[#45a29e] mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                            {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Welcome;
