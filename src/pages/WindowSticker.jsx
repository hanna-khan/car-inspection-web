import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'

const WindowSticker = () => {
    return (
        <>
            <Header title="Window sticker" backgroundImage={"url('./images/about-bg.jpg')"} />
            <div className="px-6 py-6 lg:px-20">
                <Breadcrumb menuTitle="Window sticker" />
                <div className='flex flex-col lg:flex-row justify-between w-full items-center'>
                    <div className='w-full lg:w-[50%] mb-6 lg:mb-0'>
                        <h1 className="text-3xl font-bold text-gray-800 my-6">What is a Window Sticker?
                        </h1>

                        <div className="space-y-6 text-gray-700 leading-relaxed max-w-screen-lg">
                            <p>
                                A window sticker is mandated for display on all new cars in the U.S. It provides essential information about the car, its manufacturer along with the features, options (optional equipment) & packages it comes with. The label is typically placed on the side window or windshield of a car, usually on the driver’s side.
                            </p>
                            <p>
                                Following the Automobile Information Disclosure Act of 1958 led by Oklahoma senator Mike Monroney, the NHTSA and EPA updated the rule in May 2011, mandating the new label for 2013 models and above to include an estimate of fuel or electricity consumption for 100 miles, thus providing a clue of the fuel consumption per distance traveled. This update is especially crucial for electric, plug-in hybrids, hydrogen fuel cell, flexible-fuel, and natural gas vehicles manufactured in the United States.
                            </p>
                            <button className="bg-[#45a29e] text-white px-4 py-2 rounded hover:bg-teal-600">
                                Get your window sticker
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[40%]'>
                        <img
                            className=''
                            src="./images/window-sticker.webp" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 my-6">
                        Breakdown of an Original Window Sticker
                    </h1>
                    <div className='flex justify-center items-center'>
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/2Rm880rAtSA?si=WbsFtiXiUFwEPDY2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WindowSticker