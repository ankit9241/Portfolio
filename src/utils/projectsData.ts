import { technologies } from "./technologies";

export interface ProjectTech {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export interface ProjectMetaItem {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTechStackGroup {
  category: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  description: string;

  coverImage: string | string[];
  gallery?: string[];

  github: string;
  live: string;
  isPublished?: boolean;

  tech: ProjectTech[];

  meta: ProjectMetaItem[];
  links?: ProjectLink[];

  overview: string[];
  context?: string[];
  whyBuilt?: string[];

  techStack?: ProjectTechStackGroup[];

  features?: ProjectFeature[];
  technicalDetails?: ProjectFeature[];
  challenges?: ProjectChallenge[];

  metrics?: ProjectMetric[];
  results?: string[];
  learnings?: string[];
  futureScope?: string[];
  statusNote?: string[];

  relatedProjects?: string[];
}

export const projects: Project[] = [
  {
    title: "ExamifAI",
    slug: "examifai",
    tagline: "AI-Based Secure Online Examination System",

    shortDescription:
      "A full-stack AI-powered exam platform built to conduct secure online assessments with face verification, browser monitoring, automated violation handling, and instructor analytics.",

    description:
      "ExamifAI is a full-stack AI-powered online examination platform developed as a Capstone Project during my second semester. It was designed to reduce cheating in remote exams by combining face recognition, browser behavior monitoring, and automated exam enforcement into a single proctored workflow.",

    coverImage: "/assets/projects/examifai/examifai.png",

    gallery: ["/assets/projects/examifai/examifai.png"],

    github: "https://github.com/ankit9241/ExamifAI",
    live: "https://examifai.netlify.app/",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.vite,
      technologies.javascript,
      technologies.bootstrap,
      technologies.mongodb,
    ],

    meta: [
      { label: "Timeline", value: "2 Months" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Academic Capstone Project" },
      { label: "Deployment", value: "Production Platform" },
    ],

    links: [
      { label: "Live Demo", href: "https://examifai.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/ExamifAI" },
    ],

    overview: [
      "ExamifAI is a full-stack AI-powered online examination platform developed as a Capstone Project during my second semester. The system was built to conduct secure online assessments while reducing cheating through real-time identity verification and automated violation tracking.",
      "The platform combines face registration, live face recognition, fullscreen enforcement, browser activity monitoring, and exam analytics into a single workflow for both students and instructors.",
      "Students must register their face before the exam begins, and during the exam the system continuously checks whether the detected face matches the registered candidate. If suspicious behavior is detected, warnings are shown, violations are counted, and the exam can be auto-submitted after repeated rule breaks.",
      "On the instructor side, the platform also provides tools to create and publish exams, define exam timing windows, upload questions in bulk, review attempt history, and analyze question-level performance.",
    ],

    context: [
      "Remote examinations are easy to misuse when there is no reliable identity verification or live behavior monitoring. Traditional online test systems can collect answers, but they often do very little to ensure the actual candidate is present and following the rules.",
      "ExamifAI was built to address that gap by creating a browser-based proctored exam system where monitoring and exam flow work together instead of being treated as separate features.",
    ],

    whyBuilt: [
      "I built ExamifAI as my second-semester Capstone Project to explore how AI-assisted monitoring could be applied to online assessments in a practical way.",
      "Instead of making just another exam portal, I wanted to solve the harder part: cheating prevention. That meant not only showing questions and collecting answers, but also verifying identity, reacting to suspicious activity in real time, and giving teachers visibility into what happened during each attempt.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "Vite", "JavaScript", "Bootstrap"],
      },
      {
        category: "Backend",
        items: ["Node.js-based backend"],
      },
      {
        category: "Database",
        items: ["MongoDB", "MongoDB Atlas"],
      },
      {
        category: "AI / Proctoring",
        items: ["face-api.js"],
      },
      {
        category: "Deployment",
        items: ["Netlify (Frontend)", "Render (Backend)"],
      },
    ],

    features: [
      {
        title: "Face Registration & Identity Verification",
        description:
          "Before starting an exam, students must complete a face registration step using a live webcam capture. The system stores the face descriptor in MongoDB and uses it during the exam to continuously verify that the current candidate matches the registered identity.",
      },
      {
        title: "Real-Time AI Proctoring",
        description:
          "During the exam, the webcam feed is actively monitored using face-api.js. The system checks for face presence, multiple faces in the frame, and mismatch between the registered face and the detected candidate in real time.",
      },
      {
        title: "Question Locking on Suspicious Activity",
        description:
          "If no face is detected, multiple faces appear, or the detected face does not match the registered candidate, the question panel is hidden immediately. A warning is shown telling the student that the timer is still running and they must return properly in a well-lit environment to continue.",
      },
      {
        title: "Violation Detection System",
        description:
          "The platform records violations for tab switching, desktop or app switching, fullscreen exit, no face detected, multiple faces detected, and face mismatch. These rules are enforced automatically during the exam session.",
      },
      {
        title: "Automatic Exam Submission",
        description:
          "To maintain exam integrity, the system auto-submits the paper after three violations. This prevents repeated attempts to bypass monitoring and makes the rules clear and enforceable.",
      },
      {
        title: "Question Navigation & MCQ Workflow",
        description:
          "The exam currently supports MCQ-based assessments. Students can navigate to any question through a question number panel instead of being restricted to a strict linear sequence.",
      },
      {
        title: "Bulk Question Upload for Teachers",
        description:
          "Teachers can upload an Excel sheet containing questions, options, and correct answers. This makes exam creation faster and more practical than manually entering every question.",
      },
      {
        title: "Teacher Dashboard & Exam Management",
        description:
          "Instructors can set exam duration, define start and end windows, publish or unpublish exams, track individual attempts, review per-student violations, and see when a student started, ended, and how much time was taken.",
      },
      {
        title: "Exam Analytics",
        description:
          "The platform provides analytics such as question-wise difficulty signals, violation counts, and attempt history. If multiple attempts are allowed, teachers can review earlier attempts while using the latest valid attempt as the counted submission.",
      },
    ],

    technicalDetails: [
      {
        title: "Student Exam Flow",
        description:
          "The exam flow starts with account creation or login, followed by face registration. Once the student starts an exam, camera, microphone, and fullscreen permissions must be enabled. The student can then take the exam under live monitoring, and the paper is auto-submitted if three violations are recorded.",
      },
      {
        title: "Live Face Descriptor Matching",
        description:
          "The system captures and stores a face descriptor during registration, then compares live detections against the stored identity during the exam. This creates a continuous identity check rather than a one-time verification.",
      },
      {
        title: "Browser Restriction Handling",
        description:
          "The exam environment also included measures to reduce easy misuse through browser interaction, including blocking certain keyboard combinations and restricting behaviors such as fullscreen exit and suspicious navigation patterns.",
      },
      {
        title: "Attempt Tracking Logic",
        description:
          "Teachers can review different student attempts when multiple attempts are allowed. The system preserves attempt history while counting the final attempt according to the configured exam logic.",
      },
    ],

    challenges: [
      {
        title: "Integrating Face Recognition in a Real Exam Flow",
        problem:
          "Using face-api.js inside a live exam environment was the hardest technical part because the face detection had to work continuously without breaking the actual test-taking experience.",
        solution:
          "I built the exam flow around live monitoring instead of treating monitoring as a separate layer. The system continuously checked identity state and used that state to control whether the question panel should remain visible.",
      },
      {
        title: "Maintaining Security Without Breaking Usability",
        problem:
          "Simply detecting violations was not enough. The system needed to respond immediately while still preserving timing and exam continuity.",
        solution:
          "I designed the workflow so that the timer keeps running even if the question interface gets hidden, which discourages cheating while keeping the exam state consistent.",
      },
      {
        title: "Handling Browser-Level Misuse",
        problem:
          "Preventing common shortcuts and behaviors such as tab switching, fullscreen exit, and key combinations like copy/paste-related actions required careful event handling.",
        solution:
          "I added monitoring and restriction logic for suspicious browser behaviors and combined that with the violation system so enforcement remained consistent.",
      },
    ],

    metrics: [
      { label: "Monitoring Type", value: "Real-time face verification" },
      { label: "Violation Policy", value: "Auto-submit after 3 violations" },
      { label: "Question Format", value: "MCQ-based exams" },
      {
        label: "Face Handling",
        value: "Live capture + stored descriptor matching",
      },
    ],

    results: [
      "Successfully used for mock/internal exam testing with multiple students.",
      "Built a working AI-assisted proctoring workflow combining identity verification and browser monitoring.",
      "Implemented automatic enforcement through question hiding, warnings, and auto-submission.",
      "Created an instructor-facing analytics workflow for question performance and attempt review.",
    ],

    learnings: [
      "Integrating AI-based face recognition into browser-based applications requires careful control of both performance and user flow.",
      "Security workflows are much stronger when monitoring directly affects what the user can do, instead of just silently logging events.",
      "Managing webcam streams, fullscreen handling, browser events, and exam state together is significantly more complex than building a normal dashboard application.",
      "A strong anti-cheating system is not just about detection; it also depends on how clearly rules are enforced and surfaced to both students and instructors.",
    ],

    statusNote: [
      "The current system is designed for browser-based desktop use and is not intended for mobile devices.",
      "Face recognition accuracy depends on proper lighting and a clearly visible face during the exam.",
      "The platform has been deployed for demo and mock testing, with plans for broader exam usage in controlled student groups.",
    ],
  },

  {
    title: "STC IIT Patna",
    slug: "stc-iit-patna",
    tagline: "Official Student Technical Council Platform",

    shortDescription:
      "A production platform for IIT Patna’s Student Technical Council that centralizes clubs, events, announcements, OTP-based registrations, and admin workflows across multiple technical wings.",

    description:
      "STC IIT Patna is the official digital platform for the Student Technical Council of IIT Patna. It was built to centralize technical clubs, event discovery, announcements, and student registrations into one production-ready system used by real students and council teams.",

    coverImage: ["/assets/projects/stc/stc-1.png", "/assets/projects/stc/stc-2.png"],

    gallery: ["/assets/projects/stc/stc-1.png", "/assets/projects/stc/stc-2.png"],

    github: "https://github.com/ankit9241/stc_website",
    live: "https://stciitphybrid.in",
    isPublished: true,

    tech: [
      technologies.nextjs,
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
      technologies.mongodb,
    ],

    meta: [
      { label: "Timeline", value: "~2 Months" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "4 Developers" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Production Platform" },
      { label: "Organization", value: "IIT Patna Student Technical Council" },
      { label: "Deployment", value: "Official Production Platform" },
    ],

    links: [
      { label: "Live Demo", href: "https://stciitphybrid.in" },
      { label: "Source Code", href: "https://github.com/ankit9241/stc_website" },
    ],

    overview: [
      "STC IIT Patna is the official digital hub for the Student Technical Council of IIT Patna. The platform brings together technical clubs, events, announcements, and student participation workflows in one place instead of scattering them across separate channels.",
      "It serves three major technical wings and more than twenty-four sub-clubs, giving students a centralized way to explore activities, register for events, and stay updated with official notices.",
      "Unlike a showcase project, this was a real production platform used by actual students and council teams. It handled real event traffic, registrations, and administrative workflows during live college activity.",
    ],

    context: [
      "Managing multiple clubs and events becomes messy when information is spread across posters, chats, forms, and disconnected pages. Students miss updates, organizers struggle to track registrations, and administrative work becomes repetitive.",
      "The platform was built to solve this by creating a single official system where clubs, events, forms, and announcements could all be managed in a structured way.",
    ],

    whyBuilt: [
      "The goal was not just to make a better-looking student website, but to build a platform that could actually support real event operations.",
      "It needed to work for both sides: students discovering and registering for events, and council/admin teams managing announcements, registrations, and event data without repeatedly changing code.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js-based backend", "API integration", "Nodemailer", "Resend (Email Integration)"],
      },
      {
        category: "Database",
        items: ["MongoDB"],
      },
      {
        category: "Authentication / Verification",
        items: ["College Email OTP Verification"],
      },
      {
        category: "Deployment",
        items: ["Production Deployment (IIT Patna Official Platform)"],
      },
    ],

    features: [
      {
        title: "Centralized Event Hub",
        description:
          "The platform aggregates activities across 3 technical wings and 24+ sub-clubs, making it easier for students to discover workshops, hackathons, technical sessions, and club initiatives from one unified system.",
      },
      {
        title: "OTP-Based Secure Event Registration",
        description:
          "Students register for events through a structured flow where they first enter their college email, receive an OTP, verify it, and only then gain access to the registration form. This keeps participation limited to verified IIT Patna students.",
      },
      {
        title: "Custom Registration Form Workflow",
        description:
          "Admins can manage registration forms dynamically instead of hardcoding them each time. This makes the system practical for running different events with different requirements.",
      },
      {
        title: "Admin Panel for Event Operations",
        description:
          "The platform includes admin workflows for creating events, managing forms, posting announcements, handling registration-related actions, and monitoring participation data.",
      },
      {
        title: "Notification & Banner System",
        description:
          "Important announcements are surfaced through a homepage notification panel and banner-style updates, making the platform useful not just for event discovery but also for official communication.",
      },
      {
        title: "Dedicated Club Pages",
        description:
          "Each club has its own page with details such as club information, member data, and supporting content, allowing the site to function as both an event system and a structured club directory.",
      },
      {
        title: "Form Response Integration",
        description:
          "The project also involved registration response handling and email-related workflows, helping the system move closer to a real operational platform instead of a static event showcase.",
      },
    ],

    technicalDetails: [
      {
        title: "Student Registration Flow",
        description:
          "The registration flow follows a clean process: a student opens an event, clicks register, enters their IIT Patna email, verifies the OTP received on mail, fills the form, and submits the response. This reduces fake registrations and ensures only eligible students can proceed.",
      },
      {
        title: "Hybrid Content Structure",
        description:
          "Most active data such as events, forms, and responses are managed dynamically, while some stable information such as club member details or static organization content remains code-managed. This hybrid structure made the system practical while the platform continued evolving.",
      },
      {
        title: "Frontend Redesign Contribution",
        description:
          "A major part of my contribution started on the frontend side, where I redesigned and rebuilt several pages that previously lacked a strong user experience. This helped improve the visual quality and structure of the public-facing platform.",
      },
      {
        title: "Backend & Admin Contribution",
        description:
          "Later, my work also extended into backend-related areas during the admin panel and live event workflow phase. I contributed to admin-side features, registration-related logic, Gmail/OTP integration support, and full-stack functionality required when real events were run through the website.",
      },
    ],

    challenges: [
      {
        title: "Making OTP Verification Reliable",
        problem:
          "One practical issue during development was that OTP emails could land in junk folders, which weakens the registration experience for real users.",
        solution:
          "We worked on improving the email flow and registration handling so the system could be used more reliably during live event registrations.",
      },
      {
        title: "Transitioning from a Static Site to a Real Workflow Platform",
        problem:
          "It is easy to build a college website that only displays information, but much harder to turn it into a usable event operations platform with forms, verification, and admin management.",
        solution:
          "The platform was gradually expanded from frontend-focused pages into a fuller system with admin workflows, registration handling, and live event support.",
      },
    ],

    metrics: [
      { label: "Technical Wings", value: "3" },
      { label: "Sub-Clubs", value: "24+" },
      { label: "Official Events Supported", value: "6–7" },
      { label: "Student Registrations Processed", value: "250+" },
    ],

    results: [
      "Officially deployed and used by the IIT Patna Student Technical Council.",
      "Supported real student registrations during official events around late November and early December.",
      "Handled more than 250 registrations across multiple events.",
      "Helped centralize club visibility, event discovery, and registration workflows into one production system.",
    ],

    learnings: [
      "Building a production platform is very different from building a demo site because real users immediately expose weak UX and broken flows.",
      "Even small systems like OTP verification become tricky in real usage because deliverability and user trust matter as much as code correctness.",
      "Frontend redesign work becomes much more meaningful when it is tied to real workflows instead of only visual polish.",
      "Working on a live platform taught me how full-stack systems evolve gradually, not all at once.",
    ],

    statusNote: [
      "Some platform content is still partly static, and the admin/user experience can be improved further.",
      "The platform is actively being enhanced with broader redesign work and more structured role-based workflows for future administrative expansion.",
    ],
  },

  {
    title: "TrackFlow",
    slug: "trackflow",
    tagline: "Habit Tracking & Productivity Analytics Platform",

    shortDescription:
      "A full-stack habit tracking platform that helps users build routines, track daily completion, measure streaks, and understand productivity patterns through analytics.",

    description:
      "TrackFlow is a full-stack habit tracking and productivity analytics platform designed to help users build consistent daily routines. It allows users to create habits, mark daily completion, monitor streaks, and visualize productivity through chart-based insights.",

    coverImage: [
      "/assets/projects/trackflow/trackflow-1.png",
      "/assets/projects/trackflow/trackflow-2.png",
    ],

    gallery: [
      "/assets/projects/trackflow/trackflow-1.png",
      "/assets/projects/trackflow/trackflow-2.png",
    ],

    github: "https://github.com/ankit9241/TrackFlow",
    live: "https://track-flow1.netlify.app/",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.tailwind,
      technologies.mongodb,
      technologies.nodejs,
      technologies.express,
    ],

    meta: [
      { label: "Timeline", value: "~2–3 Weeks" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Full Stack Web Application" },
      { label: "Deployment", value: "Netlify (Frontend) + Render (Backend)" },
    ],

    links: [
      { label: "Live Demo", href: "https://track-flow1.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/TrackFlow" },
    ],

    overview: [
      "TrackFlow is a full-stack habit tracking platform built to help users stay consistent with daily routines and measure progress over time.",
      "The application allows users to create habits, manage them from a personal dashboard, mark daily completion, and understand their performance through visual analytics.",
      "Instead of only storing whether a task exists, the platform focuses on actual consistency by combining day-wise completion tracking, streak logic, and chart-based summaries.",
    ],

    context: [
      "Many habit trackers become useless because they only list tasks without giving users a real sense of consistency, momentum, or performance over time.",
      "TrackFlow was built to make habit tracking feel more measurable by showing not just what a user plans to do, but how regularly they are actually doing it.",
    ],

    whyBuilt: [
      "I wanted to build a full-stack productivity tool that was simple to use but still meaningful enough to help users understand their daily discipline.",
      "The goal was not just to create a CRUD app for habits, but to design a system where completion history, streak calculation, and analytics all worked together.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js"],
      },
      {
        category: "Database",
        items: ["MongoDB"],
      },
      {
        category: "Data Visualization",
        items: ["Chart.js"],
      },
      {
        category: "Authentication",
        items: ["Custom Email / Password Login", "Protected Routes"],
      },
      {
        category: "Deployment",
        items: ["Netlify (Frontend)", "Render (Backend)"],
      },
    ],

    features: [
      {
        title: "Custom Authentication System",
        description:
          "TrackFlow includes a custom email and password-based signup/login flow. Once authenticated, users can access protected routes and manage their personal dashboard securely.",
      },
      {
        title: "Habit Creation & Management",
        description:
          "Users can create, edit, and delete habits based on their own routine. Each habit includes a name and duration setup, allowing users to define whether it should continue forever or run between selected start and end dates.",
      },
      {
        title: "Daily Completion Tracking",
        description:
          "The platform stores completion status when a user marks a habit for a particular day. This creates a real daily history instead of just showing a generic active habit list.",
      },
      {
        title: "Streak Calculation Logic",
        description:
          "TrackFlow calculates streaks based on consecutive daily completion. If a user misses a day, the streak resets, and a new streak starts from the next completion sequence.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "The dashboard includes chart-based insights such as day-wise monthly productivity, habit activity trends, and performance-based scoring. It helps users identify which habits are being completed most consistently and how active they have been over time.",
      },
      {
        title: "Responsive User Experience",
        description:
          "The application is fully responsive and built to work smoothly across desktop and mobile screen sizes, making it practical for everyday usage.",
      },
    ],

    technicalDetails: [
      {
        title: "Protected Dashboard Workflow",
        description:
          "The application uses protected routes so that only authenticated users can access their habit management dashboard and analytics data.",
      },
      {
        title: "Habit Duration Modeling",
        description:
          "Each habit supports flexible duration configuration. A user can either create a habit that continues indefinitely or define a start and end range for time-bound routines.",
      },
      {
        title: "Day-Level Completion Storage",
        description:
          "Completion is stored when a habit is marked for a day, which makes it possible to build historical tracking, streak logic, and analytics from actual usage data instead of assumptions.",
      },
      {
        title: "Analytics Data Preparation",
        description:
          "The dashboard translates raw completion records into visual summaries, including monthly day-wise activity graphs, most-completed habit indicators, and a performance score based on consistency.",
      },
    ],

    challenges: [
      {
        title: "Saving Completion Data Correctly",
        problem:
          "Habit completion sounds simple, but storing it correctly without duplication or broken date logic becomes messy when users interact daily over time.",
        solution:
          "I built the tracking flow around day-level completion storage so the system could preserve daily history and use that reliably for analytics and streak calculation.",
      },
      {
        title: "Getting Streak Logic Right",
        problem:
          "Streak systems easily break when skipped days, resumed habits, or date-based checks are not handled properly.",
        solution:
          "I implemented streak calculation based on consecutive daily completion, resetting when a day is missed and restarting once the habit is picked up again.",
      },
    ],

    metrics: [
      { label: "Tracking Style", value: "Daily completion-based" },
      { label: "Habit Duration Modes", value: "Forever or date range" },
      { label: "Charts", value: "Monthly day-wise analytics" },
      { label: "Access Control", value: "Protected user dashboard" },
    ],

    results: [
      "Built a complete full-stack productivity tracker with authentication, daily tracking, and analytics.",
      "Implemented working streak logic tied to real completion history.",
      "Created a smooth and responsive dashboard experience for habit management.",
      "Turned habit data into visual productivity insights instead of simple static records.",
    ],

    learnings: [
      "Time-based data is harder to manage than normal CRUD because date logic directly affects streaks, history, and accuracy.",
      "Analytics dashboards only become useful when the underlying completion data is stored cleanly and consistently.",
      "A simple product can still feel strong if the user experience is smooth and the core workflow is reliable.",
      "Building full-stack applications becomes much more meaningful when frontend interaction and backend logic are tightly connected.",
    ],

    futureScope: [
      "Add categories to organize habits more clearly.",
      "Introduce progress goals for better motivation and measurement.",
      "Expand analytics with richer long-term insights such as goal completion rates or calendar-style views.",
    ],
  },

  {
    title: "KIRAN v1",
    slug: "kiran-mentorship-v1",
    tagline: "Mentorship & Doubt Resolution Platform",

    shortDescription:
      "A full-stack multi-role mentorship platform where students can submit doubts, mentors can manage responses and study materials, and admins can oversee the entire academic support workflow.",

    description:
      "KIRAN v1 is a full-stack mentorship and doubt resolution platform built to connect students with mentors in a structured academic support system. It supports students, mentors, and admins through dedicated role-based workflows, doubt handling, resource sharing, announcements, and feedback mechanisms.",

    coverImage: "/assets/projects/kiran/kiran-v1.png",

    gallery: ["/assets/projects/kiran/kiran-v1.png"],

    github: "https://github.com/ankit9241/KIRAN",
    live: "https://kiran-mentorship.netlify.app/",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.vite,
      technologies.mongodb,
      technologies.javascript,
      technologies.bootstrap,
    ],

    meta: [
      { label: "Timeline", value: "~2 Months" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Full Stack Web Application" },
      { label: "Deployment", value: "Netlify (Frontend) + Render (Backend)" },
    ],

    links: [
      { label: "Live Demo", href: "https://kiran-mentorship.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/KIRAN" },
    ],

    overview: [
      "KIRAN v1 is a mentorship platform designed to help students connect with mentors for academic support, doubt solving, and access to structured study resources.",
      "The system supports three core roles — Students, Mentors, and Admins — each with their own dashboard and responsibilities, turning the platform into more than a simple Q&A portal.",
      "Students can submit doubts in multiple formats, mentors can pick and solve doubts, and admins can manage users, publish announcements, and oversee the overall platform activity.",
    ],

    context: [
      "Students often struggle to get timely academic help, especially when support is scattered across personal chats, informal groups, or unstructured channels.",
      "KIRAN was built to bring mentorship, doubt resolution, and study resources into one organized system where both students and mentors could interact more effectively.",
    ],

    whyBuilt: [
      "This was one of my earliest major full-stack projects, and I wanted to build something more meaningful than a basic CRUD dashboard.",
      "The goal was to create a complete academic workflow where students could raise doubts, mentors could respond in a structured way, and admins could manage the system without relying on disconnected tools.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "Vite", "JavaScript", "Bootstrap"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js"],
      },
      {
        category: "Database",
        items: ["MongoDB"],
      },
      {
        category: "Authentication",
        items: ["Email / Password Login", "Google Authentication via Firebase"],
      },
      {
        category: "File Handling",
        items: ["Document and media upload workflow"],
      },
      {
        category: "Deployment",
        items: ["Netlify (Frontend)", "Render (Backend)"],
      },
    ],

    features: [
      {
        title: "Multi-Role Platform",
        description:
          "KIRAN supports three role-based user types: Students, Mentors, and Admins. Each role has its own dashboard and permissions, which makes the system much more structured than a typical one-panel educational platform.",
      },
      {
        title: "Flexible Doubt Submission",
        description:
          "Students can raise doubts using text, images, and PDF files. The platform supports richer doubt submission instead of limiting users to a single text box, which makes it more practical for real academic use.",
      },
      {
        title: "Mentor Assignment Workflow",
        description:
          "Mentors can view available doubts, assign themselves to one, and respond through the platform. This prevents confusion in doubt ownership and creates a more organized resolution process.",
      },
      {
        title: "Structured Study Material Library",
        description:
          "Mentors can upload study materials in a structured hierarchy such as class → subject → files. Students can browse and download these resources, while access remains role-restricted within the platform.",
      },
      {
        title: "Mentor Discovery System",
        description:
          "Students can view mentor profile cards and discover available mentors more easily through a dedicated listing flow. This makes the mentorship side of the platform more visible instead of hidden behind only a doubt form.",
      },
      {
        title: "Feedback & Rating System",
        description:
          "After receiving responses, students can leave both text feedback and star ratings. This feedback is visible to users publicly, helping create accountability and quality signals inside the platform.",
      },
      {
        title: "Announcements & Notifications",
        description:
          "The platform includes a notification system surfaced through a bell icon interface, along with announcements that can be managed from the admin side. This helps users stay updated on responses, updates, and platform activity.",
      },
      {
        title: "Admin Management Panel",
        description:
          "Admins can manage students and mentors, view profiles, create notifications, post announcements, and oversee platform-level activity. This gives the system a true administrative layer rather than leaving it as a student-only tool.",
      },
    ],

    technicalDetails: [
      {
        title: "Authentication Workflow",
        description:
          "KIRAN supports both traditional email/password login and Google authentication through Firebase. This gives users flexible access while still keeping the role-based platform structure intact.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Different parts of the platform are restricted based on role. For example, mentors manage doubts and materials, students consume resources and raise doubts, and admins control higher-level operations such as announcements and profile oversight.",
      },
      {
        title: "Resource Organization Model",
        description:
          "Study materials are stored in a structured academic hierarchy rather than as random files. This allows students to navigate resources more naturally and makes the mentor-upload workflow more usable at scale.",
      },
      {
        title: "Doubt Workflow Architecture",
        description:
          "The system is designed around an end-to-end doubt lifecycle: student submission, mentor pickup, mentor response, user notification, and student feedback. That full workflow is one of the core strengths of the platform.",
      },
    ],

    challenges: [
      {
        title: "Designing the Full Backend API Structure",
        problem:
          "Building a mentorship platform is not just about one form or dashboard. The backend had to support multiple roles, different types of actions, file handling, authentication, and a linked doubt-resolution workflow.",
        solution:
          "I structured the APIs around the actual user journeys of students, mentors, and admins so the platform could behave like a complete system instead of disconnected features.",
      },
      {
        title: "Handling Authentication Across Roles",
        problem:
          "Supporting both email/password login and Google authentication while keeping role-based behavior consistent added complexity to the overall system design.",
        solution:
          "I implemented authentication in a way that allowed flexible access while still preserving platform-specific permissions and workflow boundaries.",
      },
      {
        title: "Organizing the Overall Workflow",
        problem:
          "The hardest part was not any single UI component, but structuring the entire system so doubt submission, mentor assignment, materials, feedback, and admin controls all worked together coherently.",
        solution:
          "I treated the platform as a connected workflow system instead of building isolated pages, which helped the architecture stay scalable even though the UI itself was not polished enough.",
      },
    ],

    metrics: [
      { label: "Platform Type", value: "Multi-role mentorship system" },
      { label: "Auth Methods", value: "Email/Password + Google Auth" },
      { label: "Doubt Formats", value: "Text, Image, PDF" },
      {
        label: "Resource Access",
        value: "Role-restricted downloadable materials",
      },
    ],

    results: [
      "Built a complete full-stack mentorship workflow across students, mentors, and admins.",
      "Implemented a structured doubt-resolution system with mentor assignment and feedback.",
      "Created a role-restricted resource library for organized academic material sharing.",
      "Designed a backend structure capable of supporting a scalable mentorship platform.",
    ],

    learnings: [
      "Building multi-role systems is much more challenging than normal dashboards because every role changes the workflow and access logic.",
      "Authentication becomes significantly more complex when role boundaries, file workflows, and platform permissions all depend on it.",
      "A platform can be structurally strong and scalable even if the UI still needs refinement.",
      "This project taught me how to think in terms of complete system flows rather than isolated pages or components.",
    ],

    statusNote: [
      "KIRAN v1 is functionally complete as a full-stack platform.",
      "The main weakness of this version is not the workflow logic but the UI polish and some older structural choices in schema/design.",
      "Even though visual refinement was limited, the platform architecture and core workflow are strong enough to scale further.",
    ],

    relatedProjects: ["kiran-advanced"],
  },

  {
    title: "KIRAN v2",
    slug: "kiran-advanced",
    tagline: "Advanced Mentorship Platform (Next Iteration)",

    shortDescription:
      "A redesigned evolution of KIRAN focused on cleaner UI, improved architecture, better workflow separation, and real-time one-to-one chat between students and mentors.",

    description:
      "KIRAN v2 is the next iteration of the original KIRAN mentorship platform, built to improve the overall user experience, system architecture, and communication workflow between students, mentors, and admins. Instead of being a simple visual refresh, this version rethinks the platform structure with cleaner dashboards, a more scalable schema, better role separation, and real-time chat support.",

    coverImage: "/assets/projects/kiran/kiran-v2-1.png",

    gallery: ["/assets/projects/kiran/kiran-v2-1.png"],

    github: "https://github.com/ankit9241/KIRAN-Advance",
    live: "#",
    isPublished: false,

    tech: [
      technologies.react,
      technologies.vite,
      technologies.mongodb,
      technologies.tailwind,
      technologies.typescript,
    ],

    meta: [
      { label: "Timeline", value: "Ongoing" },
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Building" },
      { label: "Project Type", value: "Platform Redesign / Next Iteration" },
      { label: "Deployment", value: "Netlify (Frontend) + Render (Backend - In Progress)" },
    ],

    links: [{ label: "Source Code", href: "https://github.com/ankit9241/KIRAN-Advance" }],

    overview: [
      "KIRAN v2 is an improved and redesigned version of the original KIRAN mentorship platform. While the first version established the core mentorship workflow, this version focuses on making the platform cleaner, more scalable, and more practical for long-term use.",
      "The platform continues to support students, mentors, and admins, but now with stronger workflow separation, improved dashboards, a more professional user interface, and a better-planned system architecture.",
      "One of the biggest additions in this version is real-time one-to-one chat between students and mentors, which moves the platform closer to an active academic communication tool instead of only a doubt submission system.",
    ],

    context: [
      "KIRAN v1 solved the core mentorship problem well, but the UI was not polished enough and some structural parts of the platform could be improved.",
      "As the platform idea evolved, it became clear that a better version needed more than visual cleanup. It needed stronger dashboard design, more scalable schema planning, cleaner role-based separation, and faster communication features.",
    ],

    whyBuilt: [
      "I built KIRAN v2 to evolve the original platform into something more mature and production-ready.",
      "The goal was to retain the useful parts of v1 while redesigning the experience from both the UI and system design side, so the platform would feel cleaner, more professional, and better prepared for future expansion.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js"],
      },
      {
        category: "Database",
        items: ["MongoDB"],
      },
      {
        category: "Real-Time Communication",
        items: ["WebSockets"],
      },
      {
        category: "Authentication",
        items: ["Email / Password Login", "Google Authentication"],
      },
      {
        category: "Deployment",
        items: ["Netlify (Frontend)", "Render (Backend)"],
      },
    ],

    features: [
      {
        title: "Complete UI Redesign",
        description:
          "The entire interface has been rebuilt with a cleaner and more professional design language. Compared to v1, the new version feels significantly more polished, modern, and structured across dashboards and platform pages.",
      },
      {
        title: "Improved Dashboard Experience",
        description:
          "Student, mentor, and admin workflows are presented through better-organized dashboards with improved separation of concerns. This makes the platform easier to use and prepares it for more scalable feature growth.",
      },
      {
        title: "Real-Time One-to-One Chat",
        description:
          "KIRAN v2 introduces one-to-one chat between students and mentors using WebSockets. This enables faster communication and reduces the delay between doubt submission and actual discussion.",
      },
      {
        title: "Better Workflow Design",
        description:
          "The overall mentorship journey has been redesigned to feel more coherent, from role-based navigation to interaction flow between students and mentors.",
      },
      {
        title: "Role-Based Platform Improvements",
        description:
          "The newer version is being shaped with stronger role-based separation so that different responsibilities can be managed more cleanly in future administrative workflows.",
      },
      {
        title: "Session Booking Direction",
        description:
          "The platform also moves toward mentor session booking and scheduling support. The interaction model has been planned, although the backend implementation for this area is still incomplete.",
      },
    ],

    technicalDetails: [
      {
        title: "Architecture Redesign",
        description:
          "KIRAN v2 is not just a frontend remake. The platform is being rebuilt with a cleaner architecture so that core entities such as users, doubts, communication flows, and platform actions are better structured for future scale.",
      },
      {
        title: "Schema Improvement",
        description:
          "Compared to v1, the database and workflow structure have been planned more carefully to create a more scalable system. The goal is cleaner separation of concerns and better maintainability as the platform grows.",
      },
      {
        title: "WebSocket Chat Integration",
        description:
          "A major technical addition in v2 is real-time communication through WebSockets. The one-to-one chat system is already working, although related backend work is still being expanded.",
      },
      {
        title: "Frontend System Upgrade",
        description:
          "The frontend has been rebuilt using TypeScript and Tailwind CSS to create a more maintainable codebase and a stronger visual system than the original Bootstrap-based version.",
      },
    ],

    challenges: [
      {
        title: "Integrating Real-Time Chat",
        problem:
          "Adding chat is easy to say and messy to implement properly. Once you move from static workflows to live communication, the complexity of data flow, state handling, and user interaction increases fast.",
        solution:
          "I implemented the chat system using WebSockets and structured it around one-to-one communication between students and mentors, while continuing to refine the backend to support it more completely.",
      },
      {
        title: "Redesigning for Scale Instead of Just Looks",
        problem:
          "A redesign can easily become superficial if it only changes cards and colors while keeping weak workflows underneath.",
        solution:
          "I treated v2 as both a visual redesign and an architectural redesign, improving dashboard flow, schema planning, and system structure instead of only polishing the interface.",
      },
      {
        title: "Improving the Existing Product Without Breaking Its Core Idea",
        problem:
          "The first version already had a usable mentorship system, so the challenge was not starting from zero but improving the product meaningfully without losing the strengths of v1.",
        solution:
          "I focused on preserving the useful core workflow while redesigning the experience around cleaner UI, stronger architecture, and more direct communication.",
      },
    ],

    metrics: [
      { label: "Version Type", value: "Next iteration of KIRAN" },
      { label: "Chat Model", value: "Real-time one-to-one messaging" },
      { label: "UI Status", value: "Redesigned frontend completed" },
      { label: "Backend Status", value: "Partially completed / in progress" },
    ],

    results: [
      "Successfully redesigned the platform into a cleaner and more professional interface.",
      "Built a stronger workflow structure compared to the original version.",
      "Implemented working real-time chat as a major functional upgrade.",
      "Laid the foundation for a more scalable mentorship platform architecture.",
    ],

    learnings: [
      "Improving an existing product takes more discipline than starting from zero because you need to preserve what already works while fixing deeper weaknesses.",
      "A better UI only matters when it is backed by stronger workflow thinking and cleaner architecture.",
      "Real-time systems like chat introduce a very different level of complexity compared to standard request-response dashboards.",
      "Schema planning becomes far more important when a product starts evolving into a multi-role, communication-heavy platform.",
    ],

    futureScope: [
      "Complete the remaining backend work for the redesigned platform.",
      "Finish the scheduling/session-booking workflow properly.",
      "Expand role-based permissions into more granular administrative control.",
      "Prepare the platform for deployment once the backend reaches production-ready quality.",
    ],

    statusNote: [
      "The frontend redesign is completed and the chat system is working, but the platform is not yet deployed because the backend is still under development.",
      "KIRAN v2 should be presented as the next evolution of KIRAN v1, not as an unrelated standalone project.",
    ],

    relatedProjects: ["kiran-mentorship-v1"],
  },

  {
    title: "CrazyOne",
    slug: "crazyone-ecommerce",
    tagline: "Modern E-Commerce Storefront",

    shortDescription:
      "A frontend e-commerce storefront built to simulate a modern online shopping experience with product browsing, cart interaction, checkout flow, and an admin-style dashboard UI.",

    description:
      "CrazyOne is a frontend e-commerce storefront project designed to simulate a complete shopping experience. It allows users to browse products, view product details, manage a shopping cart, and move through a checkout-style user flow, while also including an admin-oriented dashboard interface for store overview and order-related UI.",

    coverImage: "/assets/projects/crazyone/crazy-one.png",

    gallery: ["/assets/projects/crazyone/crazy-one.png"],

    github: "https://github.com/ankit9241/CrazyOne",
    live: "https://crazy-one.netlify.app/",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.css,
      technologies.javascript,
      technologies.tailwind,
    ],

    meta: [
      { label: "Timeline", value: "~2 Days" },
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Frontend Web Application" },
    ],

    links: [
      { label: "Live Demo", href: "https://crazy-one.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/CrazyOne" },
    ],

    overview: [
      "CrazyOne is a frontend e-commerce storefront created to simulate the experience of a modern online shopping platform.",
      "The project focuses on user-side product exploration, product detail pages, cart interaction, and a checkout-style flow, while also including a frontend admin dashboard interface to represent the management side of the system.",
      "Although it is not backed by a real backend, the project was built to feel like a complete product interface rather than a collection of isolated pages.",
    ],

    context: [
      "E-commerce interfaces are a strong way to practice frontend development because they require reusable components, state handling, responsive layouts, and multiple connected user flows.",
      "CrazyOne was built as a UI-focused project to simulate how a customer-facing storefront and admin-facing dashboard could look and behave.",
    ],

    whyBuilt: [
      "The goal of this project was to practice building a polished and interactive shopping experience using React-based frontend workflows.",
      "Instead of making only a homepage or product listing, I wanted to include the connected parts of a real storefront such as product pages, cart handling, checkout-style interaction, and an admin dashboard interface.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      },
      {
        category: "Data Handling",
        items: ["Mock JSON / Static Data", "React State"],
      },
    ],

    features: [
      {
        title: "Product Catalog Interface",
        description:
          "Users can browse products through a storefront-style catalog interface with product cards, visual hierarchy, and category-based exploration.",
      },
      {
        title: "Dedicated Product Detail Pages",
        description:
          "Each product can be opened on its own detail page, giving the user a more complete shopping experience instead of limiting interaction to grid cards only.",
      },
      {
        title: "Cart Interaction Flow",
        description:
          "The project includes cart handling features such as adding products, updating quantities, and removing items through a responsive UI flow.",
      },
      {
        title: "Checkout-Style Experience",
        description:
          "Users can move through a simulated checkout process where selected items and order summaries are presented in a way that resembles a real storefront flow.",
      },
      {
        title: "Admin Dashboard UI",
        description:
          "A frontend-only admin dashboard interface is included to represent how store analytics, order summaries, and general management panels could be structured.",
      },
      {
        title: "Responsive Layout",
        description:
          "The entire project is responsive and designed to work smoothly across different screen sizes.",
      },
    ],

    technicalDetails: [
      {
        title: "Frontend State-Based Shopping Flow",
        description:
          "Since the project is frontend-only, user interactions such as cart updates and checkout progression are handled through frontend state and mock/static data.",
      },
      {
        title: "Reusable Product-Based UI Structure",
        description:
          "The project is organized around reusable product cards, detail layouts, and cart interactions, which helps simulate how a larger storefront could be built.",
      },
      {
        title: "Dashboard Simulation",
        description:
          "The admin side is implemented as a working frontend interface with UI-driven state and presentation, even though it is not connected to a real backend system.",
      },
    ],

    results: [
      "Built a clean storefront-style frontend with connected product, cart, and checkout interactions.",
      "Created a UI-driven admin dashboard experience alongside the customer-facing store.",
      "Practiced structuring a multi-page frontend product flow in a responsive layout.",
    ],

    learnings: [
      "E-commerce UIs are a strong exercise in component reuse and connected state handling.",
      "Even a frontend-only shopping experience needs clean information hierarchy to feel usable.",
      "Responsive product-based layouts require more careful spacing and structure than simple landing pages.",
    ],

    statusNote: [
      "This project is intentionally frontend-only and focuses on interface design, interaction flow, and UI structure rather than backend commerce logic.",
    ],
  },

  {
    title: "PlanIT",
    slug: "planit-event-management",
    tagline: "Event Planning & Booking Platform",

    shortDescription:
      "A frontend event planning platform built to simulate service selection, package exploration, and booking workflows for organizing events through a clean multi-step UI.",

    description:
      "PlanIT is a frontend event planning and booking platform designed to simulate how users could explore and select different services required for organizing an event. It focuses on service discovery, package-style planning, selection flow, and responsive UI design for a booking-oriented experience.",

    coverImage: "/assets/projects/planit/planit.png",

    gallery: ["/assets/projects/planit/planit.png"],

    github: "https://github.com/ankit9241/PlanIT",
    live: "https://plan-itt.netlify.app/",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.css,
      technologies.typescript,
      technologies.bootstrap,
    ],

    meta: [
      { label: "Timeline", value: "~2 Days" },
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Frontend Web Application" },
    ],

    links: [
      { label: "Live Demo", href: "https://plan-itt.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/PlanIT" },
    ],

    overview: [
      "PlanIT is a frontend platform designed to simulate the digital experience of planning and booking an event.",
      "The project allows users to browse event-related services such as venues, decoration, catering, lighting, and other arrangements, then move through a structured booking-style interface.",
      "Rather than focusing on backend operations, the project is centered on how an event planning flow can be represented through a clean and connected frontend experience.",
    ],

    context: [
      "Service-based platforms require a different UI approach from product stores because users are not just buying items — they are combining multiple service choices into one booking journey.",
      "PlanIT was built to explore that kind of interface through frontend-only design and interaction logic.",
    ],

    whyBuilt: [
      "The purpose of this project was to practice building a service-selection and booking-oriented frontend interface instead of a standard product catalog.",
      "I wanted to structure the experience around event planning, where users move through categories, compare options, and confirm selected arrangements through a booking flow.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Bootstrap", "CSS"],
      },
      {
        category: "Data Handling",
        items: ["Mock JSON / Static Data", "React State"],
      },
    ],

    features: [
      {
        title: "Event Service Catalog",
        description:
          "Users can browse different event-related services such as venues, catering, decoration, lighting, and other planning essentials through a structured catalog-style interface.",
      },
      {
        title: "Dedicated Service Detail Views",
        description:
          "The project includes dedicated detail pages so users can explore specific services more clearly instead of relying only on preview cards.",
      },
      {
        title: "Package & Selection Flow",
        description:
          "Users can move through a booking-style workflow by selecting service combinations and exploring package-oriented planning options.",
      },
      {
        title: "Booking-Oriented UI Experience",
        description:
          "The interface is designed to simulate how users would review choices and move through an event planning process, making it feel more connected than a simple static listing page.",
      },
      {
        title: "Responsive Interface",
        description:
          "The layout is responsive across screen sizes, helping the planning flow remain usable on different devices.",
      },
      {
        title: "Admin-Style Interface Representation",
        description:
          "The project also includes frontend-level dashboard/interface patterns that represent how event-related management views could be structured visually.",
      },
    ],

    technicalDetails: [
      {
        title: "Service-Based UI Modeling",
        description:
          "Unlike a product store, PlanIT is structured around service categories and event requirements, which changes how listings, detail views, and user flow need to be designed.",
      },
      {
        title: "Frontend Flow with Static or Mock Data",
        description:
          "The project uses frontend state and static/mock data to simulate the planning and booking experience without backend dependency.",
      },
      {
        title: "TypeScript-Based Frontend Structure",
        description:
          "Using TypeScript helped maintain clearer structure while building a UI that involved multiple connected views and service-based interaction.",
      },
    ],

    results: [
      "Built a service-oriented event planning interface with connected browsing and booking-style flow.",
      "Practiced creating frontend experiences beyond basic product/store layouts.",
      "Designed a responsive planning workflow using React and TypeScript.",
    ],

    learnings: [
      "Service-based UIs require different flow design than standard e-commerce pages.",
      "Frontend projects can still feel complete when the navigation and interaction logic are clearly connected.",
      "Using TypeScript improves structure even in smaller frontend applications.",
    ],

    statusNote: [
      "This project is intentionally kept as a frontend UI-focused implementation and is meant to showcase service-flow design rather than backend event operations.",
    ],
  },

  {
    title: "Gokul Bhandar",
    slug: "gokul-bhandar",
    tagline: "Online Grocery Store Platform",

    shortDescription:
      "A frontend grocery storefront built to simulate category-based shopping, product detail pages, cart interaction, checkout-style flow, and an admin-oriented dashboard interface.",

    description:
      "Gokul Bhandar is a frontend grocery shopping platform designed to simulate how a local store could be presented online through a clean browsing and ordering interface. The project includes product discovery, dedicated product pages, cart handling, and a simplified order flow, along with a frontend admin-style dashboard view.",

    coverImage: [
      "/assets/projects/gokulbhandar/gokul-bhandar-1.png",
      "/assets/projects/gokulbhandar/gokul-bhandar-2.png",
    ],

    gallery: [
      "/assets/projects/gokulbhandar/gokul-bhandar-1.png",
      "/assets/projects/gokulbhandar/gokul-bhandar-2.png",
    ],

    github: "https://github.com/ankit9241/GokulBhandar",
    live: "https://gokulbhandar.netlify.app",
    isPublished: true,

    tech: [
      technologies.react,
      technologies.css,
      technologies.typescript,
      technologies.bootstrap,
    ],

    meta: [
      { label: "Timeline", value: "~2 Days" },
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Project Type", value: "Frontend Web Application" },
    ],

    links: [
      { label: "Live Demo", href: "https://gokulbhandar.netlify.app" },
      { label: "Source Code", href: "https://github.com/ankit9241/GokulBhandar" },
    ],

    overview: [
      "Gokul Bhandar is a frontend grocery storefront designed to simulate the experience of bringing a local retail store online.",
      "The platform allows users to browse products across categories such as groceries, stationery, candies, ice cream, and daily essentials, while also including product pages, cart interaction, and a simplified order flow.",
      "The project focuses on translating a familiar local-store model into a structured digital shopping experience.",
    ],

    context: [
      "Local retail stores often have a very different product mix from modern fashion or electronics platforms, so the shopping interface needs to support variety, quick browsing, and easy cart flow.",
      "This project was built to represent how a neighborhood-style store could be turned into an online storefront through frontend design.",
    ],

    whyBuilt: [
      "The goal was to create a frontend shopping interface that felt closer to a real local store use case rather than only a generic product website.",
      "I wanted to practice category-driven browsing, cart interaction, and storefront layout design in a practical retail context.",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Bootstrap", "CSS"],
      },
      {
        category: "Data Handling",
        items: ["Mock JSON / Static Data", "React State"],
      },
    ],

    features: [
      {
        title: "Category-Based Product Catalog",
        description:
          "Users can browse products across multiple categories such as groceries, stationery, candies, ice cream, and daily essentials through a structured storefront layout.",
      },
      {
        title: "Dedicated Product Detail Pages",
        description:
          "Each item can be opened on its own detail page, which helps create a more complete browsing experience than showing everything only inside a product grid.",
      },
      {
        title: "Interactive Cart Workflow",
        description:
          "The project includes cart interactions such as adding products, updating quantities, and removing items through a responsive frontend flow.",
      },
      {
        title: "Simplified Order Placement Experience",
        description:
          "Users can move through a simplified checkout or order-style interface that represents how a grocery platform could handle order review and placement.",
      },
      {
        title: "Admin Dashboard UI",
        description:
          "A frontend admin-style dashboard is also included to represent store management views such as summaries, analytics, and order-related interface patterns.",
      },
      {
        title: "Responsive Shopping Interface",
        description:
          "The platform is responsive and designed to remain usable across multiple screen sizes.",
      },
    ],

    technicalDetails: [
      {
        title: "Retail-Focused Frontend Structure",
        description:
          "The platform is modeled around a mixed-category local retail store, which requires a slightly different information layout compared to niche e-commerce stores.",
      },
      {
        title: "State-Driven Cart Interaction",
        description:
          "Cart and order-style interactions are handled through frontend state and mock/static data, allowing the platform to simulate a connected shopping flow without backend integration.",
      },
      {
        title: "Store + Admin UI Representation",
        description:
          "The project combines both customer-side shopping pages and admin-side interface ideas to create a broader storefront experience.",
      },
    ],

    results: [
      "Built a category-driven grocery storefront with connected browsing, cart, and order-style UI flow.",
      "Practiced translating a local retail model into a clean digital shopping interface.",
      "Created both customer-facing and admin-style frontend experiences in one project.",
    ],

    learnings: [
      "Retail storefronts need strong category structure to feel usable.",
      "Frontend shopping flows become much more convincing when detail pages and cart interactions are connected cleanly.",
      "Even smaller frontend projects feel stronger when they simulate both user-side and admin-side views.",
    ],

    statusNote: [
      "This project is intentionally frontend-only and focuses on interface structure, shopping flow, and responsive retail presentation rather than backend order processing.",
    ],
  },
];