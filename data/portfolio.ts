// All CV content structured for Netflix-style presentation

export interface HeroSlide {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cta: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  season: number;
  episode: number;
  thumbnail: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface ResearchPaper {
  id: string;
  rank: number;
  title: string;
  venue: string;
  year: number;
  thumbnail: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  season: number;
  detail: string;
  thumbnail: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  thumbnail: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  thumbnail: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: "The AI Practitioner",
    subtitle: "Currently building AI systems at Jaipuria Institute of Management",
    backgroundImage: "/images/hero-ai.svg",
    cta: "View Episodes",
  },
  {
    title: "The Researcher",
    subtitle: "9 papers. IIMs. IIT Kharagpur. From electoral bonds to hospitality AI.",
    backgroundImage: "/images/hero-research.svg",
    cta: "Explore Research",
  },
  {
    title: "The Engineer",
    subtitle: "IIT ISM Dhanbad. From circuits to code to business strategy.",
    backgroundImage: "/images/hero-engineer.svg",
    cta: "Origin Story",
  },
  {
    title: "The Analyst",
    subtitle: "Schneider Electric. Indian Bank. Power BI. Python. Real-world impact.",
    backgroundImage: "/images/hero-analyst.svg",
    cta: "See the Data",
  },
];

export const experiences: Experience[] = [
  {
    id: "jaipuria-ai",
    role: "Assistant Manager — AI Department",
    company: "Integral Education Society (Jaipuria Institute of Management)",
    type: "Full-time",
    period: "Aug 2025 — Present",
    season: 4,
    episode: 1,
    thumbnail: "/images/exp-jaipuria.svg",
    description: "Executive Assistant to VP (AI Initiatives), leading automation across academic, placement, and administrative workflows.",
    bullets: [
      "Design and manage AI-powered simulation environments modeled on HBS and leading case study pedagogies",
      "Provide strategic and operational support to the Vice President (AI Initiatives)",
      "Lead automation initiatives across academic, placement, and administrative workflows",
      "Manage billing, invoicing, and financial coordination with Finance team",
      "Oversee licensing and vendor coordination for AI tools and digital infrastructure",
      "Drive B2B sales and business development for AI-enabled solutions",
      "Conduct classes and workshops for students on AI tools and applied analytics",
      "Act as liaison between AI, academic, marketing, operations, and finance teams",
    ],
    tags: ["AI", "Automation", "B2B", "Leadership", "Workshops"],
  },
  {
    id: "tryrehearsal",
    role: "Product & Data Associate",
    company: "TryRehearsal.ai (Flagship AI Voice Interview Platform)",
    type: "Part-time",
    period: "2025 — Present",
    season: 4,
    episode: 2,
    thumbnail: "/images/exp-rehearsal.svg",
    description: "Managed product database and data pipelines for AI voice interview platform.",
    bullets: [
      "Managed product database and data pipelines, ensuring data integrity for analytics and model evaluation",
      "Supported product-market fit design and LLM-driven feature development",
      "Refined interview flows, scoring logic, prompt architectures, and evaluation rubrics",
    ],
    tags: ["LLMs", "Product", "Data Pipelines", "Voice AI"],
  },
  {
    id: "schneider",
    role: "Management Trainee",
    company: "Schneider Electric, Noida",
    type: "Full-time",
    period: "May — Aug 2025",
    season: 3,
    episode: 1,
    thumbnail: "/images/exp-schneider.svg",
    description: "Market analysis, Power BI dashboards, and Python forecasting models for sales teams.",
    bullets: [
      "Conducted market and sales analysis across multiple regional clusters",
      "Developed and maintained Power BI dashboards for real-time sales visibility",
      "Supported sales forecasting through Python-based analytical models",
      "Assisted in KPI-driven performance analysis for regional sales teams",
      "Collaborated with cross-functional stakeholders to align analytics with commercial objectives",
    ],
    tags: ["Power BI", "Python", "Sales Analytics", "Forecasting"],
  },
  {
    id: "indian-bank",
    role: "Business Analyst Intern",
    company: "Indian Bank, Noida",
    type: "Internship",
    period: "May — Jun 2024",
    season: 2,
    episode: 1,
    thumbnail: "/images/exp-bank.svg",
    description: "Analyzed KYC workflows and banking channels using Python and SQL.",
    bullets: [
      "Analyzed KYC and onboarding workflows to identify process gaps",
      "Conducted comparative analysis of ATM, UPI, and QR-based banking channels using Python and SQL",
      "Supported data modeling and reporting with internal banking stakeholders",
    ],
    tags: ["Python", "SQL", "Banking", "KYC"],
  },
  {
    id: "quickesg",
    role: "Data Analyst Intern",
    company: "QuickESG (Santa Technologies), Noida",
    type: "Internship",
    period: "May — Jun 2024",
    season: 2,
    episode: 2,
    thumbnail: "/images/exp-esg.svg",
    description: "Built ESG regulatory databases and generated sustainability insights.",
    bullets: [
      "Developed and maintained ESG regulatory and compliance database using Python",
      "Analyzed ESG datasets for sustainability and compliance initiatives",
      "Generated insights and reports for ESG-focused strategic decision-making",
    ],
    tags: ["Python", "ESG", "Data Collection", "Sustainability"],
  },
];

export const researchPapers: ResearchPaper[] = [
  { id: "electoral-financing", rank: 1, title: "Unveiling Hidden Patterns in Electoral Financing", venue: "CERE, IIM Indore — 2024", year: 2024, thumbnail: "/images/res-electoral.svg", description: "Applied ML techniques to analyze electoral bond data, uncovering transparency patterns and funding dynamics." },
  { id: "coffee-branding", rank: 2, title: "Thematic Patterns in Coffee Branding", venue: "IIM Bangalore — 2024", year: 2024, thumbnail: "/images/res-coffee.svg", description: "Python-based thematic analysis examining branding narratives and consumer perception in the coffee industry." },
  { id: "green-bonds", rank: 3, title: "Determinants of Green Bond Investments in G20 Countries", venue: "FIMC, Fore School of Management — 2024", year: 2024, thumbnail: "/images/res-greenbonds.svg", description: "Analyzed macroeconomic and policy drivers influencing green bond markets using statistical methods." },
  { id: "environmental-legislation", rank: 4, title: "Comparative Analysis of Environmental Legislation Across G20 Economies", venue: "FIMC, Fore School of Management — 2024", year: 2024, thumbnail: "/images/res-legislation.svg", description: "Python-based analytical comparison of environmental policy frameworks across G20 nations." },
  { id: "guest-journey", rank: 5, title: "Emotion-Driven Guest Journey Mapping in Hospitality", venue: "iMarc-IV, IIM Shillong — 2025", year: 2025, thumbnail: "/images/res-hospitality.svg", description: "Leveraged large language models to map emotional touchpoints across the hospitality guest journey." },
  { id: "instagram-content", rank: 6, title: "Impact of Brand, Influencer, and User-Generated Content on Instagram", venue: "iMarc-IV, IIM Shillong — 2025", year: 2025, thumbnail: "/images/res-instagram.svg", description: "Analyzed engagement behavior and subscription intent using Python and statistical tools." },
  { id: "viral-tourism", rank: 7, title: "Quantifying Viral Social Media Content on Tourist Inflows to Tier-2/3 Cities", venue: "LEADS 2025, IIM Shillong", year: 2025, thumbnail: "/images/res-tourism.svg", description: "Proposed AI-driven framework using NLP, predictive modeling, and ESG principles to assess tourism surges." },
  { id: "energy-analytics", rank: 8, title: "AI-Powered Prescriptive Analytics for Sustainable Energy Efficiency", venue: "Schneider Electric Collaboration — 2025", year: 2025, thumbnail: "/images/res-energy.svg", description: "Integrated energy analytics, AI-based scenario simulation, and Triple Bottom Line sustainability metrics." },
  { id: "gst-black-money", rank: 9, title: "Perceptions of Tax Professionals on GST's Effectiveness in Curbing Black Money", venue: "7th ICFMCF 2025, VGSoM, IIT Kharagpur", year: 2025, thumbnail: "/images/res-gst.svg", description: "Statistical analysis of practitioner perceptions with policy and compliance implications." },
];

export const education: Education[] = [
  { id: "pgdm", degree: "Post Graduate Diploma in Management", institution: "Jaipuria Institute of Management, Noida", period: "2023 — 2025", season: 3, detail: "6th Term Topper | 83.20%", thumbnail: "/images/edu-jaipuria.svg" },
  { id: "mtech", degree: "M.Tech, Electronics & Communication", institution: "IIT (ISM), Dhanbad", period: "2016 — 2019", season: 2, detail: "76.60%", thumbnail: "/images/edu-iitism.svg" },
  { id: "btech", degree: "B.Tech, Electronics & Communication", institution: "KIIT University, Bhubaneswar", period: "2012 — 2016", season: 1, detail: "68.60%", thumbnail: "/images/edu-kiit.svg" },
];

export const certifications: Certification[] = [
  { id: "nlp", name: "NLP & Capstone", issuer: "University of California, Irvine", thumbnail: "/images/cert-nlp.svg" },
  { id: "ai-everyone", name: "AI for Everyone", issuer: "DeepLearning.AI", thumbnail: "/images/cert-ai.svg" },
  { id: "agentic-ai", name: "Agentic AI & AI Agents", issuer: "Vanderbilt University", thumbnail: "/images/cert-agentic.svg" },
  { id: "storytelling", name: "Data Storytelling", issuer: "Fractal Analytics", thumbnail: "/images/cert-storytelling.svg" },
  { id: "cybersecurity", name: "Foundations of Cybersecurity", issuer: "Google", thumbnail: "/images/cert-cyber.svg" },
  { id: "deep-learning", name: "Deep Learning & Neural Networks", issuer: "IBM", thumbnail: "/images/cert-dl.svg" },
  { id: "llms", name: "Introduction to Large Language Models", issuer: "Google Cloud", thumbnail: "/images/cert-llm.svg" },
  { id: "prompt-eng", name: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University", thumbnail: "/images/cert-prompt.svg" },
];

export const achievements: Achievement[] = [
  { id: "quiz", title: "National Winner", description: "Dr. Banshree Dey Memorial Quiz", thumbnail: "/images/ach-quiz.svg" },
  { id: "parliament", title: "Winner", description: "Noida Traffic Solution — JIM Parliament, Entrepreneurial Quest", thumbnail: "/images/ach-parliament.svg" },
  { id: "debate", title: "Runner-up", description: "Pan Jaipuria Debate & Marketing Extempore", thumbnail: "/images/ach-debate.svg" },
];

export const skillCategories: SkillCategory[] = [
  { id: "analytics", name: "Analytics & BI", skills: ["Power BI", "SQL", "Python", "KPI Analysis", "Dashboarding"], thumbnail: "/images/skill-analytics.svg" },
  { id: "ai-ml", name: "AI & Machine Learning", skills: ["Predictive Modeling", "LLMs", "NLP", "Thematic Analysis"], thumbnail: "/images/skill-ai.svg" },
  { id: "business", name: "Business & Operations", skills: ["Automation Design", "Stakeholder Coordination", "Process Optimization", "Database Management"], thumbnail: "/images/skill-business.svg" },
  { id: "finance", name: "Finance & Compliance", skills: ["Billing Coordination", "Tally", "Licensing Management"], thumbnail: "/images/skill-finance.svg" },
  { id: "research", name: "Research", skills: ["Statistical Analysis", "Academic Writing", "Web Scraping"], thumbnail: "/images/skill-research.svg" },
];
