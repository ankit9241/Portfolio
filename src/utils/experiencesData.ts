export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  tags: string[];
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Web Developer",
    company: "STC - IIT Patna",
    period: "Sep 2025 - Present",
    tags: ["React", "TypeScript", "Node.js", "REST APIs"],
    highlights: [
      "Contributed to building the official IIT Patna Student Technical Council (STC) website as part of the College Development Team.",
      "Developed responsive and accessible UI components with modern web technologies.",
      "Ensured cross-browser compatibility and consistent user experience.",
      "Collaborated on both frontend features and backend integrations.",
    ],
  },
  {
    id: 2,
    role: "Sub-Coordinator",
    company: "Pixelerate (STC)",
    period: "Aug 2025 - Present",
    tags: ["UI/UX Design", "Figma", "Event Management"],
    highlights: [
      "Organized and judged multiple UI/UX design contests.",
      "Shared curated design and learning resources with the community.",
      "Planned and executed the annual Pixelrate design competition.",
    ],
  },
];
