"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="section-padding bg-gradient-modern relative overflow-hidden">
            {/* Enhanced Background Elements with better responsive positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20">
                    {/* Left Column - Header with enhanced responsive design */}
                    <div 
                        className="lg:w-2/5 animate-fade-in"
                    >
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            Frequently Asked{' '}
                            <span className="gradient-text-blue">Questions</span>
                        </h2>
                        
                        <p className="lg:mt-6 sm:mt-8 text-foreground-accent text-center lg:text-left text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                            Ask us anything! We&apos;re here to help you get the most out of ChefFlow.
                        </p>
                        
                        <div className="text-center lg:text-left">
                            <a 
                                href="mailto:contact@chefflowapp.net" 
                                className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl text-primary font-bold hover:text-primary-dark transition-all duration-300 hover:scale-105 group"
                            >
                                <span className="underline decoration-dotted underline-offset-4">
                                    contact@chefflowapp.net
                                </span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - FAQ Items with enhanced responsive design */}
                    <div 
                        className="w-full lg:w-3/5 mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-modern border border-white/20 overflow-hidden animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200/50 last:border-b-0 animate-fade-in hover:bg-gray-50/30 transition-colors duration-300"
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-left transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20">
                                                <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 pr-4 sm:pr-6 leading-relaxed">
                                                    {faq.question}
                                                </span>
                                                <div className="flex-shrink-0">
                                                    <div className={`transition-all duration-300 ${open ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                                                        {open ? 
                                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                                                                <BiMinus className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                                                            </div> : 
                                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                <BiPlus className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 text-foreground-accent leading-relaxed">
                                                <div className="transition-all duration-300 text-base sm:text-lg">
                                                    {faq.answer}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQ;