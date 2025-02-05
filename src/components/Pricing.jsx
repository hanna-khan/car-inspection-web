import React from 'react';

const PricingCard = ({ title, description, price, originalPrice, discount, reports }) => {
    const features = [
        { text: `${reports} Vehicle Report${reports > 1 ? 's' : ''}` },
        { text: 'Instant Delivery' },
        { text: 'Global Data Sources' },
        { text: 'User-Friendly Interface' },
        { text: 'Detailed Vehicle Reports' },
    ];

    return (
        <div className="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 text-sm dark:text-gray-400">{description}</p>
            <div className="flex justify-center items-baseline my-4">
                <span className="mr-2 text-4xl font-extrabold">{price}</span>
                {originalPrice && (
                    <span className="text-md text-gray-500 dark:text-gray-400 line-through">{originalPrice}</span>
                )}
            </div>
            {discount && (
                <p className="text-green-500 font-semibold mb-3">🔥 {discount}</p>
            )}
            <ul role="list" className="mb-6 space-y-3 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                        <svg className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs px-4 py-2 text-center dark:focus:ring-primary-900">
                Get started
            </a>
        </div>
    );
};

const Pricing = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-14 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-10">
                    <h2 className="mb-3 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our <span className="text-[#818181]">PRICING</span>
                    </h2>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        Choose a plan that suits your needs and budget. Grab exclusive discounts for a limited time!
                    </p>
                </div>
                <div className="grid lg:grid-cols-3">
                    <PricingCard title="Basic" description="Perfect for individuals who need a single file." price="$30" originalPrice="$35" discount="Save $5" reports={1} />
                    <PricingCard title="Advance" description="Great for professionals who need up to 2 files." price="$45" originalPrice="$50" discount="Save $5 + 1 Extra File Free" reports={2} />
                    <PricingCard title="Premium" description="For businesses or individuals needing 2+ files." price="$75" originalPrice="$85" discount="Save $10 + Priority Support" reports={5} />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
