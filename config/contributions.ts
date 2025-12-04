export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Associate Data Engineer",
    contibutionDescription: "DataCamp",
    repoOwner: "Data Engineering",
    link: "https://www.datacamp.com/certificate/DEA0018680202658",
  },
  {
    repo: "SQL Query Optimization",
    contibutionDescription: "Simplilearn",
    repoOwner: "Database Management",
    link: "https://certificates.simplicdn.net/share/8557381_87142531751456873978.pdf",
  },
  {
    repo: "AI Fluency: Framework",
    contibutionDescription: "Anthropic Education",
    repoOwner: "Artificial Intelligence",
    link: "https://verify.skilljar.com/c/ngm65svry48w",
  },
  {
    repo: "Model Context Protocol",
    contibutionDescription: "Anthropic Education",
    repoOwner: "Artificial Intelligence",
    link: "https://verify.skilljar.com/c/e9synyyswwz8",
  },
  {
    repo: "Generative AI Fundamentals",
    contibutionDescription: "Databricks Academy",
    repoOwner: "Artificial Intelligence",
    link: "https://credentials.databricks.com/f9ee6c6b-656c-4ed6-824b-35cc6de2c368",
  },
  {
    repo: "Data Analytics Essentials",
    contibutionDescription: "Cisco Academy",
    repoOwner: "Data Analytics",
    link: "https://www.credly.com/badges/a90d20ae-1029-407f-b2a0-0c4ddf7b0c65/",
  },
  {
    repo: "Power BI for Beginners",
    contibutionDescription: "Simplilearn",
    repoOwner: "Business Intelligence",
    link: "https://drive.google.com/file/d/1J-nCV80RxXlgP7b_zCMsITSDl3LT8aFy/view?usp=sharing",
  },
  {
    repo: "SQL for Data Analysis",
    contibutionDescription: "Simplilearn",
    repoOwner: "Data Analytics",
    link: "https://certificates.simplicdn.net/share/8556315_87142531751435958458.pdf",
  },
  {
    repo: "Python for Data Analysis",
    contibutionDescription: "Simplilearn",
    repoOwner: "Data Analytics",
    link: "https://certificates.simplicdn.net/share/8557221_87142531751445684306.pdf",
  },
  {
    repo: "OCI 2025 Architect Associate",
    contibutionDescription: "Oracle",
    repoOwner: "Cloud Computing",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=216749D1FE29A4A989E062CDE20E99B0DB89EFB67B2D979DAE4896C88B875F07",
  },
  {
    repo: "Investment Risk Management",
    contibutionDescription: "Coursera Project Network",
    repoOwner: "Finance",
    link: "https://www.coursera.org/account/accomplishments/verify/KG3NB8FWMB3X",
  },
  {
    repo: "CDMP - Associate",
    contibutionDescription: "Udemy Academy",
    repoOwner: "Data Management",
    link: "https://drive.google.com/file/d/1ObH4wdHq1NVnHWnnJv6NovZ3FVog-wve/view?usp=sharing",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
