// ╔══════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this file to update your portfolio  ║
// ╚══════════════════════════════════════════════════════════════╝
//
//  ✏️  Just change the values below and redeploy.
//      No need to touch HTML, CSS, or any other file.

const PORTFOLIO = {

  // ── Personal Info ──────────────────────────────────────────
  name: "Nikhil Pathak",
  title: "Senior Scrum Master · AI Product · Agile PM",
  tagline: "Agile. Product.",
  taglineEmphasis: "AI-Forward.",
  heroEyebrow: "Open to Senior Scrum Master · AI Product Manager · Agile Project Manager roles",
  heroDescription:
    "I'm Nikhil Pathak — a Certified Scrum Master (PSM I) and servant leader with 7+ years shipping Agile delivery across e-commerce, fitness CRM, and Agentic AI domains. Proven track record facilitating Scrum ceremonies, removing impediments, coaching Product Owners, and driving Agile transformation across distributed global teams — from LLM integrations and voice agents to production deployments on Vercel and Railway.",

  // ── At a Glance Card ──────────────────────────────────────
  glance: [
    { label: "Location", value: "Gurgaon" },
    { label: "Phone", value: "+91 8770189240" },
    { label: "Certification", value: "PSM I — Scrum.org" },
    { label: "Experience", value: "7+ Years Agile Delivery" },
    { label: "Domains", value: "E-Commerce · Fitness CRM · Agentic AI" },
    { label: "Status", value: "Open to roles" },
  ],
  glancePills: [
    "Senior Scrum Master",
    "AI Product Manager",
    "Agile Project Manager",
    "Agentic AI Builder",
  ],

  // ── Skills / Expertise ────────────────────────────────────
  skillsSectionTitle: "Four disciplines,",
  skillsSectionEmphasis: "one direction.",
  skillsSectionDesc:
    "Operating at the crossroads of product strategy, agile delivery, and hands-on AI product development — across e-commerce, CRM, and Agentic AI domains.",

  skills: [
    {
      title: "Senior Scrum Master · PSM I",
      description:
        "Certified PSM from Scrum.org with 7+ years as a servant leader facilitating high-performing teams. Sprint ceremonies, impediment removal, Agile maturity assessments, PI Planning, and coaching Product Owners to deliver against measurable OKRs.",
      tags: ["Sprint Planning", "Retrospective Facilitation", "Backlog Refinement", "Impediment Removal", "SAFe", "Agile Coaching", "Servant Leadership", "PI Planning", "Kanban", "Jira", "Azure DevOps", "Miro", "Retro.io"],
    },
    {
      title: "AI Product Management",
      description:
        "Defining and shipping AI products end-to-end — from problem discovery and roadmap through to LLM integration, voice agent development, and production deployment on modern cloud stacks.",
      tags: ["Agentic AI", "LLM Integrations", "Voice Agents", "n8n Automation", "Prompt Engineering", "Claude API", "Product Roadmapping", "OKRs"],
    },
    {
      title: "Agile Project Management",
      description:
        "Managing cross-functional programs across e-commerce, fitness CRM, and AI verticals. Stakeholder alignment, release coordination, risk management, Definition of Done/Ready enforcement, and dependency mapping across distributed global teams.",
      tags: ["Stakeholder Management", "Release Planning", "Risk Management", "Cross-functional Team Leadership", "Agile Transformation", "Definition of Done/Ready", "OKRs & Metrics", "Confluence", "GCP", "CI/CD"],
    }
  ],

  // ── Tools Stack ───────────────────────────────────────────
  // Mirrors the resume's Core Skills & Tooling section — grouped by category
  toolStack: {
    "Agile & Scrum": ["Sprint Planning", "Retrospective Facilitation", "Backlog Refinement", "Impediment Removal", "SAFe", "Agile Transformation", "Servant Leadership", "Kanban", "PI Planning"],
    "AI & Automation": ["Agentic AI", "LLM Integrations", "Voice Agents", "n8n", "Prompt Engineering", "Claude API"],
    "PM & Strategy": ["Product Roadmapping", "Stakeholder Management", "OKRs & Metrics", "Release Planning", "Risk Management", "Cross-functional Team Leadership", "Agile Coaching", "Definition of Done/Ready"],
    "Agile Tools": ["Jira", "Azure DevOps", "Confluence", "Miro", "Retro.io"],
  },

  // ── Experience / Timeline ─────────────────────────────────
  experienceSectionTitle: "Where I've",
  experienceSectionEmphasis: "made an impact.",

  experience: [
    {
      period: ["Nov 2022", "Present"],
      company: "Solveda Software",
      role: "Sr. Scrum Master",
      domains: ["E-Commerce"],
      points: [
        "Served as servant leader for 3 global e-commerce Scrum teams (US, UAE & India) totalling 27 members; removed cross-team impediments and applied WIP limits to improve sprint velocity by 22% within 6 months.",
        "Coached Product Owners on backlog prioritisation and user story decomposition; partnered with stakeholders to align product roadmaps to business OKRs — increased feature delivery predictability by 30% and reduced misaligned scope.",
        "Key delivery projects: Diversified Food Supplies (US), Tanishq (US & UAE), IMS: Pipe and Pilings (Canada), TruckPro (US).",
        "Diversified Food Supplies (US) - Facilitated all Agile ceremonies (sprint planning, daily standups, retrospectives, sprint reviews) with >95% on-time completion rate; championed Jira and Confluence dashboards reducing stakeholder status update time by 40%",
        "Tanishq (US & UAE) - Directed end-to-end delivery of the Salesforce e-commerce launch; streamlined collaboration between onshore and offshore teams, achieving zero missed release deadlines.",
        "TruckPro (US) - Managed Agile delivery for B2B & B2C e-commerce apps; improved release predictability by 20% and reduced bug leakage post-release by 15%.",
      ],
    },
    {
      period: ["Jul 2019", "Nov 2022"],
      company: "Capgemini",
      role: "Associate Consultant",
      domains: ["Banking", "Enterprise IT"],
      points: [
        "Facilitated all Scrum ceremonies and removed impediments for 2 concurrent Agile teams (8–10 members each) in the banking domain; maintained 100% sprint cadence adherence for 3+ years.",
        "Coached Product Owners in product strategy sessions — translating stakeholder goals into prioritised backlogs aligned to measurable OKRs across multiple product lines.",
        "Drove Jira workflow automation cutting manual status updates by 50%; coached teams on Definition of Done/Ready reducing scope creep by 18%.",
        "Championed data-driven retrospective facilitation using sprint metrics and velocity trends, driving consistent quarter-over-quarter improvement in delivery throughput and team maturity.",
        "Partnered with Product Managers and QA leads to enforce Definition of Ready/Done and align release readiness across cross-functional teams in UK and India.",
      ],
    },
    {
      period: ["2015", "2019"],
      company: "Rustamji Institute of Technology",
      role: "B.E. Computer Science",
      domains: ["Education"],
      points: [
        "Bachelor of Engineering in Computer Science.",
      ],
    },
  ],

  // ── AI Products Built ─────────────────────────────────────
  // Mirrors the dedicated "AI Products Built" section in the resume
  aiProjects: [
    {
      title: "Voice Agent — Agentic AI Product",
      period: "2024 – Present",
      domain: "Agentic AI",
      points: [
        "End-to-end Agentic AI product with a voice interface, LLM reasoning layer, and n8n automation backend. Handles multi-step tasks autonomously — deployed on Railway with a Supabase PostgreSQL store.",
        "Stack: Voice Agent · LLM Integration · n8n · Supabase · Railway · GCP",
      ],
    },
    {
      title: "Fitness AI CRM",
      period: "2026",
      domain: "Fitness · AI",
      points: [
        "Built and delivered AI based CRM which has USP for Crowd Management.",
      ],
    },

  ],

  // ── Projects ──────────────────────────────────────────────
  projectsSectionTitle: "Built with",
  projectsSectionEmphasis: "AI & intent.",
  projectsSectionDesc:
    "Products and tools I've shipped across Agentic AI, e-commerce, fitness CRM, and Agile delivery — from idea to production.",

  projects: [
    {
      badge: "Agentic AI",
      glyph: "V",
      title: "Voice Agent — Agentic AI Product",
      description:
        "An end-to-end Agentic AI product with a voice interface, LLM reasoning layer, and n8n automation backend. Handles multi-step tasks autonomously — deployed on Railway with a Supabase PostgreSQL store.",
      stack: ["Voice Agent", "LLM Integration", "n8n", "Supabase", "Railway", "GCP"],
      domain: "Agentic AI",
    },

    {
      badge: "Fitness AI CRM",
      glyph: "F",
      title: "Fitness Industry AI Based CRM ",
      description:
        "Built and delivered AI based CRM which has USP for Crowd Management.",
      stack: ["Python", "YOLOv8", "Railway", "Supabase", "PowerBI"],
      domain: "Fitness CRM",
    },

  ],

  // ── Certifications ────────────────────────────────────────
  certsSectionTitle: "Certifications &",
  certsSectionEmphasis: "continuous learning.",

  certifications: [
    {
      title: "PSM — Professional Scrum Master",
      issuer: "Scrum.org · Verified credential",
      status: "Certified",
    },
    {
      title: "Google Project Management Certificate",
      issuer: "Coursera · Google Career Certificates",
      status: "Certified",
    },
    {
      title: "Prompt Engineering for Developers",
      issuer: "DeepLearning.AI · Andrew Ng",
      status: "Completed",
    },
    {
      title: "Jira Fundamentals",
      issuer: "Atlassian University",
      status: "Certified",
    },
  ],

  // ── Contact ───────────────────────────────────────────────
  contactHeadline: "Let's build",
  contactEmphasis: "something together.",
  contactDescription:
    "Open to Senior Scrum Master, AI Product Manager, and Agile Project Manager roles across IT, e-commerce, and AI-native product teams.",

  email: "nikhilatoffice@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikpathak/",
  cvLink: "https://drive.google.com/file/d/1gHuviWEFfeLxMYPLqcRb5bNIExtl-VY_/view?usp=sharing",

  // ── Footer ────────────────────────────────────────────────
  footerYear: "2026",
  footerTagline: "Become Better Everyday . Nikhil Pathak",
};