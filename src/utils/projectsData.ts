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
  github?: string;
  live?: string;
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
}

export const projects: Project[] = [
  {
    title: "Basera",
    slug: "basera",
    tagline: "Student-Focused PG & Flat Discovery Platform",
    shortDescription:
      "A student accommodation platform for discovering PGs and flats around Delhi University, with property information, saved listings, and visit scheduling.",
    description:
      "Basera is being built to simplify the fragmented process of finding student accommodation around Delhi University by bringing property discovery, listing details, saved properties, and physical visit scheduling into one student-focused platform.",
    coverImage: "/assets/projects/basera/basera.svg",
    gallery: ["/assets/projects/basera/basera.svg"],
    github: "",
    live: "",
    isPublished: false,
    tech: [
      technologies.nextjs,
      technologies.postgresql,
      technologies.prisma,
      technologies.awsS3,
      technologies.nodejs,
      technologies.typescript,
      technologies.tailwind,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Building" },
      { label: "Type", value: "Student Accommodation Platform" },
    ],
    overview: [
      "Built around the real accommodation journey: discover relevant properties, evaluate listings, save options, and schedule physical visits.",
      "The platform is designed to reduce dependence on scattered listings and repeated broker communication while making property information easier for students to compare.",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Data", items: ["PostgreSQL", "Prisma"] },
      { category: "Cloud", items: ["AWS S3"] },
      { category: "Auth", items: ["Email Authentication"] },
    ],
    features: [
      { title: "Property Discovery", description: "Student-focused PG and flat discovery around Delhi University." },
      { title: "Property Details", description: "Centralized listing information, photos, and location context." },
      { title: "Saved Properties", description: "Bookmark and organize accommodation options worth considering." },
      { title: "Visit Scheduling", description: "Schedule physical visits directly from property listings." },
    ],
    technicalDetails: [
      { title: "Full-Stack Architecture", description: "Next.js frontend with a Node.js/Express backend and structured PostgreSQL data through Prisma." },
      { title: "Workflow-Driven Data Model", description: "Core entities support users, properties, saved listings, and visit scheduling around the actual student accommodation workflow." },
    ],
    metrics: [
      { label: "Target", value: "Delhi University Students" },
      { label: "Status", value: "Under Active Development" },
      { label: "Architecture", value: "Next.js + Node/Express + PostgreSQL/Prisma" },
    ],
  },

  {
    title: "Basera Outreach",
    slug: "basera-outreach",
    tagline: "Offline-First PG Verification PWA",
    shortDescription:
      "An offline-first field operations PWA for verifying PGs/flats, capturing property data and photos, and syncing records after connectivity returns.",
    description:
      "Basera Outreach is a separate internal operations product built for Basera's field team. It lets field executives continue property verification without reliable internet and synchronizes locally stored work once connectivity is restored.",
    coverImage: "/assets/projects/basera-outreach/basera-outreach.svg",
    gallery: ["/assets/projects/basera-outreach/basera-outreach.svg"],
    github: "",
    live: "",
    isPublished: false,
    tech: [
      technologies.offlineFirst,
      technologies.pwa,
      technologies.awsS3,
      technologies.react,
      technologies.typescript,
      technologies.postgresql,
      technologies.prisma,
      technologies.nodejs,
      technologies.express,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Type", value: "Internal Operations Tool" },
      { label: "Architecture", value: "Offline-First + Sync Queue" },
      { label: "Status", value: "Completed" },
    ],
    overview: [
      "Designed for physical PG/flat verification where connectivity may be unstable or unavailable.",
      "Property details, verification data, drafts, and photos are persisted locally first; pending work is synchronized when the network returns.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TanStack Start", "Vite", "TypeScript", "PWA"] },
      { category: "Offline", items: ["IndexedDB", "Dexie.js", "Persistent Sync Queue", "Network State Detection"] },
      { category: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL"] },
      { category: "Media", items: ["AWS S3", "Presigned URLs"] },
    ],
    features: [
      { title: "Offline-First Collection", description: "Create, edit, and review property records without an active connection." },
      { title: "Persistent Sync", description: "Queue offline mutations locally and process them sequentially after reconnection." },
      { title: "Field PWA", description: "Installable, mobile-oriented workflow for on-ground outreach teams." },
      { title: "Direct S3 Uploads", description: "Send property photos directly to S3 through presigned URLs instead of routing large media through the API server." },
    ],
    technicalDetails: [
      { title: "Local-First Pipeline", description: "User Action → IndexedDB/Dexie.js → Sync Queue → Network Restored → API → PostgreSQL." },
      { title: "Reliable Media Flow", description: "Camera/Gallery → Presigned URL → AWS S3 → Store image reference in PostgreSQL." },
      { title: "Resilient Synchronization", description: "Sync operations survive reloads and retry after connectivity returns, reducing field-data loss." },
    ],
    metrics: [
      { label: "Architecture", value: "Offline-First PWA" },
      { label: "Local DB", value: "IndexedDB + Dexie.js" },
      { label: "Sync", value: "Persistent Sequential Queue" },
      { label: "Media", value: "AWS S3 Presigned Uploads" },
    ],
  },

  {
    title: "CVPilot",
    slug: "cvpilot",
    tagline: "LLM-Powered Resume Intelligence & 9-Node LangGraph Platform",
    shortDescription:
      "An AI resume platform using a 9-node LangGraph workflow for JD analysis, intelligent content selection, targeted rewriting, and ATS resume generation.",
    description:
      "CVPilot is an AI-first resume platform built around a stateful 9-node LangGraph workflow that orchestrates LLM-powered analysis, candidate-content selection, rewriting, and structured ATS resume generation.",
    coverImage: "/assets/projects/cvpilot/cvpilot-1.png",
    gallery: ["/assets/projects/cvpilot/cvpilot-1.png"],
    github: "https://github.com/ankit9241/cvpilot",
    live: "#",
    isPublished: false,
    tech: [
      technologies.langgraph,
      technologies.llm,
      technologies.aiWorkflow,
      technologies.typescript,
      technologies.postgresql,
      technologies.prisma,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Building" },
      { label: "Type", value: "AI SaaS Platform" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/ankit9241/cvpilot" }],
    overview: [
      "The 9-node workflow handles job-description analysis, candidate matching, targeted rewriting, and ATS-oriented resume generation.",
      "The application combines AI orchestration with structured candidate and resume data instead of treating LLM generation as a single prompt-response step.",
    ],
    techStack: [
      { category: "AI & Orchestration", items: ["LangGraph", "LLMs", "Gemini", "OpenAI"] },
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Data", items: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"] },
      { category: "Storage", items: ["AWS S3"] },
    ],
    features: [
      { title: "9-Node LangGraph Workflow", description: "Modular stateful pipeline for JD analysis, matching, rewriting, and generation." },
      { title: "LLM-Powered Rewriting", description: "Tailors resume content to job-specific requirements from structured candidate data." },
      { title: "ATS Resume Generation", description: "Produces structured ATS-friendly resumes from processed candidate profiles." },
      { title: "Resume Management", description: "Manage candidate profiles and multiple resume iterations from one workspace." },
    ],
    technicalDetails: [
      { title: "Stateful AI Orchestration", description: "LangGraph separates LLM tasks into modular nodes with structured outputs and predictable execution." },
      { title: "Structured Data Layer", description: "PostgreSQL and Prisma keep candidate/resume data structured around the AI workflow." },
    ],
  },

  {
    title: "PodSnap",
    slug: "podsnap",
    tagline: "AI Podcast Repurposing Platform",
    shortDescription:
      "An AI podcast repurposing platform combining WhisperX, Gemini, active speaker detection, and automated video processing to turn long podcasts into short-form clips.",
    description:
      "PodSnap automates the podcast-to-short-video pipeline: transcription, highlight extraction, active speaker tracking, vertical reframing, subtitles, storage, background processing, and credit-based billing.",
    coverImage: "/assets/projects/podsnap/podsnap-1.png",
    gallery: [
      "/assets/projects/podsnap/podsnap-1.png",
      "/assets/projects/podsnap/podsnap-2.png",
    ],
    github: "https://github.com/ankit9241/PodSnap",
    live: "https://pod-snap.netlify.app/",
    isPublished: true,
    tech: [
      technologies.gemini,
      technologies.llm,
      technologies.whisperx,
      technologies.aiPipeline,
      technologies.nextjs,
      technologies.fastapi,
      technologies.postgresql,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "4-Person Hackathon Team" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "AI SaaS" },
    ],
    links: [
      { label: "Live Demo", href: "https://pod-snap.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/PodSnap" },
    ],
    overview: [
      "Processes long-form podcasts into roughly five short-form clips with automated highlights, speaker-aware framing, and burned-in subtitles.",
      "The architecture separates web-app concerns from GPU-heavy AI processing and long-running background jobs.",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { category: "Backend", items: ["Python", "FastAPI", "Node.js", "Inngest"] },
      { category: "AI / Video", items: ["WhisperX", "Gemini 2.5 Flash", "Columbia Active Speaker Detection", "FFmpeg", "OpenCV"] },
      { category: "Data & Infra", items: ["PostgreSQL", "Prisma", "AWS S3", "Modal GPU", "Stripe"] },
    ],
    features: [
      { title: "AI Highlight Detection", description: "Gemini analyzes transcripts and selects engaging 30–60 second moments." },
      { title: "Word-Level Transcription", description: "WhisperX provides timestamped speech data for accurate subtitle rendering." },
      { title: "Active Speaker Tracking", description: "Speaker detection keeps the video framed around whoever is speaking." },
      { title: "Vertical Clip Generation", description: "Creates 9:16 clips with intelligent face-centered cropping and FFmpeg subtitles." },
      { title: "YouTube & MP4 Input", description: "Accepts uploaded MP4 files or YouTube links." },
      { title: "Credit Billing", description: "Stripe handles paid processing credits with one credit consumed per generated clip." },
      { title: "Direct S3 Uploads", description: "Large videos upload directly to AWS S3 through presigned URLs, supporting files up to 500 MB." },
    ],
    technicalDetails: [
      { title: "Distributed AI Architecture", description: "Web, auth, uploads and billing run separately from GPU-heavy processing on Modal." },
      { title: "Background Processing", description: "Inngest coordinates long-running AI and video jobs without blocking frontend requests." },
      { title: "Scalable Data Layer", description: "PostgreSQL/Prisma tracks users, videos, clips, processing state, credits, and Stripe customers." },
    ],
    metrics: [
      { label: "Processing", value: "~ 9-10 min for a 90-min podcast" },
      { label: "Output", value: "~5 clips per podcast" },
      { label: "Upload", value: "Up to 500 MB" },
      { label: "Billing", value: "1 credits = 1 generated clip" },
    ],
  },

  {
    title: "STC IIT Patna",
    slug: "stc-iit-patna",
    tagline: "Official Student Technical Council Platform",
    shortDescription:
      "A production platform for IIT Patna's Student Technical Council covering clubs, events, announcements, OTP-based registrations, forms, and admin workflows.",
    description:
      "STC IIT Patna is the official digital platform for the Student Technical Council, used by real students and council teams for event discovery, registrations, announcements, and administrative workflows.",
    coverImage: ["/assets/projects/stc/stc-1.svg", "/assets/projects/stc/stc-2.svg"],
    gallery: ["/assets/projects/stc/stc-1.svg", "/assets/projects/stc/stc-2.svg"],
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
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "4 Developers" },
      { label: "Status", value: "Production" },
      { label: "Organization", value: "IIT Patna STC" },
    ],
    links: [
      { label: "Live", href: "https://stciitphybrid.in" },
      { label: "Source Code", href: "https://github.com/ankit9241/stc_website" },
    ],
    overview: [
      "The official website of the Student Technical Council (STC), IIT Patna, built as a central platform for the institute’s technical community. It brings together STC’s technical wings, 24+ student clubs, events, announcements, registrations, and club activities in one place.",
      "The platform goes beyond a traditional college website with real-time registrations, dynamic forms, college-email OTP verification, email workflows, and admin operations used to manage student participation and technical events.",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js-based API", "Nodemailer", "Resend"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Verification", items: ["College Email OTP"] },
      { category: "Deployment", items: ["Official Production Deployment"] },
    ],
    features: [
      { title: "Centralized Event Hub", description: "Event discovery across 3 technical wings and 24+ sub-clubs." },
      { title: "OTP Event Registration", description: "College-email OTP verification before registration." },
      { title: "Dynamic Registration Forms", description: "Event-specific forms without repeatedly hardcoding registration flows." },
      { title: "Admin Operations", description: "Event, form, announcement, banner, and participation management." },
      { title: "Club Pages", description: "Dedicated pages for technical clubs and their information." },
    ],
    technicalDetails: [
      { title: "Full-Stack Contribution", description: "Work expanded from frontend redesign into admin workflows, registration logic, OTP/email integration, and live event functionality." },
      { title: "Production Workflow", description: "The system supports actual student registrations and council operations rather than only static content." },
    ],
    // metrics: [
    //   { label: "Technical Wings", value: "3" },
    //   { label: "Sub-Clubs", value: "24+" },
    //   { label: "Events Supported", value: "6–7" },
    //   { label: "Registrations", value: "250+" },
    // ],
    // results: [
    //   "Officially deployed and used by the IIT Patna Student Technical Council.",
    //   "Handled 250+ registrations across multiple official events.",
    // ],
  },

  {
    title: "ExamifAI",
    slug: "examifai",
    tagline: "AI Examination & Computer Vision Proctoring Platform",
    shortDescription:
      "A full-stack examination platform using computer vision and face-api.js for identity verification, real-time proctoring, violation tracking, and instructor analytics.",
    description:
      "ExamifAI combines face registration, live facial verification, browser monitoring, exam enforcement, question management, and instructor analytics into a browser-based proctored examination workflow.",
    coverImage: "/assets/projects/examifai/examifai.svg",
    gallery: ["/assets/projects/examifai/examifai.svg"],
    github: "https://github.com/ankit9241/ExamifAI",
    live: "https://examifai.netlify.app/",
    isPublished: true,
    tech: [
      technologies.computerVision,
      technologies.faceRecognition,
      technologies.faceApi,
      technologies.react,
      technologies.nodejs,
      technologies.mongodb,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Academic Capstone" },
    ],
    links: [
      { label: "Live", href: "https://examifai.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/ExamifAI" },
    ],
    overview: [
      "Students register their face before the exam; live webcam detections are compared against the stored face descriptor during the attempt.",
      "Suspicious activity can hide the question panel, record a violation, and ultimately auto-submit after three violations.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "JavaScript", "Bootstrap"] },
      { category: "Backend", items: ["Node.js"] },
      { category: "Database", items: ["MongoDB", "MongoDB Atlas"] },
      { category: "Computer Vision", items: ["face-api.js", "Face Recognition"] },
      { category: "Deployment", items: ["Netlify", "Render"] },
    ],
    features: [
      { title: "Face Registration", description: "Capture and store a candidate face descriptor before an exam." },
      { title: "Real-Time Proctoring", description: "Detect missing faces, multiple faces, and identity mismatch during exams." },
      { title: "Violation Enforcement", description: "Track tab switching, fullscreen exit, face issues, and suspicious browser activity." },
      { title: "Automatic Submission", description: "Auto-submit the exam after three recorded violations." },
      { title: "Teacher Dashboard", description: "Create exams, upload questions in bulk, review attempts, violations, and analytics." },
    ],
    technicalDetails: [
      { title: "Live Descriptor Matching", description: "Stored registration descriptors are compared with live webcam detections for continuous identity verification." },
      { title: "Browser Enforcement", description: "Fullscreen and browser interaction restrictions are combined with the violation system to enforce exam rules." },
    ],
    metrics: [
      { label: "Monitoring", value: "Real-time face verification" },
      { label: "Violation Policy", value: "Auto-submit after 3 violations" },
      { label: "Question Format", value: "MCQ" },
      { label: "Face Handling", value: "Live capture + descriptor matching" },
    ],
  },

  {
    title: "Envora",
    slug: "envora",
    tagline: "Secure Developer Vault for Environment Variables & Secrets",
    shortDescription:
      "A full-stack developer vault for managing .env files, credentials, API keys, and project configuration through structured encrypted storage and secure access.",
    description:
      "Envora replaces scattered .env files and insecure credential storage with a centralized developer vault organized as Projects → Sections → Variables. User data is encrypted in storage and isolated so that even the developer cannot access the user's secrets.",
    coverImage: ["/assets/projects/envora/envora-1.png", "/assets/projects/envora/envora-2.png"],
    gallery: ["/assets/projects/envora/envora-1.png", "/assets/projects/envora/envora-2.png"],
    github: "https://github.com/ankit9241/Envora",
    live: "https://envora.netlify.app/",
    isPublished: true,
    tech: [
      technologies.react,
      technologies.nodejs,
      technologies.express,
      technologies.mongodb,
      technologies.jwt,
      technologies.security,
    ],
    meta: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Developer Security Tool" },
    ],
    links: [
      { label: "Live", href: "https://envora.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/Envora" },
    ],
    overview: [
      "A centralized vault for environment variables, API keys, credentials, and project configuration across devices.",
      "The security model combines encrypted storage, user isolation, authentication, and masked secret access; the encryption implementation itself is intentionally not overstated beyond what is documented.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "React Router", "Axios"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Auth & Security", items: ["JWT", "bcrypt", "Google OAuth", "Encrypted Storage", "User Isolation"] },
      { category: "Deployment", items: ["Netlify", "Render"] },
    ],
    features: [
      { title: "Encrypted Secret Vault", description: "Store .env values, API keys, credentials, and configuration in a private encrypted vault." },
      { title: "Project Hierarchy", description: "Organize secrets as Projects → Sections → Variables." },
      { title: "Cross-Device Access", description: "Centralized access to project configuration from different devices." },
      { title: "Import / Export", description: "Import existing .env files and export configurations when needed." },
      { title: "Masked Secret Workflow", description: "Keep values hidden by default with quick reveal and copy actions." },
    ],
    technicalDetails: [
      { title: "User-Isolated Data", description: "Data is linked to user identity so one account cannot access another user's projects or secrets." },
      { title: "Authentication", description: "JWT session handling with bcrypt and Google OAuth support." },
      { title: "Hierarchical Data Model", description: "Projects contain sections, which contain environment variables and related metadata." },
    ],
    metrics: [
      { label: "Security", value: "Encrypted storage + user isolation" },
      { label: "Data", value: "Environment variables, credentials, notes" },
      { label: "Access", value: "Cross-device centralized vault" },
    ],
  },

  {
    title: "TrackFlow",
    slug: "trackflow",
    tagline: "Habit Tracking & Productivity Analytics Platform",
    shortDescription:
      "A full-stack habit tracker with daily completion history, streak calculation, protected dashboards, and productivity analytics.",
    description:
      "TrackFlow turns habit tracking into a measurable workflow by combining authentication, day-level completion records, streak logic, and chart-based productivity insights.",
    coverImage: ["/assets/projects/trackflow/trackflow-1.svg", "/assets/projects/trackflow/trackflow-2.svg"],
    gallery: ["/assets/projects/trackflow/trackflow-1.svg", "/assets/projects/trackflow/trackflow-2.svg"],
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
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Productivity Web App" },
    ],
    links: [
      { label: "Live", href: "https://track-flow1.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/TrackFlow" },
    ],
    overview: [
      "Users create habits, track day-level completion, build streaks, and view performance through a personal analytics dashboard.",
      "The system supports both indefinite habits and habits with defined start/end dates.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Analytics", items: ["Chart.js"] },
      { category: "Auth", items: ["Email/Password", "Protected Routes"] },
      { category: "Deployment", items: ["Netlify", "Render"] },
    ],
    features: [
      { title: "Habit Management", description: "Create, edit, delete, and configure habit durations." },
      { title: "Daily Tracking", description: "Persist completion history for each habit and day." },
      { title: "Streak Logic", description: "Calculate consecutive completion streaks and reset them after missed days." },
      { title: "Analytics Dashboard", description: "Visualize monthly activity, habit performance, and consistency." },
    ],
    technicalDetails: [
      { title: "Day-Level Data Model", description: "Historical completion records power streaks and analytics instead of relying on a simple active/inactive flag." },
      { title: "Protected Dashboard", description: "Authenticated users access their own habit data and analytics through protected routes." },
    ],
  },

  {
    title: "KIRAN v1",
    slug: "kiran-mentorship-v1",
    tagline: "Mentorship & Doubt Resolution Platform",
    shortDescription:
      "A full-stack multi-role mentorship platform connecting students, mentors, and admins through doubt solving, resources, notifications, and feedback workflows.",
    description:
      "KIRAN v1 is a structured academic support platform with separate Student, Mentor, and Admin workflows. Students raise doubts, mentors manage and solve them, and admins oversee users, resources, announcements, and platform activity.",
    coverImage: "/assets/projects/kiran/kiran-v1.svg",
    gallery: ["/assets/projects/kiran/kiran-v1.svg"],
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
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Mentorship Platform" },
    ],
    links: [
      { label: "Live", href: "https://kiran-mentorship.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/KIRAN" },
    ],
    overview: [
      "Supports Students, Mentors, and Admins through role-specific dashboards and permissions.",
      "The core workflow covers doubt submission, mentor assignment, responses, study materials, feedback, notifications, and admin management.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "JavaScript", "Bootstrap"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Auth", items: ["Email/Password", "Google Auth via Firebase"] },
      { category: "Files", items: ["Document & Media Upload Workflow"] },
      { category: "Deployment", items: ["Netlify", "Render"] },
    ],
    features: [
      { title: "Multi-Role Access", description: "Dedicated Student, Mentor, and Admin workflows with role-based permissions." },
      { title: "Rich Doubt Submission", description: "Students can submit text, images, and PDFs." },
      { title: "Mentor Assignment", description: "Mentors pick up doubts and manage responses through the platform." },
      { title: "Study Material Library", description: "Organized academic resources with role-restricted access." },
      { title: "Feedback & Ratings", description: "Students can leave text feedback and star ratings after support." },
      { title: "Admin Controls", description: "Manage users, announcements, notifications, and platform activity." },
    ],
    technicalDetails: [
      { title: "End-to-End Doubt Workflow", description: "Student submission → mentor pickup → response → notification → feedback." },
      { title: "Role-Based Architecture", description: "Platform actions and dashboards are separated according to student, mentor, and admin responsibilities." },
    ],
  },

  {
    title: "KIRAN v2",
    slug: "kiran-advanced",
    tagline: "Advanced Mentorship Platform",
    shortDescription:
      "The redesigned evolution of KIRAN with cleaner architecture, improved role separation, stronger dashboards, and real-time student–mentor chat.",
    description:
      "KIRAN v2 evolves the original platform beyond a visual refresh by improving the UI, workflow separation, schema planning, and communication model. It introduces real-time one-to-one chat while the backend continues to be completed.",
    coverImage: "/assets/projects/kiran/kiran-v2.svg",
    gallery: ["/assets/projects/kiran/kiran-v2.svg"],
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
      { label: "Role", value: "Full Stack Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Building" },
      { label: "Type", value: "Platform Redesign / Next Iteration" },
    ],
    links: [{ label: "Source Code", href: "https://github.com/ankit9241/KIRAN-Advance" }],
    overview: [
      "Retains KIRAN's mentorship core while improving dashboards, role separation, system structure, and long-term scalability.",
      "The major functional upgrade is real-time one-to-one communication between students and mentors.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB"] },
      { category: "Real-Time", items: ["WebSockets"] },
      { category: "Auth", items: ["Email/Password", "Google Authentication"] },
      { category: "Deployment", items: ["Netlify", "Render"] },
    ],
    features: [
      { title: "Complete UI Redesign", description: "Cleaner, more professional dashboards and platform pages than v1." },
      { title: "Improved Role Separation", description: "Stronger separation of student, mentor, and admin workflows." },
      { title: "Real-Time Chat", description: "Working one-to-one student–mentor messaging through WebSockets." },
      { title: "Session Booking Direction", description: "Mentor scheduling flow is planned, with remaining backend work still in progress." },
    ],
    technicalDetails: [
      { title: "Architecture Upgrade", description: "Rebuilt around cleaner entities, workflow boundaries, and maintainability instead of only changing the UI." },
      { title: "WebSocket Integration", description: "Real-time one-to-one chat is implemented while related backend work continues." },
    ],
  },

  {
    title: "CrazyOne",
    slug: "crazyone-ecommerce",
    tagline: "Modern E-Commerce Storefront",
    shortDescription:
      "A frontend e-commerce experience with product browsing, detail pages, cart interaction, checkout-style flow, and an admin dashboard UI.",
    description:
      "CrazyOne is a frontend-only storefront designed to simulate a connected shopping product rather than a collection of static pages.",
    coverImage: "/assets/projects/crazyone/crazy-one.svg",
    gallery: ["/assets/projects/crazyone/crazy-one.svg"],
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
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Frontend Web App" },
    ],
    links: [
      { label: "Live", href: "https://crazy-one.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/CrazyOne" },
    ],
    overview: [
      "Focuses on product exploration, product detail pages, cart handling, checkout-style interaction, and an admin-style dashboard.",
      "Uses frontend state and mock/static data; there is no real backend commerce system.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "CSS"] },
      { category: "Data", items: ["Mock JSON / Static Data", "React State"] },
    ],
    features: [
      { title: "Storefront", description: "Product catalog and dedicated product detail views." },
      { title: "Cart & Checkout", description: "Connected cart updates, quantity changes, removal, and checkout-style flow." },
      { title: "Admin UI", description: "Frontend dashboard patterns for store and order management." },
      { title: "Responsive UI", description: "Responsive layout across screen sizes." },
    ],
  },

  {
    title: "PlanIT",
    slug: "planit-event-management",
    tagline: "Event Planning & Booking Platform",
    shortDescription:
      "A frontend event-planning interface for service discovery, package selection, and booking-style workflows.",
    description:
      "PlanIT explores how an event-planning product can combine venue, catering, decoration, lighting, and other services into one connected frontend booking experience.",
    coverImage: "/assets/projects/planit/planit.svg",
    gallery: ["/assets/projects/planit/planit.svg"],
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
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Frontend Web App" },
    ],
    links: [
      { label: "Live", href: "https://plan-itt.netlify.app/" },
      { label: "Source Code", href: "https://github.com/ankit9241/PlanIT" },
    ],
    overview: [
      "Built around service-based planning rather than product shopping: browse services, compare options, select packages, and move through a booking-style flow.",
      "Frontend-only implementation using static/mock data and client-side state.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Bootstrap", "CSS"] },
      { category: "Data", items: ["Mock JSON / Static Data", "React State"] },
    ],
    features: [
      { title: "Service Catalog", description: "Browse venues, catering, decoration, lighting, and other event services." },
      { title: "Service Details", description: "Dedicated views for exploring individual options." },
      { title: "Package Selection", description: "Connected package and service-selection workflow." },
      { title: "Responsive UI", description: "Responsive planning experience across screen sizes." },
    ],
  },

  {
    title: "Gokul Bhandar",
    slug: "gokul-bhandar",
    tagline: "Online Grocery Store Platform",
    shortDescription:
      "A frontend grocery storefront simulating category-based shopping, product details, cart interaction, order flow, and an admin-style dashboard.",
    description:
      "Gokul Bhandar translates a local retail-store model into a structured digital shopping experience focused on quick category browsing and connected cart/order interactions.",
    coverImage: [
      "/assets/projects/gokulbhandar/gokul-bhandar-1.svg",
      "/assets/projects/gokulbhandar/gokul-bhandar-2.svg",
    ],
    gallery: [
      "/assets/projects/gokulbhandar/gokul-bhandar-1.svg",
      "/assets/projects/gokulbhandar/gokul-bhandar-2.svg",
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
      { label: "Role", value: "Frontend Developer" },
      { label: "Team", value: "Solo" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Frontend Web App" },
    ],
    links: [
      { label: "Live", href: "https://gokulbhandar.netlify.app" },
      { label: "Source Code", href: "https://github.com/ankit9241/GokulBhandar" },
    ],
    overview: [
      "Supports mixed-category retail browsing across groceries, stationery, candies, ice cream, and daily essentials.",
      "Includes product details, cart interactions, simplified ordering, and an admin-style dashboard while remaining frontend-only.",
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Bootstrap", "CSS"] },
      { category: "Data", items: ["Mock JSON / Static Data", "React State"] },
    ],
    features: [
      { title: "Category Storefront", description: "Browse a varied local-retail product catalog." },
      { title: "Product Details", description: "Dedicated pages for individual products." },
      { title: "Cart & Order Flow", description: "Add, update, remove, and move through a simplified order workflow." },
      { title: "Admin UI", description: "Frontend management and analytics-style dashboard views." },
    ],
  },
];