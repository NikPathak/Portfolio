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
    "I'm Nikhil Pathak — a Certified Scrum Master (PSM I) and AI Product Builder with 7+ years shipping Agile delivery across e-commerce, fitness CRM, and Agentic AI domains. I bridge product strategy, delivery velocity, and hands-on AI development — from sprint board to production deployment.",

  // ── At a Glance Card ──────────────────────────────────────
  glance: [
    { label: "Location", value: "Gurugram, India" },
    { label: "Certification", value: "PSM I — Scrum.org" },
    { label: "Experience", value: "7+ Years Agile Delivery" },
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
        "Certified PSM from Scrum.org with 7+ years facilitating high-performing teams. Sprint ceremonies, WIP limits, Agile maturity assessments, and coaching Product Owners to deliver against measurable OKRs.",
      tags: ["Sprint Planning", "Retrospectives", "Backlog Refinement", "SAFe", "Azure DevOps", "Jira", "Miro", "Retro.io"],
    },
    {
      title: "AI Product Management",
      description:
        "Defining and shipping AI products end-to-end — from problem discovery and roadmap through to LLM integration, voice agent development, and production deployment on modern cloud stacks.",
      tags: ["Agentic AI", "LLM Integrations", "Voice Agents", "n8n Automation", "Prompt Engineering", "Product Roadmapping", "OKRs"],
    },
    {
      title: "Agile Project Management",
      description:
        "Managing cross-functional programs across e-commerce, fitness CRM, and AI verticals. Stakeholder alignment, release coordination, risk management, and dependency mapping across distributed global teams.",
      tags: ["Stakeholder Management", "Release Planning", "Risk Management", "OKRs & Metrics", "Confluence", "GCP", "CI/CD"],
    },
    {
      title: "Dev Stack & Tooling",
      description:
        "Hands-on across the full delivery stack — from sprint boards to production. Comfortable wiring backends, auth flows, deployments, and AI pipelines without waiting for dev bandwidth.",
      tags: ["GitHub", "Firebase", "OAuth", "Vercel", "Railway", "Supabase (PostgreSQL)", "GCP", "n8n"],
    },
  ],

  // ── Tools Stack ───────────────────────────────────────────
  // Grouped by category — use this for a dedicated Tools section in the portfolio
  toolStack: {
    "Agile & PM": ["Jira", "Azure DevOps", "Confluence", "Miro", "Retro.io"],
    "AI & Automation": ["n8n", "Voice Agent", "LLM Integrations", "Prompt Engineering", "Claude API"],
    "Dev & Cloud": ["GitHub", "Vercel", "Railway", "Firebase", "GCP", "Supabase (PostgreSQL)"],
    "Auth & APIs": ["OAuth Integrations", "REST APIs"],
  },

  // ── Experience / Timeline ─────────────────────────────────
  experienceSectionTitle: "Where I've",
  experienceSectionEmphasis: "made an impact.",

  experience: [
    {
      period: ["Nov 2022", "Present"],
      company: "Solveda Software",
      role: "Sr. Scrum Master",
      domains: ["E-Commerce", "Agentic AI"],
      points: [
        "Led 3 global e-commerce Scrum teams (US & India) totalling 27 members; improved sprint velocity by 22% within 6 months through backlog refinement and WIP limits.",
        "Partnered with stakeholders to define product roadmaps tied to business OKRs — increased feature delivery predictability by 30% and reduced misaligned scope.",
        "Integrated AI-assisted workflows into sprint ceremonies — LLM tools for auto-generating user stories, summarising retro themes, and flagging delivery risks early.",
        "Built and shipped Agentic AI product prototypes using n8n automation, voice agents, and LLM integrations — deployed on Railway and Vercel with Supabase backends.",
        "Facilitated all Agile ceremonies with >95% on-time completion rate; championed Jira and Confluence dashboards reducing stakeholder status update time by 40%.",
        "Key projects: Diversified Food Supplies (US), Tanishq (US & UAE), IMS: Pipe and Pilings (Canada), TruckPro (US).",
      ],
    },
    {
      period: ["Jul 2019", "Nov 2022"],
      company: "Capgemini",
      role: "Associate Consultant",
      domains: ["Banking", "Enterprise IT"],
      points: [
        "Managed 2 concurrent Agile teams (8–10 members each) in the banking domain; maintained 100% sprint cadence adherence for 3+ years.",
        "Contributed to product strategy sessions — translating stakeholder goals into prioritised backlogs and measurable OKRs across multiple product lines.",
        "Drove Jira workflow automation cutting manual status updates by 50%; coached teams on Definition of Done/Ready reducing scope creep by 18%.",
        "Introduced data-based retrospectives leveraging sprint metrics, leading to consistent quarter-over-quarter improvement in delivery throughput.",
        "Partnered with Product Managers and QA leads to align release readiness across cross-functional teams in UK and India.",
      ],
    },
    {
      period: ["2015", "2019"],
      company: "Rustamji Institute of Technology",
      role: "B.E. Computer Science",
      domains: ["Education"],
      points: [
        "Bachelor of Engineering in Computer Science.",
        "Built the technical foundation for a career at the intersection of software delivery, product strategy, and AI.",
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
      badge: "AI Product",
      glyph: "A",
      title: "AI Sprint Assistant",
      description:
        "An LLM-powered assistant embedded in Agile workflows — summarises retro themes, flags at-risk tickets, and drafts sprint goals from raw team input. Integrated with Jira API.",
      stack: ["Claude API", "LLM Integration", "Jira API", "Prompt Eng.", "Firebase"],
      domain: "Agile · AI",
    },
    {
      badge: "Fitness CRM",
      glyph: "F",
      title: "Fitness Industry CRM — Delivery Lead",
      description:
        "Led Agile delivery for a SaaS CRM built for the fitness industry. Owned sprint planning, stakeholder alignment, and release coordination from MVP through scale. Auth via OAuth, deployed on Vercel.",
      stack: ["Jira", "OAuth", "Vercel", "Firebase", "Confluence"],
      domain: "Fitness CRM",
    },
    {
      badge: "Career",
      glyph: "R",
      title: "ATS Resume Optimizer",
      description:
        "Paste a job description, get keyword suggestions and an ATS score back — built with prompt engineering to solve my own job search problem.",
      stack: ["Claude API", "Prompt Eng.", "React", "Vercel"],
      domain: "Productivity",
    },
    {
      badge: "Agile",
      glyph: "B",
      title: "Backlog Story Generator",
      description:
        "Converts raw feature requests and product strategy inputs into formatted user stories with acceptance criteria — in seconds. Wired directly to Jira via API.",
      stack: ["LLM", "Jira API", "n8n", "Automation"],
      domain: "Agile · Productivity",
    },
  ],

  // ── Certifications ────────────────────────────────────────
  certsSectionTitle: "Certifications &",
  certsSectionEmphasis: "continuous learning.",

  certifications: [
    {
      title: "PSM I — Professional Scrum Master",
      issuer: "Scrum.org · Verified credential",
      status: "Certified",
    },
    {
      title: "Google Project Management Certificate",
      issuer: "Coursera · Google Career Certificates",
      status: "In Progress",
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
  linkedin: "https://linkedin.com/in/nikhil-p-672205218",
  cvLink: "#",

  // ── Footer ────────────────────────────────────────────────
  footerYear: "2026",
  footerTagline: "Become Better Everyday . Nikhil Pathak",
};