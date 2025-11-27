"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiBootstrap,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
  SiVite,
} from "react-icons/si";
import ProjectDetails from "./ProjectDetails";

interface ProjectTech {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const technologies = {
  react: {
    name: "React",
    icon: SiReact,
    bgColor: "rgba(97, 218, 251, 0.1)",
    textColor: "#61DAFB",
    borderColor: "rgba(97, 218, 251, 0.2)",
  },
  vite: {
    name: "Vite",
    icon: SiVite,
    bgColor: "rgba(100, 108, 255, 0.1)",
    textColor: "#646CFF",
    borderColor: "rgba(100, 108, 255, 0.2)",
  },
  mongodb: {
    name: "MongoDB",
    icon: SiMongodb,
    bgColor: "rgba(77, 194, 116, 0.1)",
    textColor: "#47A248",
    borderColor: "rgba(77, 194, 116, 0.2)",
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    bgColor: "rgba(247, 223, 30, 0.1)",
    textColor: "#F7DF1E",
    borderColor: "rgba(247, 223, 30, 0.2)",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: SiBootstrap,
    bgColor: "rgba(121, 82, 179, 0.1)",
    textColor: "#7952B3",
    borderColor: "rgba(121, 82, 179, 0.2)",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bgColor: "rgba(56, 189, 248, 0.1)",
    textColor: "#38BDF8",
    borderColor: "rgba(56, 189, 248, 0.2)",
  },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
    bgColor: "rgba(49, 120, 198, 0.1)",
    textColor: "#3178C6",
    borderColor: "rgba(49, 120, 198, 0.2)",
  },
  nextjs: {
    name: "Next.js 14",
    icon: SiNextdotjs,
    bgColor: "rgba(0, 0, 0, 0.1)",
    textColor: "#47a248",
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
  css: {
    name: "CSS3",
    icon: SiCss3,
    bgColor: "rgba(33, 150, 243, 0.1)",
    textColor: "#2196F3",
    borderColor: "rgba(33, 150, 243, 0.2)",
  },
  reactContext: {
    name: "React Context",
    icon: SiReact,
    bgColor: "rgba(97, 218, 251, 0.1)",
    textColor: "#61DAFB",
    borderColor: "rgba(97, 218, 251, 0.2)",
  },
} as const;

interface Project {
  title: string;
  description: string;
  tech: ProjectTech[];
  image: string | string[];
  images?: string[];
  github: string;
  live: string;
  isPublished?: boolean;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const projects: Project[] = [
    {
      title:
        "ExamifAI - Secure AI-Based Exam Portal for IIT Patna (Full Stack Project)",
      description:
        "Developed for IIT Patna, ExamifAI is a smart online exam system that uses real-time face recognition to ensure secure, cheat-free assessments. It tracks the student's face throughout the exam, issues warnings for suspicious activity (like missing or multiple faces), and auto-submits after 3 violations. It also blocks tab switching and fullscreen exit to maintain exam integrity.",
      tech: [
        technologies.react,
        technologies.vite,
        technologies.mongodb,
        technologies.javascript,
        technologies.bootstrap,
      ],
      image: "/assets/examifai.png",
      github: "https://github.com/ankit9241/ExamifAI",
      live: "https://examifai.netlify.app/",
      isPublished: true,
      features: [
        "Proctored exam mode with face detection and tracking",
        "3-strike violation system for exam integrity",
        "Tab switching and fullscreen exit prevention",
        "Auto-submission after 3 violations",
        "Face registration before examination",
      ],
      challenges: [
        "Backend API integration and connection",
        "Face API integration with camera component",
        "Real-time violation tracking and handling",
      ],
      learnings: [
        "API route implementation and connection",
        "React frontend development with Bootstrap",
        "Backend integration and real-time features",
      ],
    },
    {
      title: "STC IIT Patna - Official Student Technical Council Platform",
      description:
        "A dynamic platform for IIT Patna's student activities, showcasing events, sessions, and activities across three main college wings and their respective subclubs. The platform provides real-time updates and seamless participation options for students.",
      tech: [
        technologies.nextjs,
        technologies.mongodb,
        technologies.typescript,
        technologies.tailwind,
        technologies.react,
      ],
      image: ["/assets/stciitp-1.png", "/assets/stciitp-2.png"],
      github: "https://github.com/ankit9241/stc_website",
      live: "https://stciitphybrid.in",
      isPublished: true,
      features: [
        "Centralized Event Hub: View all events across college wings and subclubs",
        "Real-time Notifications: Instant updates for events and announcements",
        "Responsive Design: Optimized for all devices with mobile-first approach",
        "Admin Dashboard: Intuitive content management for club administrators",
        "Event Participation: Easy registration and RSVP system for students",
      ],
      challenges: [
        "Implementing responsive design across multiple device breakpoints",
        "Managing complex state for real-time event updates",
        "Optimizing performance for large datasets of events and users",
        "Ensuring cross-browser compatibility and accessibility",
      ],
      learnings: [
        "Advanced Git workflows and team collaboration strategies",
        "Performance optimization techniques for React applications",
        "Mobile-first responsive design patterns with Tailwind CSS",
        "Effective state management with React Context API",
        "Server-side rendering and static site generation with Next.js",
      ],
    },
    {
      title: "KIRAN Mentorship Program (Full Stack Project)",
      description:
        "KIRAN is a responsive mentorship web platform built with modern technologies for Class 11-12 and dropper students preparing for competitive exams like JEE and NEET. Built with React and Vite for blazing fast performance, it enables students to raise doubts, book 1:1 sessions, and track academic progress. The platform uses MongoDB for efficient data storage and Bootstrap for a responsive, mobile-first design. Mentors can manage students, track progress, and provide personalized feedback through an intuitive dashboard.",
      tech: [
        technologies.react,
        technologies.vite,
        technologies.mongodb,
        technologies.javascript,
        technologies.bootstrap,
      ],
      image: "/assets/kiran-old.png",
      github: "https://github.com/ankit9241/KIRAN",
      live: "https://kiran-mentorship.netlify.app/",
      isPublished: true,
      features: [
        "Responsive design that works on all devices",
        "User authentication and authorization",
        "Doubt raising and resolution system",
        "1:1 session booking with mentors",
        "Progress tracking and analytics",
      ],
      challenges: [
        "Implementing real-time chat for doubt resolution",
        "Scheduling system across different timezones",
        "Handling file uploads for study materials",
      ],
      learnings: [
        "Real-time data synchronization with WebSockets",
        "Complex state management with React Context",
        "Secure file storage and retrieval",
      ],
    },
    {
      title:
        "KIRAN - Mentorship Platform (Advanced Version) (Full Stack Project)",
      description:
        "This upgraded version of KIRAN offers a fully redesigned frontend and a more robust backend, enabling seamless mentorship at scale. It features dedicated dashboards for students, mentors, and admins; real-time messaging; personal and public resource sharing; meeting scheduling; feedback analytics; and a secure approval system for mentors and materials. Built for efficiency, scalability, and smooth user experience.",
      tech: [
        technologies.react,
        technologies.vite,
        technologies.mongodb,
        technologies.tailwind,
        technologies.typescript,
      ],
      image: "/assets/kiran-new.png",
      github: "https://github.com/ankit9241/KIRAN-Advanced-",
      live: "#",
      isPublished: false,
      features: [
        "Student portal for doubt asking and mentor communication",
        "Mentor dashboard for student management",
        "Real-time chat system for instant communication",
        "Meeting scheduling and calendar integration",
        "Study material upload and management system",
        "Student progress tracking and reporting",
      ],
      challenges: [
        "Implementing real-time chat system",
        "Designing efficient API routes",
        "Database authentication and security",
      ],
      learnings: [
        "Effective MongoDB database design",
        "WebSocket implementation for real-time features",
        "Complex state management in large applications",
      ],
    },
    {
      title: "CrazyOne-E-Commerce Website",
      description:
        "Discover the latest trends in fashion with CrazyOne, your go-to online store for stylish and affordable dresses. From casual wear to party outfits, we’ve got something for every style and occasion. Enjoy a smooth and secure shopping experience, with fast delivery and easy browsing. Behind the scenes, our powerful admin dashboard provides complete analytics to manage store performance, track customer trends, and ensure the best shopping experience for you.",
      tech: [
        technologies.react,
        technologies.css,
        technologies.javascript,
        technologies.tailwind,
      ],
      image: "/assets/CrazyOne.png",
      github: "https://github.com/ankit9241/CrazyOne",
      live: "https://crazy-one.netlify.app/",
      isPublished: true,
      features: [
        "User authentication and profile management",
        "Product catalog with categories and filters",
        "Shopping cart and wishlist functionality",
        "Secure payment gateway integration",
        "Order tracking and history",
        "Admin dashboard with analytics and reporting",
      ],
    },
    {
      title: "PlanIT-Event Management",
      description:
        "PlanIT is an online event management system where users can seamlessly book everything needed for a perfect event — from locations and decorations to attire, lighting, and catering. With a smooth user experience and detailed backend analytics, the admin has full control over every booking and insight into event trends to ensure top-quality service.",
      tech: [
        technologies.react,
        technologies.css,
        technologies.typescript,
        technologies.bootstrap,
      ],
      image: "/assets/planit.png",
      github: "https://github.com/ankit9241/PlanIT",
      live: "#",
      isPublished: false,
      features: [
        "Event browsing and search functionality",
        "Online event booking and ticketing",
        "Venue selection and availability checking",
        "User dashboard for managing bookings",
        "Admin panel for event management",
        "Email notifications and reminders",
      ],
    },
    {
      title: "Gokul Bhandar - Online Grocery Store",
      description:
        "Gokul Bhandar is a local grocery store brought online, offering groceries, stationery, candies, ice cream, and much more. With a clean and simple interface, the website makes it easy for customers to browse, order, and get essentials delivered. The admin panel provides complete store control with analytics to manage inventory, sales, and customer demand.",
      tech: [
        technologies.react,
        technologies.css,
        technologies.typescript,
        technologies.bootstrap,
      ],
      image: "/assets/GokulBhandar.png",
      github: "https://github.com/ankit9241/GokulBhandar",
      live: "https://gokulbhandar.netlify.app",
      isPublished: true,
      features: [
        "Online product catalog with categories",
        "User registration and authentication",
        "Shopping cart and checkout process",
        "Order tracking system",
        "Admin dashboard for inventory management",
        "Local delivery scheduling",
      ],
    },
  ];

  const paletteGradient =
    "linear-gradient(90deg,#49BFC9 0%,#5F8DFF 50%,#9A8DFF 100%)";

  return (
    <section id="projects" className="py-20" ref={ref}>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: paletteGradient }}
          >
            Featured Projects
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: paletteGradient }}
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
                rotateY: index % 2 === 0 ? -8 : 8,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, rotateY: 0 }
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -40 : 40,
                      rotateY: index % 2 === 0 ? -8 : 8,
                    }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(95,141,255,0.04)",
                boxShadow: "0 8px 30px rgba(7,10,30,0.45)",
                transition: "transform 160ms ease, box-shadow 160ms ease",
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                  src={
                    Array.isArray(project.image)
                      ? project.image[0]
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-180">
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 backdrop-blur-sm rounded-full transition-all duration-150 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiCode className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 backdrop-blur-sm rounded-full transition-all duration-150 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.08 }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.12 }}
                  className="text-gray-300 mb-4 line-clamp-3"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.16 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    const textColor = tech.textColor || "#E6F3FF";
                    const iconStyle = { color: textColor, opacity: 0.9 };

                    return (
                      <span
                        key={i}
                        className="flex items-center text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-200"
                        style={{
                          background: tech.bgColor || "rgba(255,255,255,0.05)",
                          border: `1px solid ${
                            tech.borderColor || "rgba(255,255,255,0.05)"
                          }`,
                          color: textColor,
                        }}
                      >
                        <Icon className="w-3 h-3 mr-1.5" style={iconStyle} />
                        <span>{tech.name}</span>
                      </span>
                    );
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      color: "#FFF",
                      minWidth: 96,
                      justifyContent: "center",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiCode className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>

                  {project.isPublished === false ? (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(
                          "This project is not yet published. Coming soon!"
                        );
                      }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        color: "#DDD",
                        minWidth: 96,
                        justifyContent: "center",
                      }}
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </motion.button>
                  ) : (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm"
                      style={{
                        backgroundImage: paletteGradient,
                        color: "#021021",
                        minWidth: 96,
                        justifyContent: "center",
                      }}
                      onClick={(e) => {
                        if (!project.isPublished) {
                          e.preventDefault();
                          e.stopPropagation();
                          alert(
                            "This project is not yet published. Coming soon!"
                          );
                        }
                      }}
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>
                        {project.isPublished ? "Live Demo" : "Coming Soon"}
                      </span>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
