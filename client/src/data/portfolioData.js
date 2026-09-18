export const profile = {
  name: "Abhay Raj Gaur",
  role: "MERN Stack Software Developer",
  intro:
    "I build responsive, scalable and user-focused web applications with modern JavaScript technologies.",
  email: "your.email@example.com",
  location: "India",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "#contact",
};

export const skills = [
  { name: "React.js", level: 92, group: "Frontend", icon: "⚛" },
  { name: "JavaScript", level: 90, group: "Frontend", icon: "JS" },
  { name: "HTML5", level: 95, group: "Frontend", icon: "⌘" },
  { name: "CSS3", level: 90, group: "Frontend", icon: "✦" },
  { name: "Node.js", level: 86, group: "Backend", icon: "⬢" },
  { name: "Express.js", level: 84, group: "Backend", icon: "EX" },
  { name: "MongoDB", level: 86, group: "Database", icon: "DB" },
  { name: "REST APIs", level: 88, group: "Backend", icon: "↗" },
  { name: "C++", level: 78, group: "Programming", icon: "C++" },
  { name: "Git & GitHub", level: 88, group: "Tools", icon: "G" },
  { name: "Bootstrap", level: 84, group: "Frontend", icon: "B" },
  { name: "Render & Vercel", level: 88, group: "Deployment", icon: "RV" },
];

export const experiences = [
  {
    company: "Technex, IIT BHU",
    role: "Full Stack / Project Intern",
    period: "Internship",
    description:
      "Worked on the Kisan Sahayak Portal concept and full-stack web development, focusing on practical UI, API integration and project documentation.",
    tags: ["MERN", "REST API", "MongoDB"],
  },
  {
    company: "Academic & Personal Projects",
    role: "Full Stack Developer",
    period: "Ongoing",
    description:
      "Designed and developed full-stack applications involving CRUD operations, authentication concepts, database integration and modern responsive interfaces.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const projects = [
  {
    title: "Blockchain Crowdfunding",
    subtitle: "Transparent campaign platform",
    description:
      "A full-stack crowdfunding platform concept for creating campaigns, tracking contributions and improving transparency with blockchain/Web3 concepts.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Web3"],
    icon: "⛓",
    gradient: "cyan",
    github: "https://github.com/",
    live: "#",
    details: {
      problem: "Traditional crowdfunding systems can make campaign tracking and trust difficult.",
      solution: "A modern web platform combining a MERN architecture with blockchain-oriented transparency.",
      features: ["Campaign creation", "Contribution tracking", "Responsive dashboard", "REST APIs", "Database integration"],
      architecture: "React UI → Express REST API → MongoDB, with blockchain/Web3 integration points.",
    },
  },
  {
    title: "Kisan Sahayak Portal",
    subtitle: "Farmer-to-buyer marketplace",
    description:
      "A marketplace concept designed to connect farmers directly with buyers, helping reduce unnecessary intermediaries and improve digital access to crop selling.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    icon: "🌾",
    gradient: "green",
    github: "https://github.com/",
    live: "#",
    details: {
      problem: "Farmers may face difficulty reaching buyers directly and discovering fair market opportunities.",
      solution: "A role-based marketplace connecting farmers, buyers, distributors and small sellers.",
      features: ["Farmer portal", "Buyer browsing", "Crop listings", "Role-based flows", "Responsive UI"],
      architecture: "React frontend → Express/Node API → MongoDB data layer.",
    },
  },
  {
    title: "Contact Management System",
    subtitle: "CRUD web application",
    description:
      "A database-driven contact manager with create, update, delete and retrieval operations, designed to demonstrate backend and MongoDB fundamentals.",
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    icon: "▣",
    gradient: "purple",
    github: "https://github.com/",
    live: "#",
    details: {
      problem: "Managing contact records manually becomes inefficient as data grows.",
      solution: "A simple CRUD application with server-side views and persistent MongoDB storage.",
      features: ["Create contact", "Edit contact", "Delete contact", "View contacts", "MongoDB persistence"],
      architecture: "EJS views → Express routes/controllers → Mongoose → MongoDB.",
    },
  },
];

export const certifications = [
  "Technex IIT BHU — Project / Internship Certificate",
  "NIELIT — Internship / Training Certificate",
  "Samsung Innovation Campus — Coding & Programming",
  "Naukri Campus — Young Turks 2025",
  "Networking & Computer Network Workshop",
];

export const services = [
  ["Full Stack Development", "Production-minded MERN applications with clean API architecture."],
  ["Responsive UI Engineering", "Modern interfaces that work smoothly across phones, tablets and desktops."],
  ["REST API Development", "Structured Express APIs with validation, error handling and MongoDB integration."],
  ["Database Integration", "Mongoose schemas, CRUD operations and MongoDB Atlas-ready data layers."],
];