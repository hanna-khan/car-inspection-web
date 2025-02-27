import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questionaire from "./Questionaire";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vimNumber, setVimNumber] = useState("");

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-[80vh] z-10"
            style={{ backgroundImage: "url('./images/bg2.jpg')" }}
        >
            <div className="absolute inset-0 bg-overlay z-10"></div>
            <div className="relative mx-auto max-w-3xl flex flex-col items-center justify-center h-full z-20">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-background sm:text-5xl">
                        Welcome to <br />
                        <span className="text-white">PRO INSPECT AUTO</span>
                        <br />
                        <span className="text-textHover text-2xl font-semibold tracking-tight sm:text-3xl">
                            Your Trusted Car Inspection Service
                        </span>
                    </h1>
                    <p className="mt-4 text-[12px] text-background">
                        At PRO INSPECT AUTO, we ensure your vehicle is safe and roadworthy. Our certified inspectors use the latest technology for thorough inspections.
                    </p>
                    <div className="mt-8 flex gap-x-6">
                        <button
                            onClick={toggleModal}
                            className="rounded-md bg-secondary px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-accent"
                        >
                            Buy Report
                        </button>
                        <a
                            href="#"
                            className="rounded-md bg-accent px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-hoverBg"
                        >
                            About Us
                        </a>
                    </div>
                </div>
            </div>

            {/* VIN Input Card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] bg-secondary bg-opacity-90 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 flex items-center gap-4 z-30 border border-gray-200">
                <input
                    type="text"
                    placeholder="Enter VIN Number"
                    value={vimNumber}
                    onChange={(e) => setVimNumber(e.target.value)}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-base shadow-sm"
                />
                <button className="bg-gradient-to-r from-accent to-hoverBg text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300 text-base">
                    Enter
                </button>
            </div>


            {isModalOpen && (
                <Questionaire
                    toggleModal={toggleModal}
                />
            )}

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Hero;
