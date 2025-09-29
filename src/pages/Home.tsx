import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code2,
  Database,
  Cpu,
  Gamepad2,
  Brain,
  Sparkles,
  ExternalLink,
  Github,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  const featuredProjects = [
    {
      title: "Vector AI",
      description: "Full-stack AI platform with LangChain integration, real-time processing, and advanced document Q&A capabilities.",
      tech: ["React", "Node.js", "LangChain", "PostgreSQL"],
      role: "Lead Developer",
      image: "ai-platform",
      link: "/work/vector-ai",
    },
    {
      title: "unHinged",
      description: "Psychological game built with Godot Engine featuring advanced AI, dynamic narratives, and complex game mechanics.",
      tech: ["Godot", "GDScript", "AI Systems"],
      role: "Game Developer",
      image: "game",
      link: "/work/unhinged",
    },
    {
      title: "AI Meme Checker",
      description: "Multimodal AI tool using PyTorch and GPT-4 for content analysis, combining vision and language models.",
      tech: ["Python", "PyTorch", "GPT-4", "Computer Vision"],
      role: "AI Engineer",
      image: "ai-meme",
      link: "/work/meme-checker",
    },
  ];

  const skills = [
    { name: "React & Next.js", icon: Code2, level: 95 },
    { name: "Node.js & Express", icon: Database, level: 90 },
    { name: "Python & AI/ML", icon: Brain, level: 88 },
    { name: "Game Development", icon: Gamepad2, level: 85 },
    { name: "System Architecture", icon: Cpu, level: 92 },
  ];

  const trustBand = [
    { label: "Lead Dev", detail: "Vector AI Platform" },
    { label: "Built", detail: "unHinged Game" },
    { label: "Developed", detail: "AI Meme Checker" },
    { label: "Mobile Dev", detail: "Raah-e-Raast App" },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Available for work</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                  Arhhaam Awan Qutab
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-cta rounded-full"></div>
              </div>

              <h2 className="text-2xl md:text-3xl text-muted-foreground font-heading">
                Building Future-Ready <span className="text-gradient">AI & Game Systems</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Full-stack developer specializing in React, Node.js, and Python. I ship AI platforms,
                games, and resilient backends that scale from prototype to production.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 shadow-gold hover:shadow-xl transition-all hover:scale-105"
                  >
                    Work with me
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6"
                  >
                    See case studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative animate-fade-in">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/40 rounded-3xl blur-3xl animate-glow-pulse"></div>
                <div className="relative bg-card/50 backdrop-blur-xl border border-accent/20 rounded-3xl p-12 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center animate-float shadow-2xl">
                    <span className="text-8xl font-heading font-bold text-primary">A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="relative py-12 border-y border-accent/10 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBand.map((item, idx) => (
              <div key={idx} className="text-center space-y-1 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-lg font-heading font-semibold text-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-grade engineering across AI platforms, games, and scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="group relative bg-card border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all hover:scale-[1.02] card-elevated animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-cta/20 text-cta border-0">{project.role}</Badge>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent/30 text-accent/90">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold"
              >
                View all projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-6 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technical skills backed by production experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-accent/20 rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-heading font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-accent/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-accent to-accent/60 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-br from-primary via-card to-primary border border-accent/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
            
            <div className="relative space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Available for full-time roles, contract work, and consulting projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 shadow-gold"
                  >
                    Get in touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://github.com/arhhaam" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6"
                  >
                    <Github className="mr-2 w-5 h-5" />
                    View GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
