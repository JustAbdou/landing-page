import { FiThermometer, FiCheckSquare, FiList, FiBookOpen, FiRepeat, FiAlertCircle, FiBarChart2 } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Fridge & Delivery Temperature Logs",
        description: "Log and monitor fridge, freezer, and delivery temperatures with a tap. Stay compliant and audit-ready.",
        bullets: [
            {
                title: "Quick Logging",
                description: "Record temperatures in seconds, with photo support.",
                icon: <FiThermometer size={26} className="text-blue-600" />
            },
            {
                title: "Alerts & Reminders",
                description: "Get notified if a log is missed or out of range.",
                icon: <FiAlertCircle size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Fridge Temp Logs.jpg"
    },
    {
        title: "Cleaning Checklists",
        description: "Digitise daily, weekly, and custom cleaning routines. Track completion and accountability.",
        bullets: [
            {
                title: "Custom Schedules",
                description: "Set up recurring tasks for your team.",
                icon: <FiCheckSquare size={26} className="text-blue-600" />
            },
            {
                title: "Photo Proof",
                description: "Require photo sign-off for critical tasks.",
                icon: <FiBookOpen size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Cleaning Checklist.png"
    },
    {
        title: "Prep & Order Lists",
        description: "Create, assign, and track prep and order lists for every shift. Never miss an item again.",
        bullets: [
            {
                title: "Live Updates",
                description: "See real-time progress as your team checks off items.",
                icon: <FiList size={26} className="text-blue-600" />
            },
            {
                title: "Supplier Integration",
                description: "Export order lists directly to your suppliers.",
                icon: <FiRepeat size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Prep Lists.png"
    },
    {
        title: "Recipe Library",
        description: "Store, share, and update recipes with photos and videos. Standardise prep across your team.",
        bullets: [
            {
                title: "Photo & Video Support",
                description: "Attach step-by-step visuals to every recipe.",
                icon: <FiBookOpen size={26} className="text-blue-600" />
            },
            {
                title: "Easy Search",
                description: "Find any recipe in seconds, from any device.",
                icon: <FiBarChart2 size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Recipe Detail.jpg"
    },
    {
        title: "Kitchen Handovers & No's/Low's Tracking",
        description: "Smooth shift changes with digital handover notes and real-time No's/Low's tracking.",
        bullets: [
            {
                title: "Handover Notes",
                description: "Log shift issues, prep status, and important updates.",
                icon: <FiRepeat size={26} className="text-blue-600" />
            },
            {
                title: "No's & Low's",
                description: "Track out-of-stock or low-stock items instantly.",
                icon: <FiAlertCircle size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Handover.jpg"
    },
    {
        title: "Weekly Reports & Downloads",
        description: "Export logs, checklists, and reports for compliance or management review.",
        bullets: [
            {
                title: "PDF & CSV Export",
                description: "Download all records for audits or weekly reviews.",
                icon: <FiBarChart2 size={26} className="text-blue-600" />
            }
        ],
        imageSrc: "/images/Invoices Downloads.jpg"
    }
]