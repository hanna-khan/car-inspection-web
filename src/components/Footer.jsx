import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="col-span-1">
                    <Link to="/">
                        <img
                            src="./images/nobglogoo.png"
                            alt="PRO INSPECT AUTO Logo"
                            className="mb-6 w-36 transition-transform transform hover:scale-105"
                        />
                    </Link>
                    <p className="text-sm text-accent">
                        At PRO INSPECT AUTO, we are dedicated to ensuring your vehicle is safe, reliable, and roadworthy. With years of experience in the automotive industry, our certified inspectors use the latest technology and techniques to provide thorough inspections.
                    </p>
                </div>

                {/* Registered By and Learn More together */}
                <div className="flex flex-col col-span-1">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">REGISTERED BY</h3>
                        <div className="border-b-2 border-accent w-12 mb-6"></div>
                        <div className="grid grid-cols-2 gap-4">
                            {["logo1", "logo2", "logo3", "logo4"].map((logo, index) => (
                                <img
                                    key={index}
                                    src={`/images/${logo}.png`}
                                    alt={`Registered Logo ${index + 1}`}
                                    className="h-16 transition-all transform hover:scale-110"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Learn More */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">LEARN MORE</h3>
                        <div className="border-b-2 border-accent w-12 mb-6"></div>
                        <ul className="space-y-3 text-white">
                            {[ "About Us", "Sample Report", "FAQ", "Privacy Policy", "Terms & Conditions" ].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                                        className="hover:underline hover:text-textHover transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <div className="border-b-2 border-accent w-12 mb-6"></div>

                    {/* Email */}
                    <div className="flex items-start mb-6">
                        <MdOutlineEmail size={22} className="mt-1 mr-3 text-accent" />
                        <div>
                            <p className="font-bold text-sm">EMAIL</p>
                            <p className="text-sm">contact@proinspectautos.com</p>
                        </div>
                    </div>

                    {/* Our Offices */}
                    <div className="mb-6">
                        <div className="flex mb-6 items-center">
                            <CiLocationOn size={22} className="mt-1 mr-3 text-accent" />
                            <div>
                                <p className="font-bold text-sm">OUR OFFICES</p>
                            </div>
                        </div>
                        <div className="space-y-3 ml-2">
                            {[ 
                                { title: "UK", address: "Near Levenshulme Methodist Church, 824 Stockport Rd, Levenshulme, Manchester M19 3AW, United Kingdom" },
                                { title: "CANADA", address: "Lane North Woburn West Jedburgh, Toronto, ON, Canada" },
                                { title: "AUSTRALIA", address: "1 Goodsell St, St Peters NSW 2044, Australia" },
                                { title: "NEW ZEALAND", address: "45 Peachgrove Road, Hamilton East, Hamilton 3216, New Zealand" },
                                { title: "KENYA", address: "Mojwa Road, Mitunguu South Imenti, Kenya" },
                                { title: "USA", address: "1632 Toyon Via, California" },
                            ].map((office, index) => (
                                <div key={index} className="text-sm text-white">
                                    <span className="block font-semibold text-accent text-sm mb-1">
                                        {office.title}
                                    </span>
                                    <span className="text-sm leading-snug block">{office.address}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Links */}
            <div className="mt-12 border-t border-accent pt-6 text-center text-sm text-accent flex flex-col md:flex-row justify-between">
                <p>© Copyright 2024 PRO INSPECT AUTO. All Rights Reserved.</p>
                <ul className="flex gap-6 mt-4 md:mt-0">
                    {["About Us", "FAQ", "Contact Us"].map((item) => (
                        <li key={item}>
                            <Link
                                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="hover:text-textHover transition-colors"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
