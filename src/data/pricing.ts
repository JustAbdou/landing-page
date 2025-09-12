import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 29,
        features: [
            'Up to 2 locations',
            'Unlimited checklists & logs',
            'Recipe library',
            'Basic reporting',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: 99,
        features: [
            'Up to 10 locations',
            'All Starter features',
            "No's & Low's tracking",
            'Supplier order exports',
            'Photo/video recipe support',
            'Priority support',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Unlimited locations',
            'All Pro features',
            'Custom integrations',
            'Dedicated onboarding',
            '24/7 support',
            'Compliance reporting',
        ],
    },
]