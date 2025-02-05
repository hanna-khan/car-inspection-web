import React from 'react';

import { featuresChooseUs } from '../utils/Data';


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
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 place-items-center justify-center items-center">
                    {featuresChooseUs.map((feature, index) => (
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
