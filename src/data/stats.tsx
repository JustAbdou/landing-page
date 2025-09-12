import { BsCheck2Circle, BsFillStarFill } from "react-icons/bs";
import { PiTimerFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
        icon: <BsCheck2Circle size={34} className="text-green-600" />,
        description: "Checklists and logs completed every day by ChefFlow users."
    },
    {
        title: "99.9%",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Compliance rate achieved by kitchens using ChefFlow."
    },
    {
        title: "4h/wk",
        icon: <PiTimerFill size={34} className="text-blue-500" />,
        description: "Average time saved per kitchen per week by digitising paperwork."
    }
];