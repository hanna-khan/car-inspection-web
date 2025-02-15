import React from "react";

const Hero = () => {
    return (
        <div
            className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-[80vh] "
            style={{
                backgroundImage: "url('./images/bg2.jpg')",
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-overlay z-10"></div>

            <div className="relative mx-auto max-w-3xl flex flex-col items-center justify-center h-full z-20">
                <div>
                    <h1 className="text-balance text-2xl font-semibold tracking-tight text-background sm:text-5xl">
                        Welcome to {" "} <br />
                        <span className="text-white">
                            PRO INSPECT AUTO
                        </span>
                        <br />
                        <span className="text-textHover text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                            Your Trusted Car Inspection Service
                        </span>
                    </h1>
                    <p className="mt-4 text-pretty text-[12px] text-background">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        autem iure perspiciatis qui laboriosam eum facere tempora et
                        impedit itaque soluta eius, architecto, est numquam minus dicta
                        atque ea reprehenderit pariatur esse recusandae animi expedita
                        doloremque. Adipisci rem in totam ipsam laboriosam. Quas, soluta.
                    </p>
                    <div className="mt-8 flex gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-secondary px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-accent"
                        >
                            Buy Report
                        </a>
                        <a
                            href="#"
                            className="rounded-md bg-accent px-4 py-2 text-[12px] font-semibold text-background shadow-sm hover:bg-hoverBg"
                        >
                            About Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
