import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { testimonials } from "../utils/Data";
import { FaUserCircle } from "react-icons/fa";

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

    const nextIndex = (currentIndex + 1) % testimonials.length;

    return (
        <section className="bg-white mb-4 lg:mb-12">
            <div className="py-12 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-8">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h1 className="text-4xl font-bold text-secondary mb-4">
                        What Our <span className="text-accent">Customers Say</span>
                    </h1>
                    <p className="text-accent sm:text-xl">
                        Hear from our happy customers who have experienced the magic of our products firsthand!
                    </p>
                </div>

                <div className="relative flex items-center justify-center">
                    {/* Left Arrow - Only visible on lg screens */}
                    <button
                        onClick={handlePrev}
                        className="hidden lg:flex absolute left-[20px] text-accent z-10"
                    >
                        <IoIosArrowBack size={24} />
                    </button>

                    {/* Testimonials */}
                    <div className="flex flex-col gap-6 w-full lg:flex-row lg:gap-8 lg:items-center lg:justify-center">
                        {/* Mobile View - List all testimonials */}
                        <div className="flex flex-col gap-6 w-full lg:hidden">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white shadow-lg p-6 rounded-lg w-full flex flex-col justify-between min-h-[200px]">
                                    <p className="text-accent italic mb-4">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <FaUserCircle className="w-16 h-16 text-accent rounded-full border-4 border-accent" />
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold text-gray-800">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-accent text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop View - Show only two testimonials at a time */}
                        <div className="hidden lg:flex gap-8 w-full justify-center">
                            <div className="bg-white shadow-lg p-6 rounded-lg w-[40%] flex flex-col justify-between min-h-[200px]">
                                <p className="text-accent italic mb-4">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex items-center mt-4">
                                    <FaUserCircle className="w-16 h-16 text-accent rounded-full border-4 border-accent" />
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

                            <div className="bg-white shadow-lg p-6 rounded-lg w-[40%] flex flex-col justify-between min-h-[200px]">
                                <p className="text-accent italic mb-4">
                                    "{testimonials[nextIndex].quote}"
                                </p>
                                <div className="flex items-center mt-4">
                                    <FaUserCircle className="w-16 h-16 text-accent rounded-full border-4 border-accent" />
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
                    </div>

                    {/* Right Arrow - Only visible on lg screens */}
                    <button
                        onClick={handleNext}
                        className="hidden lg:flex absolute right-[20px] text-accent z-10"
                    >
                        <IoIosArrowForward size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
