export const projects = [
    {
    slug: "avenix",
    priority: 100,
    title: "Avenix",
    subtitle: "enterpise ai platform",
    summary: "Avenix is a modern, state-of-the-art enterprise AI platform designed to deliver intelligent, real-time experiences at scale. Built around adaptive systems and contextual workflows, it enables seamless interaction, rapid decision-making, and high-performance data handling. Engineered with a strong focus on reliability and efficiency, it transforms complex operations into streamlined, user-centric processes.",
    role: "Lead Developer",
    year: "2025",
    status: "Production Ready",
    category: ["AI", "Web", "Backend"],
    cta_text: "Interested in",
    cta_action: "AI-powered Platforms?",
    cta_subtext: "Let's discuss how I can help build your next AI-powered platform or innovative web application",
    highlight: true,
    description:
    "Full-stack AI platform with LangChain agents, contextual memory, real-time WebSocket architecture, and sub-second latency — delivered 3 months ahead of schedule as a solo engineer.",
    techStack: [
    "React",
    "Express.js",
    "Node.js",
    "Python",
    "LangChain",
    "PostgreSQL",
    "Redis",
    "Docker",
    "TypeScript",
    "WebSockets",
    ],
    metrics: [
    {
    label: "Delivered Early",
    value: 3,
    suffix: " mo",
    icon: "Rocket",
    color: "cta",
    },
    {
    label: "Query Performance",
    value: 40,
    suffix: "%",
    icon: "Zap",
    color: "accent",
    },
    {
    label: "Timeline",
    value: 6,
    suffix: " mo",
    icon: "Calendar",
    color: "accent",
    },
    {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    icon: "CheckCircle2",
    color: "cta",
    },
    ],
    techLayers: [
    {
    icon: "Layout",
    title: "Frontend Architecture",
    description:
    "React + TypeScript with component-based architecture. Custom hooks for business logic separation and optimized rendering performance.",
    stack: ["React", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion"],
    color: "accent",
    },
    {
    icon: "Code2",
    title: "Backend Infrastructure",
    description:
    "Express.js with modular routing, middleware auth, and Python microservices for AI processing tasks via message queue communication.",
    stack: ["Express.js", "Node.js", "Python", "Redis", "JWT Auth"],
    color: "cta",
    },
    {
    icon: "Brain",
    title: "AI Integration Layer",
    description:
    "LangChain for LLM orchestration — custom chains for document Q&A, conversational memory, and multi-model prompt templates.",
    stack: ["LangChain", "OpenAI GPT", "Vector Stores", "Embeddings", "Prompt Eng."],
    color: "accent",
    },
    {
    icon: "Database",
    title: "Database & Storage",
    description:
    "Normalized PostgreSQL schema with optimized indexes. Redis caching for frequently accessed data and session management.",
    stack: ["PostgreSQL", "Redis", "Prisma ORM", "DB Migrations"],
    color: "cta",
    },
    ],
    features: [
    {
    icon: "Users",
    title: "Dual Role System",
    desc:
    "Distinct user roles with personalized experiences, access control, and permission layers for different stakeholder types.",
    },
    {
    icon: "LineChart",
    title: "Real-Time Dashboards",
    desc:
    "Dynamic graphs and KPI visualization built for data-driven decisions — live updates via WebSocket with sub-second latency.",
    },
    {
    icon: "Database",
    title: "Robust REST APIs",
    desc:
    "Scalable Express.js APIs following industry best practices for seamless frontend ↔ backend ↔ AI service communication.",
    },
    {
    icon: "Brain",
    title: "LangChain LLM Agents",
    desc:
    "Custom LangChain chains with vector-based semantic memory, conversation summarization, and context-aware response generation.",
    },
    {
    icon: "Activity",
    title: "WebSocket Real-Time",
    desc:
    "Redis pub/sub message broadcasting with smart batching — 60% server load reduction while maintaining sub-second latency.",
    },
    {
    icon: "Shield",
    title: "Security-First Design",
    desc:
    "JWT authentication, input validation, rate limiting, and comprehensive error handling throughout the entire stack.",
    },
    ],
    challenges: [
    {
    title: "Real-Time Data Synchronization",
    problem:
    "Ensuring consistent data across multiple user roles while maintaining real-time updates without overwhelming the server.",
    solution:
    "WebSocket connections with Redis pub/sub for efficient message broadcasting. Smart batching system aggregates updates at optimal intervals — 60% server load reduction, sub-second latency maintained.",
    metric: "−60% server load",
    },
    {
    title: "LLM Response Consistency",
    problem:
    "Maintaining context and delivering consistent, relevant responses across long conversation threads with token limits.",
    solution:
    "Custom LangChain memory with vector-based semantic search for context retrieval. Prompt engineering with conversation summarization keeps quality within token constraints.",
    metric: "Context-persistent",
    },
    {
    title: "Complex Data Visualization",
    problem:
    "Rendering dynamic, interactive charts with large datasets (100K+ points) without compromising performance.",
    solution:
    "React.memo and useMemo for intelligent re-rendering. Data virtualization and progressive loading strategies ensure smooth interactions at scale.",
    metric: "100K+ data pts",
    },
    ],
    results: [
    { value: 3, suffix: " mo", label: "Early delivery" },
    { value: 40, suffix: "%", label: "Faster queries" },
    { value: 100, suffix: "%", label: "Client satisfaction" },
    ],
    practices: [
    "Agile with bi-weekly sprint cycles",
    "Test-driven development (TDD) on critical paths",
    "CI/CD pipeline with automated testing",
    "Modular component architecture",
    "Comprehensive error handling & logging",
    "Security-first: input validation throughout",
    "WebSocket integration for live updates",
    "Performance monitoring & profiling",
    ],
    modules: [
  {
    title: "Agent Orchestration Engine",
    description:
    "LangChain-powered system managing multiple AI agents with task routing, memory handling, and tool integration.",
    icon: "Brain",
  },
  {
    title: "Real-Time Communication Layer",
    description:
    "WebSocket infrastructure with Redis pub/sub enabling sub-second updates and scalable message broadcasting.",
    icon: "Activity",
  },
  {
    title: "Contextual Memory System",
    description:
    "Vector-based memory architecture storing conversation history and semantic context for persistent AI interactions.",
    icon: "Database",
  },
  {
    title: "API & Microservices Layer",
    description:
    "Modular backend with Express.js and Python services coordinating business logic, AI processing, and external integrations.",
    icon: "Code2",
  },
  {
    title: "Analytics & Dashboard Engine",
    description:
    "Dynamic frontend system delivering real-time insights, KPI tracking, and interactive visualizations.",
    icon: "LineChart",
  },
  {
    title: "Authentication & Security Layer",
    description:
    "JWT-based authentication, access control, and secure middleware ensuring safe and reliable system operations.",
    icon: "Shield",
  },
],
    },
    {
    slug: "adsyncpro",
    priority: 60,
    title: "AdSync Pro",
    subtitle: "ad management platform",
    summary: "AdSync Pro is a modern AI-driven ad management platform built to streamline and automate marketing workflows. It enables rapid campaign creation, intelligent optimization, and real-time performance tracking through adaptive systems. Designed for scale and efficiency, it transforms complex advertising operations into fast, data-driven processes.",
    role: "Full-Stack Developer",
    cta_text: "Need Intelligent",
    cta_action: "Automation?",
    cta_subtext: "Let's explore how I can help integrate LLMs and scalable backends into your marketing or management systems.",
    year: "2025",
    status: "AI Automated",
    category: ["AI", "Web", "Backend"],
    highlight: false,
    description:
    "AI-powered ad automation platform built with Django and Next.js, enabling rapid campaign creation, real-time performance tracking, and intelligent workflow optimization through LLM-driven systems — designed for scalable, production-ready marketing operations.",
    techStack: [
    "Next.js",
    "Python",
    "Django",
    "MongoDB",
    "LLM Prompt Engineering",
    "REST API",
    "Real-time Analytics",
    "Tailwind CSS",
    ],

    // ✅ HERO METRICS (non-numeric supported)
    metrics: [
    {
    label: "Backend",
    value: "Django",
    suffix: "",
    icon: "Code",
    color: "cta",
    },
    {
    label: "Frontend",
    value: "Next.js",
    suffix: "",
    icon: "PanelTop",
    color: "accent",
    },
    {
    label: "Database",
    value: "MongoDB",
    suffix: "",
    icon: "Database",
    color: "accent",
    },
    {
    label: "AI Tech",
    value: "LLM Automation",
    suffix: "",
    icon: "WandSparkles",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Layout",
    title: "Frontend Architecture",
    description:
    "Next.js dashboard with server-side rendering, optimized UI, and efficient state handling for managing multiple campaigns and real-time analytics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SSR"],
    color: "accent",
    },
    {
    icon: "Code2",
    title: "Backend Infrastructure",
    description:
    "Django-based backend handling campaign logic, automation workflows, and secure API communication across services.",
    stack: ["Python", "Django", "REST API", "Authentication"],
    color: "cta",
    },
    {
    icon: "Brain",
    title: "AI Automation Layer",
    description:
    "LLM-driven pipelines for automated ad copy generation, campaign workflows, and content optimization using prompt engineering.",
    stack: ["LLM APIs", "Prompt Engineering", "Automation Pipelines"],
    color: "accent",
    },
    {
    icon: "Database",
    title: "Data & Analytics",
    description:
    "MongoDB-based analytics system handling high-volume campaign data with efficient aggregation and real-time querying.",
    stack: ["MongoDB", "NoSQL", "Aggregation", "Query Optimization"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Brain",
    title: "AI-Powered Ad Creation",
    desc:
    "Automated ad copy generation using LLM prompt engineering, significantly reducing manual effort in campaign setup.",
    },
    {
    icon: "LineChart",
    title: "Real-Time Performance Metrics",
    desc:
    "Live tracking of campaign performance with high-frequency updates and detailed analytics dashboards.",
    },
    {
    icon: "Layout",
    title: "Multi-Campaign Dashboard",
    desc:
    "Centralized interface to manage, monitor, and analyze multiple campaigns simultaneously.",
    },
    {
    icon: "Zap",
    title: "Automation Engine",
    desc:
    "Streamlined campaign workflows enabling faster deployment and reduced operational overhead.",
    },
    {
    icon: "Database",
    title: "Scalable Data Handling",
    desc:
    "Efficient storage and querying of large-scale campaign data using MongoDB aggregation pipelines.",
    },
    {
    icon: "Shield",
    title: "Secure Ad Management",
    desc:
    "Robust authentication, access control, and data protection for sensitive marketing and financial data.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Automating Creative Workflows",
    problem:
    "Manual ad creation and campaign setup slowed down marketing operations.",
    solution:
    "Implemented LLM-based prompt engineering pipelines to automate ad generation and streamline workflows.",
    metric: "AI automated",
    },
    {
    title: "Handling High-Volume Campaign Data",
    problem:
    "Processing large volumes of real-time performance data without latency issues.",
    solution:
    "Optimized MongoDB aggregation pipelines for efficient querying and real-time analytics.",
    metric: "Real-time analytics",
    },
    {
    title: "Scaling Multi-Campaign Management",
    problem:
    "Managing multiple campaigns simultaneously while maintaining performance and clarity.",
    solution:
    "Designed modular dashboard architecture with optimized state management and API communication.",
    metric: "Multi-campaign",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 2, suffix: "x", label: "Faster campaign setup" },
    { value: 100, suffix: "+", label: "Campaigns managed" },
    { value: 90, suffix: "%", label: "Workflow automated" },
    ],

    // ✅ PRACTICES
    practices: [
    "LLM prompt engineering for automation workflows",
    "Scalable full-stack architecture (Django + Next.js)",
    "MongoDB query optimization for analytics",
    "RESTful API design and integration",
    "Real-time campaign performance tracking",
    "Secure authentication and access control",
    "Performance-focused frontend rendering",
    "Automation-first engineering approach",
    ],
modules: [
  {
    title: "Campaign Automation Engine",
    description:
    "AI-driven workflows that automate ad creation, optimization, and deployment processes.",
    icon: "WandSparkles",
  },
  {
    title: "Ad Performance Tracker",
    description:
    "Real-time analytics system tracking campaign KPIs and engagement metrics.",
    icon: "LineChart",
  },
  {
    title: "Prompt Engineering Pipeline",
    description:
    "LLM-based system generating ad creatives, copy variations, and optimization strategies.",
    icon: "Brain",
  },
  {
    title: "Multi-Campaign Manager",
    description:
    "Centralized dashboard for managing and scaling multiple campaigns simultaneously.",
    icon: "Layout",
  },
],
    },
    {
    slug: "apexanalytics",
    priority: 90,
    title: "Apex Analytics",
    subtitle: "data management platform",
    summary: "Apex Analytics demonstrates the power of modern data engineering — a scalable, cloud-native platform that transforms fragmented systems into a unified analytics layer. Built on GCP BigQuery and optimized ETL pipelines, it enables real-time KPI monitoring and high-performance data processing at enterprise scale.",
    role: "Full-Stack Architect",
    year: "2026",
    status: "Production Ready",
    category: ["Web", "Backend"],
    cta_text: "Read to scale your",
    cta_action: "Data?",
    cta_subtext: "Let's discuss how I can help architect your next big data or analytics project.",
    highlight: false,
    description:
    "Enterprise-scale data analytics platform designed to unify fragmented systems into a single data layer. Built with GCP BigQuery pipelines for real-time KPI monitoring, enabling high-performance transformations across millions of records with sub-second query latency.",
    techStack: [
    "React",
    "Django",
    "Python",
    "Google Cloud Platform",
    "BigQuery",
    "Docker",
    "ETL Pipelines",
    "REST API",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Data Sources",
    value: 100,
    suffix: "+",
    icon: "Database",
    color: "cta",
    },
    {
    label: "Infrastructure",
    value: "GCP / Docker",
    suffix: "",
    icon: "Zap",
    color: "accent",
    },
    {
    label: "Security",
    value: "Enterprise",
    suffix: "",
    icon: "Shield",
    color: "accent",
    },
    {
    label: "Status",
    value: "Delivered",
    suffix: "",
    icon: "CheckCircle2",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Layout",
    title: "Frontend System",
    description:
    "React-based dashboard for real-time visualization of KPIs, optimized for handling large datasets with efficient rendering and state management.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    color: "accent",
    },
    {
    icon: "Code2",
    title: "Backend Core",
    description:
    "Django backend orchestrating ETL pipelines, data transformations, and API services for enterprise-scale analytics workflows.",
    stack: ["Django", "Python", "REST APIs", "PostgreSQL"],
    color: "cta",
    },
    {
    icon: "Database",
    title: "Data & BigQuery Layer",
    description:
    "GCP BigQuery pipelines enabling large-scale ETL processing and real-time analytics across millions of records.",
    stack: ["GCP", "BigQuery", "ETL Pipelines", "Cloud SQL"],
    color: "accent",
    },
    {
    icon: "Layers",
    title: "DevOps & Deployment",
    description:
    "Containerized Docker infrastructure with CI/CD pipelines ensuring scalable, reliable deployments across environments.",
    stack: ["Docker", "GCP Compute", "CI/CD", "IAM Security"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Database",
    title: "100+ System Integration",
    desc:
    "Centralized analytics hub integrating data from over 100 external systems into a unified pipeline.",
    },
    {
    icon: "LineChart",
    title: "Real-Time KPI Monitoring",
    desc:
    "Dynamic dashboards powered by BigQuery delivering live performance insights with sub-second latency.",
    },
    {
    icon: "Zap",
    title: "GCP Data Pipelines",
    desc:
    "Optimized ETL pipelines processing massive datasets efficiently using cloud-native infrastructure.",
    },
    {
    icon: "Code2",
    title: "Custom Reporting Engine",
    desc:
    "Flexible API-driven reporting system allowing generation of tailored analytics and exports.",
    },
    {
    icon: "Shield",
    title: "Enterprise Security",
    desc:
    "Robust access control, data validation, and compliance-focused architecture for secure analytics.",
    },
    {
    icon: "Layers",
    title: "Dockerized Architecture",
    desc:
    "Fully containerized system ensuring consistent deployment across development and production.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Handling Massive Data Scale",
    problem:
    "Processing millions of records from 100+ systems without degrading performance.",
    solution:
    "Leveraged BigQuery for distributed computation and optimized ETL pipelines for large-scale transformations.",
    metric: "Millions+ records",
    },
    {
    title: "Fragmented Data Sources",
    problem:
    "Data spread across multiple systems with inconsistent formats and structures.",
    solution:
    "Built centralized ingestion pipelines with transformation layers to standardize and unify incoming data.",
    metric: "100+ sources",
    },
    {
    title: "Real-Time Dashboard Performance",
    problem:
    "Maintaining fast UI performance while rendering large datasets.",
    solution:
    "Implemented query optimization, caching, and efficient frontend rendering strategies.",
    metric: "<1s latency",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 100, suffix: "+", label: "Data sources unified" },
    { value: 1, suffix: "s", label: "Query latency" },
    { value: 100, suffix: "%", label: "System reliability" },
    ],

    // ✅ PRACTICES
    practices: [
    "Agile development with iterative delivery cycles",
    "Scalable ETL pipeline design for large datasets",
    "BigQuery optimization for high-performance queries",
    "Cloud-native architecture on GCP",
    "Docker-based containerization",
    "CI/CD pipelines for automated deployment",
    "Data validation and transformation layers",
    "Performance monitoring for analytics workloads",
    ],
    modules: [
  {
    title: "Data Ingestion Pipeline",
    description:
    "Aggregates data from 100+ external systems with transformation and normalization layers for unified analytics.",
    icon: "Database",
  },
  {
    title: "Real-Time Dashboard Engine",
    description:
    "Delivers live KPI visualization with optimized queries and sub-second data refresh cycles.",
    icon: "LineChart",
  },
  {
    title: "ETL Processing System",
    description:
    "Handles large-scale data transformations using distributed processing pipelines on BigQuery.",
    icon: "Zap",
  },
  {
    title: "Reporting & Analytics API",
    description:
    "Flexible API layer for generating custom reports and exporting analytics insights.",
    icon: "Code2",
  },
],
    },
    {
    slug: "evaluasysai",
    priority: 80,
    title: "EvaluaSys AI",
    subtitle: "edtech ai evaluator",
    summary: "EvaluaSys AI is a modern, intelligent evaluation platform designed to automate and standardize academic assessment. It delivers real-time verification, adaptive questioning, and fully automated grading through AI-driven workflows. Built for accuracy and transparency, it transforms traditional evaluation into a fast, consistent, and scalable process.",
    role: "Backend Developer",
    year: "2025",
    status: "Production Ready",
    category: ["AI", "Web", "Backend"],
    highlight: false,
    description:
    "AI-driven evaluation platform designed to automate assignment assessment through intelligent workflows. Combines NLP, speech processing, and computer vision to enable real-time verification, dynamic quiz generation, and fully automated grading systems with transparent and fair evaluation.",
    cta_text: "Interested in",
    cta_action: "AI Automation?",
    cta_subtext: "Let's discuss how I can help build your next AI-powered portal or intelligent backend system.",
    techStack: [
    "React",
    "Flask",
    "Python",
    "MongoDB",
    "NLP",
    "Speech-to-Text",
    "Text-to-Speech",
    "OpenCV",
    "REST API",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "AI Modules",
    value: 5,
    suffix: "+",
    icon: "Brain",
    color: "cta",
    },
    {
    label: "AI Stack",
    value: "NLP / Vision",
    suffix: "",
    icon: "Zap",
    color: "accent",
    },
    {
    label: "Evaluation",
    value: "Automated",
    suffix: "",
    icon: "CheckCircle2",
    color: "accent",
    },
    {
    label: "Verification",
    value: "Real-Time",
    suffix: "",
    icon: "Shield",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Layout",
    title: "Frontend System",
    description:
    "React-based portal enabling live project demos, AI-driven quizzes, and real-time student interaction.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Webcam API"],
    color: "accent",
    },
    {
    icon: "Code2",
    title: "Backend AI Engine",
    description:
    "Flask backend orchestrating NLP pipelines, speech processing, and computer vision models for automated evaluation.",
    stack: ["Flask", "Python", "REST API", "OpenCV"],
    color: "cta",
    },
    {
    icon: "Brain",
    title: "AI & NLP Layer",
    description:
    "Integrated Speech-to-Text and Text-to-Speech systems with NLP models for intelligent Q&A and student verification.",
    stack: ["NLP Models", "STT", "TTS", "AI Pipelines"],
    color: "accent",
    },
    {
    icon: "Database",
    title: "Data & Storage",
    description:
    "MongoDB database for storing submissions, logs, and evaluation data with scalable performance.",
    stack: ["MongoDB", "Cloud Storage", "JWT Auth"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Brain",
    title: "AI-Based Evaluation",
    desc:
    "Automated grading system replacing manual evaluation with intelligent workflows.",
    },
    {
    icon: "Activity",
    title: "Real-Time Malpractice Detection",
    desc:
    "Facial detection and expression tracking during live demos to ensure transparency and prevent cheating.",
    },
    {
    icon: "MessageSquare",
    title: "Voice & Text Q&A",
    desc:
    "Speech-to-Text and Text-to-Speech integration enabling AI-driven student interaction and verification.",
    },
    {
    icon: "Target",
    title: "Dynamic Quiz Generation",
    desc:
    "Automatically generates quizzes based on project content for deeper evaluation.",
    },
    {
    icon: "Shield",
    title: "Plagiarism Detection",
    desc:
    "Intelligent detection of duplicated code ensuring fairness in grading.",
    },
    {
    icon: "Layers",
    title: "End-to-End Automation",
    desc:
    "Fully automated evaluation pipeline from submission to final scoring.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Ensuring Fair Evaluation",
    problem:
    "Manual grading lacked consistency and transparency across different evaluators.",
    solution:
    "Implemented AI-driven evaluation workflows combining NLP, quizzes, and vision systems to standardize assessment.",
    metric: "100% automated",
    },
    {
    title: "Real-Time Student Verification",
    problem:
    "Difficulty verifying student identity and engagement during remote demos.",
    solution:
    "Integrated facial detection and voice-based interaction for live verification.",
    metric: "Live verification",
    },
    {
    title: "Handling Complex Submissions",
    problem:
    "Projects varied significantly, making uniform evaluation difficult.",
    solution:
    "Built adaptive quiz generation and dynamic evaluation pipelines tailored to each submission.",
    metric: "Adaptive AI",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 100, suffix: "%", label: "Automated evaluation" },
    { value: 1, suffix: "s", label: "AI response time" },
    { value: 100, suffix: "%", label: "Transparency" },
    ],

    // ✅ PRACTICES
    practices: [
    "AI-driven automation replacing manual workflows",
    "NLP integration for intelligent Q&A systems",
    "Computer vision for real-time monitoring",
    "Scalable Flask backend architecture",
    "MongoDB for flexible data storage",
    "REST API design for modular systems",
    "Secure authentication with JWT",
    "Production-ready deployment practices",
    ],
    modules: [
  {
    title: "Automated Evaluation Engine",
    description:
    "AI system that grades assignments using NLP, scoring logic, and adaptive evaluation pipelines.",
    icon: "Brain",
  },
  {
    title: "Live Verification System",
    description:
    "Real-time facial detection and interaction monitoring to ensure student authenticity.",
    icon: "Shield",
  },
  {
    title: "Dynamic Quiz Generator",
    description:
    "Generates context-aware quizzes based on submitted content for deeper assessment.",
    icon: "Target",
  },
  {
    title: "Voice Interaction Module",
    description:
    "Speech-to-text and text-to-speech system enabling conversational AI evaluation.",
    icon: "MessageSquare",
  },
],
    },
    {
    slug: "memechecker",
    priority: 40,
    title: "Multimodal Meme Classification",
    subtitle: "classier",
    role: "AI Engineer",
    year: "2024",
    status: "Approved",
    category: ["AI", "Backend"],
    cta_text: "Interested in",
    cta_action: "AI & ML?",
    cta_subtext: "Let's discuss how I can develop innovative AI solutions that combine multiple modalities for your next project.",
    highlight: false,
    description:
    "Advanced multimodal AI system combining computer vision and natural language processing to analyze and classify memes. Implements early and late fusion architectures with OCR integration and transformer-based NLP models, achieving high accuracy across diverse meme formats and enabling real-time content understanding.",
    summary: "Multimodal Meme Classification is an advanced AI system designed to understand content by combining visual and textual intelligence. It interprets complex, context-heavy data with high accuracy, enabling real-time classification and deeper semantic analysis. Built for adaptability, it pushes the boundaries of multimodal understanding.",
    techStack: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "GPT-4",
    "Computer Vision",
    "NLP",
    "OCR (Tesseract)",
    "Transformers",
    "OpenCV",
    "scikit-learn",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Accuracy",
    value: "95%+",
    suffix: "",
    icon: "Target",
    color: "cta",
    },
    {
    label: "Framework",
    value: "PyTorch / TF",
    suffix: "",
    icon: "Cpu",
    color: "accent",
    },
    {
    label: "Modality",
    value: "Vision + NLP",
    suffix: "",
    icon: "Brain",
    color: "accent",
    },
    {
    label: "Status",
    value: "Production",
    suffix: "",
    icon: "CheckCircle2",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Image",
    title: "Computer Vision Pipeline",
    description:
    "Implemented CNNs and Vision Transformers using PyTorch and TensorFlow for feature extraction, leveraging transfer learning and image augmentation.",
    stack: ["PyTorch", "TensorFlow", "OpenCV", "CNNs", "Vision Transformers"],
    color: "accent",
    },
    {
    icon: "Brain",
    title: "NLP Pipeline",
    description:
    "Transformer-based NLP system with GPT-4 integration for contextual understanding, sentiment detection, and semantic interpretation.",
    stack: ["GPT-4", "Transformers", "BERT", "Embeddings"],
    color: "cta",
    },
    {
    icon: "Network",
    title: "Multimodal Fusion",
    description:
    "Early and late fusion strategies combining visual and textual features with attention mechanisms for cross-modal learning.",
    stack: ["Early Fusion", "Late Fusion", "Attention", "Feature Fusion"],
    color: "accent",
    },
    {
    icon: "FileText",
    title: "OCR & Data Pipeline",
    description:
    "Tesseract OCR integration with preprocessing pipelines for extracting and cleaning text from images.",
    stack: ["Tesseract OCR", "Preprocessing", "Text Extraction"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Layers",
    title: "Multimodal AI Architecture",
    desc:
    "Simultaneous analysis of image and text components using integrated computer vision and NLP pipelines.",
    },
    {
    icon: "Network",
    title: "Fusion Models",
    desc:
    "Implemented early and late fusion strategies to capture relationships between visual and textual data.",
    },
    {
    icon: "Image",
    title: "Advanced Image Processing",
    desc:
    "Utilized CNNs and Vision Transformers for robust visual feature extraction and classification.",
    },
    {
    icon: "Type",
    title: "Natural Language Understanding",
    desc:
    "Transformer-based NLP with GPT-4 for contextual analysis and semantic understanding.",
    },
    {
    icon: "Eye",
    title: "OCR Text Extraction",
    desc:
    "Extracted embedded text from images using Tesseract OCR with preprocessing enhancements.",
    },
    {
    icon: "BarChart3",
    title: "Trend & Content Analysis",
    desc:
    "Analyzed meme patterns, trends, and classification for deeper content understanding.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Multimodal Feature Alignment",
    problem:
    "Aligning image and text representations across different feature spaces and dimensionalities.",
    solution:
    "Used projection layers and attention mechanisms to map both modalities into a shared embedding space.",
    metric: "Cross-modal aligned",
    },
    {
    title: "OCR Accuracy Variability",
    problem:
    "Extracting text from images with varying fonts, noise, and quality.",
    solution:
    "Built preprocessing pipelines with enhancement, thresholding, and post-processing for improved OCR accuracy.",
    metric: "Enhanced OCR",
    },
    {
    title: "Context & Cultural Understanding",
    problem:
    "Memes rely on cultural context, humor, and implicit references difficult for AI models.",
    solution:
    "Leveraged GPT-4 and fine-tuned models on meme datasets to capture semantic and contextual nuances.",
    metric: "Context-aware",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 95, suffix: "%+", label: "Classification accuracy" },
    { value: 2, suffix: "", label: "Modalities (Vision + NLP)" },
    { value: 1, suffix: "x", label: "Real-time inference" },
    ],

    // ✅ PRACTICES
    practices: [
    "Multimodal deep learning architecture design",
    "Fusion strategy experimentation (early + late)",
    "Transformer-based NLP integration",
    "Computer vision model optimization",
    "OCR preprocessing and enhancement pipelines",
    "Transfer learning for efficient training",
    "Evaluation using precision, recall, and F1",
    "Real-time inference optimization",
    ],
    modules: [
  {
    title: "Vision Feature Extractor",
    description:
    "CNN and Vision Transformer models extracting high-level visual features from images.",
    icon: "Image",
  },
  {
    title: "Text Understanding Engine",
    description:
    "Transformer-based NLP system analyzing semantics, sentiment, and contextual meaning.",
    icon: "Brain",
  },
  {
    title: "Multimodal Fusion System",
    description:
    "Combines visual and textual embeddings using attention-based fusion strategies.",
    icon: "Network",
  },
  {
    title: "OCR Processing Pipeline",
    description:
    "Extracts embedded text from images with preprocessing and enhancement techniques.",
    icon: "FileText",
  },
],
    },
    {
    slug: "raaheraast",
    priority: 30,
    title: "Raah-e-Raast",
    subtitle: "tourist mobile application",
    role: "Mobile Developer",
    year: "2023",
    status: "Delivered Early",
    category: ["Mobile", "Backend"],
    cta_text: "Excited about",
    cta_action: "Mobile Development",
    cta_subtext: "Let's discuss how I can build innovative mobile solutions that connect people and enhance experience.",
    highlight: false,
    description:
    "Native Android platform connecting tourists with verified local guides for personalized travel experiences. Built with Kotlin and Firebase, featuring real-time GPS tracking, smart booking systems, and curated travel recommendations, enabling safe, seamless, and culturally immersive journeys.",
    summary: "Raah-e-Raast is a modern mobile platform built to create seamless and personalized travel experiences by connecting tourists with trusted local guides. It enables real-time interaction, smart bookings, and location-aware services. Designed for reliability and usability, it transforms travel into a safer and more engaging journey.",
    techStack: [
    "Kotlin",
    "Android SDK",
    "Firebase",
    "Firestore",
    "Realtime Database",
    "Firebase Authentication",
    "Google Maps API",
    "Google Cloud APIs",
    "Push Notifications",
    "Material Design",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Platform",
    value: "Android",
    suffix: "",
    icon: "Smartphone",
    color: "cta",
    },
    {
    label: "Users",
    value: "1000+",
    suffix: "",
    icon: "Users",
    color: "accent",
    },
    {
    label: "Tracking",
    value: "Real-Time",
    suffix: "",
    icon: "Navigation",
    color: "accent",
    },
    {
    label: "Status",
    value: "Live",
    suffix: "",
    icon: "CheckCircle2",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Smartphone",
    title: "Android Application",
    description:
    "Native Android app built using Kotlin with MVVM architecture, coroutines, and modern Android components for performance and scalability.",
    stack: ["Kotlin", "Android SDK", "MVVM", "Coroutines", "Material Design"],
    color: "accent",
    },
    {
    icon: "Zap",
    title: "Firebase Backend",
    description:
    "Firebase ecosystem powering authentication, real-time database updates, push notifications, and scalable cloud storage.",
    stack: ["Firebase Auth", "Firestore", "Realtime DB", "Cloud Messaging"],
    color: "cta",
    },
    {
    icon: "Globe",
    title: "Location Services",
    description:
    "Google Maps and location APIs enabling real-time tracking, navigation, geocoding, and interactive mapping.",
    stack: ["Google Maps API", "Places API", "Geolocation"],
    color: "accent",
    },
    {
    icon: "Navigation",
    title: "Real-Time System",
    description:
    "Live tracking and synchronization using GPS and Firebase for instant updates between tourists and guides.",
    stack: ["GPS", "Realtime Sync", "WebSockets"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Users",
    title: "Tourist-Guide Matching",
    desc:
    "Platform connecting tourists with verified guides for personalized travel experiences.",
    },
    {
    icon: "MapPin",
    title: "Real-Time Location Tracking",
    desc:
    "GPS-based tracking system ensuring safety and transparency during tours.",
    },
    {
    icon: "Calendar",
    title: "Smart Booking System",
    desc:
    "Integrated booking system with scheduling, confirmations, and reminders.",
    },
    {
    icon: "Shield",
    title: "Secure Authentication",
    desc:
    "Firebase authentication with secure login, verification, and user management.",
    },
    {
    icon: "Zap",
    title: "Live Data Sync",
    desc:
    "Real-time updates using Firebase ensuring instant communication and booking updates.",
    },
    {
    icon: "Building2",
    title: "Travel Recommendations",
    desc:
    "Personalized suggestions for hotels, restaurants, and attractions.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Real-Time Location vs Battery Usage",
    problem:
    "Maintaining accurate GPS tracking without excessive battery consumption.",
    solution:
    "Implemented adaptive location updates and optimized background services using fused location providers.",
    metric: "−40% battery usage",
    },
    {
    title: "Offline Functionality",
    problem:
    "Ensuring usability in low-connectivity environments while maintaining data consistency.",
    solution:
    "Implemented local caching with offline sync and Firebase persistence mechanisms.",
    metric: "Offline ready",
    },
    {
    title: "Scalable Recommendations",
    problem:
    "Providing personalized recommendations for diverse users efficiently.",
    solution:
    "Built hybrid recommendation engine using user preferences and interaction data.",
    metric: "+60% relevance",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 1000, suffix: "+", label: "Active users" },
    { value: 1, suffix: "", label: "Android platform" },
    { value: 90, suffix: "%", label: "User satisfaction (est.)" },
    ],

    // ✅ PRACTICES
    practices: [
    "Native Android development using Kotlin",
    "MVVM architecture with clean separation",
    "Firebase-based scalable backend",
    "Real-time data synchronization",
    "Google Maps API integration",
    "Offline-first mobile design",
    "Secure authentication workflows",
    "Performance optimization for battery efficiency",
    ],
    modules: [
  {
    title: "Tourist-Guide Matching Engine",
    description:
    "Connects users with verified guides based on preferences, location, and availability.",
    icon: "Users",
  },
  {
    title: "Real-Time Tracking System",
    description:
    "GPS-based tracking with live updates ensuring safety and transparency.",
    icon: "Navigation",
  },
  {
    title: "Smart Booking System",
    description:
    "Handles scheduling, confirmations, and booking workflows seamlessly.",
    icon: "Calendar",
  },
  {
    title: "Recommendation Engine",
    description:
    "Provides personalized travel suggestions based on user behavior and preferences.",
    icon: "MapPin",
  },
],
    },
    {
    slug: "skillswap",
    priority: 20,
    title: "Skill Swap",
    subtitle: "edtech learning platform",
    role: "Full-Stack Developer",
    year: "2023",
    status: "MVP Completed",
    category: ["Backend"],
    cta_text: "Need a",
    cta_action: "Learning or Social Platform?",
    cta_subtext: "Let's discuss how I can build innovative platforms with real-time communication and intelligent matching systems.",
    highlight: false,
    description:
    "Peer-to-peer learning platform enabling dynamic role interchange between learners and teachers, powered by real-time communication, intelligent skill matching, and a trust-driven review system. Built with Spring Boot, WebSocket, and WebRTC to deliver interactive and scalable learning experiences.",
    summary: "Skill Swap is a dynamic peer-to-peer learning platform designed to enable seamless knowledge exchange through real-time interaction and intelligent matching. It allows users to switch roles between learner and teacher, creating a collaborative ecosystem. Built for scalability, it transforms traditional learning into an interactive experience.",
    techStack: [
    "Java",
    "Spring Boot",
    "WebSocket",
    "WebRTC",
    "MySQL",
    "JPA/Hibernate",
    "REST APIs",
    "JWT Authentication",
    "Redis",
    "Microservices",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Platform",
    value: "MVP",
    suffix: "",
    icon: "Rocket",
    color: "cta",
    },
    {
    label: "User System",
    value: "Dual Role",
    suffix: "",
    icon: "RefreshCw",
    color: "accent",
    },
    {
    label: "Communication",
    value: "Real-Time",
    suffix: "",
    icon: "MessageSquare",
    color: "accent",
    },
    {
    label: "Status",
    value: "Completed",
    suffix: "",
    icon: "CheckCircle2",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Code2",
    title: "Backend Architecture",
    description:
    "Spring Boot-based microservices architecture handling user management, sessions, and skill matching with secure REST APIs.",
    stack: ["Spring Boot", "Spring Security", "REST APIs", "Microservices"],
    color: "cta",
    },
    {
    icon: "MessageSquare",
    title: "Real-Time Communication",
    description:
    "WebSocket-based chat system with low-latency messaging, typing indicators, and persistent message storage.",
    stack: ["WebSocket", "STOMP", "Message Broker"],
    color: "accent",
    },
    {
    icon: "Video",
    title: "Video & Audio Layer",
    description:
    "WebRTC integration enabling peer-to-peer video/audio calls with signaling server for real-time learning sessions.",
    stack: ["WebRTC", "Signaling Server", "P2P Communication"],
    color: "cta",
    },
    {
    icon: "Target",
    title: "Data & Matching Engine",
    description:
    "MySQL database with optimized queries powering intelligent skill matching based on user behavior, ratings, and availability.",
    stack: ["MySQL", "JPA/Hibernate", "Query Optimization"],
    color: "accent",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "RefreshCw",
    title: "Dynamic Role Interchange",
    desc:
    "Users can seamlessly switch between learner and teacher roles, enabling bidirectional knowledge exchange.",
    },
    {
    icon: "MessageSquare",
    title: "Real-Time Chat",
    desc:
    "Instant messaging system with WebSocket-based communication and persistent message history.",
    },
    {
    icon: "Video",
    title: "Video/Audio Sessions",
    desc:
    "WebRTC-powered calling system enabling interactive learning sessions with low latency.",
    },
    {
    icon: "Star",
    title: "Review & Rating System",
    desc:
    "Trust-based feedback system ensuring quality learning experiences and reputation building.",
    },
    {
    icon: "Search",
    title: "Smart Matching Algorithm",
    desc:
    "Pairs users based on skills, ratings, availability, and historical interaction success.",
    },
    {
    icon: "UserCheck",
    title: "Profile & Skill Management",
    desc:
    "Comprehensive profiles allowing users to showcase skills, track sessions, and manage expertise.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Scaling Real-Time Communication",
    problem:
    "Managing multiple concurrent WebSocket connections with low latency across sessions.",
    solution:
    "Implemented STOMP-based messaging with Redis pub/sub and horizontal scaling for handling thousands of connections.",
    metric: "Scalable WebSockets",
    },
    {
    title: "Intelligent Skill Matching",
    problem:
    "Matching users effectively based on multiple dynamic factors like skills, ratings, and availability.",
    solution:
    "Designed weighted scoring algorithm with caching layer and collaborative filtering, reducing query time significantly.",
    metric: "-65% query time",
    },
    {
    title: "Review System Integrity",
    problem:
    "Preventing fake reviews and maintaining trust within the platform.",
    solution:
    "Implemented session verification, anomaly detection, and weighted scoring for verified interactions.",
    metric: "+75% trust accuracy",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 1, suffix: "", label: "MVP delivered" },
    { value: 2, suffix: "", label: "User roles supported" },
    { value: 100, suffix: "%", label: "Real-time interaction coverage" },
    ],

    // ✅ PRACTICES
    practices: [
    "Microservices-based backend architecture",
    "WebSocket + WebRTC real-time systems",
    "JWT authentication and secure APIs",
    "Database normalization and query optimization",
    "Scalable messaging using pub/sub patterns",
    "Algorithm-driven user matching",
    "Trust-driven review and rating system",
    "Performance optimization for low-latency communication",
    ],
    modules: [
  {
    title: "Skill Matching Engine",
    description:
    "Matches users based on skills, availability, and ratings using weighted algorithms.",
    icon: "Target",
  },
  {
    title: "Real-Time Communication System",
    description:
    "WebSocket-based messaging system with low-latency chat and session updates.",
    icon: "MessageSquare",
  },
  {
    title: "Video Session Module",
    description:
    "WebRTC-powered peer-to-peer video and audio learning sessions.",
    icon: "Video",
  },
  {
    title: "Reputation & Review System",
    description:
    "Trust-driven feedback mechanism ensuring quality and reliability of interactions.",
    icon: "Star",
  },
],
    },
    {
    slug: "snapreceiptai",
    priority: 50,
    title: "SnapReceipt AI",
    subtitle: "ai receipt management platform",
    role: "Full-Stack Engineer",
    year: "2025",
    status: "AI-Driven",
    category: ["AI", "Web", "Backend"],
    cta_text: "Ready to",
    cta_action: "Automate Finances?",
    cta_subtext: "Discover how AI-driven data capture can transform your expense tracking and organizational workflows.",
    highlight: false,
    description:
    "AI-powered expense management platform that automates receipt processing using OCR and LLM prompt engineering. Built with Django and MongoDB to transform unstructured receipt data into structured, searchable financial records with minimal user effort.",
    summary: "SnapReceipt AI is a modern AI-driven platform designed to automate expense tracking by transforming unstructured receipt data into organized financial records. It simplifies data extraction, enhances accuracy, and reduces manual effort. Built for efficiency, it turns everyday financial management into a seamless experience.",
    techStack: [
    "Python",
    "Django",
    "MongoDB",
    "LLM Prompt Engineering",
    "OCR",
    "REST APIs",
    "Tailwind CSS",
    "Data Visualization",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Role",
    value: "Full-Stack",
    suffix: "",
    icon: "Code2",
    color: "cta",
    },
    {
    label: "AI Pipeline",
    value: "LLM + OCR",
    suffix: "",
    icon: "Brain",
    color: "accent",
    },
    {
    label: "Backend",
    value: "Django",
    suffix: "",
    icon: "Database",
    color: "accent",
    },
    {
    label: "System Type",
    value: "Automation",
    suffix: "",
    icon: "Wand2",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Brain",
    title: "AI Extraction Engine",
    description:
    "LLM-powered pipeline combined with OCR to extract structured financial data from receipt images with high accuracy.",
    stack: ["LLM APIs", "Prompt Engineering", "OCR", "Image Processing"],
    color: "cta",
    },
    {
    icon: "Code2",
    title: "Backend Infrastructure",
    description:
    "Django backend managing user data, receipt workflows, and financial record organization via secure REST APIs.",
    stack: ["Python", "Django", "REST API", "Authentication"],
    color: "accent",
    },
    {
    icon: "Database",
    title: "Data Storage Layer",
    description:
    "MongoDB used for flexible schema design, enabling storage of diverse receipt formats and structured transaction data.",
    stack: ["MongoDB", "NoSQL", "Aggregation", "Query Optimization"],
    color: "cta",
    },
    {
    icon: "Layout",
    title: "Frontend Dashboard",
    description:
    "Clean UI for managing receipts, searching transactions, and exporting financial reports with responsive design.",
    stack: ["React", "Tailwind CSS", "Data Visualization"],
    color: "accent",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Wand2",
    title: "AI Data Extraction",
    desc:
    "Automatically extracts merchant names, totals, and dates from receipts using LLM + OCR pipelines.",
    },
    {
    icon: "Receipt",
    title: "Automated Expense Tracking",
    desc:
    "Transforms uploaded receipts into structured financial entries with zero manual input.",
    },
    {
    icon: "Search",
    title: "Searchable Dashboard",
    desc:
    "Users can filter, tag, and search transactions across large datasets instantly.",
    },
    {
    icon: "Database",
    title: "Flexible Storage System",
    desc:
    "Handles diverse receipt formats using MongoDB for scalable and adaptive storage.",
    },
    {
    icon: "FileText",
    title: "Exportable Reports",
    desc:
    "Generates structured reports for accounting, analytics, and tax preparation.",
    },
    {
    icon: "ShieldCheck",
    title: "Secure Financial Records",
    desc:
    "Ensures safe handling of sensitive financial data with authentication and validation layers.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Parsing Unstructured Receipt Data",
    problem:
    "Receipts vary in format, layout, and quality, making consistent data extraction difficult.",
    solution:
    "Combined OCR preprocessing with LLM prompt engineering to normalize outputs into structured JSON format.",
    metric: "High accuracy extraction",
    },
    {
    title: "Handling Diverse Data Formats",
    problem:
    "Different vendors and receipt styles produced inconsistent schemas.",
    solution:
    "Used MongoDB with flexible schema design and normalization pipelines for structured storage.",
    metric: "Schema-flexible",
    },
    {
    title: "Search & Retrieval Performance",
    problem:
    "Users needed fast querying across large financial datasets.",
    solution:
    "Implemented indexed queries and aggregation pipelines for optimized retrieval performance.",
    metric: "Fast queries",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 90, suffix: "%", label: "Manual work reduced" },
    { value: 100, suffix: "%", label: "Automated capture" },
    { value: 1, suffix: "s", label: "Avg extraction time" },
    ],

    // ✅ PRACTICES
    practices: [
    "LLM prompt engineering for structured extraction",
    "OCR + AI hybrid pipeline design",
    "Django REST API architecture",
    "MongoDB schema design for flexibility",
    "Secure handling of financial data",
    "Search optimization with indexing",
    "Automation-first product design",
    "Scalable backend architecture",
    ],
    modules: [
  {
    title: "Skill Matching Engine",
    description:
    "Matches users based on skills, availability, and ratings using weighted algorithms.",
    icon: "Target",
  },
  {
    title: "Real-Time Communication System",
    description:
    "WebSocket-based messaging system with low-latency chat and session updates.",
    icon: "MessageSquare",
  },
  {
    title: "Video Session Module",
    description:
    "WebRTC-powered peer-to-peer video and audio learning sessions.",
    icon: "Video",
  },
  {
    title: "Reputation & Review System",
    description:
    "Trust-driven feedback mechanism ensuring quality and reliability of interactions.",
    icon: "Star",
  },
],
    },
    {
    slug: "talabportal",
    priority: 10,
    title: "TA Lab Portal",
    subtitle: "edtech evaluator platform",
    role: "Full-Stack Developer",
    year: "2024",
    status: "Delivered",
    category: ["Web", "Backend"],
    cta_text: "Need an",
    cta_action: "EdTech Management System?",
    cta_subtext: "Let's discuss how I can build scalable web applications for educational institutions and enterprise organizations.",
    highlight: false,
    description:
    "Enterprise-grade academic management system designed to streamline coordination between faculty, teaching assistants, and lab demonstrators. Built using ASP.NET and SQL Server with a robust role-based access control system and scalable task management workflows.",
    summary: "TA Lab Portal is an enterprise-grade academic management system designed to streamline coordination between faculty and teaching staff. It enables structured workflows, role-based access, and efficient task management. Built for reliability and clarity, it transforms academic operations into a well-organized system.",
    techStack: [
    "ASP.NET",
    "C#",
    "Web Forms",
    "SQL Server",
    "ADO.NET",
    "JavaScript",
    "Bootstrap",
    "IIS",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Users",
    value: "200+",
    suffix: "",
    icon: "Users",
    color: "cta",
    },
    {
    label: "Roles",
    value: "4",
    suffix: "",
    icon: "UserCheck",
    color: "accent",
    },
    {
    label: "Architecture",
    value: "3-Tier",
    suffix: "",
    icon: "Layout",
    color: "accent",
    },
    {
    label: "Database",
    value: "SQL Server",
    suffix: "",
    icon: "Database",
    color: "cta",
    },
    ],

    // ✅ ARCHITECTURE
    techLayers: [
    {
    icon: "Layout",
    title: "Frontend System",
    description:
    "ASP.NET Web Forms UI with Master Pages ensuring consistent layout and reusable components across the platform.",
    stack: ["ASP.NET Web Forms", "Bootstrap", "CSS3", "JavaScript"],
    color: "accent",
    },
    {
    icon: "Code2",
    title: "Business Logic Layer",
    description:
    "C# backend implementing business rules, validation, and workflow orchestration using a clean three-tier architecture.",
    stack: ["C#", "ASP.NET", "Validation", "Error Handling"],
    color: "cta",
    },
    {
    icon: "Database",
    title: "Data Layer",
    description:
    "Normalized SQL Server database with stored procedures, constraints, and indexing for performance and data integrity.",
    stack: ["SQL Server", "T-SQL", "Stored Procedures", "Indexes"],
    color: "accent",
    },
    {
    icon: "Shield",
    title: "Security Layer",
    description:
    "Role-based authentication and authorization system with session management and audit logging.",
    stack: ["RBAC", "Session Auth", "Hashing", "Audit Logs"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Users",
    title: "Multi-Role System",
    desc:
    "Supports Admin, Faculty, TA, and Lab Demonstrator roles with distinct permissions and workflows.",
    },
    {
    icon: "ClipboardList",
    title: "Task Management",
    desc:
    "Faculty can assign, track, and manage tasks with deadlines and real-time progress visibility.",
    },
    {
    icon: "Shield",
    title: "Secure Authentication",
    desc:
    "Role-based access control with session management and encrypted credentials.",
    },
    {
    icon: "Settings",
    title: "Admin Dashboard",
    desc:
    "Centralized control panel for course setup, staff onboarding, and system configuration.",
    },
    {
    icon: "Database",
    title: "Optimized Database Design",
    desc:
    "Normalized schema with indexing and constraints for high performance.",
    },
    {
    icon: "FileText",
    title: "Reporting System",
    desc:
    "Faculty dashboards for tracking performance, submissions, and team productivity.",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Complex Role-Based Access Control",
    problem:
    "Managing multiple user roles with different permissions while ensuring security and data isolation.",
    solution:
    "Designed RBAC system with permission matrices and role validation at both UI and backend levels.",
    metric: "Secure access control",
    },
    {
    title: "Task Workflow Management",
    problem:
    "Handling assignment distribution, tracking, and submission across multiple users simultaneously.",
    solution:
    "Built structured workflows with status tracking, deadline logic, and dashboard visualization.",
    metric: "100% task visibility",
    },
    {
    title: "Concurrent Data Access",
    problem:
    "Multiple users updating data simultaneously causing conflicts and inconsistencies.",
    solution:
    "Implemented optimistic concurrency control and transaction management to ensure data consistency.",
    metric: "90% conflict reduction",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 200, suffix: "+", label: "Users / semester" },
    { value: 4, suffix: "", label: "User roles" },
    { value: 100, suffix: "%", label: "Task coverage" },
    ],

    // ✅ PRACTICES
    practices: [
    "Role-based access control (RBAC)",
    "Three-tier architecture design",
    "Database normalization and indexing",
    "Secure authentication and session handling",
    "Optimistic concurrency control",
    "Enterprise workflow modeling",
    "Scalable backend architecture",
    "Structured task management systems",
    ],
    modules: [
  {
    title: "Role-Based Access System",
    description:
    "RBAC implementation controlling permissions across multiple user roles.",
    icon: "Shield",
  },
  {
    title: "Task Management Engine",
    description:
    "Handles assignment distribution, tracking, and workflow orchestration.",
    icon: "ClipboardList",
  },
  {
    title: "Admin Control Panel",
    description:
    "Centralized dashboard for system configuration and user management.",
    icon: "Settings",
  },
  {
    title: "Reporting & Monitoring",
    description:
    "Provides insights into task progress, performance, and user activity.",
    icon: "BarChart3",
  },
],
    },
    {
    slug: "unhinged",
    priority: 70,
    title: "unHinged",
    subtitle: "2D Psychological Survival",
    role: "Game Developer",
    year: "2025",
    status: "Completed",
    category: ["Game"],
    cta_text: "Want a",
    cta_action: "Custom Game?",
    cta_subtext: "Let's discuss how I can bring innovative gameplay mechanics and compelling narratives to your next project.",
    highlight: true,
    description:
    "A psychologically-driven 2D survival game exploring mental health through dynamic gameplay systems, procedural environments, and AI-driven interactions. Developed as a Final Year Project using Godot Engine with a strong focus on performance, systems design, and immersive storytelling.",
    summary: "unHinged is a psychologically-driven survival game that blends immersive storytelling with dynamic gameplay systems. It explores mental states through evolving environments and adaptive mechanics. Designed for depth and performance, it delivers a unique and thought-provoking interactive experience.",
    techStack: [
    "Godot Engine",
    "GDScript",
    "Procedural Generation",
    "AI Systems",
    "State Machines",
    "Object Pooling",
    "Physics Engine",
    "Audio Systems",
    ],

    // ✅ HERO METRICS
    metrics: [
    {
    label: "Performance",
    value: "60",
    suffix: " FPS",
    icon: "Rocket",
    color: "cta",
    },
    {
    label: "Type",
    value: "FYP",
    suffix: "",
    icon: "Trophy",
    color: "accent",
    },
    {
    label: "Engine",
    value: "Godot",
    suffix: "",
    icon: "Gamepad2",
    color: "accent",
    },
    {
    label: "Focus",
    value: "AI + Systems",
    suffix: "",
    icon: "Brain",
    color: "cta",
    },
    ],

    // ✅ SYSTEM ARCHITECTURE (VERY IMPORTANT FOR GAME PROJECTS)
    techLayers: [
    {
    icon: "Gamepad2",
    title: "Game Engine Layer",
    description:
    "Built on Godot Engine using scene-based architecture and modular node system for scalable gameplay design.",
    stack: ["Godot", "GDScript", "Scene System", "Node Architecture"],
    color: "accent",
    },
    {
    icon: "Brain",
    title: "AI & Gameplay Systems",
    description:
    "Custom AI behavior and gameplay logic using state machines and dynamic difficulty driven by psychological metrics.",
    stack: ["State Machines", "Behavior Logic", "Dynamic AI"],
    color: "cta",
    },
    {
    icon: "Map",
    title: "Procedural Generation",
    description:
    "Procedurally generated maps representing fragmented memory with replayable layouts and symbolic structure.",
    stack: ["Procedural Algorithms", "Seed Systems", "Map Generation"],
    color: "accent",
    },
    {
    icon: "Zap",
    title: "Performance Optimization",
    description:
    "Advanced optimization techniques ensuring stable performance across low-end devices.",
    stack: ["Object Pooling", "Memory Management", "Rendering Optimization"],
    color: "cta",
    },
    ],

    // ✅ FEATURES
    features: [
    {
    icon: "Brain",
    title: "Psychological Gameplay",
    desc:
    "Core gameplay built around fear, trauma, and mental state, influencing both mechanics and narrative.",
    },
    {
    icon: "Eye",
    title: "Perception Distortion",
    desc:
    "Dynamic environment changes that alter visuals and audio based on player psychology.",
    },
    {
    icon: "Zap",
    title: "Fear Meter System",
    desc:
    "Real-time system that modifies gameplay difficulty, visuals, and sound dynamically.",
    },
    {
    icon: "Map",
    title: "Procedural Maps",
    desc:
    "Unique layouts generated per session to reflect fragmented memory and enhance replayability.",
    },
    {
    icon: "Layers",
    title: "Object Pooling",
    desc:
    "Optimized memory usage for stable performance and smooth gameplay.",
    },
    {
    icon: "Heart",
    title: "Narrative-Driven Design",
    desc:
    "Mechanics and storytelling tightly integrated to represent mental health authentically.",
    },
    ],

    // ✅ CORE GAMEPLAY SYSTEMS
    modules: [
    {
    title: "Fear Meter System",
    description:
    "Tracks psychological state and dynamically alters gameplay including visuals, audio, and mechanics.",
    icon: "Brain",
    },
    {
    title: "Memory Fragmentation",
    description:
    "Procedural world generation reflecting broken memory and psychological instability.",
    icon: "Map",
    },
    {
    title: "Psychological Survival",
    description:
    "Reimagines survival mechanics where mental stability replaces traditional health systems.",
    icon: "Heart",
    },
    ],

    // ✅ CHALLENGES
    challenges: [
    {
    title: "Performance on Low-End Hardware",
    problem:
    "Maintaining smooth gameplay with complex systems on limited hardware.",
    solution:
    "Implemented object pooling, optimized rendering, and efficient collision systems.",
    metric: "Stable 60 FPS",
    },
    {
    title: "Procedural Generation + Narrative Balance",
    problem:
    "Ensuring generated environments still feel meaningful and aligned with story.",
    solution:
    "Designed rule-based procedural system with symbolic structure and validation logic.",
    metric: "Replayable + coherent worlds",
    },
    {
    title: "Authentic Mental Health Representation",
    problem:
    "Avoiding superficial or harmful portrayal of psychological themes.",
    solution:
    "Focused on metaphor-driven design and empathetic gameplay mechanics.",
    metric: "Strong narrative reception",
    },
    ],

    // ✅ RESULTS
    results: [
    { value: 60, suffix: " FPS", label: "Performance" },
    { value: 1, suffix: "", label: "Final Year Project" },
    { value: 100, suffix: "%", label: "System Integration" },
    ],

    // ✅ PRACTICES
    practices: [
    "Game systems architecture design",
    "State machine implementation",
    "Procedural generation techniques",
    "Performance optimization (object pooling)",
    "AI behavior design",
    "Real-time system modulation",
    "Narrative-driven gameplay design",
    "Memory and rendering optimization",
    ],
    },
    {
      slug: "portfolio-projects",
      priority: 0,
      title: "Portfolio & Client Projects",
      role: "Collection",
      year: "2023 - 2025",
      description: "Collection of 10 diverse projects spanning web, mobile, AI/ML, games, and systems.",
      techStack: ["Multi-domain"],
      status: "Multiple mini projects",
      highlight: true,
      category: ["AI", "Backend", "Web", "Game", "Mobile"],
      metrics: [
        { value: "10", suffix: " projects" }
      ]
    }
];

import * as Icons from "lucide-react";

export const iconMap: Record<string, any> = {
  Rocket: Icons.Rocket,
  Brain: Icons.Brain,
  Database: Icons.Database,
  Layout: Icons.Layout,
  Code2: Icons.Code2,
  Zap: Icons.Zap,
  Users: Icons.Users,
  Shield: Icons.Shield,
  CheckCircle2: Icons.CheckCircle2,
  Activity: Icons.Activity,
  LineChart: Icons.LineChart,
  BarChart3: Icons.BarChart3,
  Map: Icons.Map,
  Eye: Icons.Eye,
  Layers: Icons.Layers,
  Heart: Icons.Heart,
  Trophy: Icons.Trophy,
  Calendar: Icons.Calendar,
  UserCheck: Icons.UserCheck,
  MessageSquare: Icons.MessageSquare,
  Video: Icons.Video,
  Target: Icons.Target,
  Smartphone: Icons.Smartphone,
  Navigation: Icons.Navigation,
  Globe: Icons.Globe,
  FileText: Icons.FileText,
  Wand2: Icons.Wand2,
  Cpu: Icons.Cpu,
  PanelTop: Icons.PanelTop,
  WandSparkles: Icons.Sparkles,
  ClipboardList: Icons.ClipboardList,
  Search: Icons.Search,
  Receipt: Icons.Receipt,
  Settings: Icons.Settings,
  MapPin: Icons.MapPin,
  Building2: Icons.Building2,
  Code: Icons.Code,
  Network: Icons.Network,
  Type: Icons.Type,
  Image:Icons.Image,
  RefreshCw: Icons.RefreshCw,
  Star: Icons.Star,
  ShieldCheck: Icons.ShieldCheck,
  Gamepad2: Icons.Gamepad2,
};