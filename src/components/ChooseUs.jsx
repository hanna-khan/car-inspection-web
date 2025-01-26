import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { IoPieChartOutline } from "react-icons/io5";
import { RiExchangeLine } from "react-icons/ri";
import { CiTrophy } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";



const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex text-3xl justify-center items-center mb-4 w-16 h-16  bg-[#45a29e]">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    );
};

const ChooseUs = () => {
    const features = [
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

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mb-8 lg:mb-16 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        WHY CHOOSE US?
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Here at Flowbite we focus on markets where technology, innovation.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 place-items-center">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
