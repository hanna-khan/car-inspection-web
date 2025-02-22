import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaCar, FaRoad } from 'react-icons/fa';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

const SampleReport = () => {
    const [activeTab, setActiveTab] = useState('CARFAX');

    return (
        <>
            <Header title="Sample Report" backgroundImage={"url('./images/about-bg.jpg')"} />
            <div className="px-6 py-6 lg:px-20">
                <Breadcrumb menuTitle="Sample Report" />
               
            </div>
        </>
    );
};

export default SampleReport;
