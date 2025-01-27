import React from 'react'

const Header = (props: any) => {
    const { backgroundImage, title } = props;
    return (
        <>
            <div
                className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-[40vh]  md:h-[50vh]"
                style={{
                    backgroundImage: backgroundImage ,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative flex flex-col justify-center h-full z-20 px-6 lg:px-20">
                    <h1 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-5xl">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Header
