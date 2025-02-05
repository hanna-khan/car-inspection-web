import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <Header title="Contact us" backgroundImage={"url('./images/about-bg.jpg')"} />
      <div className="px-6 py-6 lg:px-20">
        <Breadcrumb menuTitle="Contact us" />
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message Us</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-teal-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Id"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-teal-500"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="Your Message..."
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-teal-500"
                ></textarea>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-5 w-5 border border-gray-300 rounded"
                    />
                    <label className="text-gray-600">I'm not a robot</label>
                  </div>
                  <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-600"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Quick Contact Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions, simply use the following contact details.
              </p>
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
        <div>
          <h1 className="text-balance text-3xl my-4 font-semibold tracking-tight text-black">
            Location
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

        </div>
      </div>
    </>
  )
}

export default ContactUs
