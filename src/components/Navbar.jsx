import React, { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { MdMenu, MdClose } from "react-icons/md";


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="bg-white shadow-md">
            {/* Top Section */}
            <div className="hidden lg:flex justify-between items-center px-6 py-4 border-b">
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
                <div className="flex justify-between items-center lg:px-6 lg:py-4 px-4 py-2">
                    <div className="lg:hidden flex items-center space-x-2">
                        <img
                            src="./images/logo.png"
                            alt="VIN Solution DNA"
                            className="h-10 lg:h-14"
                        />
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
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
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#45a29e] text-white lg:px-6 lg:py-2 py-2 px-4 rounded hover:bg-teal-600 lg:text-md text-xs">
                            LOGIN
                        </button>
                        <div className="lg:hidden">
                            <button onClick={toggleSidebar}>
                                <MdMenu size={28} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Small Screen Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#2d3239] text-white shadow-lg transform transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
                    <img src="./images/logo.png" alt="VIN Solution DNA" className="h-12" />
                    <button onClick={toggleSidebar}>
                        <MdClose size={24} className="text-white" />
                    </button>
                </div>

                {/* Sidebar Navigation Links */}
                <nav className="flex flex-col p-4 space-y-4">
                    {["Home", "About Us", "Sample Report", "Window Sticker", "Learn More", "Contact Us"].map(
                        (link, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-lg font-medium hover:text-teal-400"
                            >
                                {link.toUpperCase()}
                            </a>
                        )
                    )}
                </nav>

                {/* Login Button in Sidebar */}
                <div className="px-4 py-4">
                    <button className="w-full bg-[#45a29e] text-white px-6 py-2 rounded hover:bg-teal-600">
                        LOGIN
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
