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
    category: ["Data Analytics", "Machine Learning"],
    shortDescription: "Generative AI application translating English business questions into MS-SQL queries for a Banking Data Warehouse.",
    websiteLink: "https://github.com/fytroy/AIBankingAnalyst.TexttoSQL0.2",
    githubLink: "https://github.com/fytroy/AIBankingAnalyst.TexttoSQL0.2",
    techStack: ["Python", "SQL", "Machine Learning"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/apex/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A Generative AI application that translates English business questions into MS-SQL queries for a Banking Data Warehouse.",
      ],
      bullets: [
        "Translates natural language to SQL.",
        "Targeted for Banking Data Warehouses.",
      ],
    },
  },
  {
    id: "financial-analysis-project",
    companyName: "Financial Analysis Project",
    type: "Personal",
    category: ["Data Analytics", "Business Intelligence"],
    shortDescription: "Financial analysis project with data drills.",
    websiteLink: "https://github.com/fytroy/FinancialAnalysisProject.mavenanalytics.io_data_drills",
    githubLink: "https://github.com/fytroy/FinancialAnalysisProject.mavenanalytics.io_data_drills",
    techStack: ["Python", "Data Analysis"],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/builtdesign/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Comprehensive financial analysis project focusing on data drills and insights.",
      ],
      bullets: [
        "Financial data analysis.",
        "Data drilling techniques.",
      ],
    },
  },
  {
    id: "banking-data-warehouse",
    companyName: "Banking Data Warehouse",
    type: "Personal",
    category: ["Data Analytics", "Business Intelligence"],
    shortDescription: "Data warehouse project for banking data.",
    websiteLink: "https://github.com/fytroy/BankingDataWarehouseProject",
    githubLink: "https://github.com/fytroy/BankingDataWarehouseProject",
    techStack: ["Python", "SQL"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-10-31"),
    companyLogoImg: "/projects/cirql/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A project centered around building and managing a data warehouse for banking institutions.",
      ],
      bullets: [
        "Data warehousing.",
        "Banking sector focus.",
      ],
    },
  },
  {
    id: "customer-churn-prediction",
    companyName: "Customer Churn Prediction",
    type: "Personal",
    category: ["Machine Learning", "Data Analytics"],
    shortDescription: "Pipeline for predicting customer churn.",
    websiteLink: "https://github.com/fytroy/CustomerChurnPredictionPipeline",
    githubLink: "https://github.com/fytroy/CustomerChurnPredictionPipeline",
    techStack: ["Python", "Machine Learning"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-07"),
    companyLogoImg: "/projects/hindi-keyboard/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "An end-to-end pipeline for predicting customer churn using machine learning techniques.",
      ],
      bullets: [
        "Churn prediction.",
        "Pipeline architecture.",
      ],
    },
  },
  {
    id: "traffic-controller-docker",
    companyName: "Traffic Controller Docker",
    type: "Personal",
    category: ["Automation", "Backend"],
    shortDescription: "Dockerized traffic controller application.",
    websiteLink: "https://github.com/fytroy/TrafficController.docker",
    githubLink: "https://github.com/fytroy/TrafficController.docker",
    techStack: ["Docker", "Python"],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2026-01-02"),
    companyLogoImg: "/projects/supercareer/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A containerized application for controlling traffic, likely network or request traffic, using Docker.",
      ],
      bullets: [
        "Docker containerization.",
        "Traffic control logic.",
      ],
    },
  },
  {
    id: "ecommerce-pipeline",
    companyName: "Ecommerce Pipeline",
    type: "Personal",
    category: ["Data Analytics", "Backend"],
    shortDescription: "Data pipeline for e-commerce data.",
    websiteLink: "https://github.com/fytroy/EcommercePipeline",
    githubLink: "https://github.com/fytroy/EcommercePipeline",
    techStack: ["Python", "Data Analysis"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-14"),
    companyLogoImg: "/projects/superquotes/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "ETL pipeline designed to process and analyze e-commerce data.",
      ],
      bullets: [
        "E-commerce data processing.",
        "ETL pipeline.",
      ],
    },
  },
  {
    id: "stock-price-predictor",
    companyName: "Stock Price Predictor",
    type: "Personal",
    category: ["Machine Learning", "Data Analytics"],
    shortDescription: "Machine learning model to predict stock prices.",
    websiteLink: "https://github.com/fytroy/StockPricePredictor",
    githubLink: "https://github.com/fytroy/StockPricePredictor",
    techStack: ["Python", "Machine Learning"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-21"),
    companyLogoImg: "/projects/card/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A project utilizing machine learning algorithms to forecast stock prices based on historical data.",
      ],
      bullets: [
        "Stock price forecasting.",
        "Machine learning models.",
      ],
    },
  },
  {
    id: "copilot-codespaces-vscode",
    companyName: "Copilot Codespaces VSCode",
    type: "Personal",
    category: ["Open Source"],
    shortDescription: "Forked repo: Develop with AI-powered code suggestions using GitHub Copilot and VS Code.",
    websiteLink: "https://github.com/fytroy/copilot-codespaces-vscode",
    githubLink: "https://github.com/fytroy/copilot-codespaces-vscode",
    techStack: ["Javascript"],
    startDate: new Date("2024-10-11"),
    endDate: new Date("2024-10-11"),
    companyLogoImg: "/projects/builtdesign-blogs/logo.png", // Placeholder
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A forked repository demonstrating how to develop with AI-powered code suggestions using GitHub Copilot and VS Code.",
      ],
      bullets: [
        "GitHub Copilot integration.",
        "VS Code environment.",
        "AI-powered development.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
