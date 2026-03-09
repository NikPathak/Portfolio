// ╔══════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this file to update your portfolio  ║
// ╚══════════════════════════════════════════════════════════════╝
//
//  ✏️  Just change the values below and redeploy.
//      No need to touch HTML, CSS, or any other file.

const PORTFOLIO = {

  // ── Personal Info ──────────────────────────────────────────
  name: "Nikhil Pathak",
  title: "Product · Agile · AI",      // shows in browser tab
  tagline: "Product. Agile.",
  taglineEmphasis: "Forward.",         // italic part of tagline
  heroEyebrow: "Open to new opportunities",
  heroDescription:
    "I'm Nikhil Pathak — a Product Manager and Certified Scrum Master with a proven track record in IT. I help teams deliver the right things, at pace, without chaos.",

  // ── At a Glance Card ──────────────────────────────────────
  glance: [
    { label: "Location",      value: "Indore, India" },
    { label: "Certification", value: "PSM — Scrum.org" },
    { label: "Domain",        value: "IT / Software" },
    { label: "Status",        value: "Open to roles" },
  ],
  glancePills: [
    "Product Management",
    "Scrum Master",
    "Vibe Coding",
    "Jira · SAFe",
  ],

  // ── Skills / Expertise ────────────────────────────────────
  skillsSectionTitle: "Three disciplines,",
  skillsSectionEmphasis: "one direction.",
  skillsSectionDesc:
    "Operating at the crossroads of product strategy, agile delivery, and AI-assisted development.",

  skills: [
    {
      title: "Product Management",
      description:
        "From discovery to delivery — defining vision, owning the backlog, and aligning business goals with shipped features.",
      tags: ["Roadmapping", "PRDs", "User Stories", "OKRs", "Stakeholder Mgmt", "Prioritization"],
    },
    {
      title: "Scrum Master · PSM",
      description:
        "Certified PSM from Scrum.org. Facilitating ceremonies, clearing blockers, and building high-performing agile teams.",
      tags: ["Sprint Planning", "Retrospectives", "Jira", "SAFe", "CI/CD", "Velocity"],
    },
    {
      title: "Vibe Coding",
      description:
        "Building with AI tools — turning product ideas into working prototypes using Claude and Cursor without waiting for dev bandwidth.",
      tags: ["Claude AI", "Cursor", "Prompt Engineering", "Rapid Prototyping"],
    },
  ],

  // ── Experience / Timeline ─────────────────────────────────
  experienceSectionTitle: "Where I've",
  experienceSectionEmphasis: "made an impact.",

  experience: [
    {
      period: ["2022", "Present"],
      company: "Your Current Company",
      role: "Product Manager · Scrum Master",
      points: [
        "Owned product backlog and led all sprint ceremonies for a cross-functional team of 8+",
        "Reduced sprint spillover by 30% through improved definition-of-done and dependency mapping",
        "Coordinated CI/CD releases in Jira, aligning technical milestones with business timelines",
        "Facilitated quarterly PI planning across 3 teams in SAFe environment",
      ],
    },
    {
      period: ["2020", "2022"],
      company: "Previous Company",
      role: "Business Analyst · Agile Team Member",
      points: [
        "Wrote and groomed 200+ user stories across multiple product releases",
        "Collaborated with dev, QA, and design in a SAFe agile environment",
        "Participated in Scrum of Scrums and supported cross-team release coordination",
      ],
    },
    {
      period: ["2018", "2020"],
      company: "Early Career",
      role: "IT Project Support",
      points: [
        "Supported project delivery in IT services environment",
        "Contributed to waterfall-to-agile transition initiatives",
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projectsSectionTitle: "Built with",
  projectsSectionEmphasis: "AI & intent.",
  projectsSectionDesc:
    "Tools and products I've shipped using AI — turning product thinking into working software.",

  projects: [
    {
      badge: "Productivity",
      glyph: "S",
      title: "Sprint Velocity Dashboard",
      description:
        "A lightweight burndown tracker with velocity trends — built in a single session, deployed before the next standup.",
      stack: ["Claude", "HTML/CSS", "Charts.js"],
    },
    {
      badge: "Career",
      glyph: "R",
      title: "ATS Resume Optimizer",
      description:
        "Paste a job description, get keyword suggestions and an ATS score back — built to solve my own job search problem.",
      stack: ["Claude API", "Prompt Eng.", "React"],
    },
    {
      badge: "Agile",
      glyph: "B",
      title: "Backlog Story Generator",
      description:
        "Converts raw feature requests into formatted user stories with acceptance criteria — in seconds.",
      stack: ["LLM", "Jira API", "Automation"],
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
    "Open to Product Manager, Scrum Master, and hybrid PM / Agile roles in IT.",

  email: "your@email.com",                          // ← update this
  linkedin: "https://linkedin.com/in/yourprofile",   // ← update this
  cvLink: "#",                                       // ← link to your resume PDF

  // ── Footer ────────────────────────────────────────────────
  footerYear: "2026",
  footerTagline: "Built with Claude · Vibe Coded",
};
