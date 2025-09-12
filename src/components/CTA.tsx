"use client";
import React from "react";
import { ctaDetails } from "@/data/cta"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Enhanced background with animated elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_400px,#1e3a8a,transparent)]"></div>
                        
                        {/* Enhanced animated background elements with better responsive positioning */}
                        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                        <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-pink-500/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
                    </div>

                    <div className="relative z-10 text-white text-center py-16 sm:py-20 lg:py-32 px-4 sm:px-8">
                        {/* Badge with enhanced responsive design */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8 animate-fade-in">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-medium text-blue-100">Join 500+ Professional Kitchens</span>
                        </div>

                        <h2 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 max-w-5xl mx-auto leading-tight animate-fade-in px-4"
                        >
                            {ctaDetails.heading}
                        </h2>

                        <p 
                            className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 sm:mb-12 animate-fade-in px-4"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {ctaDetails.subheading}
                        </p>

                        {/* Enhanced Download Buttons with better responsive layout */}
                        <div 
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <div className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                                <AppStoreButton />
                            </div>
                            <div className="hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                                <PlayStoreButton />
                            </div>
                        </div>


                        {/* Enhanced Trust Indicators with better responsive design */}
                        <div className="mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-blue-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-sm sm:text-base">30-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-sm sm:text-base">No Credit Card Required</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-sm sm:text-base">Cancel Anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA