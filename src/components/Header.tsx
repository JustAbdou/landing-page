import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";

import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-modern border-b border-gray-200/50"
            : "bg-white/80 backdrop-blur-sm shadow-sm"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
                    {/* Logo with enhanced responsive design */}
                    <a href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="relative">
                            <img
                                src="/images/logo.png"
                                width={40}
                                height={40}
                                alt="ChefFlow logo"
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {siteDetails.siteName}
                        </h1>
                    </a>

                    {/* Desktop Navigation with enhanced spacing */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.text}
                                href={item.url}
                                className="font-semibold transition-all duration-300 hover:text-primary hover:scale-105 text-foreground-accent relative group"
                            >
                                {item.text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/#cta"
                            className="btn-primary text-sm px-6 h-12"
                        >
                            Download
                        </a>
                    </nav>

                    {/* Mobile Menu Button with enhanced touch target */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 text-foreground-accent hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
                    </button>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-modern-lg border border-gray-200/50 mb-6 animate-fade-in mobile-menu">
                        <nav className="py-6 sm:py-8 px-4 sm:px-6 space-y-1">
                            {menuItems.map((item, index) => (
                                <a
                                    key={item.text}
                                    href={item.url}
                                    className="block text-foreground-accent font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.text}
                                </a>
                            ))}

                            <div className="pt-4 sm:pt-6 border-t border-gray-200/50 mt-4 sm:mt-6">
                                <a
                                    href="/#cta"
                                    className="block w-full text-center btn-primary text-sm px-6 h-12"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Download
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
