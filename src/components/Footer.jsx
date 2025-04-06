import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-10 px-4 lg:px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <Link to="/">
                        <img src="./images/nobglogoo.png"
                            alt="PRO INSPECT AUTO Logo"
                            className="mb-4 w-36"
                        />
                    </Link>

                    <p className="text-sm text-accent">
                        At PRO INSPECT AUTO, we are dedicated to ensuring your vehicle is safe, reliable, and roadworthy. With years of experience in the automotive industry, our certified inspectors use the latest technology and techniques to provide thorough inspections.
                    </p>
                </div>

                {/* Registered By */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">REGISTERED BY</h3>
                    <div className="border-b-2 border-accent w-12 mb-4"></div>
                    <div className="grid grid-cols-2 gap-2">
                        {["logo1", "logo2", "logo3", "logo4"].map((logo, index) => (
                            <img
                                key={index}
                                src={`/images/${logo}.png`}
                                alt={`Registered Logo ${index + 1}`}
                                className="h-16"
                            />
                        ))}
                    </div>
                </div>

                {/* Learn More */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">LEARN MORE</h3>
                    <div className="border-b-2 border-accent w-12 mb-4"></div>
                    <ul className="space-y-2 text-white">
                        {[
                            "About Us",
                            "Sample Report",
                            "FAQ",
                            "Privacy Policy",
                            "Terms & Conditions",
                        ].map((item) => (
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

                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <div className="border-b-2 border-accent w-12 mb-4"></div>

                    {/* Email */}
                    <div className="flex items-start mb-6">
                        <MdOutlineEmail size={22} className="mt-1 mr-3" />
                        <div>
                            <p className="font-bold text-sm">EMAIL</p>
                            <p className="text-sm">contact@proinspectautos.com</p>
                        </div>
                    </div>

                    {/* Our Offices */}
                    <div className="mb-3">
                        <p className="font-bold text-sm mb-2">OUR OFFICES</p>
                        <div className="space-y-2">
                            {[
                                {
                                    title: "UK",
                                    address:
                                        "Near Levenshulme Methodist Church, 824 Stockport Rd, Levenshulme, Manchester M19 3AW, United Kingdom",
                                },
                                {
                                    title: "CANADA",
                                    address:
                                        "Lane North Woburn West Jedburgh, Toronto, ON, Canada",
                                },
                                {
                                    title: "AUSTRALIA",
                                    address: "1 Goodsell St, St Peters NSW 2044, Australia",
                                },
                                {
                                    title: "NEW ZEALAND",
                                    address:
                                        "45 Peachgrove Road, Hamilton East, Hamilton 3216, New Zealand",
                                },
                                {
                                    title: "KENYA",
                                    address: "Mojwa Road, Mitunguu South Imenti, Kenya",
                                },
                                {
                                    title: "USA",
                                    address: "1632 Toyon Via, California",
                                },
                            ].map((office, index) => (
                                <div key={index} className="text-sm text-white ">
                                    <span className="block font-semibold text-accent text-[13px] mb-0.5">
                                        {office.title}
                                    </span>
                                    <span className="text-[12px] leading-snug block">{office.address}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            {/* Footer Bottom Links */}
            <div className="mt-8 border-t border-accent pt-4 text-center text-sm text-accent flex flex-col md:flex-row justify-between">
                <p>© Copyright 2024</p>
                <ul className="flex gap-3 mt-2 md:mt-0">
                    {["About Us", "FAQ", "Contact Us"].map((item) => (
                        <li key={item}>
                            <Link
                                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                                className="hover:text-textHover"
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
