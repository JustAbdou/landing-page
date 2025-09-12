import React from "react";

const PlayStoreButton: React.FC = () => {
    return (
        <a
            href="https://play.google.com/store/apps/details?id=com.marux.chefflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 h-16 bg-black hover:bg-gray-900 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border border-gray-700 hover:border-gray-600"
        >
            <div className="flex flex-col items-start">
                <span className="text-xs opacity-80">GET IT ON</span>
                <span className="text-lg font-bold">Google Play</span>
            </div>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
        </a>
    );
};

export default PlayStoreButton;