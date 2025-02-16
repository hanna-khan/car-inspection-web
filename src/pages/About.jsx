import React from 'react';
import TestimonialSection from '../components/Testimonial';
import { stats, features } from '../utils/Data';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {

  return (
    <>
      <Header title="About us" backgroundImage={"url('./images/about-bg.jpg')"} />
      <div className="px-6 py-6 lg:px-20">
        <Breadcrumb menuTitle="About us" />
        <h1 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
          WELCOME TO <span className="text-accent">ABOUT PRO INSPECT AUTO</span>
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed max-w-screen-lg">
          <p>
            At VIN Solution DNA, we specialize in delivering comprehensive vehicle history reports that empower our
            customers to make well-informed decisions. Whether you’re buying, selling, or simply curious about your
            vehicle's past, our services provide the clarity and transparency you need. We understand the importance of
            knowing a vehicle’s history, which is why we gather data from reliable and trusted sources globally. This
            ensures that you receive the most accurate and up-to-date information available.
          </p>

          <p>
            Our reports cover a wide range of details, including accident history, ownership records, maintenance logs,
            and more. We aim to leave no stone unturned in our quest to provide you with a complete picture of your
            vehicle's past. This thorough approach helps you avoid potential pitfalls, such as undisclosed damage or
            hidden issues, saving you time, money, and hassle in the long run.
          </p>

          <p>
            At VIN Solution DNA, our mission is to unlock the secrets of your vehicle’s history, giving you the confidence
            and peace of mind you deserve. Our user-friendly website and instant report delivery make it easy for you to
            access the information you need, when you need it. Trust us to be your partner in making smart and informed
            vehicle-related decisions.
          </p>
        </div>
      </div>
      <div className="px-6 py-12 lg:px-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 text-center">
          OUR <span className="text-accent">FEATURES</span>
        </h1>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 space-x-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0 text-secondary">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* // stats section */}
      <div
        className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center py-4"
        style={{
          backgroundImage: "url('./images/about-bg2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10 w-full">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center border border-white p-6 bg-transparent hover:shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4 text-white">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-center text-sm text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialSection />
    </ >
  );
};

export default About;
