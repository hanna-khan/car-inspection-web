import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const TermsCondition = () => {
    return (
        <>
            <Header title="Terms & Conditions" backgroundImage={"url('./images/about-bg.jpg')"} />
            <div className="px-6 py-6 lg:px-20">
                <Breadcrumb menuTitle="Terms & Conditions" />
                <div className="mx-auto flex flex-col lg:flex-row gap-8 my-16">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms & Conditions</h2>
                        <p className="space-y-6 text-gray-600 leading-relaxed max-w-screen-md">
                            At VIN Solution DNA, we prioritize your privacy and are committed to protecting your personal information. Our Privacy & Policy page outlines how we collect, use, and safeguard your data. We collect information solely for the purpose of providing accurate and comprehensive vehicle history reports. This includes your name, contact information, and vehicle identification number (VIN). We employ advanced security measures to protect your data from unauthorized access, alteration, or disclosure. Your information is kept confidential and is not shared with third parties without your explicit consent, except as required by law. We also use cookies to enhance your browsing experience and gather usage statistics to improve our services. By using our website, you agree to the collection and use of your information as outlined in this policy. We may update our Privacy Policy periodically, and we encourage you to review it regularly. If you have any questions or concerns about our privacy practices, please contact our support team. Your trust is important to us, and we are committed to ensuring the privacy and security of your information.
                        </p>
                    </div>

                    {/* Quick Contact Section */}
                    <div className="w-full lg:w-1/3">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Contact us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-teal-600 text-white p-1 text-2xl">
                                    <CiLocationOn />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>ADDRESS:</p>
                                    <p className="text-gray-800">1901 Pennsylvania Avenue NW Suite 900, Washington, DC 20006, United States</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-teal-600 text-white p-1 text-2xl">
                                    <MdOutlineMailOutline />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>EMAIL:</p>
                                    <p className="text-gray-800">billing@vinsolutionsdna.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-teal-600 text-white p-1 text-2xl">
                                    <IoIosPhonePortrait />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>PHONE:</p>
                                    <p className="text-gray-800">+1 209-734-0181</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsCondition
