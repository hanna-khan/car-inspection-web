import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import ChooseUs from '../components/ChooseUs'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <ChooseUs />
            <Pricing />
            <Footer />
        </>
    )
}

export default Home
