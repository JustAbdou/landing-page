import React from "react";

interface IBenefitBulletProps {
    title: string;
    description: string;
    icon: JSX.Element;
    index: number;
}

const BenefitBullet: React.FC<IBenefitBulletProps> = ({ title, description, icon, index }) => {
    return (
        <div 
            className="group animate-fade-in hover-lift"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-modern border border-white/20 hover:shadow-modern-lg transition-all duration-500 group-hover:bg-white/80">
                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-primary/10">
                        <div className="text-base sm:text-lg">
                            {icon}
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h4>
                        <p className="text-foreground-accent leading-relaxed text-xs sm:text-sm mt-1">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitBullet;