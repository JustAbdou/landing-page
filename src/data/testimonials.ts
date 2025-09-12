import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Marco Rossi',
        role: 'Head Chef, Trattoria Bella',
        message: `${siteDetails.siteName} has made our daily kitchen paperwork effortless. Fridge logs, cleaning checks, and handovers are all in one place. My team loves it!`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sophie Dubois',
        role: 'Owner, Le Petit Bistro',
        message: `ChefFlow keeps my small restaurant group organised and compliant. The weekly reports and digital checklists save us hours every week.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'James Lee',
        role: 'Kitchen Manager, Urban Eats',
        message: `Switching to ChefFlow was a game changer. The recipe library and prep lists make onboarding new staff so much easier.`,
        avatar: '/images/testimonial-3.webp',
    },
];