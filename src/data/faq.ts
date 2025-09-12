import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: "Absolutely. All your kitchen data is encrypted and securely stored. Only your team can access your records.",
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: "Yes! ChefFlow works seamlessly across smartphones, tablets, and computers. Your team can log in from any device.",
    },
    {
        question: "Can I customise checklists and logs for my kitchen?",
        answer: "Definitely! You can create, edit, and assign custom checklists, logs, and order lists to fit your kitchen's needs.",
    },
    {
        question: "Is ChefFlow suitable for small restaurant groups?",
        answer: "ChefFlow is designed for both single-location kitchens and groups with up to 10 locations. Manage all your sites from one dashboard.",
    },
    {
        question: "What if my team needs help using the app?",
        answer: "We offer in-app tutorials, a knowledge base, and responsive support to help your team get the most out of ChefFlow. For direct assistance, email us at contact@chefflowapp.net.",
    }
];