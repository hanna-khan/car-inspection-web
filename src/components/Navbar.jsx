import React, { useState } from "react";
import { MdPhoneIphone, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // For Learn More dropdown
    const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false);  // For Policy sub-dropdown

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-white shadow-md relative">
            {/* Top Section */}
            <div className="hidden lg:flex justify-between items-center px-6 border-b">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="./images/logo.jpg" alt="Logo" className="h-24" />
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-10 text-sm text-teal-600">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>CALL US</span>
                        </div>
                        <p className="text-[#7a7b7e]">+1209-734-0181</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>SEND US A MAIL</span>
                        </div>
                        <p className="text-[#7a7b7e]">billing@vinsolutionsdna.com</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>OUR ADDRESS</span>
                        </div>
                        <p className="text-[#7a7b7e]"></p>
                    </div>
                </div>

                {/* Contact Us Button */}
                <button className="bg-[#45a29e] text-white px-8 py-4 rounded hover:bg-teal-600">
                    CONTACT US
                </button>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#2d3239] text-white">
                <div className="flex justify-between items-center lg:px-6 px-4 py-2">
                    <div className="lg:hidden flex items-center space-x-2">
                        <img src="./images/logo.png" alt="Logo" className="h-10 lg:h-14" />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
                        {["Home", "About Us", "Sample Report", "Window Sticker", "Contact us"].map(
                            (link, index) => (
                                <Link
                                    key={index}
                                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                                    className="text-sm font-medium hover:text-teal-400"
                                >
                                    {link.toUpperCase()}
                                </Link>
                            )
                        )}

                        {/* Learn More Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="text-sm font-medium hover:text-teal-400 flex items-center">
                                LEARN MORE
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0  w-48 bg-[#2d3239] text-white shadow-lg rounded-lg z-20">
                                    <Link to="/privacy-policy" className="block px-4 py-2 border-b-2 border-gray-700">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/terms-and-conditions" className="block px-4 py-2 border-b-2 border-gray-700">
                                        Terms & Conditions
                                    </Link>
                                    <Link to="/faq" className="block px-4 py-2" >
                                        FAQ
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-[#45a29e] text-white lg:px-6 lg:py-2 py-2 px-4 rounded hover:bg-teal-600 lg:text-md text-xs">
                            LOGIN
                        </button>
                        <div className="lg:hidden">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <MdMenu size={28} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 fixed top-0 left-0 h-full w-64 bg-[#2d3239] text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
                    <img src="./images/logo.png" alt="Logo" className="h-12" />
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <MdClose size={24} className="text-white" />
                    </button>
                </div>

                {/* Sidebar Navigation Links */}
                <nav className="flex flex-col p-4 space-y-4">
                    {["Home", "About Us", "Sample Report", "Window Sticker", "Learn More", "Contact Us"].map(
                        (link, index) => (
                            <Link
                                key={index}
                                to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                                className="text-lg font-medium hover:text-teal-400"
                            >
                                {link.toUpperCase()}
                            </Link>
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

            {/* Background Overlay */}
            {isSidebarOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" onClick={() => setIsSidebarOpen(false)}></div>
            )}
        </div>
    );
};

export default Navbar;
