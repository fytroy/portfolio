import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ai-banking-analyst",
    companyName: "AI Banking Analyst",
    type: "Personal",
    category: ["Data Analytics", "Machine Learning", "Business Intelligence"],
    shortDescription: "Generative AI application analyzing professional-grade Tier 1 Banking Data Warehouse.",
    websiteLink: "https://github.com/fytroy/AI-BankingAnalyst-TexttoSQL-0.2",
    githubLink: "https://github.com/fytroy/AI-BankingAnalyst-TexttoSQL-0.2",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    startDate: new Date("2024-01-01"), // Approximate date
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/bankinwarehouse2.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This project demonstrates the creation and deployment of a Generative AI application capable of analyzing a complex, professional-grade Tier 1 Banking Data Warehouse.",
        "The AI acts as an Intelligent Analyst, translating complex business questions asked in natural language (English) directly into executable MS-SQL queries, running them against the database, and then synthesizing the results into clear, decisive business insights.",
        "The entire solution is built on a custom Star Schema with over 115,000 synthetic records across 12 tables, simulating a real-world banking environment.",
      ],
      bullets: [
        "Translates natural language to MS-SQL queries.",
        "Synthesizes results into business insights.",
        "Built on a custom Star Schema with 115,000+ records.",
      ],
    },
  },
  {
    id: "financial-data-pipeline",
    companyName: "Financial Data Pipeline",
    type: "Personal",
    category: ["Data Analytics", "Backend", "Open Source"],
    shortDescription: "Data pipeline that extracts, transforms, and loads financial data from web scraping and APIs.",
    websiteLink: "https://github.com/fytroy/Automated_Currency_Exchange_Rate_ETL_Pipeline",
    githubLink: "https://github.com/fytroy/Automated_Currency_Exchange_Rate_ETL_Pipeline",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/bankinwarehouse3.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This project is a data pipeline that extracts, transforms, and loads financial data from two main sources: Web Scraping: It scrapes financial news articles related to cybersecurity from American Banker. API Extraction: It fetches the latest USD exchange rates from the Frankfurter API.",
        "The collected data is then processed and can be loaded into a data warehouse, such as Google BigQuery, for further analysis.",
      ],
      bullets: [
        "Scrapes financial news.",
        "Fetches exchange rates via API.",
        "Loads data into BigQuery.",
      ],
    },
  },
  {
    id: "banking-data-warehouse",
    companyName: "Banking Data Warehouse",
    type: "Personal",
    category: ["Data Analytics", "Business Intelligence"],
    shortDescription: "Comprehensive data warehouse solution for a banking institution.",
    websiteLink: "https://github.com/fytroy/BankingDataWarehouseProject",
    githubLink: "https://github.com/fytroy/BankingDataWarehouseProject",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/bankinwarehouse.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This project is a comprehensive data warehouse solution for a banking institution, designed to provide insights into transactional data, support fraud detection, and facilitate operational reporting.",
      ],
      bullets: [
        "Provides insights into transactional data.",
        "Supports fraud detection.",
        "Facilitates operational reporting.",
      ],
    },
  },
  {
    id: "customer-segmentation",
    companyName: "Customer Segmentation",
    type: "Personal",
    category: ["Data Analytics", "Machine Learning"],
    shortDescription: "E-commerce analysis for sales forecasting and customer segmentation.",
    websiteLink: "https://github.com/fytroy/ecommerce_analysis",
    githubLink: "https://github.com/fytroy/ecommerce_analysis",
    techStack: ["Python", "Pandas", "Scikit-learn", "Data Storytelling"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/customer_segmentation.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This project leverages Python (Pandas, Scikit-learn) to conduct comprehensive e-commerce analysis. It processes transactional data for sales forecasting, product performance, and customer segmentation.",
        "Key Insight: Identified high-value customer groups using clustering for targeted marketing strategies.",
      ],
      bullets: [
        "Sales forecasting.",
        "Product performance analysis.",
        "Customer segmentation using clustering.",
      ],
    },
  },
  {
    id: "financial-visualization",
    companyName: "Financial Visualization",
    type: "Personal",
    category: ["Business Intelligence", "Data Analytics"],
    shortDescription: "Power BI dashboard demonstrating the full BI lifecycle.",
    websiteLink: "#", // Demo available
    githubLink: "",
    techStack: ["Power BI", "SQL", "Data Modeling", "DAX"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "", // No image provided in the portfolio summary except screenshot text
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A simulated project demonstrating the full BI lifecycle: defining metrics, writing optimized SQL queries and views, and building interactive Power BI dashboards to visualize monthly P&L and operational risk metrics.",
        "Focus: Real-time data integrity and executive reporting.",
      ],
      bullets: [
        "Full BI lifecycle demonstration.",
        "Optimized SQL queries and views.",
        "Interactive Power BI dashboards.",
      ],
    },
  },
  {
    id: "streamlit-dashboard",
    companyName: "Streamlit Dashboard",
    type: "Personal",
    category: ["Automation", "Web Dev"],
    shortDescription: "Streamlit application designed as a personal data hub with AI integration.",
    websiteLink: "https://github.com/fytroy/personal_dashboard",
    githubLink: "https://github.com/fytroy/personal_dashboard",
    techStack: ["Python", "Streamlit", "Google Gemini API", "API Integration"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/dashboard-screenshot.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A Streamlit application designed as a personal data hub. It integrates external APIs (CoinDesk, OpenWeather) and internal system data, featuring Google Gemini AI integration for automated news/document summarization.",
        "Impact: Centralized data access and improved information efficiency.",
      ],
      bullets: [
        "Integrates external APIs.",
        "Google Gemini AI integration.",
        "Automated news/document summarization.",
      ],
    },
  },
  {
    id: "compliance-reporter",
    companyName: "Compliance Reporter",
    type: "Personal",
    category: ["Automation", "Backend"],
    shortDescription: "Python script that automates the collection of critical Windows system metrics.",
    websiteLink: "https://github.com/fytroy/Daily_System_Reporter",
    githubLink: "https://github.com/fytroy/Daily_System_Reporter",
    techStack: ["Python", "psutil", "SMTP", "HTML Generation"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/system_report_output.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A Python script that automates the collection of critical Windows system metrics, generates a detailed, easily readable HTML report, and emails it (SMTP).",
        "This proactive monitoring tool ensures system health and facilitates timely regulatory compliance checks.",
      ],
      bullets: [
        "Automates collection of Windows system metrics.",
        "Generates HTML reports.",
        "Emails reports via SMTP.",
      ],
    },
  },
  {
    id: "system-monitoring",
    companyName: "System Monitoring Utility",
    type: "Personal",
    category: ["Automation", "Backend"],
    shortDescription: "Python command-line application logging real-time system activity.",
    websiteLink: "https://github.com/fytroy/network_monitor",
    githubLink: "https://github.com/fytroy/network_monitor",
    techStack: ["Python", "psutil", "SQLite", "CLI"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/sqlite_log.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A Python command-line application that uses `psutil` to log and monitor real-time system activity (network traffic, resource usage) into an SQLite database.",
        "This demonstrates foundational data collection, logging, and storage principles crucial for enterprise monitoring.",
      ],
      bullets: [
        "Logs real-time system activity.",
        "Uses SQLite for storage.",
        "Demonstrates data collection principles.",
      ],
    },
  },
  {
    id: "drive-sync",
    companyName: "Google Drive Sync",
    type: "Personal",
    category: ["Automation", "Backend"],
    shortDescription: "Python script utilizing the Google Drive API for data backup.",
    websiteLink: "https://github.com/fytroy/drive_sync",
    githubLink: "https://github.com/fytroy/drive_sync",
    techStack: ["Python", "Google Drive API", "OAuth 2.0"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "https://fytroy.github.io/roygitonga.io/img/google_drive.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A Python script utilizing the Google Drive API to ensure continuous synchronization between a local folder and cloud storage.",
        "Impact: Automates critical data backup and integrity checks, essential for disaster recovery planning and data governance.",
      ],
      bullets: [
        "Continuous synchronization with Google Drive.",
        "Automates data backup.",
        "Uses OAuth 2.0.",
      ],
    },
  },
  {
    id: "terminal-rest-client",
    companyName: "Terminal REST Client",
    type: "Personal",
    category: ["Backend", "Web Dev"],
    shortDescription: "Terminal-based REST API client implemented in Python.",
    websiteLink: "https://github.com/fytroy/rest_client",
    githubLink: "https://github.com/fytroy/rest_client",
    techStack: ["Python", "Requests Library", "Command Line Interface"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "", // No image
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A simple, terminal-based REST API client implemented in Python (Requests Library). This tool allows for lightweight API testing and interaction directly from the command line, demonstrating competency in backend communication protocols.",
      ],
      bullets: [
        "Terminal-based REST API client.",
        "Lightweight API testing.",
        "Backend communication protocols.",
      ],
    },
  },
  {
    id: "shop-yetu3d",
    companyName: "SHOP YETU3D",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription: "Full-stack web application built with Python/Django for ordering 3D printed items.",
    websiteLink: "https://github.com/fytroy/3d_design_web",
    githubLink: "https://github.com/fytroy/3d_design_web",
    techStack: ["Python", "Django", "HTML/CSS"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "", // No image
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A full-stack web application built with Python/Django for ordering and requesting custom 3D printed items. Demonstrates database-driven development, user interaction handling, and payment gateway integration principles.",
      ],
      bullets: [
        "Built with Python/Django.",
        "Ordering system for 3D printed items.",
        "Payment gateway integration.",
      ],
    },
  },
  {
    id: "amarah-dhow",
    companyName: "AmarahDhow",
    type: "Personal",
    category: ["Frontend", "Web Dev"],
    shortDescription: "Front-end website showcasing trip booking and scheduling.",
    websiteLink: "https://github.com/fytroy/Amarah-dhow-website",
    githubLink: "https://github.com/fytroy/Amarah-dhow-website",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "", // No image
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A front-end website showcasing trip booking and scheduling for sailing in the Coast of Kenya. Focuses on responsive design and user experience using core web technologies.",
      ],
      bullets: [
        "Trip booking and scheduling.",
        "Responsive design.",
        "Core web technologies.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
