import React from "react";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-10 px-4 lg:px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <img
                        src="/images/logo-new.png"
                        alt="VIN Solution DNA Logo"
                        className="mb-4 w-36"
                    />
                    <p className="text-sm text-accent">
                        VIN Solution DNA specializes in comprehensive vehicle history reports, offering clarity and transparency for informed decision-making.
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
                            "Global Service Coverage",
                            "Privacy Policy",
                            "Terms & Conditions",
                            "Return Policy",
                        ].map((item) => (
                            <li
                                key={item}
                                className="hover:underline hover:text-textHover transition-colors cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                    <div className="border-b-2 border-accent w-12 mb-4"></div>
                    <ul className="space-y-3 text-white">
                        {[
                            {
                                icon: <CiLocationOn size={22} />,
                                label: "ADDRESS",
                                value: "1632 Toyon Via, California",
                            },
                            {
                                icon: <CiMobile4 size={22} />,
                                label: "PHONE",
                                value: "+1209-734-0181 (24/7 Support Line)",
                            },
                            {
                                icon: <MdOutlineEmail size={22} />,
                                label: "EMAIL",
                                value: "billing@vinsolutionsdna.com",
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex">
                                <div className="mt-2 mr-4">{item.icon}</div>
                                <div className="flex flex-col">
                                    <p className="font-bold">{item.label}</p>
                                    <p>{item.value}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-8 border-t border-accent pt-4 text-center text-sm text-accent flex flex-col md:flex-row justify-between">
                <p>© Copyright 2024</p>
                <ul className="flex gap-3 mt-2 md:mt-0">
                    {["About us", "FAQ", "Contact us"].map((item) => (
                        <li key={item} className="hover:text-textHover cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
