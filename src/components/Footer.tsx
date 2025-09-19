import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <>
            <div className="border-t border-gray-200/50"></div>
            <footer className="bg-gradient-dark text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
                {/* Enhanced Background Elements with better responsive positioning */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
                        {/* Company Info with enhanced responsive design */}
                        <div className="lg:col-span-2 animate-fade-in">
                            <div className="hover:scale-105 transition-transform duration-300">
                                <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <Image 
                                        src="/images/logo.png" 
                                        width={50} 
                                        height={50} 
                                        alt="ChefFlow logo" 
                                        className="min-w-fit w-10 h-10 sm:w-12 sm:h-12 object-contain" 
                                    />
                                    <h3 className="manrope text-xl sm:text-2xl font-bold cursor-pointer text-white">
                                        {siteDetails.siteName}
                                    </h3>
                                </Link>
                            </div>
                            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md mb-6 sm:mb-8">
                                {footerDetails.subheading}
                            </p>
                        </div>


                        {/* Contact Info with enhanced responsive design */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contact Us</h4>

                            {footerDetails.email && (
                                <a 
                                    href={`mailto:${footerDetails.email}`}  
                                    className="block text-blue-100 hover:text-white transition-all duration-300 text-base sm:text-lg mb-3 sm:mb-4 font-medium hover:translate-x-2 group"
                                >
                                    <span className="group-hover:text-primary transition-colors duration-300">
                                        {footerDetails.email}
                                    </span>
                                </a>
                            )}

                            {footerDetails.telephone && (
                                <a 
                                    href={`tel:${footerDetails.telephone}`} 
                                    className="block text-blue-100 hover:text-white transition-all duration-300 text-base sm:text-lg mb-4 sm:mb-6 font-medium hover:translate-x-2 group"
                                >
                                    <span className="group-hover:text-primary transition-colors duration-300">
                                        {footerDetails.telephone}
                                    </span>
                                </a>
                            )}

                            {/* Enhanced Newsletter Signup with better responsive design */}
                            <div className="mt-6 sm:mt-8">
                                <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Stay Updated</h5>
                                <div className="flex gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                                    />
                                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Bottom Section with better responsive design */}
                    <div 
                        className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-gray-700/50 animate-fade-in"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                            <p className="text-blue-100 text-base sm:text-lg text-center lg:text-left">
                                Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-blue-200">
                                <Link href="/privacy" className="hover:underline hover:text-white transition-colors duration-300">Privacy Policy</Link>
                                <span className="hidden sm:block">•</span>
                                <Link href="/terms" className="hover:underline hover:text-white transition-colors duration-300">Terms of Service</Link>
                                <span className="hidden sm:block">•</span>
                                <Link href="/cookies" className="hover:underline hover:text-white transition-colors duration-300">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
