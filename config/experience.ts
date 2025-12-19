import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gab-officer",
    position: "Data Analytics Officer",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Managed and optimized ETL processes.",
      "Designed Power Apps solutions.",
      "Performed comprehensive data analysis.",
    ],
    achievements: [
      "Managed and optimized ETL (Extract, Transform, Load) processes to ensure the timely and accurate delivery of data for reporting and analysis.",
      "Designed and built Power Apps solutions to streamline operations and automate workflows across different bank departments.",
      "Performed comprehensive data analysis to identify trends, forecast performance, and support strategic planning.",
      "Translated raw banking data into actionable visualizations, supporting executive decisions on P&L and risk.",
      "Developed and maintained the foundational data layer (views) used for major Power BI dashboards across the bank.",
      "Partnered with business units to define requirements and deliver custom Power BI solutions for performance tracking.",
      "Led the end-to-end data visualization process, from requirement gathering to dashboard creation.",
    ],
    skills: ["Power BI", "SQL", "Python", "Data Analysis"],
    companyUrl: "https://gulfafricanbank.com",
    // logo: "/experience/gab-logo.png", // Removed broken logo
  },
  {
    id: "gab-intern-engineer",
    position: "Data Analytics Engineer Intern",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Built Microsoft PowerApps solutions.",
      "Designed interactive Power BI dashboards.",
      "Integrated Power BI with MySQL servers.",
    ],
    achievements: [
      "Built Microsoft PowerApps solutions to streamline branch-level processes, improving efficiency and user experience across bank operations.",
      "Designed and developed interactive Power BI dashboards to visualize key financial and operational metrics, enabling data-driven decision-making.",
      "Gained hands-on experience in integrating Power BI dashboards with MySQL servers, ensuring seamless data connectivity and real-time reporting.",
    ],
    skills: ["Power BI", "MySQL", "Power Apps"],
    companyUrl: "https://gulfafricanbank.com",
    // logo: "/experience/gab-logo.png",
  },
  {
    id: "gab-intern-support",
    position: "IT Support Specialist Intern",
    company: "Gulf African Bank",
    location: "Nairobi, Kenya",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-07-01"),
    description: [
      "Provided end-user support.",
      "Delivered on-site and remote technical support.",
      "Assisted in maintenance of enterprise systems.",
    ],
    achievements: [
      "Provided responsive end-user support and resolved technical issues to ensure smooth day-to-day operations across banking systems.",
      "Delivered on-site and remote technical support for hardware, software, and peripheral devices across multiple departments.",
      "Assisted in the maintenance, configuration, and monitoring of enterprise systems including core banking applications and business information systems.",
      "Contributed to network troubleshooting and supported RESTful services in the organization’s internal applications.",
      "Supported the IT Service Desk by handling incident reports, logging issues, and escalating where necessary to improve resolution times.",
      "Participated in routine system updates, patching, and maintenance tasks, improving system performance and uptime.",
    ],
    skills: ["IT Support", "Networking", "System Admin"],
    companyUrl: "https://gulfafricanbank.com",
    // logo: "/experience/gab-logo.png",
  },
  {
    id: "voi-winners",
    position: "Office Accountant & IT Assistant",
    company: "Voi Winners Housing Cooperative Society Limited",
    location: "Voi, Kenya",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Managed daily financial operations.",
      "Oversaw real estate property management.",
      "Led IT infrastructure management.",
    ],
    achievements: [
      "Managed daily financial operations, including ledger reconciliation, billing, and budgeting processes.",
      "Oversaw real estate property management tasks, coordinating tenant interactions and lease documentation.",
      "Handled client liaison and customer service, addressing inquiries and providing administrative support to senior management.",
      "Led the IT infrastructure management for the cooperative, including network setup, administration, and hardware/software support.",
      "Designed and implemented digital communication strategies to improve engagement and streamline internal operations.",
      "Proactively troubleshot and resolved IT issues, ensuring minimal downtime and enhancing system reliability for daily business functions.",
    ],
    skills: ["Financial Analysis", "IT Support", "Management"],
    companyUrl: "",
    // logo: "/experience/voi-logo.png",
  },
  {
    id: "numeral-iot",
    position: "Junior Software Developer Intern",
    company: "Numeral IoT Limited",
    location: "Kenya",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-10-01"),
    description: [
      "Developed web applications using AngularJS.",
      "Managed web hosting environments using cPanel.",
      "Provided website maintenance and technical support.",
    ],
    achievements: [
      "Developed web applications using AngularJS, ensuring responsive and user-friendly interfaces.",
      "Installed, configured, and maintained Windows Server environments to support business operations.",
      "Managed web hosting environments using cPanel, including domain and email configurations.",
      "Provided ongoing website maintenance and technical support to ensure optimal performance and uptime.",
      "Performed hardware diagnostics, repairs, and general computer maintenance.",
      "Supported system-level troubleshooting, configuration, and optimization for enhanced reliability and performance.",
    ],
    skills: ["Angular", "Windows Server", "cPanel"],
    companyUrl: "https://numeraliot.com",
    // logo: "/experience/numeral-logo.png",
  },
];
