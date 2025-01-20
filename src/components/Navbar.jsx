import React from "react";
import { MdPhoneIphone } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">
            {/* Top Section */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="./images/logo.png"
                        alt="VIN Solution DNA"
                        className="h-14"
                    />
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-10 text-sm text-teal-600">
                    <div className="flex flex-col space-x-2">
                        <div className="flex">
                            <MdPhoneIphone size={20} />
                            <span>CALL US</span>
                        </div>
                        <p className="text-[#7a7b7e]">+1209-734-0181</p>
                    </div>
                    <div className="flex flex-col space-x-2">
                        <div className="flex">
                            <MdPhoneIphone size={20} />
                            <span>SEND US A MAIL</span>
                        </div>
                        <p className="text-[#7a7b7e]">billing@vinsolutionsdna.com</p>
                    </div>
                    <div className="flex flex-col space-x-2">
                        <div className="flex">
                            <MdPhoneIphone size={20} />
                            <span>OUR ADDRESS</span>
                        </div>
                        <p className="text-[#7a7b7e]">1632 Toyon Via, California</p>
                    </div>
                </div>

                {/* Contact Us Button */}
                <button className="bg-[#45a29e] text-white px-8 py-4 rounded hover:bg-teal-600">
                    CONTACT US
                </button>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#2d3239] text-white">
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Navigation Links */}
                    <div className="flex space-x-8">
                        {["Home", "About Us", "Sample Report", "Window Sticker", "Learn More", "Contact Us"].map(
                            (link, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-sm font-medium hover:text-teal-400"
                                >
                                    {link.toUpperCase()}
                                </a>
                            )
                        )}
                    </div>

                    {/* Login Button */}
                    <button className="bg-[#45a29e] text-white px-6 py-2 rounded hover:bg-teal-600">
                   LOGIN
                </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
