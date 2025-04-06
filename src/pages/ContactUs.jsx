import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim() || !form.number.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("All fields are required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (!/^\d+$/.test(form.number)) {
      toast.error("Phone number must be numeric");
      return false;
    }

    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch(`${process.env.REACT_APP_BASE_API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        toast.success("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(`Failed to send message: ${err.message}`);
      });
  };



  return (
    <>
      <ToastContainer />
      <Header title="Contact us" backgroundImage={"url('./images/about-bg.jpg')"} />
      <div className="px-2 py-6 lg:px-20">
        <Breadcrumb menuTitle="Contact us" />
        <div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-2/3 flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-secondary mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-[#818181]"
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      placeholder="Your Email Id"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-[#818181]"
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    />
                    <input
                      type="text"
                      name="number"
                      value={form.number}
                      placeholder="Phone"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-[#818181]"
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      placeholder="Subject"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-[#818181]"
                      onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    />
                  </div>
                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    placeholder="Your Message..."
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-[#818181]"
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                  ></textarea>
                  <button
                    onClick={submitForm}
                    className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-2 lg:p-8 w-full lg:w-1/3 lg:overflow-y-auto lg:max-h-[500px]">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions, simply use the following contact details.
              </p>
              <div className="space-y-4">
                {/* USA Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">USA OFFICE:</p>
                    <p className="text-gray-800">1632 Toyon Via, California</p>
                  </div>
                </div>

                {/* UK Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">UK OFFICE:</p>
                    <p className="text-gray-800">
                      Near Levenshulme Methodist Church, 824 Stockport Rd, Levenshulme, Manchester M19 3AW, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Canada Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">CANADA OFFICE:</p>
                    <p className="text-gray-800">
                      Lane North Woburn West Jedburgh, Toronto, ON, Canada
                    </p>
                  </div>
                </div>

                {/* Australia Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">AUSTRALIA OFFICE:</p>
                    <p className="text-gray-800">
                      1 Goodsell St, St Peters NSW 2044, Australia
                    </p>
                  </div>
                </div>

                {/* New Zealand Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">NEW ZEALAND OFFICE:</p>
                    <p className="text-gray-800">
                      45 Peachgrove Road, Hamilton East, Hamilton 3216, New Zealand
                    </p>
                  </div>
                </div>

                {/* Kenya Office */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">KENYA OFFICE:</p>
                    <p className="text-gray-800">
                      Mojwa Road, Mitunguu South Imenti, Kenya
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-1 text-2xl">
                    <MdOutlineMailOutline />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">EMAIL:</p>
                    <p className="text-gray-800">contact@proinspectautos.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
