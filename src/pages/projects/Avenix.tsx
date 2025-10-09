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
  Zap,
  Database,
  Brain,
  LineChart,
  MessageSquare,
  Layout,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Avenix = () => {
  const techStack = [
    "React",
    "Express.js",
    "Node.js",
    "Python",
    "LangChain",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "AI/ML",
    "TypeScript",
  ];

  const keyFeatures = [
    {
      icon: Users,
      title: "Dual User Role System",
      description: "Developed a sophisticated platform with distinct user roles, enabling personalized experiences and access control for different stakeholder types.",
    },
    {
      icon: LineChart,
      title: "Interactive Data Dashboards",
      description: "Built real-time dashboards featuring dynamic graphs and comprehensive report visualization to empower data-driven decision making.",
    },
    {
      icon: Database,
      title: "Robust Express APIs",
      description: "Engineered scalable RESTful APIs using Express.js for seamless communication between frontend, backend, and AI services.",
    },
    {
      icon: Brain,
      title: "LangChain LLM Integration",
      description: "Integrated Large Language Models via LangChain framework, implementing advanced chat capabilities, memory management, and prompt-based task execution.",
    },
    {
      icon: Layout,
      title: "Intuitive UI/UX Design",
      description: "Designed and implemented a modern, responsive interface with smooth animations and interactive components for enhanced user experience.",
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Communication",
      description: "Developed Python-based AI agents for intelligent automation and natural language processing capabilities.",
    },
  ];

  const projectHighlights = [
    {
      category: "Performance",
      items: [
        "Delivered 3 months ahead of schedule",
        "Real-time data processing with sub-second latency",
        "Optimized database queries for 40% faster load times",
        "Scalable architecture supporting concurrent users",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "Microservices architecture with Docker containerization",
        "RESTful API design following industry best practices",
        "State management with Redux for predictable data flow",
        "WebSocket integration for live updates",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Custom LangChain agents for context-aware responses",
        "Prompt engineering for optimal LLM performance",
        "Vector database integration for semantic search",
        "Memory persistence across conversation sessions",
      ],
    },
    {
      category: "User Experience",
      items: [
        "Responsive design supporting mobile, tablet, and desktop",
        "Accessibility compliance (WCAG 2.1 AA standards)",
        "Interactive data visualizations with Chart.js",
        "Smooth animations and transitions using Framer Motion",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Frontend Architecture",
      icon: Layout,
      description: "Built with React and TypeScript, leveraging component-based architecture for maintainability and reusability. Implemented custom hooks for business logic separation and optimized rendering performance.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend Infrastructure",
      icon: Code2,
      description: "Developed robust Express.js server with modular routing, middleware authentication, and error handling. Integrated Python microservices for AI processing tasks with message queue communication.",
      technologies: ["Express.js", "Node.js", "Python", "Redis", "JWT Authentication"],
    },
    {
      title: "AI Integration Layer",
      icon: Brain,
      description: "Implemented LangChain framework for LLM orchestration, including custom chains for document Q&A, conversational memory, and prompt templates. Integrated multiple AI models for specialized tasks.",
      technologies: ["LangChain", "OpenAI GPT", "Vector Stores", "Embeddings", "Prompt Engineering"],
    },
    {
      title: "Database & Storage",
      icon: Database,
      description: "Designed normalized PostgreSQL schema with optimized indexes. Implemented caching strategies with Redis for frequently accessed data and session management.",
      technologies: ["PostgreSQL", "Redis", "Prisma ORM", "Database Migrations"],
    },
  ];

  const projectMetrics = [
    { label: "Timeline", value: "6 Months", icon: Calendar },
    { label: "Team Size", value: "Solo Developer", icon: Users },
    { label: "Delivery", value: "3 Months Early", icon: Rocket },
    { label: "Status", value: "Production Ready", icon: CheckCircle2 },
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
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Lead Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2025</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Production Ready
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
                AVENIX
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A Comprehensive AI-Powered Platform with Dual User Roles, Real-Time Analytics, and Advanced LLM Integration
            </p>
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
                <span className="text-accent font-semibold">AVENIX</span> is a cutting-edge AI platform inspired by modern data visualization and analytics tools. The project combines sophisticated frontend development with powerful backend infrastructure and intelligent AI agents to deliver a comprehensive solution for data-driven decision making.
              </p>
              
              <p className="text-lg leading-relaxed">
                The platform features a <span className="text-accent font-semibold">dual user role system</span> that provides tailored experiences for different stakeholder types, ensuring appropriate access control and personalized workflows. Built with a focus on real-time capabilities, the system processes and visualizes data instantaneously, enabling users to make informed decisions based on the latest information.
              </p>

              <p className="text-lg leading-relaxed">
                At its core, AVENIX leverages <span className="text-cta font-semibold">LangChain integration</span> to harness the power of Large Language Models, providing advanced chat capabilities, contextual memory, and intelligent automation. The seamless integration between React frontend, Express.js backend, and Python-based AI services creates a robust and scalable architecture capable of handling complex workflows and concurrent user interactions.
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
              Core capabilities that power the AVENIX platform
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

      {/* Technical Implementation */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Deep dive into the architecture and technology choices
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
              Achievements, technical milestones, and implementation details
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

      {/* Development Approach */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Rocket className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Development Approach</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-accent">Methodology</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Agile development with bi-weekly sprint cycles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Test-driven development (TDD) for critical components</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Continuous integration and deployment (CI/CD)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Code reviews and pair programming sessions</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-accent">Best Practices</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Modular component architecture for maintainability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Comprehensive error handling and logging</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Security-first approach with input validation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Performance monitoring and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming technical obstacles with innovative solutions
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Real-Time Data Synchronization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensuring consistent data across multiple user roles while maintaining real-time updates without overwhelming the server.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented WebSocket connections with Redis pub/sub for efficient message broadcasting. Created a smart batching system that aggregates updates and sends them at optimal intervals, reducing server load by 60% while maintaining sub-second latency.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: LLM Response Consistency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining context and delivering consistent, relevant responses across long conversation threads.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Developed custom LangChain memory implementation with vector-based semantic search for context retrieval. Implemented prompt engineering techniques and conversation summarization to stay within token limits while preserving conversation quality.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Complex Data Visualization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rendering dynamic, interactive charts with large datasets without compromising performance.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Utilized React.memo and useMemo hooks for intelligent re-rendering. Implemented data virtualization and progressive loading strategies, enabling smooth interactions even with datasets containing 100K+ data points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Results & Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">3 Months</div>
                <p className="text-muted-foreground">Delivered Ahead of Schedule</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">40%</div>
                <p className="text-muted-foreground">Performance Improvement</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                AVENIX successfully demonstrates the power of combining modern web technologies with advanced AI capabilities, delivering a scalable, user-friendly platform that empowers data-driven decision making through intelligent automation and real-time insights.
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
              Interested in Similar Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help build your next AI-powered platform or innovative web application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Start a Project
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

export default Avenix;
