import React from "react";

import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section-padding bg-gradient-modern relative overflow-hidden">
            {/* Enhanced Background Elements with better responsive positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20 animate-fade-in">
                    <h2 className="my-3 !leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        What Our{' '}
                        <span className="gradient-text-blue">Customers</span>{' '}
                        Say
                    </h2>
                    <p className="text-foreground-accent text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-6">
                        Join hundreds of restaurants that have transformed their operations with ChefFlow
                    </p>
                </div>

                {/* Enhanced responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="group animate-fade-in hover-lift"
                            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-modern border border-white/20 hover:shadow-modern-lg transition-all duration-500 group-hover:bg-white/90 relative overflow-hidden h-full">
                                {/* Quote icon with responsive sizing */}
                                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary/20 text-4xl sm:text-6xl font-bold group-hover:opacity-30 transition-opacity duration-300">
                                    "
                                </div>

                                <div className="relative z-10">
                                    <p className="text-foreground-accent text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                                        "{testimonial.message}"
                                    </p>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="relative">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={64}
                                                height={64}
                                                className="rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300 w-12 h-12 sm:w-16 sm:h-16"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 bg-success rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-bold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors duration-300 truncate">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-foreground-accent text-sm font-medium truncate">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Testimonials;
