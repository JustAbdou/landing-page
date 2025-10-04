import React, { useEffect, useRef } from 'react';
import { FiCheckCircle, FiUsers, FiSliders, FiThermometer } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import ImageSlider from './ImageSlider';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const featuresRef = useRef<HTMLDivElement>(null);
    
    // Array of app screenshot images - Dashboard first, then other features
    const appImages = [
        '/images/Dashboard.jpg', // 1st
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 15.54.49.png', // 2nd
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 15.55.33.png', // 3rd
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 14.57.41.png', // 4th
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 14.57.59.png', // 5th
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 14.58.40.png', // 6th
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 14.58.24.png', // 7th
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 14.59.47.png', // rest
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 15.00.12.png', // rest
        '/images/Simulator Screenshot - iPhone 16 Plus - 2025-10-04 at 15.56.47.png', // rest
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const featureItems = entry.target.querySelectorAll('li');
                        featureItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('animate-fade-in');
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (featuresRef.current) {
            observer.observe(featuresRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-48 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-modern relative overflow-hidden"
        >
            {/* Enhanced Background Elements with better positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 sm:top-40 sm:left-40 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Badge with better responsive design */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 sm:mb-8 animate-fade-in">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-primary">Join 500+ Professional Kitchens</span>
                </div>

                {/* Enhanced responsive typography */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground max-w-6xl mx-auto leading-tight animate-fade-in px-4"
                >
                    {heroDetails.heading.split(' ').map((word, i) =>
                        i === heroDetails.heading.split(' ').length - 1 ? (
                            <span key={i} className="gradient-text-blue">{word}</span>
                        ) : (
                            <span key={i}>{word} </span>
                        )
                    )}
                </h1>

                <p
                    className="mt-6 sm:mt-8 mx-auto leading-relaxed text-foreground-accent max-w-3xl text-lg sm:text-xl md:text-2xl animate-fade-in px-4"
                    style={{ animationDelay: '0.2s' }}
                >
                    {heroDetails.subheading}
                </p>

                {/* Enhanced rating display */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-8 mb-8 sm:mb-12 animate-fade-in px-4"
                    style={{ animationDelay: '0.4s' }}
                >
                    <span className="text-yellow-400 flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-yellow-200'} size={20} />
                        ))}
                    </span>
                    <span className="text-foreground-accent text-lg sm:text-xl font-semibold sm:ml-4">Rated 4.9/5 by 200+ chefs</span>
                </div>

                {/* Enhanced CTA buttons with better responsive layout */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full animate-fade-in px-4"
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                        <AppStoreButton />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                        <PlayStoreButton />
                    </div>
                </div>
            </div>

            {/* Mobile-first layout for features and image */}
            <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Mobile: Image slider first, then text */}
                <div className="lg:hidden w-full flex justify-center mb-8">
                    <div className="animate-fade-in w-full max-w-[280px] sm:max-w-[320px]">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-modern-lg border-4 border-gray-300 inline-block transform hover:scale-105 transition-transform duration-300 w-full">
                            <ImageSlider 
                                images={appImages}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div
                    ref={featuresRef}
                    className="max-w-2xl w-full text-center animate-fade-in"
                    style={{ animationDelay: '0.8s' }}
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                        Your Kitchen,{' '}
                        <span className="gradient-text-blue">At a Glance</span>
                    </h3>

                    {/* Show all features on both mobile and desktop */}
                    <ul className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 text-center lg:text-left">
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiCheckCircle className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Recipe Library</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Access and update recipes with photos and videos.</div>
                            </div>
                        </li>
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiThermometer className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Temperature Records</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Log fridge, delivery, cooking, and reheating temperatures.</div>
                            </div>
                        </li>
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiUsers className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Team Activity Feed</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Know who did what, and when.</div>
                            </div>
                        </li>
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiSliders className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Prep & Order Lists</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Create, assign, and track prep and order lists for every shift.</div>
                            </div>
                        </li>
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiCheckCircle className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Shift Handover Notes</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Smoothly transition between shifts with digital handover logs.</div>
                            </div>
                        </li>
                        <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <div className="bg-primary/20 p-2 sm:p-3 rounded-2xl border border-primary/10 flex-shrink-0">
                                <FiUsers className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="font-bold text-foreground text-base sm:text-lg">Real-Time Alerts</span>
                                <div className="text-foreground-accent text-sm sm:text-base mt-1">Get notified instantly about critical updates and issues.</div>
                            </div>
                        </li>
                    </ul>

                </div>
                {/* Desktop: Image slider on the right */}
                <div
                    className="hidden lg:block mt-8 sm:mt-12 lg:mt-0 animate-fade-in w-full max-w-[250px]"
                    style={{ animationDelay: '1s' }}
                >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-3 shadow-modern-lg border-4 border-gray-300 inline-block transform hover:scale-105 transition-transform duration-300 w-full">
                        <ImageSlider 
                            images={appImages}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
