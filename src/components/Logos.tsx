import React from "react";

const Logos: React.FC = () => {
    const logos = [
        { name: "Franco Manca", delay: 0 },
        { name: "Dishoom", delay: 0.1 },
        { name: "Honest Burgers", delay: 0.2 },
        { name: "Gail's Bakery", delay: 0.3 },
        { name: "Wagamama", delay: 0.4 },
        { name: "Itsu", delay: 0.5 },
    ];

    return (
        <section id="logos" className="section-padding-sm bg-gradient-modern border-y border-gray-200/50 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-1/4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={logo.name}
                            className="group animate-fade-in hover-lift"
                            style={{ animationDelay: `${logo.delay}s` }}
                        >
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-modern border border-white/20 hover:shadow-modern-lg transition-all duration-500 group-hover:bg-white/80 h-20 flex items-center justify-center">
                                <span className="text-lg lg:text-xl font-bold tracking-wide text-gray-700 group-hover:text-primary transition-all duration-300 cursor-pointer group-hover:scale-110">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-12 lg:mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="inline-flex items-center gap-6 text-foreground-accent">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm font-medium">ISO 27001 Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm font-medium">SOC 2 Type II</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos