import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questionaire from "./Questionaire";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        vinNumber: "",
        packageType: "Basic",
    });

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.vinNumber.trim()) {
            toast.error("All fields are required!");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            toast.error("Enter a valid email address!");
            return false;
        }
        if (!/^\d{10,15}$/.test(form.phone)) {
            toast.error("Enter a valid phone number (10-15 digits)!");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        toast.success("Report Request Submitted!");
        setIsModalOpen(false);
        setForm({ name: "", email: "", phone: "", vinNumber: "", packageType: "Basic" });
    };

    return (
        <div className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-[80vh] z-10"
            style={{ backgroundImage: "url('./images/bg2.jpg')" }}
        >
            <div className="absolute inset-0 bg-overlay z-0"></div>
            <div className="relative mx-auto max-w-3xl flex flex-col items-center justify-center h-full z-20">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-background sm:text-5xl">
                        Welcome to <br />
                        <span className="text-white">PRO INSPECT AUTO</span>
                        <br />
                        <span className="text-textHover text-2xl font-semibold tracking-tight sm:text-3xl">
                            Your Trusted Car Inspection Service
                        </span>
                    </h1>
                    <p className="mt-4 text-[12px] text-background">
                        At PRO INSPECT AUTO, we ensure your vehicle is safe and roadworthy. Our certified inspectors use the latest technology for thorough inspections.
                    </p>
                    <div className="mt-8 flex gap-x-6">
                        <button
                            onClick={toggleModal}
                            className="rounded-md bg-secondary px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-accent"
                        >
                            Buy Report
                        </button>
                        <a
                            href="#"
                            className="rounded-md bg-accent px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-hoverBg"
                        >
                            About Us
                        </a>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
                    <Questionaire
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        toggleModal={toggleModal}
                    />
                </div>
            )}

            {/* VIN Input Card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] bg-secondary p-4 sm:p-6 rounded-xl shadow-xl w-4/5 lg:w-2/3 max-w-md flex flex-col sm:flex-row items-center gap-3 z-30">
                <input
                    type="text"
                    placeholder="Enter VIN Number"
                    value={form.vinNumber}
                    name="vinNumber"
                    onChange={handleChange}
                    className="flex-grow px-4 py-2 border rounded-lg focus:outline-none text-sm text-gray-700 placeholder-gray-400 w-full sm:w-auto"
                />
                <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-hoverBg text-sm w-full sm:w-auto"
                    onClick={toggleModal}
                >
                    Enter
                </button>
            </div>


            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Hero;
