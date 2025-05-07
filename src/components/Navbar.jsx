import React, { useState } from "react";
import { MdPhoneIphone, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // For Learn More dropdown
    const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false);  // For Policy sub-dropdown

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-background shadow-md relative">
            {/* Top Section */}
            <div className="hidden lg:flex justify-between items-center px-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                        <img src="./images/logoo.png" alt="Logo" className="h-[6rem]" />
                    </Link>

                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-8 text-textPrimary">
                    {/* Email */}
                    <div className="flex items-start gap-3 min-w-[250px]">
                        <div className="bg-primary text-white p-2 rounded-full">
                            <MdOutlineMailOutline size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">SEND US A MAIL</span>
                            <p className="text-textSecondary text-sm">contact@proinspectautos.com</p>
                        </div>
                    </div>

                    {/* Offices */}
                    <div className="flex items-start gap-3 min-w-[250px]">
                        <div className="bg-primary text-white p-2 rounded-full">
                            <FaLocationDot size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">OUR OFFICE</span>
                            <p className="text-textSecondary text-sm">
                            824 Stockport Rd, Levenshulme, Manchester, UK
                            </p>
                        </div>
                    </div>
                </div>


                {/* Contact Us Button */}
                <Link to="/contactus" className="bg-primary text-white px-8 py-4 rounded hover:bg-hoverBg inline-block">
                    CONTACT US
                </Link>

            </div>

            {/* Bottom Section */}
            <div className="bg-secondary text-white">
                <div className="flex justify-between items-center lg:px-6 px-4 py-4">
                    <div className="lg:hidden flex items-center">
                        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                            <img src="./images/nobglogoo.png" alt="Logo" className="h-[4rem]" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
                        {["Home", "About Us", "Sample Report", "Window Sticker", "Contact us"].map(
                            (link, index) => (
                                <Link
                                    key={index}
                                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                                    className="text-sm font-medium hover:text-textHover"
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
                            <button className="text-sm font-medium hover:text-textHover flex items-center">
                                LEARN MORE
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 w-48 bg-hoverBg text-white shadow-lg rounded-lg z-20">
                                    <Link to="/privacypolicy" className="block px-4 py-2 border-b-2 border-gray-700">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/terms&conditions" className="block px-4 py-2 border-b-2 border-gray-700">
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
                className={`h-full z-50 fixed left-0 w-64 bg-secondary text-white shadow-lg transition-all duration-300 ${isSidebarOpen ? "top-0 opacity-100" : "-top-full opacity-0"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                        <img src="./images/nobglogoo.png" alt="Logo" className="h-24" />
                    </Link>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <MdClose size={24} className="text-white" />
                    </button>
                </div>


                {/* Sidebar Navigation Links */}
                <nav className="flex flex-col p-4 space-y-4">
                    {["Home", "About Us", "Sample Report", "Window Sticker", "Privacy policy", "Terms & Conditions", "FAQ", "Contact Us"].map(
                        (link, index) => (
                            <Link
                                key={index}
                                to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                                className="text-md font-medium hover:text-textHover"
                            >
                                {link.toUpperCase()}
                            </Link>
                        )
                    )}
                </nav>

            </div>

            {/* Background Overlay */}
            {isSidebarOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" onClick={() => setIsSidebarOpen(false)}></div>
            )}
        </div>
    );
};

export default Navbar;
