"use client";
import React from 'react';
import { benefits } from '@/data/benefits';
import BenefitSection from './BenefitSection';

const Benefits: React.FC = () => {
    return (
        <div id="features" className="relative">
            <h2 className="sr-only">Features</h2>
            {benefits.map((item, index) => (
                <div key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gradient-modern'}>
                    <div className="py-8 sm:py-12 lg:py-16">
                        <BenefitSection benefit={item} index={index} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Benefits;