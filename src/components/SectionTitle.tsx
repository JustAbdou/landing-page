import React from "react";

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
    return (
        <div className={`text-center lg:text-left ${className}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4 animate-fade-in">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>ChefFlow</span>
            </div>
            {children}
        </div>
    );
};

export default SectionTitle;