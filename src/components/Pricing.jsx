import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ title, description, originalPrice, reports }) => {
    const navigate = useNavigate();
    const features = [
        { text: `${reports} Vehicle Report${reports > 1 ? 's' : ''}` },
        { text: 'Instant Delivery' },
        { text: 'Global Data Sources' },
        { text: 'User-Friendly Interface' },
        { text: 'Detailed Vehicle Reports' },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        vinNumber: "",
        packageType: "Basic",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.number.trim() ||
            !form.vinNumber.trim()
        ) {
            toast.error("All fields are required!");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            toast.error("Enter a valid email address!");
            return false;
        }
        if (!/^\d{10,15}$/.test(form.number)) {
            toast.error("Enter a valid number (10-15 digits)!");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        toast.success("Report Request Submitted!");
        setIsModalOpen(false);
        setForm({
            name: "",
            email: "",
            number: "",
            vinNumber: "",
            packageType: "Basic",
        });
    };


    return (
        <div className="cursor-pointer flex flex-col p-6 mx-auto max-w-md w-full text-center bg-background border border-gray-300 shadow-md transition-all duration-300 hover:bg-secondary hover:text-white"
            onClick={() => navigate(`/questionnaire?package=${title}`)}
        >
            <h3 className="mb-3 text-2xl font-bold">{title}</h3>
            <p className="font-light text-gray-600 text-sm hover:text-white">{description}</p>
            <div className="flex justify-center items-baseline my-4">
                <span className="mr-2 text-5xl font-extrabold">{originalPrice}</span>
            </div>
            <ul role="list" className="mb-6 space-y-3 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="hover:text-white">{feature.text}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex justify-center ">
                <button
                    className="rounded-md bg-secondary px-4 py-2 text-[14px] font-semibold text-background hover:text-secondary shadow-sm hover:bg-white w-full"
                >
                    Buy now
                </button>
            </div>

            {/* {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
                    <Questionaire
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        toggleModal={toggleModal}
                    />
                </div>
            )} */}
            {/* <PaymentButtons amount={amount} /> */}
        </div>
    );
};

const Pricing = () => {
    return (
        <section className="bg-white">
            <div className="py-12 px-6 mx-auto max-w-screen-xl lg:py-16 lg:px-8">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h1 className="text-4xl font-bold text-secondary mb-4">
                        Our <span className="text-accent">PRICING</span>
                    </h1>
                    <p className="text-accent sm:text-xl">
                        Choose a plan that suits your needs and budget. Grab exclusive discounts for a limited time!
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    <PricingCard title="Basic" description="Perfect for individuals who need a single file." price="£30" originalPrice="£30" amount={30} discount="Save £5" reports={1} />
                    <PricingCard title="Advance" description="Great for professionals who need up to 2 files." price="$50" originalPrice="£50" amount={50} discount="Save £5 + 1 Extra File Free" reports={2} />
                    <PricingCard title="Premium" description="For businesses or individuals needing 2+ files." price="$100" originalPrice="£100" amount={100} discount="Save $10 + Priority Support" reports={5} />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
