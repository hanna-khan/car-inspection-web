import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "David Matin",
            role: "Student",
            image: "./images/testimonial1.jpg",
            quote:
                "VIN Solution DNA saved me from buying a car with a hidden accident history. The report was detailed and easy to understand. Highly recommend!",
        },
        {
            id: 2,
            name: "Salva Morina",
            role: "Student",
            image: "./images/testimonial2.jpg",
            quote:
                "I was able to sell my car quickly because I had a full history report from VIN Solution DNA. The buyer was impressed with the transparency and accuracy.",
        },
        {
            id: 3,
            name: "John Doe",
            role: "Teacher",
            image: "./images/testimonial1.jpg",
            quote:
                "Using VIN Solution DNA gave me the confidence to make a smart purchase. The history report was incredibly detailed and easy to follow!",
        },
        {
            id: 4,
            name: "Emily Carter",
            role: "Designer",
            image: "./images/testimonial2.jpg",
            quote:
                "Thanks to VIN Solution DNA, I avoided buying a car with hidden damages. Their service is top-notch!",
        },
    ];

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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    OUR <span className="text-teal-500">TESTIMONIAL</span>
                </h2>
                <p className="text-gray-600 mb-12">
                    Hear from our satisfied customers who have benefited from our comprehensive vehicle history
                    reports. Their experiences highlight the value and reliability of VIN Solution DNA.
                </p>
                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[10px] lg:left-[20px] text-gray-500 z-10"
                    >
                        <IoIosArrowBack size={24} />
                    </button>

                    {/* Testimonials */}
                    <div className="flex gap-8 items-center w-full justify-center">
                        {/* Testimonial 1 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-[100%] lg:w-[40%] flex flex-col justify-between min-h-[200px]">
                            <p className="text-gray-600 italic mb-4">
                                "{testimonials[currentIndex].quote}"
                            </p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-16 h-16 rounded-full border-4 border-teal-500"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-teal-500 text-sm">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg w-[100%] lg:w-[45%] flex flex-col justify-between min-h-[200px]">
                            <p className="text-gray-600 italic mb-4">
                                "{testimonials[nextIndex].quote}"
                            </p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[nextIndex].image}
                                    alt={testimonials[nextIndex].name}
                                    className="w-16 h-16 rounded-full border-4 border-teal-500"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {testimonials[nextIndex].name}
                                    </h4>
                                    <p className="text-teal-500 text-sm">
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
