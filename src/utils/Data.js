import { AiOutlineLike } from "react-icons/ai";
import { IoPieChartOutline } from "react-icons/io5";
import { RiExchangeLine } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { FaFileAlt, FaHeadset, FaGlobe, FaTrophy, FaCarCrash, FaMobileAlt, FaUser } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";
import { CiSettings, CiTrophy } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { IoBarChartOutline } from "react-icons/io5";

export const welcomeData = [
    {
      title: "COMPREHENSIVE REPORTS",
      description:
        "Access detailed reports that cover everything from accident history. We leave no stone unturned in delivering the information you need.",
      icon: <CiSettings size={50} />,
    },
    {
      title: "FREE SUPPORT",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any questions or issues. We’re here to ensure your experience is hassle-free.",
      icon: <BiSupport size={50} />,
    },
    {
      title: "GLOBAL REACH",
      description:
        "Our extensive database pulls information from reliable sources worldwide, ensuring you receive the most accurate and up-to-date vehicle history available.",
      icon: <IoBarChartOutline size={50} />,
    },
    {
      title: "AFFORDABLE PRICING",
      description:
        "Get detailed vehicle history reports at competitive prices. We believe in providing value without compromising on quality or accuracy.",
      icon: <CiTrophy size={50} />,
    },
  ];

export const testimonials = [
    {
        id: 1,
        name: "David Matin",
        role: "Student",
        image: "./images/testimonial1.jpg",
        quote:
            "VIN Solution DNA saved me from buying a car with a hidden accident history. The report was detailed and easy to understand. Highly recommend!",
    },
    {
        id: 2,
        name: "Salva Morina",
        role: "Student",
        image: "./images/testimonial2.jpg",
        quote:
            "I was able to sell my car quickly because I had a full history report from VIN Solution DNA. The buyer was impressed with the transparency and accuracy.",
    },
    {
        id: 3,
        name: "John Doe",
        role: "Teacher",
        image: "./images/testimonial1.jpg",
        quote:
            "Using VIN Solution DNA gave me the confidence to make a smart purchase. The history report was incredibly detailed and easy to follow!",
    },
    {
        id: 4,
        name: "Emily Carter",
        role: "Designer",
        image: "./images/testimonial2.jpg",
        quote:
            "Thanks to VIN Solution DNA, I avoided buying a car with hidden damages. Their service is top-notch!",
    },
];

export const stats = [
    {
        id: 1,
        value: "9035",
        label: "Vehicle Reports Delivered",
        icon: <MdOutlineFolderCopy />, // Replace with an actual icon library if needed
    },
    {
        id: 2,
        value: "25",
        label: "Global Data Sources",
        icon: <IoBarChart />,
    },
    {
        id: 3,
        value: "878",
        label: "Satisfied Customers",
        icon: <FaUser />,
    },
    {
        id: 4,
        value: "430",
        label: "Development Hours",
        icon: <TbClockHour4 />,
    },
];

export const features = [
    {
        icon: <FaFileAlt className="text-4xl text-[#45a29e]" />,
        title: "Comprehensive Reports",
        description:
            "Access detailed reports that cover everything from accident history. We leave no stone unturned in delivering the information you need.",
    },
    {
        icon: <FaHeadset className="text-4xl text-[#45a29e]" />,
        title: "Free Support",
        description:
            "Our dedicated customer support team is available 24/7 to assist you with any questions or issues. We’re here to ensure your experience hassle-free.",
    },
    {
        icon: <FaGlobe className="text-4xl text-[#45a29e]" />,
        title: "Global Reach",
        description:
            "Our extensive database pulls information from reliable sources worldwide, ensuring you receive the most accurate and up-to-date vehicle history available.",
    },
    {
        icon: <FaTrophy className="text-4xl text-[#45a29e]" />,
        title: "Affordable Pricing",
        description:
            "Get detailed vehicle history reports at competitive prices. We believe in providing value without compromising on quality or accuracy.",
    },
    {
        icon: <FaCarCrash className="text-4xl text-[#45a29e]" />,
        title: "Accident History",
        description:
            "Access detailed accident history and damage reports to make informed decisions about your vehicle.",
    },
    {
        icon: <FaMobileAlt className="text-4xl text-[#45a29e]" />,
        title: "User-Friendly Interface",
        description:
            "Our interface is designed for ease of use, delivering instant results for your convenience.",
    },
];

export const featuresChooseUs = [
    {
        title: 'Marketing',
        description:
            'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        icon: <AiOutlineLike />,
    },
    {
        title: 'Legal',
        description:
            'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        icon: <IoPieChartOutline />,
    },
    {
        title: 'Business Automation',
        description:
            'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
        icon: <RiExchangeLine />,
    },
    {
        title: 'Marketing',
        description:
            'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        icon: <CiTrophy />,
    },
    {
        title: 'Legal',
        description:
            'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        icon: <IoCarSportOutline />,
    },
    {
        title: 'Business Automation',
        description:
            'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
        icon: <CiSettings />,
    },
];