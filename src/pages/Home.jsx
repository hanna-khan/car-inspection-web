import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import ChooseUs from '../components/ChooseUs'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial.jsx'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <ChooseUs />
            <Pricing />
            <Testimonial />
        </>
    )
}

export default Home
