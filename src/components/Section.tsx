import React from "react";

interface SectionProps {
    id: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children }) => {
    return (
        <section id={id} className="py-16 lg:py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{title}</h2>
                <p className="text-xl text-foreground-accent max-w-3xl mx-auto">{description}</p>
            </div>
            {children}
        </section>
    );
};

export default Section;