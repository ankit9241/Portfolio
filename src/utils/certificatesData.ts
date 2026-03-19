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
    title: "Web Development - STC IIT Patna",
    issuer: "STC, IIT Patna",
    date: "Dec 2025",
    description:
      "Awarded during Xenith event for contributing to development and maintenance of official website of Student Technical Council (STC), IIT Patna, recognizing technical expertise and impactful contribution.",
    image: "/assets/certificates/iitp-certificate.png",
    link: "/assets/certificates/iitp-certificate.png",
    skills: ["Nextjs", "TypeScript", "React"],
  },
  {
    title: "Hack N Tech 2.0 Hackathon",
    issuer: "IIT Patna",
    date: "Dec 2025",
    description:
      "Successfully participated in Hack N Tech 2.0 Hackathon, organized by IIT Patna as part of the Xenith. Showcased problem-solving skills and technical abilities in a competitive environment.",
    image: "/assets/certificates/Hackathon2.0.jpeg",
    link: "/assets/certificates/Hackathon2.0.jpeg",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Hack N Tech Hackathon",
    issuer: "IIT Patna",
    date: "May 2025",
    description:
      "Successfully participated in Hack N Tech Hackathon organized by IIT Patna, showcasing problem-solving skills and technical abilities in a competitive environment.",
    image: "/assets/certificates/Hackathon.png",
    link: "/assets/certificates/Hackathon.png",
    skills: ["React", "Node.js", "MongoDB"],
  },
];
