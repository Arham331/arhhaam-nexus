import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  CheckCircle2,
  Sparkles,
  Rocket,
  Code2,
  Palette,
  Globe,
  Brain,
  Gamepad2,
  GraduationCap,
  Languages,
  Zap,
  Users,
  Video,
  FileText,
  Smartphone,
  Monitor,
  Database,
  Network,
  Clock,
  TrendingUp,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const PortfolioProjects = () => {
  const projects = [
    {
      id: "portfolio",
      title: "Portfolio Website",
      year: "2025",
      icon: Globe,
      role: "Full-Stack Developer",
      description: "Modern, responsive portfolio website showcasing professional work and technical expertise. Built with cutting-edge web technologies featuring particle animations, smooth transitions, and optimized performance. Implements glassmorphism design patterns, dynamic routing, and comprehensive project showcases.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
      highlights: [
        "Particle animation system with custom physics",
        "Responsive design across all devices",
        "Dynamic project routing and navigation",
        "Glassmorphism UI with gradient effects",
        "Optimized bundle size and lazy loading",
      ],
      metrics: {
        performance: "95+ Lighthouse score",
      },
    },
    {
      id: "tableai",
      title: "TableAI",
      year: "2024",
      icon: Clock,
      role: "AI Engineer",
      description: "Intelligent timetable generation system designed for educational institutions to create clash-free schedules automatically. Developed sophisticated constraint satisfaction algorithms to handle complex scheduling requirements including teacher availability, room allocation, subject distribution, and student group management. Implemented optimization techniques to minimize gaps and balance workload distribution.",
      techStack: ["Python", "Genetic Algorithms", "Constraint Programming", "Pandas", "NumPy"],
      highlights: [
        "100% clash-free schedule generation",
        "Genetic algorithm optimization for balanced timetables",
        "Multi-constraint satisfaction (rooms, teachers, subjects)",
        "Automated conflict detection and resolution",
        "Export to multiple formats (PDF, Excel, CSV)",
        "Successfully deployed in school with 1000+ students",
      ],
      metrics: {
        accuracy: "100% clash-free",
      },
    },
    {
      id: "ping20",
      title: "Ping 2.0",
      year: "2024",
      icon: Gamepad2,
      role: "Game Developer",
      description: "Enhanced ping pong game built in C++ featuring realistic physics, smooth animations, and multiplayer networking capabilities. Implemented collision detection using SFML graphics library with pixel-perfect accuracy. Developed UDP-based networking protocol for low-latency real-time gameplay between players. Added particle effects, sound design, and scoring system with leaderboards.",
      techStack: ["C++", "SFML", "UDP Networking", "Game Physics", "Multithreading"],
      highlights: [
        "Pixel-perfect collision detection system",
        "Real-time multiplayer with UDP networking",
        "Low-latency gameplay (< 50ms response time)",
        "Particle effects and visual polish",
        "AI opponent with adjustable difficulty",
        "Local and online multiplayer modes",
      ],
      metrics: {
        fps: "60 FPS consistent",
      },
    },
    {
      id: "academix",
      title: "Academix",
      year: "2024",
      icon: GraduationCap,
      role: "Full-Stack Developer",
      description: "Comprehensive Learning Management System (LMS) desktop application for educational institutions. Developed feature-rich platform with course management, assignment submission, grading systems, and real-time chat functionality. Implemented role-based access control for students, teachers, and administrators. Built robust database architecture for handling academic records, attendance tracking, and performance analytics.",
      techStack: ["Java", "JavaFX", "MySQL", "Socket Programming", "JUnit"],
      highlights: [
        "Complete LMS with course and assignment management",
        "Real-time chat module using socket programming",
        "Role-based authentication (Admin, Teacher, Student)",
        "Attendance tracking and automated reporting",
        "Grade calculation and performance analytics",
        "File upload/download for assignments and materials",
      ],
      metrics: {
        users: "500+ concurrent users",
      },
    },
    {
      id: "mentorme",
      title: "MentorMe",
      year: "2024",
      icon: Users,
      role: "Mobile Developer",
      description: "Advanced mobile mentorship platform connecting mentees with expert mentors across various fields. Built native Android application in Kotlin featuring comprehensive communication tools including video calls, voice calls, text messaging, and file sharing. Implemented content posting system for mentors to share tutorials and educational materials. Developed subscription-based model with in-app payments and scheduling system for sessions.",
      techStack: ["Kotlin", "Firebase", "WebRTC", "Agora SDK", "Material Design", "MVVM"],
      highlights: [
        "WebRTC integration for HD video/voice calls",
        "Real-time messaging with typing indicators",
        "File transfer with progress tracking",
        "Tutorial posting and content management system",
        "Session scheduling with calendar integration",
        "In-app payment processing",
        "Push notifications for session reminders",
      ],
      metrics: {
        rating: "4.6/5 stars",
      },
    },
    {
      id: "translatorx",
      title: "TranslatorX",
      year: "2024",
      icon: Languages,
      role: "NLP Engineer",
      description: "Neural machine translation system specializing in English to Urdu document translation. Implemented transformer-based architecture with attention mechanisms for contextual understanding. Developed custom preprocessing pipeline handling PDF, DOCX, and TXT formats. Fine-tuned pre-trained models on domain-specific corpora to improve translation quality for technical and formal documents. Built evaluation framework using BLEU scores and human validation.",
      techStack: ["Python", "TensorFlow", "Transformers", "NLTK", "FastAPI", "Docker"],
      highlights: [
        "Transformer-based neural translation model",
        "Multi-format document support (PDF, DOCX, TXT)",
        "Context-aware translation with attention mechanisms",
        "Custom preprocessing for English-Urdu pairs",
        "RESTful API for integration with other systems",
        "Batch processing for large document sets",
      ],
      metrics: {
        accuracy: "82% BLEU score",
      },
    },
    {
      id: "parallel-processor",
      title: "Parallel Data Processor",
      year: "2023",
      icon: Zap,
      role: "Systems Engineer",
      description: "High-performance parallel data extraction system designed to process massive file datasets efficiently. Implemented MPI (Message Passing Interface) for distributed computing across multiple nodes and OpenMP for shared-memory parallelization. Optimized I/O operations using memory-mapped files and buffer caching strategies. Successfully deployed on Ubuntu-based HPC cluster achieving significant performance improvements in data processing pipelines.",
      techStack: ["C", "MPI", "OpenMP", "Linux/Ubuntu", "HPC Clusters", "Memory Management"],
      highlights: [
        "64% improvement in file reading speed",
        "MPI cluster deployment for distributed processing",
        "OpenMP multi-threading for CPU optimization",
        "Memory-mapped file I/O for large datasets",
        "Load balancing across compute nodes",
        "Successfully processed 10TB+ data corpus",
      ],
      metrics: {
        speedup: "64% faster processing",
      },
    },
    {
      id: "lilax",
      title: "Lilax Beauty Clinic",
      year: "2023",
      icon: Palette,
      role: "Frontend Developer",
      description: "Complete website refactoring and modernization project for luxury beauty clinic. Migrated legacy PHP codebase to modern React architecture with component-based design. Redesigned entire user interface with elegant animations, optimized image loading, and video integration. Implemented responsive design ensuring seamless experience across devices. Improved website performance with code splitting, lazy loading, and CDN integration achieving 3x faster load times.",
      techStack: ["React", "TypeScript", "Framer Motion", "Next.js", "Tailwind CSS", "Vercel"],
      highlights: [
        "Complete codebase migration from PHP to React",
        "3x improvement in page load speed",
        "Modern component-based architecture",
        "Smooth animations with Framer Motion",
        "Optimized media delivery with lazy loading",
        "SEO optimization with Next.js",
        "Responsive design for all screen sizes",
      ],
      metrics: {
        performance: "90+ Lighthouse score",
      },
    },
    {
      id: "inventory-pro",
      title: "InventoryPro",
      year: "2024",
      icon: Database,
      role: "Backend Developer",
      description: "Enterprise-grade inventory management system for retail businesses managing complex supply chains. Developed RESTful API with comprehensive CRUD operations for products, orders, suppliers, and warehouses. Implemented real-time stock tracking with automated reorder alerts and low-stock notifications. Built analytics dashboard providing insights on sales trends, inventory turnover, and profitability metrics. Integrated barcode scanning and batch processing capabilities.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "Docker", "Nginx"],
      highlights: [
        "Real-time inventory tracking across warehouses",
        "Automated stock alerts and reorder points",
        "Barcode scanning integration",
        "Batch import/export with CSV and Excel",
        "Analytics dashboard with sales insights",
        "Multi-warehouse management system",
        "Role-based access control with JWT",
      ],
      metrics: {
        scale: "50K+ SKUs managed",
      },
    },
    {
      id: "healthtrack",
      title: "HealthTrack",
      year: "2023",
      icon: TrendingUp,
      role: "Mobile Developer",
      description: "Comprehensive health and fitness tracking mobile application helping users monitor wellness goals. Built cross-platform app using React Native with native modules for health data integration. Implemented calorie tracking with extensive food database, workout logging with exercise libraries, and progress visualization with interactive charts. Integrated device sensors for step counting and sleep tracking. Added social features enabling users to share achievements and join challenges.",
      techStack: ["React Native", "Redux", "Firebase", "Chart.js", "HealthKit", "Google Fit"],
      highlights: [
        "Integration with HealthKit and Google Fit",
        "Comprehensive food database (100K+ items)",
        "Custom workout plans and exercise tracking",
        "Progress visualization with interactive charts",
        "Step counter using device sensors",
        "Social features and community challenges",
        "Offline mode with data synchronization",
      ],
      metrics: {
        users: "5K+ downloads",
      },
    },
    {
      id: "codecollab",
      title: "CodeCollab",
      year: "2023",
      icon: Code2,
      role: "Full-Stack Developer",
      description: "Real-time collaborative code editor enabling developers to write, share, and debug code together. Implemented WebSocket-based synchronization using Operational Transformation algorithms for conflict-free concurrent editing. Built syntax highlighting for 20+ programming languages, integrated code execution environment with sandboxed containers, and developed video chat functionality. Added project management features with version control integration and code review tools.",
      techStack: ["React", "Node.js", "Socket.io", "Monaco Editor", "Docker", "WebRTC", "Git"],
      highlights: [
        "Real-time collaborative editing with OT algorithm",
        "Syntax highlighting for 20+ languages",
        "Sandboxed code execution environment",
        "Integrated video/audio chat for pair programming",
        "Version history and code review features",
        "Project templates and boilerplates",
        "GitHub integration for repository sync",
      ],
      metrics: {
        latency: "< 100ms sync time",
      },
    },
  ];

  const allTechStack = [
    ...new Set(projects.flatMap((p) => p.techStack)),
  ].sort();

  const projectStats = {
    totalProjects: projects.length,
    technologies: allTechStack.length,
    yearSpan: "2023-2025",
    deliveryRate: "95% on-time delivery",
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link
            to="/work"
            className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">
                Full-Stack Developer
              </Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">
                2023-2024
              </Badge>
              <Badge
                variant="outline"
                className="border-green-500/30 text-green-500 text-lg px-4 py-1"
              >
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Various
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient">
                Portfolio & Client Projects
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              Collection of {projects.length}+ diverse projects spanning web development, mobile apps, AI/ML,
              game development, and system optimization
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="relative py-12 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift">
              <Rocket className="w-8 h-8 text-accent mx-auto" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects</p>
                <p className="text-xl font-heading font-bold text-foreground">
                  {projectStats.totalProjects}+
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift">
              <Code2 className="w-8 h-8 text-accent mx-auto" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Technologies</p>
                <p className="text-xl font-heading font-bold text-foreground">
                  {projectStats.technologies}+
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift">
              <Calendar className="w-8 h-8 text-accent mx-auto" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Timeline</p>
                <p className="text-xl font-heading font-bold text-foreground">
                  {projectStats.yearSpan}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift">
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Delivery</p>
                <p className="text-xl font-heading font-bold text-foreground">95%+ On-Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Portfolio Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                This collection represents a diverse portfolio of{" "}
                <span className="text-accent font-semibold">{projects.length}+ professional projects</span>{" "}
                delivered across multiple domains including web development, mobile applications,
                artificial intelligence, game development, and high-performance computing. Each project
                demonstrates expertise in modern technologies and best practices.
              </p>

              <p className="text-lg leading-relaxed">
                From <span className="text-accent font-semibold">AI-powered systems</span> like TableAI and
                TranslatorX to <span className="text-cta font-semibold">enterprise applications</span> like
                Academix and InventoryPro, these projects showcase versatility in solving complex technical
                challenges. The work spans native mobile development, real-time collaboration tools, game
                physics engines, and distributed computing systems.
              </p>

              <p className="text-lg leading-relaxed">
                With a <span className="text-accent font-semibold">95%+ on-time delivery rate</span> and
                expertise across {projectStats.technologies}+ technologies, these projects demonstrate
                consistent quality and professional execution. Each solution is tailored to specific client
                needs while maintaining scalability, performance, and user experience standards.
              </p>
            </div>

            {/* Tech Stack Summary */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-accent" />
                Technologies Used Across Projects
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTechStack.slice(0, 25).map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 hover:border-accent/50 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
                {allTechStack.length > 25 && (
                  <Badge
                    variant="outline"
                    className="border-accent/30 text-accent/90 text-sm px-3 py-1"
                  >
                    +{allTechStack.length - 25} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Projects List */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">All Projects</h2>
            <p className="text-xl text-muted-foreground">
              Detailed breakdown of each project with technologies and achievements
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center flex-wrap gap-3">
                          <h3 className="text-2xl md:text-3xl font-heading font-bold group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <Badge className="bg-cta/20 text-cta border-0">{project.role}</Badge>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-accent/10">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cta rounded-full"></div>
                        <span className="text-sm text-muted-foreground capitalize">{key}:</span>
                        <span className="text-sm font-semibold text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Looking for a Versatile Developer?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With expertise across web, mobile, AI, and systems programming, I can bring diverse
              technical solutions to your projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Discuss Your Project
                  <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6 hover:scale-105 transition-all"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to All Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioProjects;
