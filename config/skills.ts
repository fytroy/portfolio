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
    name: "Data Analysis & Data Modeling",
    description: "Deriving insights and structuring complex datasets.",
    rating: 5,
    icon: Icons.pieChart,
  },
  {
    name: "Financial Analysis & Forecasting",
    description: "Financial modeling and predictive analysis.",
    rating: 5,
    icon: Icons.billing,
  },
  {
    name: "Data Storytelling & Visualization",
    description: "Communicating insights through effective visualization.",
    rating: 5,
    icon: Icons.presentation,
  },
  {
    name: "ETL & Data Warehouse Concepts",
    description: "Extract, Transform, Load processes and warehousing.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "Microsoft Excel (Advanced)",
    description: "Advanced spreadsheet functions and data manipulation.",
    rating: 5,
    icon: Icons.post, // FileText as placeholder for Excel
  },

  // Databases & Data Warehousing
  {
    name: "SQL",
    description: "Query Optimization, Views, Stored Procedures.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "MySQL & MongoDB",
    description: "Relational and NoSQL database management.",
    rating: 4,
    icon: Icons.mongodb, // MongoDB icon for both or separate if preferred
  },
  {
    name: "Database Administration (Basic)",
    description: "User management, backup, and recovery.",
    rating: 3,
    icon: Icons.settings,
  },
  {
    name: "Data Integrity & Validation",
    description: "Ensuring accuracy and consistency of data.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "Data Engineering Principles",
    description: "Designing and building data pipelines.",
    rating: 4,
    icon: Icons.work,
  },

  // Programming & Automation
  {
    name: "Python",
    description: "Pandas, NumPy, Scikit-learn for data science.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "JavaScript / AngularJS",
    description: "Web development and frontend scripting.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "REST APIs & Integration",
    description: "Building and consuming APIs.",
    rating: 4,
    icon: Icons.link,
  },
  {
    name: "Process Automation",
    description: "Automating workflows with Power Apps and Python.",
    rating: 5,
    icon: Icons.zap, // Using Zap for automation
  },

  // Cloud & DevOps
  {
    name: "Oracle Cloud Infrastructure (OCI)",
    description: "Cloud services and architecture on OCI.",
    rating: 3,
    icon: Icons.cloud,
  },
  {
    name: "Amazon Web Services (AWS)",
    description: "AWS cloud services.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Git & Version Control",
    description: "Source code management and collaboration.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Docker & Containerization",
    description: "Containerizing applications for consistency.",
    rating: 3,
    icon: Icons.docker,
  },

  // IT Systems & Support
  {
    name: "Windows Server & Active Directory",
    description: "Server administration and AD management.",
    rating: 4,
    icon: Icons.server,
  },
  {
    name: "Network Troubleshooting",
    description: "TCP/IP, DNS, and connectivity issues.",
    rating: 4,
    icon: Icons.network,
  },
  {
    name: "ITIL Principles & Service Desk",
    description: "IT service management best practices.",
    rating: 4,
    icon: Icons.help,
  },
  {
    name: "System Hardening & Security",
    description: "Securing systems against vulnerabilities.",
    rating: 4,
    icon: Icons.security,
  },

  // Soft Skills
  {
    name: "Clear Communication",
    description: "Effective verbal and written communication.",
    rating: 5,
    icon: Icons.contact,
  },
  {
    name: "Problem Resolution",
    description: "Analytical thinking and troubleshooting.",
    rating: 5,
    icon: Icons.infoMark,
  },
  {
    name: "Cross-functional Collaboration",
    description: "Working effectively with diverse teams.",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "Adaptability & Learning",
    description: "Quickly learning new technologies and adapting.",
    rating: 5,
    icon: Icons.star,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 8); // Showing more featured skills
