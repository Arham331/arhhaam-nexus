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
  Zap,
  Rocket,
  Star,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { useEffect, useRef } from "react";

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const featuredProjects = [
    {
      title: "AVENIX",
      description: "Full-stack AI platform with LangChain integration, real-time processing, and advanced document Q&A capabilities.",
      tech: ["React", "Node.js", "LangChain", "PostgreSQL"],
      role: "Lead Developer",
      image: "ai-platform",
      link: "/work/avenix",
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
      title: "Multimodel Meme Classification",
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
    { label: "Lead Dev", detail: "AVENIX" },
    { label: "Built", detail: "unHinged Game" },
    { label: "Developed", detail: "Multimodal Meme Classification" },
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full hover:bg-accent/20 transition-all hover:scale-105 cursor-default group">
                <Sparkles className="w-4 h-4 text-accent group-hover:animate-spin" />
                <span className="text-sm text-accent font-medium">Available for work</span>
                <Zap className="w-3 h-3 text-cta animate-pulse" />
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight hover:text-gradient transition-all duration-500">
                  Arham Malik
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-accent via-cta to-accent rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-2xl md:text-3xl text-muted-foreground font-heading">
                Building Future-Ready <span className="text-gradient-gold animate-pulse">AI & Game Systems</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl group">
                Full-stack developer specializing in <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Node.js</span>, and <span className="text-accent font-semibold">Python</span>. I ship AI platforms,
                games, and resilient backends that scale from prototype to production.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:shadow-xl transition-all hover:scale-110 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Work with me
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cta/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6 hover:scale-105 transition-all hover:glow-accent"
                  >
                    See work history
                    <Star className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative animate-fade-in">
              <div className="relative w-full aspect-square max-w-md mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-cta/20 to-primary/40 rounded-3xl blur-3xl animate-glow-pulse group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative glass-card rounded-3xl p-8 flex items-center justify-center hover:border-accent/50 transition-all duration-100">
                  <div className="w-64 h-64 bg-gradient-to-br from-accent via-cta/30 to-accent/60 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-gold transition-all duration-300 group-hover:scale-110 relative overflow-hidden" 
                       style={{ 
                         animation: 'gentleFloat 4s ease-in-out infinite',
                         animationFillMode: 'both'
                       }}>
                    <img 
                      src="/Professional.png" 
                      alt="Arham Malik - Professional Photo"
                      className="w-60 h-60 object-cover rounded-xl border border-primary/15 group-hover:border-accent/25 transition-all duration-1300 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-accent/30 hover:scale-110 transition-transform" 
                     style={{ animation: 'gentleFloat 5s ease-in-out infinite' }}>
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cta/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-cta/30 hover:scale-110 transition-transform" 
                     style={{ animation: 'gentleFloat 5.5s ease-in-out infinite', animationDelay: '1s' }}>
                  <Zap className="w-8 h-8 text-cta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="relative py-12 border-y border-accent/10 bg-gradient-to-r from-card/30 via-accent/5 to-card/30 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBand.map((item, idx) => (
              <div 
                key={idx} 
                className="text-center space-y-1 animate-fade-in hover-lift glass-card rounded-xl p-4 group cursor-default" 
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider group-hover:text-accent transition-colors">
                  {item.label}
                </p>
                <p className="text-lg font-heading font-semibold text-foreground group-hover:text-gradient transition-all">
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
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold hover:text-gradient transition-all duration-500">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-grade engineering across <span className="text-accent">AI platforms</span>, <span className="text-cta">games</span>, and <span className="text-accent">scalable systems</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="group relative glass-card rounded-2xl p-6 hover:border-accent/60 transition-all hover-lift card-elevated animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-cta/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-cta/30 text-cta border-0 hover:bg-cta/40 transition-colors">{project.role}</Badge>
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <ArrowRight className="w-4 h-4 text-accent opacity-50 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent/30 text-accent/90 hover:bg-accent/10 hover:border-accent/50 transition-all">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                className="group border-accent text-accent hover:bg-accent/10 font-heading font-semibold hover:scale-105 transition-all hover:glow-accent"
              >
                View all projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-card/20 via-accent/5 to-card/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold hover:text-gradient transition-all duration-500">Core Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technical skills backed by <span className="text-accent">production experience</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group glass-card rounded-xl p-6 space-y-4 hover:border-accent/60 transition-all hover-lift animate-on-scroll relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-cta/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Icon className="w-6 h-6 text-accent group-hover:text-cta transition-colors" />
                        </div>
                        <span className="font-heading font-semibold group-hover:text-accent transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono text-cta font-bold group-hover:scale-110 transition-transform">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent/10 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent via-cta/50 to-accent h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
          <div className="relative bg-gradient-to-br from-primary via-card/80 to-primary border border-accent/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden group hover:border-accent/50 transition-all animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-cta/5 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-cta/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  Let's Build Something <span className="text-gradient-gold animate-pulse">Extraordinary</span>
                </h2>
                <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>
              <p className="text-xl text-muted-foreground">
                Available for <span className="text-accent">full-time roles</span>, <span className="text-cta">contract work</span>, and <span className="text-accent">consulting projects</span>
              </p>
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <Link to="/contact" className="group/contactBtn">
                  <Button
                    size="lg"
                    className="bg-cta group-hover/contactBtn:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold group-hover/contactBtn:shadow-2xl group-hover/contactBtn:scale-110 transition-all relative overflow-hidden"
                  >
                    <span className="z-10 flex items-center">
                      Get in touch
                      <Rocket className="ml-2 w-5 h-5 group-hover/contactBtn:-translate-y-1 group-hover/contactBtn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-cta opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <a href="https://github.com/Arham331" target="_blank" rel="noopener noreferrer" className="group/gitBtn z-10">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent group-hover/gitBtn:bg-accent/10 font-heading font-semibold text-lg px-8 py-6 group-hover/gitBtn:scale-105 transition-all group-hover/gitBtn:glow-accent"
                  >
                    <Github className="mr-2 w-5 h-5 group-hover/gitBtn:rotate-12 transition-transform" />
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
