import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Analytics & Business Intelligence
  {
    name: "Power BI",
    description: "Advanced Dashboarding & DAX for actionable insights.",
    rating: 5,
    icon: Icons.barChart,
  },
  {
    name: "Data Analysis",
    description: "Deriving insights from complex datasets.",
    rating: 5,
    icon: Icons.pieChart,
  },
  {
    name: "Financial Analysis",
    description: "Forecasting and financial modeling.",
    rating: 4,
    icon: Icons.billing,
  },
  // Databases
  {
    name: "SQL",
    description: "Query Optimization, Views, Stored Procedures.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "MySQL",
    description: "Relational database management.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible data storage.",
    rating: 3,
    icon: Icons.mongodb,
  },
  // Programming & Automation
  {
    name: "Python",
    description: "Pandas, NumPy, Scikit-learn for data science.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Javascript",
    description: "Scripting for web and automation.",
    rating: 4,
    icon: Icons.javascript,
  },
  // Cloud & DevOps
  {
    name: "AWS",
    description: "Cloud infrastructure and services.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Git",
    description: "Version control and collaboration.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Docker",
    description: "Containerization for consistent deployment.",
    rating: 3,
    icon: Icons.docker,
  },
  // IT Systems
  {
    name: "Windows Server",
    description: "Server management and Active Directory.",
    rating: 4,
    icon: Icons.html5, // Still using html5 as placeholder for Windows Server, maybe add Windows icon later if available, but html5 is safe for now
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
