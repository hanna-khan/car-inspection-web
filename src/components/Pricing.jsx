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
        <div className="flex flex-col p-6 mx-auto max-w-md w-full text-center bg-background border border-gray-300 shadow-md transition-all duration-300 hover:bg-secondary hover:text-white">
            <h3 className="mb-3 text-2xl font-bold">{title}</h3>
            <p className="font-light text-gray-600 text-sm hover:text-white">{description}</p>
            <div className="flex justify-center items-baseline my-4">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                {originalPrice && (
                    <span className="text-md text-gray-400 line-through">{originalPrice}</span>
                )}
            </div>
            {discount && (
                <p className="text-green-500 font-semibold mb-3">🔥 {discount}</p>
            )}
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
            <a href="#" className="text-white bg-primary px-6 py-3 font-medium hover:bg-primary-dark transition-all duration-300">
                Get Started
            </a>
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
                    <PricingCard title="Basic" description="Perfect for individuals who need a single file." price="$30" originalPrice="$35" discount="Save $5" reports={1} />
                    <PricingCard title="Advance" description="Great for professionals who need up to 2 files." price="$45" originalPrice="$50" discount="Save $5 + 1 Extra File Free" reports={2} />
                    <PricingCard title="Premium" description="For businesses or individuals needing 2+ files." price="$75" originalPrice="$85" discount="Save $10 + Priority Support" reports={5} />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
