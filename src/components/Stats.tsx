import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="section-padding bg-gradient-modern relative overflow-hidden">
            {/* Enhanced Background Elements with better responsive positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header with enhanced responsive design */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
                        Trusted by{' '}
                        <span className="gradient-text-blue">
                            Thousands
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground-accent max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
                        Join the growing community of professional kitchens that trust ChefFlow to streamline their operations.
                    </p>
                </div>

                {/* Enhanced Stats Grid with better responsive design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.title} 
                            className="group animate-fade-in hover-lift"
                            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-modern border border-white/20 hover:shadow-modern-lg transition-all duration-500 group-hover:bg-white/90 h-full">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 sm:mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <div className="text-2xl sm:text-3xl">
                                                {stat.icon}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3 sm:mb-4">
                                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text-blue group-hover:scale-105 transition-transform duration-300 block">
                                            {stat.title}
                                        </span>
                                    </div>
                                    
                                    <p className="text-foreground-accent text-base sm:text-lg leading-relaxed font-medium">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Trust Indicators with better responsive design */}
                <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-modern border border-white/20 inline-block w-full max-w-4xl">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-foreground-accent">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                                <span className="font-semibold text-base sm:text-lg">4.9/5 Rating</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-semibold text-base sm:text-lg">500+ Active Kitchens</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                                <span className="font-semibold text-base sm:text-lg">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats