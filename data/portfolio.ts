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
    backgroundImage: "/images/hero-ai.jpg",
    cta: "View Episodes",
  },
  {
    title: "The Researcher",
    subtitle: "9 papers. IIMs. IIT Kharagpur. From electoral bonds to hospitality AI.",
    backgroundImage: "/images/hero-research.jpg",
    cta: "Explore Research",
  },
  {
    title: "The Engineer",
    subtitle: "IIT ISM Dhanbad. From circuits to code to business strategy.",
    backgroundImage: "/images/hero-engineer.jpg",
    cta: "Origin Story",
  },
  {
    title: "The Analyst",
    subtitle: "Schneider Electric. Indian Bank. Power BI. Python. Real-world impact.",
    backgroundImage: "/images/hero-analyst.jpg",
    cta: "See the Data",
  },
];

export const experiences: Experience[] = [
  {
    id: "jaipuria-ai",
    role: "Assistant Manager — AI Department",
    company: "Jaipuria Institute of Management",
    type: "Full-time",
    period: "Aug 2025 — Present",
    season: 4,
    episode: 1,
    thumbnail: "/images/exp-jaipuria.jpg",
    description: "The newest power player walks into India's first AI-native B-school and rewrites the playbook. Think less 'assistant manager,' more 'the guy who actually makes AI happen across an entire institution.'",
    bullets: [
      "Architects AI-powered simulations inspired by Harvard Business School case methods — because why train managers the old way when you can build the future?",
      "Runs the AI department's operations like a war room: automation pipelines, vendor deals, platform licensing — nothing moves without his sign-off.",
      "Bridges the gap between five departments that never talked to each other. AI, academics, marketing, ops, finance — now they're all on the same page.",
      "Turns B-school students into AI practitioners through hands-on workshops that make textbooks look obsolete.",
      "Drives B2B sales for AI-enabled solutions — because the best tech means nothing if you can't sell the vision.",
    ],
    tags: ["AI Strategy", "Automation", "B2B", "EdTech", "Leadership"],
  },
  {
    id: "tryrehearsal",
    role: "Product & Data Associate",
    company: "TryRehearsal.ai",
    type: "Part-time",
    period: "2025 — Present",
    season: 4,
    episode: 2,
    thumbnail: "/images/exp-rehearsal.jpg",
    description: "A voice-powered AI interview platform serving thousands of candidates. Someone had to make sure the data didn't lie and the product actually worked. That someone showed up.",
    bullets: [
      "Owns the data backbone — pipelines, integrity checks, analytics feeds. If the platform knows what it knows, it's because the plumbing works.",
      "Shapes how AI interviews candidates: refining scoring logic, prompt architectures, and evaluation rubrics that separate signal from noise.",
      "Works at the intersection of product-market fit and LLM engineering — where 'does it work?' meets 'does anyone care?'",
    ],
    tags: ["Voice AI", "LLMs", "Product", "Data Pipelines"],
  },
  {
    id: "schneider",
    role: "Management Trainee",
    company: "Schneider Electric",
    type: "Full-time",
    period: "May — Aug 2025",
    season: 3,
    episode: 1,
    thumbnail: "/images/exp-schneider.jpg",
    description: "Dropped into a global energy giant's sales machine. Mission: make the numbers talk. Three months of dashboards, forecasting models, and the kind of cross-functional chaos that separates analysts from operators.",
    bullets: [
      "Built Power BI dashboards that gave regional sales teams something they'd never had: real-time visibility into what's actually selling and what's collecting dust.",
      "Developed Python forecasting models that stopped the guessing game — turns out, data beats gut instinct every time.",
      "Navigated multi-cluster market analysis across regions, because 'one-size-fits-all' is the laziest strategy in the room.",
    ],
    tags: ["Power BI", "Python", "Forecasting", "Sales Analytics"],
  },
  {
    id: "indian-bank",
    role: "Business Analyst Intern",
    company: "Indian Bank",
    type: "Internship",
    period: "May — Jun 2024",
    season: 2,
    episode: 1,
    thumbnail: "/images/exp-bank.jpg",
    description: "The banking system runs on paperwork, legacy processes, and the hope that nobody notices the cracks. Someone did. KYC workflows, onboarding gaps, digital channel wars — all dissected with Python and SQL.",
    bullets: [
      "Tore apart KYC and onboarding workflows to find where customers were falling through the cracks — spoiler: it was everywhere.",
      "Ran a head-to-head analysis of ATM, UPI, and QR channels. The future of Indian banking isn't where the banks think it is.",
    ],
    tags: ["Python", "SQL", "Banking", "Process Analytics"],
  },
  {
    id: "quickesg",
    role: "Data Analyst Intern",
    company: "QuickESG (Santa Technologies)",
    type: "Internship",
    period: "May — Jun 2024",
    season: 2,
    episode: 2,
    thumbnail: "/images/exp-esg.jpg",
    description: "Everyone talks about sustainability until they have to measure it. This episode: building the database that turns ESG from a buzzword into actual compliance data. Python-powered, no greenwashing allowed.",
    bullets: [
      "Built an ESG regulatory database from scratch — because you can't manage what you can't measure, and nobody was measuring.",
      "Turned raw sustainability datasets into actionable intelligence that leadership could actually use for strategic calls.",
    ],
    tags: ["Python", "ESG", "Sustainability", "Data Engineering"],
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: "electoral-financing",
    rank: 1,
    title: "Unveiling Hidden Patterns in Electoral Financing",
    venue: "CERE, IIM Indore — 2024",
    year: 2024,
    thumbnail: "/images/res-electoral.jpg",
    description: "Follow the money. Machine learning cracks open India's electoral bond data to expose what transparency reports won't tell you. The patterns are there — you just need the right algorithm to see them.",
  },
  {
    id: "coffee-branding",
    rank: 2,
    title: "Thematic Patterns in Coffee Branding",
    venue: "IIM Bangalore — 2024",
    year: 2024,
    thumbnail: "/images/res-coffee.jpg",
    description: "Your morning brew is a masterclass in narrative manipulation. A deep Python-driven dive into how coffee brands engineer perception, one tagline at a time. Presented at IIM Bangalore.",
  },
  {
    id: "green-bonds",
    rank: 3,
    title: "Determinants of Green Bond Investments in G20 Countries",
    venue: "FIMC, Fore School of Management — 2024",
    year: 2024,
    thumbnail: "/images/res-greenbonds.jpg",
    description: "Twenty of the world's biggest economies claim they're going green. The bond markets tell a different story. Statistical deep-dive into what actually drives sustainable investment — and what's just window dressing.",
  },
  {
    id: "environmental-legislation",
    rank: 4,
    title: "Comparative Analysis of Environmental Legislation Across G20 Economies",
    venue: "FIMC, Fore School of Management — 2024",
    year: 2024,
    thumbnail: "/images/res-legislation.jpg",
    description: "G20 nations love passing environmental laws. But are they any good? A Python-powered autopsy of policy frameworks across the world's largest economies reveals who's leading and who's faking it.",
  },
  {
    id: "guest-journey",
    rank: 5,
    title: "Emotion-Driven Guest Journey Mapping in Hospitality",
    venue: "iMarc-IV, IIM Shillong — 2025",
    year: 2025,
    thumbnail: "/images/res-hospitality.jpg",
    description: "Hotels track check-ins and checkouts. But what about the emotional journey in between? LLMs map the invisible touchpoints that make or break a five-star experience. Presented at IIM Shillong.",
  },
  {
    id: "instagram-content",
    rank: 6,
    title: "Impact of Brand, Influencer, and User-Generated Content on Instagram",
    venue: "iMarc-IV, IIM Shillong — 2025",
    year: 2025,
    thumbnail: "/images/res-instagram.jpg",
    description: "Brands spend millions on Instagram. Influencers charge per post. Users create for free. Who actually moves the needle on subscriptions? The data has opinions, and they're not what marketers expect.",
  },
  {
    id: "viral-tourism",
    rank: 7,
    title: "Quantifying Viral Social Media Content on Tourist Inflows to Tier-2/3 Cities",
    venue: "LEADS 2025, IIM Shillong",
    year: 2025,
    thumbnail: "/images/res-tourism.jpg",
    description: "One viral reel turns a sleepy town into a tourist trap overnight. This paper builds the AI framework to predict when it happens, measure the damage, and figure out if anyone planned for it. Spoiler: they didn't.",
  },
  {
    id: "energy-analytics",
    rank: 8,
    title: "AI-Powered Prescriptive Analytics for Sustainable Energy Efficiency",
    venue: "Schneider Electric Collaboration — 2025",
    year: 2025,
    thumbnail: "/images/res-energy.jpg",
    description: "Born from a live Schneider Electric engagement. AI doesn't just predict energy consumption — it tells you exactly what to change. Scenario simulation meets the Triple Bottom Line. The dashboard that actually saves the planet.",
  },
  {
    id: "gst-black-money",
    rank: 9,
    title: "Perceptions of Tax Professionals on GST's Effectiveness in Curbing Black Money",
    venue: "7th ICFMCF 2025, VGSoM, IIT Kharagpur",
    year: 2025,
    thumbnail: "/images/res-gst.jpg",
    description: "GST was supposed to kill black money. The tax professionals who live in the trenches every day have a different take. Statistical analysis from the front lines, presented at IIT Kharagpur.",
  },
];

export const education: Education[] = [
  {
    id: "pgdm",
    degree: "Post Graduate Diploma in Management",
    institution: "Jaipuria Institute of Management, Noida",
    period: "2023 — 2025",
    season: 3,
    detail: "6th Term Topper | 83.20%",
    thumbnail: "/images/edu-jaipuria.jpg",
  },
  {
    id: "mtech",
    degree: "M.Tech, Electronics & Communication",
    institution: "IIT (ISM), Dhanbad",
    period: "2016 — 2019",
    season: 2,
    detail: "76.60%",
    thumbnail: "/images/edu-iitism.jpg",
  },
  {
    id: "btech",
    degree: "B.Tech, Electronics & Communication",
    institution: "KIIT University, Bhubaneswar",
    period: "2012 — 2016",
    season: 1,
    detail: "68.60%",
    thumbnail: "/images/edu-kiit.jpg",
  },
];

export const certifications: Certification[] = [
  { id: "nlp", name: "NLP & Capstone", issuer: "UC Irvine", thumbnail: "/images/cert-nlp.jpg" },
  { id: "ai-everyone", name: "AI for Everyone", issuer: "DeepLearning.AI", thumbnail: "/images/cert-ai.jpg" },
  { id: "agentic-ai", name: "Agentic AI & AI Agents", issuer: "Vanderbilt University", thumbnail: "/images/cert-agentic.jpg" },
  { id: "storytelling", name: "Data Storytelling", issuer: "Fractal Analytics", thumbnail: "/images/cert-storytelling.jpg" },
  { id: "cybersecurity", name: "Foundations of Cybersecurity", issuer: "Google", thumbnail: "/images/cert-cyber.jpg" },
  { id: "deep-learning", name: "Deep Learning & Neural Networks", issuer: "IBM", thumbnail: "/images/cert-dl.jpg" },
  { id: "llms", name: "Intro to Large Language Models", issuer: "Google Cloud", thumbnail: "/images/cert-llm.jpg" },
  { id: "prompt-eng", name: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University", thumbnail: "/images/cert-prompt.jpg" },
];

export const achievements: Achievement[] = [
  { id: "quiz", title: "National Winner", description: "Dr. Banshree Dey Memorial Quiz — outlasted every challenger in the country. No lifelines needed.", thumbnail: "/images/ach-quiz.jpg" },
  { id: "parliament", title: "Winner — Entrepreneurial Quest", description: "JIM Parliament challenged students to solve Noida's traffic crisis. One pitch won. It wasn't even close.", thumbnail: "/images/ach-parliament.jpg" },
  { id: "debate", title: "Runner-up — Pan Jaipuria Debate", description: "Marketing extempore and debate across all Jaipuria campuses. Made it to the final round. The judges were split.", thumbnail: "/images/ach-debate.jpg" },
];

export const skillCategories: SkillCategory[] = [
  { id: "analytics", name: "Analytics & BI", skills: ["Power BI", "SQL", "Python", "KPI Analysis", "Dashboarding"], thumbnail: "/images/skill-analytics.jpg" },
  { id: "ai-ml", name: "AI & Machine Learning", skills: ["Predictive Modeling", "LLMs", "NLP", "Thematic Analysis"], thumbnail: "/images/skill-ai.jpg" },
  { id: "business", name: "Business & Operations", skills: ["Automation Design", "Stakeholder Coordination", "Process Optimization", "Database Management"], thumbnail: "/images/skill-business.jpg" },
  { id: "finance", name: "Finance & Compliance", skills: ["Billing Coordination", "Tally", "Licensing Management"], thumbnail: "/images/skill-finance.jpg" },
  { id: "research", name: "Research", skills: ["Statistical Analysis", "Academic Writing", "Web Scraping"], thumbnail: "/images/skill-research.jpg" },
];
