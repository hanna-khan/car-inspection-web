import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { testimonials } from "../utils/Data";

const TestimonialSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const nextIndex = (currentIndex + 1) % testimonials.length; // Calculate the second testimonial's index

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                    OUR <span className="text-accent">TESTIMONIAL</span>
                </h1>
                <p className="text-accent mb-12">
                    Hear from our satisfied customers who have benefited from our comprehensive vehicle history
                    reports. Their experiences highlight the value and reliability of VIN Solution DNA.
                </p>
                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[10px] lg:left-[20px] text-accent z-10"
                    >
                        <IoIosArrowBack size={24} />
                    </button>

                    {/* Testimonials */}
                    <div className="flex gap-8 items-center w-full justify-center">
                        {/* Testimonial 1 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-[100%] lg:w-[40%] flex flex-col justify-between min-h-[200px]">
                            <p className="text-accent italic mb-4">
                                "{testimonials[currentIndex].quote}"
                            </p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-16 h-16 rounded-full border-4 border-accent"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-accent text-sm">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-[100%] lg:w-[45%] flex flex-col justify-between min-h-[200px]">
                            <p className="text-accent italic mb-4">
                                "{testimonials[nextIndex].quote}"
                            </p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[nextIndex].image}
                                    alt={testimonials[nextIndex].name}
                                    className="w-16 h-16 rounded-full border-4 border-accent"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {testimonials[nextIndex].name}
                                    </h4>
                                    <p className="text-accent text-sm">
                                        {testimonials[nextIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-[10px] lg:right-[20px] text-gray-600  z-10"
                    >
                        <IoIosArrowForward size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
