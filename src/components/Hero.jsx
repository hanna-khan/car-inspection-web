import React from "react";

const Hero = () => {
    return (
        <>
            <div
                className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-screen"
                style={{
                    backgroundImage: "url('./images/bg2.jpg')", // Replace with the correct path
                }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative mx-auto max-w-2xl flex flex-col items-center justify-center h-full z-20">
                    <div className="">
                        <h1 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-5xl">
                            A Better Alternative to <br />
                            <span className="text-[#45a29e]">
                                Carfax for Used Car Records
                            </span>
                        </h1>
                        <p className="mt-8 text-pretty text-[12px] text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                            autem iure perspiciatis qui laboriosam eum facere tempora et
                            impedit itaque soluta eius, architecto, est numquam minus dicta
                            atque ea reprehenderit pariatur esse recusandae animi expedita
                            doloremque. Adipisci rem in totam ipsam laboriosam. Quas, soluta.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-[#45a29e] px-4 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-[#45a29dae]"
                            >
                                Buy Report
                            </a>
                            <a
                                href="#"
                                className="rounded-md bg-[#2d3239] px-4 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-[#2d3239b4]"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
