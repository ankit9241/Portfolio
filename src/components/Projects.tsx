'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiReact, SiMongodb, SiTailwindcss, SiJavascript, SiCss3, SiBootstrap, SiTypescript } from 'react-icons/si';
import ProjectDetails from './ProjectDetails';

interface ProjectTech {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface Project {
  title: string;
  description: string;
  tech: ProjectTech[];
  image: string;
  github: string;
  live: string;
  isPublished?: boolean; // Flag to indicate if project is published
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    // Prevent default click behavior if project is not published
    if (!project.isPublished) {
      const liveButton = document.querySelector('.live-demo-button');
      if (liveButton) {
        liveButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          alert('This project is not yet published. Coming soon!');
        }, { once: true });
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const projects = [
    {
      title: "ExamifAI – Secure AI-Based Exam Portal for IIT Patna (Frontend+Backend)",
      description: "Developed for IIT Patna, ExamifAI is a smart online exam system that uses real-time face recognition to ensure secure, cheat-free assessments. It tracks the student's face throughout the exam, issues warnings for suspicious activity (like missing or multiple faces), and auto-submits after 3 violations. It also blocks tab switching and fullscreen exit to maintain exam integrity.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'Vite',
          icon: SiReact,
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          textColor: 'text-purple-600 dark:text-purple-400',
          borderColor: 'border-purple-200 dark:border-purple-800'
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
          textColor: 'text-emerald-600 dark:text-emerald-400',
          borderColor: 'border-emerald-200 dark:border-emerald-800'
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          textColor: 'text-yellow-600 dark:text-yellow-400',
          borderColor: 'border-yellow-200 dark:border-yellow-800'
        },
        {
          name: 'Bootstrap',
          icon: SiBootstrap,
          bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
          textColor: 'text-indigo-600 dark:text-indigo-400',
          borderColor: 'border-indigo-200 dark:border-indigo-800'
        }
      ],
      image: "/assets/examifai.png",
      github: "https://github.com/ankit9241/ExamifAI",
      live: "https://ankitkumar.vercel.app",
      isPublished: false,
      features: [
        "Proctored exam mode with face detection and tracking",
        "3-strike violation system for exam integrity",
        "Tab switching and fullscreen exit prevention",
        "Auto-submission after 3 violations",
        "Face registration before examination"
      ],
      challenges: [
        "Backend API integration and connection",
        "Face API integration with camera component",
        "Real-time violation tracking and handling"
      ],
      learnings: [
        "API route implementation and connection",
        "React frontend development with Bootstrap",
        "Backend integration and real-time features"
      ]
    },
    {
      title: "KIRAN Mentorship Program (Frontend+Backend)",
      description: "KIRAN is a responsive mentorship web platform built with modern technologies for Class 11–12 and dropper students preparing for competitive exams like JEE and NEET. Built with React and Vite for blazing fast performance, it enables students to raise doubts, book 1:1 sessions, and track academic progress. The platform uses MongoDB for efficient data storage and Bootstrap for a responsive, mobile-first design. Mentors can manage students, track progress, and provide personalized feedback through an intuitive dashboard.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'Vite',
          icon: SiReact,
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          textColor: 'text-purple-600 dark:text-purple-400',
          borderColor: 'border-purple-200 dark:border-purple-800'
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
          textColor: 'text-emerald-600 dark:text-emerald-400',
          borderColor: 'border-emerald-200 dark:border-emerald-800'
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          textColor: 'text-yellow-600 dark:text-yellow-400',
          borderColor: 'border-yellow-200 dark:border-yellow-800'
        },
        {
          name: 'Bootstrap',
          icon: SiBootstrap,
          bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
          textColor: 'text-indigo-600 dark:text-indigo-400',
          borderColor: 'border-indigo-200 dark:border-indigo-800'
        }
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
        "Progress tracking and analytics"
      ],
      challenges: [
        "Implementing real-time chat for doubt resolution",
        "Scheduling system across different timezones",
        "Handling file uploads for study materials"
      ],
      learnings: [
        "Real-time data synchronization with WebSockets",
        "Complex state management with React Context",
        "Secure file storage and retrieval"
      ]
    },
    {
      title: "KIRAN – Mentorship Platform (Advanced Version) (Frontend+Backend)",
      description: "This upgraded version of KIRAN offers a fully redesigned frontend and a more robust backend, enabling seamless mentorship at scale. It features dedicated dashboards for students, mentors, and admins; real-time messaging; personal and public resource sharing; meeting scheduling; feedback analytics; and a secure approval system for mentors and materials. Built for efficiency, scalability, and smooth user experience.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'Vite',
          icon: SiReact,
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          textColor: 'text-purple-600 dark:text-purple-400',
          borderColor: 'border-purple-200 dark:border-purple-800'
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
          textColor: 'text-emerald-600 dark:text-emerald-400',
          borderColor: 'border-emerald-200 dark:border-emerald-800'
        },
        {
          name: 'Tailwind',
          icon: SiTailwindcss,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        }
      ],
      image: "/assets/kiran-new.png",
      github: "https://github.com/ankit9241/mahila-bazaar",
      live: "https://mahila-bazaar.vercel.app",
      isPublished: false,
      features: [
        "Student portal for doubt asking and mentor communication",
        "Mentor dashboard for student management",
        "Real-time chat system for instant communication",
        "Meeting scheduling and calendar integration",
        "Study material upload and management system",
        "Student progress tracking and reporting"
      ],
      challenges: [
        "Implementing real-time chat system",
        "Designing efficient API routes",
        "Database authentication and security"
      ],
      learnings: [
        "Effective MongoDB database design",
        "WebSocket implementation for real-time features",
        "Complex state management in large applications"
      ]
    },
    {
      title: "CrazyOne-E-Commerce Website (Frontend)",
      description: "Discover the latest trends in fashion with CrazyOne, your go-to online store for stylish and affordable dresses. From casual wear to party outfits, we’ve got something for every style and occasion. Enjoy a smooth and secure shopping experience, with fast delivery and easy browsing. Behind the scenes, our powerful admin dashboard provides complete analytics to manage store performance, track customer trends, and ensure the best shopping experience for you.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'CSS3',
          icon: SiCss3,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          textColor: 'text-yellow-600 dark:text-yellow-400',
          borderColor: 'border-yellow-200 dark:border-yellow-800'
        },
        {
          name: 'Tailwind',
          icon: SiTailwindcss,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        }
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
        "Admin dashboard with analytics and reporting"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Managing cart state across sessions",
        "Creating responsive product catalog"
      ],
      learnings: [
        "E-commerce best practices",
        "Payment gateway integration",
        "Data visualization with charts"
      ]
    },
    {
      title: "PlanIT-Event Management (Frontend)",
      description: "PlanIT is an online event management system where users can seamlessly book everything needed for a perfect event — from locations and decorations to attire, lighting, and catering. With a smooth user experience and detailed backend analytics, the admin has full control over every booking and insight into event trends to ensure top-quality service.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'CSS3',
          icon: SiCss3,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'Bootstrap',
          icon: SiBootstrap,
          bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
          textColor: 'text-indigo-600 dark:text-indigo-400',
          borderColor: 'border-indigo-200 dark:border-indigo-800'
        }
      ],
      image: "/assets/planit.png",
      github: "https://github.com/ankit9241/PlanIT",
      live: "https://planit-event-management.vercel.app",
      isPublished: false,
      features: [
        "Event browsing and search functionality",
        "Online event booking and ticketing",
        "Venue selection and availability checking",
        "User dashboard for managing bookings",
        "Admin panel for event management",
        "Email notifications and reminders"
      ],
      challenges: [
        "Managing event dates and availability",
        "Handling concurrent bookings",
        "Implementing secure payment processing"
      ],
      learnings: [
        "Booking system architecture",
        "Real-time availability updates",
        "Email notification systems"
      ]
    },
    {
      title: "Gokul Bhandar - Online Grocery Store (Frontend)",
      description: "Gokul Bhandar is a local grocery store brought online, offering groceries, stationery, candies, ice cream, and much more. With a clean and simple interface, the website makes it easy for customers to browse, order, and get essentials delivered. The admin panel provides complete store control with analytics to manage inventory, sales, and customer demand.",
      tech: [
        {
          name: 'React',
          icon: SiReact,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'CSS3',
          icon: SiCss3,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-600 dark:text-blue-400',
          borderColor: 'border-blue-200 dark:border-blue-800'
        },
        {
          name: 'Bootstrap',
          icon: SiBootstrap,
          bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
          textColor: 'text-indigo-600 dark:text-indigo-400',
          borderColor: 'border-indigo-200 dark:border-indigo-800'
        }
      ],
      image: "/assets/GokulBhandar.png",
      github: "https://github.com/ankit9241/GokulBhandar",
      live: "https://gokul-bhandar.vercel.app",
      isPublished: false,
      features: [
        "Online product catalog with categories",
        "User registration and authentication",
        "Shopping cart and checkout process",
        "Order tracking system",
        "Admin dashboard for inventory management",
        "Local delivery scheduling"
      ],
      challenges: [
        "Creating an intuitive user interface",
        "Managing inventory in real-time",
        "Implementing local delivery logic"
      ],
      learnings: [
        "E-commerce platform development",
        "Inventory management systems",
        "User experience optimization"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects that showcase my skills in full-stack development,
            UI/UX design, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              animate={isInView ? {
                opacity: 1,
                x: 0,
                rotateY: 0
              } : {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div
                key={index}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/80 backdrop-blur-sm rounded-full transition-all duration-200 group-hover:bg-black/90"
                  >
                    <HiCode className="w-5 h-5 text-white group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/80 backdrop-blur-sm rounded-full transition-all duration-200 group-hover:bg-black/90"
                  >
                    <HiExternalLink className="w-5 h-5 text-white group-hover:text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${tech.bgColor} ${tech.textColor} ${tech.borderColor}`}
                    >
                      <tech.icon className="w-3 h-3 mr-1.5" />
                      {tech.name}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex space-x-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200 whitespace-nowrap"
                  >
                    <HiCode className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  {project.isPublished === false ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('This project is not yet published. Coming soon!');
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed whitespace-nowrap"
                      disabled
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </motion.button>
                  ) : (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-button flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                      onClick={(e) => {
                        if (!project.isPublished) {
                          e.preventDefault();
                          alert('This project is not yet published. Coming soon!');
                        }
                      }}
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>{project.isPublished ? 'Live Demo' : 'Coming Soon'}</span>
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