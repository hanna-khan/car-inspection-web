import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

const SampleReport = () => {
    const pdfUrl = "/pdf/sample-report.pdf"; // Public folder ka path

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'sample-report.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Header title="Sample Report" backgroundImage={"url('./images/about-bg.jpg')"} />
            <div className="px-6 py-6 lg:px-20">
                <Breadcrumb menuTitle="Sample Report" />
                
                <div className="mt-6 flex justify-end">
                    <button 
                        onClick={handleDownload} 
                        className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                    >
                        <FaDownload /> Download Report
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Preview Report</h2>
                    <iframe 
                        src={pdfUrl} 
                        className="w-full h-[600px] border rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default SampleReport;
