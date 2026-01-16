import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Target,
  Layout,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Brain,
  BarChart3,
  MousePointerClick,
  Wand2,
  Database,
  Layers,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const AdSyncPro = () => {
  const techStack = [
    "Python",
    "Django",
    "Next.js",
    "MongoDB",
    "LLM Prompt Engineering",
    "REST API",
    "Real-time Analytics",
    "Tailwind CSS",
  ];

  const keyFeatures = [
    {
      icon: Wand2,
      title: "AI-Powered Ad Creation",
      description: "Applied LLM Prompt Engineering to automate ad copy generation and management workflows, significantly increasing campaign setup speed.",
    },
    {
      icon: BarChart3,
      title: "Real-time Performance Metrics",
      description: "Integrated MongoDB to handle high-velocity data for live campaign tracking and granular performance analytics.",
    },
    {
      icon: Layout,
      title: "Comprehensive Dashboards",
      description: "Designed a clean, intuitive UI in Next.js for monitoring multiple campaigns simultaneously with secure user authentication.",
    },
    {
      icon: Layers,
      title: "Scalable Full-Stack Architecture",
      description: "Engineered a robust Django backend coupled with a modern Next.js frontend to ensure seamless cross-platform performance.",
    },
    {
      icon: MousePointerClick,
      title: "Automated Campaign Tracking",
      description: "Built automated systems to track click-through rates and conversion metrics across diverse advertising channels.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Ad Management",
      description: "Implemented enterprise-grade authentication and data protection for managing sensitive campaign and financial data.",
    },
  ];

  const projectHighlights = [
    {
      category: "Automation & AI",
      items: [
        "LLM-driven automated ad copy generation",
        "Streamlined end-to-end campaign creation",
        "Prompt engineering for workflow optimization",
        "Context-aware content management",
      ],
    },
    {
      category: "Data & Performance",
      items: [
        "High-performance MongoDB data handling",
        "Real-time analytics processing engine",
        "Interactive Next.js data visualizations",
        "Scalable Django microservices architecture",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Next.js Frontend Architecture",
      icon: Layout,
      description: "Developed a modern, server-side rendered frontend to provide sub-second page loads for complex ad-management dashboards and live reporting tools.",
      technologies: ["Next.js", "Tailwind CSS", "Lucide React", "State Management"],
    },
    {
      title: "Django & LLM Integration",
      icon: Brain,
      description: "Architected a Python-based backend that orchestrates Large Language Models to automate creative tasks, alongside a robust RESTful API.",
      technologies: ["Python", "Django", "LLM APIs", "Prompt Engineering"],
    },
    {
      title: "Scalable Data Analytics",
      icon: Database,
      description: "Leveraged MongoDB's document-based structure to store and query large volumes of real-time campaign metrics without performance degradation.",
      technologies: ["MongoDB", "Aggregation Framework", "NoSQL", "Query Optimization"],
    },
  ];

  const projectMetrics = [
    { label: "Backend", value: "Django / Python", icon: Code2 },
    { label: "Frontend", value: "Next.js", icon: Layout },
    { label: "Database", value: "MongoDB", icon: Database },
    { label: "AI Tech", value: "LLM Automation", icon: Wand2 },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:px-6">
        <div className="container mx-auto">
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Full-Stack Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2025</Badge>
              <Badge variant="outline" className="border-blue-500/30 text-blue-500 text-lg px-4 py-1">
                <Wand2 className="w-4 h-4 mr-1" />
                AI-Automated
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient uppercase">
                AdSync Pro
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A modern ad-management and automation platform designed to streamline campaign creation, tracking, and performance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="relative py-12 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group">
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
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-semibold">AdSync Pro</span> was engineered to bridge the gap between creative ad production and data-driven management. Utilizing a <span className="text-accent font-semibold">Django/Python backend and Next.js frontend</span>, I built a cohesive ecosystem that allows marketers to launch and monitor campaigns with unprecedented speed.
              </p>
              
              <p className="text-lg leading-relaxed">
                The platform's standout feature is its integration of <span className="text-cta font-semibold">LLM Prompt Engineering</span>. By automating creative aspects of the workflow, AdSync Pro reduces manual intervention, while its <span className="text-cta font-semibold">MongoDB integration</span> ensures that high-volume performance metrics are processed and displayed in real-time.
              </p>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-accent" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 transition-all">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground">Powering the next generation of ad automation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-card rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover-lift group">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">System Architecture</h2>
            <p className="text-xl text-muted-foreground">Modern stack for high-performance automation</p>
          </div>
          <div className="space-y-6">
            {technicalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{detail.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{detail.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {detail.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-accent/10 text-accent border-accent/20">{tech}</Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights & Impact */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Impact & Efficiency</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectHighlights.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold text-accent">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Need Intelligent Automation?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Let's explore how I can help integrate LLMs and scalable backends into your marketing or management systems.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all">
                  Let's Connect
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdSyncPro;