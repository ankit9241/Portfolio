export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  image: string;
  tags: string[];
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Thrive Wellness",
    period: "Feb 2026 - Present",
    image: "/experience/thrive-wellness.png", // Update with the correct logo path
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "UI/UX",
      "Full Stack",
    ],
    highlights: [
      "Develop and maintain the company's web platform, building new pages and features across the full stack.",
      "Revamped existing user interfaces with modern, premium, and responsive designs to enhance user experience and brand consistency.",
      "Implemented backend integrations and REST APIs to support dynamic functionality and seamless frontend-backend communication.",
      "Collaborate with stakeholders to translate business requirements into scalable, production-ready web solutions while continuously improving performance and usability.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "STC - IIT Patna",
    period: "Sep 2025 - Present",
    image: "/experience/stc-logo.png",
    tags: ["React", "TypeScript", "Node.js", "REST APIs"],
    highlights: [
      "Contributed to building the official IIT Patna Student Technical Council (STC) website as part of the College Development Team.",
      "Developed responsive and accessible UI components with modern web technologies.",
      "Ensured cross-browser compatibility and consistent user experience.",
      "Collaborated on both frontend features and backend integrations.",
    ],
  },
  {
    id: 3,
    role: "Team Lead & Full Stack Developer",
    company: "Indian Institute of Technology, Patna",
    period: "Apr 2025 - Jun 2025",
    image: "/experience/iitp-logo.png",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "AI Proctoring",
      "face-api.js",
      "Leadership",
    ],
    highlights: [
      "Led a team in designing and developing ExamifAI, an AI-powered online examination platform as a second-semester academic capstone project.",
      "Owned end-to-end full-stack development, building secure exam workflows, teacher dashboards, and student-facing interfaces.",
      "Implemented AI-based face verification, browser activity monitoring, violation tracking, and automatic exam submission using face-api.js.",
      "Designed REST APIs, integrated MongoDB for data management, and deployed the application for live demonstrations and mock examinations.",
    ],
  },
];
