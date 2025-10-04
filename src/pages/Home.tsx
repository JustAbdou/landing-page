import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <FAQ />
            <Stats />
            <CTA />
        </>
    );
};

export default Home;
