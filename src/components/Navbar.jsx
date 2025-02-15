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
        <div className="bg-background shadow-md relative">
            {/* Top Section */}
            <div className="hidden lg:flex justify-between items-center px-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="./images/logo3-no-bg.png" alt="Logo" className="h-[6rem]" />
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-10 text-textPrimary">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>CALL US</span>
                        </div>
                        <p className="text-textSecondary">+1209-734-0181</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>SEND US A MAIL</span>
                        </div>
                        <p className="text-textSecondary">billing@vinsolutionsdna.com</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <MdPhoneIphone size={20} />
                            <span>OUR ADDRESS</span>
                        </div>
                        <p className="text-textSecondary">
                            Washington, DC 20006, United States
                        </p>
                    </div>
                </div>

                {/* Contact Us Button */}
                <button className="bg-primary text-white px-8 py-4 rounded hover:bg-hoverBg">
                    CONTACT US
                </button>
            </div>

            {/* Bottom Section */}
            <div className="bg-secondary text-white">
                <div className="flex justify-between items-center lg:px-6 px-4 py-4">
                    <div className="lg:hidden flex items-center">
                        <img src="./images/logo-new.png" alt="Logo" className="h-[4rem]" />
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
                className={`z-10 fixed top-0 left-0 h-full w-64 bg-secondary text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
                    <img src="./images/logo-new.png" alt="Logo" className="h-24" />
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
