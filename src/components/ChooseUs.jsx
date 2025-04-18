import React from 'react';

import { featuresChooseUs } from '../utils/Data';


const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex text-3xl justify-center items-center mb-4 w-16 h-16  bg-accent">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-accent  ">{description}</p>
        </div>
    );
};

const ChooseUs = () => {


    return (
        <section className="bg-white dark:bg-secondary">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mb-8 lg:mb-16 text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        WHY CHOOSE US?
                    </h1>
                    <p className="text-accent sm:text-xl  ">
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
