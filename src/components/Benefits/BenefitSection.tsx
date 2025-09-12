"use client"
import React from "react";
import Image from "next/image";

import { IBenefit } from "@/types";
import BenefitBullet from "./BenefitBullet";

interface IBenefitSectionProps {
    benefit: IBenefit;
    index: number;
}

const BenefitSection: React.FC<IBenefitSectionProps> = ({ benefit, index }) => {
    // Alternate image position: even indices (0, 2, 4...) have image on right, odd indices (1, 3, 5...) have image on left
    const imageOnRight = index % 2 === 0;
    
    return (
        <section className="relative overflow-hidden">
            {/* Enhanced Background Elements with better responsive positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`lg:flex items-center gap-8 sm:gap-12 lg:gap-16 ${imageOnRight ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Compact Image Section */}
                    <div className={`lg:w-2/5 mb-8 sm:mb-12 lg:mb-0 animate-fade-in ${imageOnRight ? '' : 'lg:order-2'}`}>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 sm:p-3 shadow-modern-lg border-4 border-gray-300 inline-block transform hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0 w-full max-w-[200px] lg:max-w-[250px]">
                            <Image
                                src={benefit.imageSrc}
                                alt={benefit.title}
                                width={200}
                                height={150}
                                className="w-full h-auto rounded-2xl object-cover"
                                priority={index < 2} // Prioritize first two images
                            />
                        </div>
                    </div>

                    {/* Content Section with more compact layout */}
                    <div className={`lg:w-3/5 animate-fade-in ${imageOnRight ? '' : 'lg:order-1'}`} style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                            {benefit.title.split(' ').map((word, i) => 
                                i === benefit.title.split(' ').length - 1 ? (
                                    <span key={i} className="gradient-text-blue">{word}</span>
                                ) : (
                                    <span key={i}>{word} </span>
                                )
                            )}
                        </h2>
                        
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {benefit.description}
                        </p>
                        
                        <div className="space-y-4 sm:space-y-6">
                            {benefit.bullets.map((bullet, bulletIndex) => (
                                <BenefitBullet
                                    key={bullet.title}
                                    title={bullet.title}
                                    description={bullet.description}
                                    icon={bullet.icon}
                                    index={bulletIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;