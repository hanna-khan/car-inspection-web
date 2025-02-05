import React, { useState } from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { faqs } from '../utils/Data';
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <Header title="FAQ" backgroundImage={"url('./images/about-bg.jpg')"} />
            <div className="px-6 py-6 lg:px-20 mb-10">
                <Breadcrumb menuTitle="FAQ" />
                <div className=" mx-auto">
                    <h2 className="text-2xl font-bold mb-4">General Questions</h2>
                    <p className="text-gray-600 mb-6">Find answers to common inquiries about our vehicle history report services below.</p>
                    <div className="border rounded-md divide-y">
                        {faqs.map((faq, index) => (
                            <div key={index} className="">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full text-left px-4 py-3 focus:outline-none"
                                >
                                    <div className='flex gap-4'>
                                        <span>
                                            <FaQuestionCircle className='mt-2' color='#3d474a' />
                                        </span>
                                        <span
                                            className={`text-md font-medium ${openIndex === index ? 'text-[#45a29e]' : 'text-gray-700 hover:text-[#45a29e]'}`}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div>
                                        {openIndex === index ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 py-3 bg-white text-gray-700 border-t">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
