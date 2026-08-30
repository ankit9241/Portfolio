export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    title: "Web Development - STC IIT Patna (Tenure 2)",
    issuer: "STC, IIT Patna",
    date: "Jan - June 2026",
    description:
      "Contributed to the development and maintenance of the official Student Technical Council website at IIT Patna.",
    image: "/assets/certificates/tenure-certificate-2.jpeg",
    link: "/assets/certificates/tenure-certificate-2.jpeg",
    skills: ["Nextjs", "TypeScript", "React"],
  },
  {
    title: "Hack N Tech 3.0 Hackathon",
    issuer: "IIT Patna",
    date: "June 2026",
    description:
      "Participated in the Hack N Tech 3.0 Hackathon at IIT Patna, building full-stack software solutions under competition.",
    image: "/assets/certificates/Hack-N-Tech-3.0.jpeg",
    link: "/assets/certificates/Hack-N-Tech-3.0.jpeg",
    skills: [
      "Nextjs",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "Code Kshetra DSA Competition",
    issuer: "IIT Patna",
    date: "June 2026",
    description:
      "Secured 2nd rank in the offline Data Structures and Algorithms competition organized by Code Kshetra at IIT Patna.",
    image: "/assets/certificates/code-kshetra.jpeg",
    link: "/assets/certificates/code-kshetra.jpeg",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    title: "Web Development - STC IIT Patna (Tenure 1)",
    issuer: "STC, IIT Patna",
    date: "July - Dec 2025",
    description:
      "Contributed to the development and maintenance of the official Student Technical Council website at IIT Patna.",
    image: "/assets/certificates/tenure-certificate-1.png",
    link: "/assets/certificates/tenure-certificate-1.png",
    skills: ["Nextjs", "TypeScript", "React"],
  },
  {
    title: "Hack N Tech 2.0 Hackathon",
    issuer: "IIT Patna",
    date: "Dec 2025",
    description:
      "Participated in the Hack N Tech 2.0 Hackathon at IIT Patna, demonstrating problem-solving in a competitive setting.",
    image: "/assets/certificates/Hack-N-Tech-2.0.jpeg",
    link: "/assets/certificates/Hack-N-Tech-2.0.jpeg",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Hack N Tech 1.0 Hackathon",
    issuer: "IIT Patna",
    date: "May 2025",
    description:
      "Participated in the Hack N Tech 1.0 Hackathon at IIT Patna, demonstrating problem-solving in a competitive setting.",
    image: "/assets/certificates/Hack-N-Tech-1.0.png",
    link: "/assets/certificates/Hack-N-Tech-1.0.png",
    skills: ["React", "Node.js", "MongoDB"],
  },
];
