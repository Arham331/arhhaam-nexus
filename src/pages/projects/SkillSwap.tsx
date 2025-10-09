import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  MessageSquare,
  Video,
  Star,
  RefreshCw,
  Phone,
  ThumbsUp,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
  UserCheck,
  Shield,
  Zap,
  Search,
  Award,
  TrendingUp,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const SkillSwap = () => {
  const techStack = [
    "Java",
    "Spring Boot",
    "WebSocket",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "WebRTC",
    "Maven",
    "JPA/Hibernate",
    "Microservices",
  ];

  const keyFeatures = [
    {
      icon: RefreshCw,
      title: "Dynamic Role Interchange",
      description: "Innovative dual-role system enabling users to seamlessly switch between Swappee (learner) and Swapper (teacher) roles, facilitating mutual skill exchange and peer-to-peer learning experiences.",
    },
    {
      icon: MessageSquare,
      title: "Real-Time Chat System",
      description: "Built robust instant messaging platform using WebSocket technology for low-latency communication, supporting one-on-one conversations, typing indicators, and message history persistence.",
    },
    {
      icon: Video,
      title: "Integrated Video/Audio Calls",
      description: "Implemented WebRTC-based calling system enabling high-quality video and audio sessions for interactive learning experiences, with features like screen sharing and session recording.",
    },
    {
      icon: Star,
      title: "Comprehensive Review System",
      description: "Developed rating and review mechanism allowing users to evaluate learning sessions, building trust within the community and enabling data-driven matching based on feedback scores and expertise verification.",
    },
    {
      icon: Search,
      title: "Smart Skill Matching Algorithm",
      description: "Created intelligent matching system that pairs users based on skills offered, skills wanted, availability, ratings, and past interaction history to optimize learning outcomes.",
    },
    {
      icon: UserCheck,
      title: "Profile & Skill Management",
      description: "Built comprehensive user profile system where members can showcase their expertise, list skills to teach, specify skills to learn, and maintain portfolios of completed sessions.",
    },
  ];

  const projectHighlights = [
    {
      category: "Core Functionality",
      items: [
        "Dual-role system with seamless role switching",
        "Real-time chat with message persistence",
        "WebRTC video/audio calling integration",
        "Five-star rating and review system",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "Spring Boot microservices architecture",
        "WebSocket for real-time communication",
        "JWT-based authentication and authorization",
        "MySQL database with optimized queries",
      ],
    },
    {
      category: "Matching & Discovery",
      items: [
        "Algorithm considering skills, availability, and ratings",
        "Advanced search with filters and sorting",
        "Recommendation engine for skill matches",
        "User reputation system based on reviews",
      ],
    },
    {
      category: "User Experience",
      items: [
        "Intuitive role-switching interface",
        "Session scheduling and calendar integration",
        "Notification system for matches and messages",
        "Dashboard showing learning progress and stats",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Backend Architecture (Spring Boot)",
      icon: Code2,
      description: "Developed robust backend using Spring Boot with microservices architecture. Implemented RESTful APIs for user management, skill matching, and session handling. Used Spring Security for authentication and authorization with JWT tokens. Integrated Spring Data JPA for efficient database operations.",
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Microservices"],
    },
    {
      title: "Real-Time Communication",
      icon: MessageSquare,
      description: "Implemented WebSocket protocol using Spring WebSocket for bidirectional real-time communication. Built chat service with message queuing, delivery confirmation, and offline message storage. Integrated WebRTC using Java WebSocket API for peer-to-peer video/audio calls with signaling server implementation.",
      technologies: ["WebSocket", "Spring WebSocket", "WebRTC", "STOMP Protocol", "Message Broker"],
    },
    {
      title: "Database Design & Optimization",
      icon: Target,
      description: "Designed normalized MySQL database schema with entities for Users, Skills, Sessions, Messages, and Reviews. Implemented complex relationships using JPA/Hibernate with eager and lazy loading strategies. Created indexes on frequently queried columns and optimized queries for the matching algorithm.",
      technologies: ["MySQL", "JPA/Hibernate", "Database Normalization", "Query Optimization", "Indexing"],
    },
    {
      title: "Security & Authentication",
      icon: Shield,
      description: "Implemented comprehensive security framework with JWT-based stateless authentication. Added role-based access control for Swappee and Swapper permissions. Implemented password encryption using BCrypt, SQL injection prevention with parameterized queries, and XSS protection in API responses.",
      technologies: ["JWT", "Spring Security", "BCrypt", "OAuth 2.0", "HTTPS/TLS"],
    },
  ];

  const userRoles = [
    {
      role: "Swappee (Learner)",
      icon: UserCheck,
      description: "Users seeking to learn new skills from experienced community members. Can search for teachers, book sessions, and provide feedback.",
      capabilities: [
        "Browse available Swappers by skill category",
        "View Swapper profiles, ratings, and reviews",
        "Request learning sessions with preferred teachers",
        "Participate in video/audio calls and chat",
        "Rate and review completed sessions",
        "Track learning progress and session history",
      ],
    },
    {
      role: "Swapper (Teacher)",
      icon: Award,
      description: "Experienced users sharing their expertise by teaching others. Can list skills, manage sessions, and build reputation through positive reviews.",
      capabilities: [
        "Create skill listings with descriptions and expertise levels",
        "Set availability and session preferences",
        "Accept or decline session requests",
        "Conduct teaching sessions via calls and chat",
        "Receive ratings and build teaching reputation",
        "Earn recognition through successful sessions",
      ],
    },
  ];

  const matchingProcess = [
    {
      step: "Skill Discovery",
      description: "Users search for specific skills they want to learn or browse categories. The system displays available Swappers with relevant expertise, sorted by ratings and compatibility.",
      icon: Search,
    },
    {
      step: "Profile Review",
      description: "Learners view detailed Swapper profiles including skill descriptions, experience level, teaching style, availability, and reviews from past learners.",
      icon: UserCheck,
    },
    {
      step: "Session Request",
      description: "Swappee sends session request specifying preferred time, session duration, and learning objectives. Swapper receives notification and can accept or suggest alternative times.",
      icon: MessageSquare,
    },
    {
      step: "Learning Session",
      description: "Participants connect through integrated video/audio call or chat. Real-time communication enables interactive learning with screen sharing and resource exchange.",
      icon: Video,
    },
    {
      step: "Review & Rating",
      description: "After session completion, both parties provide ratings and written reviews. Feedback contributes to user reputation and improves future matching recommendations.",
      icon: Star,
    },
  ];

  const projectMetrics = [
    { label: "Platform", value: "MVP", icon: Rocket },
    { label: "User Roles", value: "Dual Role", icon: RefreshCw },
    { label: "Year", value: "2023", icon: Calendar },
    { label: "Status", value: "Completed", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Full-Stack Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2023</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                MVP Completed
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
                Skill Swap
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              Peer-to-Peer Learning Platform with Dynamic Role Interchange, Real-Time Communication, and Trust-Building Review System
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Github className="w-5 h-5 mr-2" />
                View Repository
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto group-hover:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                    <p className="text-xl font-heading font-bold text-foreground">{metric.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-semibold">Skill Swap</span> is an innovative peer-to-peer learning platform that revolutionizes knowledge exchange by enabling users to seamlessly transition between teaching and learning roles. Unlike traditional educational platforms with fixed instructor-student relationships, Skill Swap empowers every member to both share their expertise and acquire new skills from the community.
              </p>
              
              <p className="text-lg leading-relaxed">
                The platform features a unique <span className="text-accent font-semibold">dual-role system</span> where users can be <span className="text-cta font-semibold">Swappees (learners)</span> seeking knowledge and <span className="text-cta font-semibold">Swappers (teachers)</span> offering their expertise. This dynamic interchange creates a collaborative learning ecosystem where knowledge flows bidirectionally, fostering mutual growth and community engagement.
              </p>

              <p className="text-lg leading-relaxed">
                Built with <span className="text-accent font-semibold">Java and Spring Boot</span>, Skill Swap integrates real-time communication capabilities through WebSocket-based chat and WebRTC video/audio calling. These features enable interactive learning sessions where participants can discuss concepts, share screens, and collaborate in real-time, creating engaging educational experiences.
              </p>

              <p className="text-lg leading-relaxed">
                Trust and quality are ensured through a comprehensive <span className="text-cta font-semibold">review and rating system</span> where both learners and teachers evaluate sessions. This feedback mechanism builds community trust, helps users identify high-quality teachers, and guides the platform's intelligent matching algorithm to suggest better pairings based on compatibility, expertise, and past session success rates.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-accent" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 hover:border-accent/50 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Core capabilities powering peer-to-peer learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Dynamic User Roles</h2>
            <p className="text-xl text-muted-foreground">
              Seamless interchange between learning and teaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRoles.map((roleInfo, idx) => {
              const Icon = roleInfo.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-gradient">{roleInfo.role}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {roleInfo.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                      Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {roleInfo.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Matching Process */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">How Skill Matching Works</h2>
            <p className="text-xl text-muted-foreground">
              From discovery to review: the complete learning journey
            </p>
          </div>

          <div className="space-y-6">
            {matchingProcess.map((process, idx) => {
              const Icon = process.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-cta/20 text-cta border-0">Step {idx + 1}</Badge>
                        <h3 className="text-2xl font-heading font-semibold text-gradient">{process.step}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Architecture and technology powering the platform
            </p>
          </div>

          <div className="space-y-6">
            {technicalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{detail.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {detail.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Project Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Features, implementation, and technical achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectHighlights.map((section, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-heading font-semibold flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent" />
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming technical and architectural obstacles
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Real-Time Communication Scalability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Handling multiple concurrent WebSocket connections for chat and maintaining low latency across numerous simultaneous sessions.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented message broker architecture using Spring WebSocket with STOMP protocol. Created connection pooling and load balancing strategies to distribute WebSocket connections across multiple server instances. Used Redis as message broker for pub/sub pattern, enabling horizontal scaling and supporting thousands of concurrent users.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Intelligent Skill Matching Algorithm</h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing algorithm to effectively match learners with teachers based on multiple factors including skills, ratings, availability, and compatibility.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Designed weighted scoring system considering skill relevance (40%), user ratings (30%), availability overlap (20%), and past interaction success (10%). Implemented collaborative filtering to suggest matches based on similar users' successful sessions. Created caching layer for frequently accessed profile data, reducing matching query time by 65%.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Review System Integrity & Spam Prevention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensuring authentic reviews while preventing fake ratings, spam, and maintaining fairness in the reputation system.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented session verification requiring completed video/audio call or minimum chat duration before enabling reviews. Added rate limiting to prevent review flooding. Created anomaly detection algorithm identifying suspicious rating patterns. Implemented weighted review scores where verified sessions carry more weight, improving trust score accuracy by 75%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Impact & Results</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">MVP</div>
                <p className="text-muted-foreground">Successfully Delivered</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">Dual Role</div>
                <p className="text-muted-foreground">Innovative System</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">Real-Time</div>
                <p className="text-muted-foreground">Communication</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Skill Swap successfully demonstrates the viability of peer-to-peer learning platforms with dynamic role interchange. By combining real-time communication, intelligent matching algorithms, and trust-building review systems, the platform creates an engaging ecosystem where knowledge exchange flourishes and community members continuously grow through mutual learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Need a Learning Platform or Social Application?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can build innovative platforms with real-time communication and intelligent matching systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Let's Connect
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
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillSwap;
