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
      "Awarded for contributing to development and maintenance of official website of Student Technical Council (STC), IIT Patna, recognizing technical expertise and impactful contribution during the tenure Jan - June 2026.",
    image: "/assets/certificates/tenure-certificate-2.jpeg",
    link: "/assets/certificates/tenure-certificate-2.jpeg",
    skills: ["Nextjs", "TypeScript", "React"],
  },
  {
    title: "Hack N Tech 3.0 Hackathon",
    issuer: "IIT Patna",
    date: "June 2026",
    description:
      "Successfully participated in the Hack-N-Tech 3.0 Hackathon organized by IIT Patna, where we developed PodSnap-an AI-powered SaaS platform designed to automate long-form podcast repurposing into engaging vertical social media clips using active speaker tracking, Whisper speech-to-text, and dynamic styled subtitle rendering.",
    image: "/assets/certificates/Hack-N-Tech-3.0.jpeg",
    link: "/assets/certificates/Hack-N-Tech-3.0.jpeg",
    skills: [
      "Nextjs",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "Stripe",
      "Modal",
      "Tailwind CSS",
    ],
  },
  {
    title: "Code Kshetra DSA Competition",
    issuer: "IIT Patna",
    date: "June 2026",
    description:
      "Secured 2nd rank in the offline DSA (Data Structures and Algorithms) competition organized by Code Kshetra at the IIT Patna campus, solving 5 coding questions within a 90-minute window on HackerRank using Java.",
    image: "/assets/certificates/code-kshetra.jpeg",
    link: "/assets/certificates/code-kshetra.jpeg",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
  },
  {
    title: "Web Development - STC IIT Patna (Tenure 1)",
    issuer: "STC, IIT Patna",
    date: "July - Dec 2025",
    description:
      "Awarded during Xenith event for contributing to development and maintenance of official website of Student Technical Council (STC), IIT Patna, recognizing technical expertise and impactful contribution during the tenure July - Dec 2025.",
    image: "/assets/certificates/tenure-certificate-1.png",
    link: "/assets/certificates/tenure-certificate-1.png",
    skills: ["Nextjs", "TypeScript", "React"],
  },
  {
    title: "Hack N Tech 2.0 Hackathon",
    issuer: "IIT Patna",
    date: "Dec 2025",
    description:
      "Successfully participated in Hack N Tech 2.0 Hackathon, organized by IIT Patna as part of the Xenith. Showcased problem-solving skills and technical abilities in a competitive environment.",
    image: "/assets/certificates/Hack-N-Tech-2.0.jpeg",
    link: "/assets/certificates/Hack-N-Tech-2.0.jpeg",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Hack N Tech Hackathon",
    issuer: "IIT Patna",
    date: "May 2025",
    description:
      "Successfully participated in Hack N Tech Hackathon organized by IIT Patna, showcasing problem-solving skills and technical abilities in a competitive environment.",
    image: "/assets/certificates/Hack-N-Tech-1.0.png",
    link: "/assets/certificates/Hack-N-Tech-1.0.png",
    skills: ["React", "Node.js", "MongoDB"],
  },
];
