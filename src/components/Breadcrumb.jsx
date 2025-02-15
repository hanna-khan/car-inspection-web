import React from 'react'

const Breadcrumb = (props: any) => {
    const { menuTitle } = props;
    return (
        <>
            {/* Breadcrumb */}
            <div className="text-lg font-semibold text-secondary mb-6 pb-4 border-b-2">
                <span className="text-accent cursor-pointer">Home</span> &gt; <span>{menuTitle}</span>
            </div>
        </>
    )
}

export default Breadcrumb
