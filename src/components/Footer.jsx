import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-2 lg:px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {/* Company Info */}
                <div>
                    <img
                        src="./images/logo.png" 
                        alt="Logo"
                        className="mb-4 w-36"
                    />
                    <p className="text-sm text-gray-300">
                        VIN Solution DNA specializes in comprehensive vehicle history reports, offering clarity and transparency for informed decision-making. Our accurate and up-to-date data from reliable global sources unlocks the secrets of your vehicle’s past, ensuring your confidence and peace of mind.
                    </p>
                </div>

                {/* Registered By */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">REGISTERED BY</h3>
                    <div className="border-b-2 border-teal-500 w-12 mb-4"></div>
                    <div className="gap-2 grid grid-cols-2">
                        <img
                            src="./images/logo1.png"
                            alt="NMVTIS"
                            className="h-16"
                        />
                        <img
                            src="./images/logo2.png"
                            alt="Vehicle Testing System"
                            className="h-16"
                        />
                        <img
                            src="./images/logo3.png"
                            alt="PPSR"
                            className="h-16"
                        />
                        <img
                            src="./images/logo4.png"
                            alt="Trustpilot"
                            className="h-16"
                        />
                    </div>
                </div>

                {/* Learn More */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">LEARN MORE</h3>
                    <div className="border-b-2 border-teal-500 w-12 mb-4"></div>
                    <ul className="space-y-2 text-gray-300">
                        {[
                            "About Us",
                            "Sample Report",
                            "FAQ",
                            "Global Service Coverage",
                            "Privacy Policy",
                            "Terms & Conditions",
                            "Return Policy",
                        ].map((item) => (
                            <li
                                key={item}
                                className="hover:underline hover:text-teal-400 transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <div className="border-b-2 border-teal-500 w-12 mb-4"></div>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex">
                            <div className="mt-2 mr-4 items-start flex">
                                <CiLocationOn size={22} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">ADDRESS</p>
                                <p>1632 Toyon Via, California</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="mt-2 mr-4 items-start flex">
                                <CiMobile4 size={22} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">PHONE</p>
                                <p>
                                    +1209-734-0181
                                    (24/7 Support Line)
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="mt-2 mr-4 items-start flex">
                                <MdOutlineEmail size={22} />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">EMAIL</p>
                                <p>billing@vinsolutionsdna.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500 flex justify-between">
                <div>
                    <p>
                        © Copyright 2024
                    </p>
                </div>
                <div>
                    <ul className="flex gap-3">
                        <li>
                            About us
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Contact us
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
