import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Zap,
  Layers,
  Brain,
  Terminal,
  Gamepad2,
  Cloud,
  Database,
  Code2,
  ChevronDown,
  ExternalLink,
  Clock,
  Shield,
  Handshake,
} from "lucide-react";
import { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "60%", label: "Query Latency Reduced" },
    { value: "80%", label: "AI Workflows Automated" },
    { value: "50+", label: "Users Served" },
  ];

  const expertise = [
    {
      icon: Terminal,
      category: "Languages & Frameworks",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      skills: ["Python", "Java", "Kotlin", "C#", "C/C++", "JavaScript", "TypeScript", "GDScript"],
    },
    {
      icon: Brain,
      category: "Backend & AI",
      color: "text-cta",
      bg: "bg-cta/10",
      border: "border-cta/20",
      skills: ["FastAPI", "Spring Boot", "Django/Flask", "LangChain", "RAG Systems", "Vector DBs", "NLP Pipelines", "STT/TTS", "Prompt Routing"],
    },
    {
      icon: Cloud,
      category: "Cloud & DevOps",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      skills: ["GCP", "AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
    },
    {
      icon: Layers,
      category: "Data Engineering",
      color: "text-cta",
      bg: "bg-cta/10",
      border: "border-cta/20",
      skills: ["ETL Pipelines", "Google BigQuery", "Query Optimization", "Pandas/Polars", "Real-Time Processing", "Data Modeling"],
    },
    {
      icon: Database,
      category: "Databases",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite", "BigQuery"],
    },
    {
      icon: Gamepad2,
      category: "Game Development",
      color: "text-cta",
      bg: "bg-cta/10",
      border: "border-cta/20",
      skills: ["Godot Engine", "C#", "AI Systems", "Procedural Generation", "Object Pooling", "Physics Engine"],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "I Honor My Word",
      description: "I only accept clients I can genuinely help, and I promise to deliver on what I commit to.",
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Ship production-ready features fast without cutting corners on quality or architecture.",
    },
    {
      icon: Handshake,
      title: "Respectful Partnership",
      description: "I treat every client with respect and respond in a timely, transparent manner.",
    },
    {
      icon: Code2,
      title: "Built to Last",
      description: "I architect systems that don't just work today — they scale reliably as they grow.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      description: "Understanding your requirements, constraints, and success metrics through stakeholder alignment.",
    },
    {
      step: "02",
      title: "Build",
      description: "Architecting scalable systems with modern stacks, clean APIs, and engineering best practices.",
    },
    {
      step: "03",
      title: "Scale",
      description: "Optimizing performance, implementing monitoring, and ensuring long-term production stability.",
    },
  ];

  const faqs = [
    {
      q: "What's one word that best describes you?",
      a: "Build-oriented.",
    },
    {
      q: "What makes you different from other developers?",
      a: "I bring rare Backend + AI + Game Dev skills, with a track record of shipping complex systems ahead of schedule. I don't just write code — I architect systems that scale.",
    },
    {
      q: "What is your approach to working with clients?",
      a: "Discover → Build → Scale. I emphasize rapid execution without compromising quality. Clear communication and shared technical vision throughout.",
    },
    {
      q: "Are you available for new opportunities?",
      a: "Yes — currently open to full-time roles, contract projects, and technical consulting. Remote-first, internationally available.",
    },
    {
      q: "Where can I see examples of your work?",
      a: "Visit arham-nexus.vercel.app/work for a full breakdown of projects, case studies, and shipped products.",
    },
    {
      q: "What motivates you?",
      a: "Building future-ready systems. My mother always said: 'Time should work for you, not against you' — that drives everything I do.",
    },
  ];

  const specialties = [
    "AI Applications",
    "SaaS Platforms",
    "AI Integrations",
    "AI Agents",
    "NLP",
    "Data Science & Analytics",
    "MLOps",
    "ETL Pipelines",
    "FinTech Systems",
    "Game Development",
    "Mobile Apps",
    "REST APIs",
    "LLM Applications",
    "RAG Systems",
    "EdTech Solutions",
  ];

  const tags = [
    "Python", "FastAPI", "LangChain", "RAG", "ETL", "BigQuery",
    "React", "Next.js", "TypeScript", "Node.js", "Spring Boot",
    "Docker", "Kubernetes", "GCP", "AWS", "PostgreSQL", "MongoDB",
    "NLP", "ComputerVision", "MLOps", "CI/CD", "WebSockets",
    "Godot", "GameAI", "ProceduralGen",
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 md:px-6 relative overflow-hidden">
      <ParticleBackground />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute top-[60%] -right-40 w-96 h-96 rounded-full bg-cta/5 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* ── HERO HEADER ── */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
              System Builder
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Backend & AI Engineer who architects scalable systems, automates workflows, and ships production-grade products that keep working as they grow.
          </p>

          <blockquote className="mt-6 inline-block border-l-2 border-accent/40 pl-5 text-left">
            <p className="text-muted-foreground italic text-base">
              "Time should work for you, not against you."
            </p>
            <footer className="mt-1 text-sm text-accent">— Beloved Mother</footer>
          </blockquote>
        </div>

        {/* ── STATS STRIP ── */}
        <section className="mb-24 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-card border border-accent/20 rounded-xl p-6 text-center hover:border-accent/40 transition-all hover:scale-105"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-cta">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MY STORY ── */}
        <section className="mb-24 animate-fade-in-up">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">My Journey</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm <span className="text-foreground font-semibold">Arham Malik</span> — a Backend & AI Engineer with 3+ years of building scalable APIs, AI-powered platforms, and data pipelines used in real production environments.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey started with a deep curiosity for how systems work under the hood. Today, I work across Python, Java, C#, React, and engines like Godot — delivering products that ship, scale, and stay reliable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <span className="text-accent font-semibold">RedCoast Corporation</span>, I grew from trainee to core engineer — automating AI workflows, cutting query latency by 60%, and optimizing BigQuery ETL pipelines that saved 30% in data costs.
                </p>
              </div>

              <div className="space-y-5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <span className="text-accent font-semibold">Zindigi</span>, I contributed to a core banking system using Java and Spring Boot — working across the full SDLC of a FinTech application with real transaction processing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently at <span className="text-accent font-semibold">Tech Solutions.ae</span>, I build optimized ETL pipelines with Python and AWS, containerize services with Docker, and resolve production issues for large-scale data workloads.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond enterprise systems, I built <span className="text-cta font-semibold">unHinged</span> — a psychological 2D survival game in Godot with procedural generation, a real-time "Fear Meter" system, and a stable 60 FPS via object pooling.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-8 mt-8 border-t border-accent/10">
              <Badge className="bg-cta/20 text-cta border-0 text-sm px-4 py-1.5">Backend Engineer</Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-sm px-4 py-1.5">AI Engineer</Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-sm px-4 py-1.5">Game Developer</Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-sm px-4 py-1.5">Mobile Developer</Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-sm px-4 py-1.5">Data Engineer</Badge>
            </div>
          </div>
        </section>

        {/* ── TECHNICAL EXPERTISE ── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-accent/20" />
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">Technical Expertise</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className={`bg-card border ${area.border} rounded-xl p-6 space-y-4 hover:scale-[1.02] transition-all animate-fade-in-up group`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className={`w-10 h-10 ${area.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h3 className={`text-base font-heading font-semibold ${area.color}`}>
                    {area.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {area.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-accent/20 text-muted-foreground text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SPECIALTIES TAG CLOUD ── */}
        <section className="mb-24 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-accent/20" />
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">Specialties</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="bg-card border border-accent/20 rounded-2xl p-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {specialties.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="border-t border-accent/10 pt-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-heading">Tech Tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-card border border-accent/10 text-muted-foreground text-xs hover:border-accent/30 hover:text-foreground transition-all cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-accent/20" />
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">My Guarantees</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-accent/20 rounded-xl p-6 space-y-4 hover:border-accent/40 hover:scale-[1.02] transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-accent/20" />
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">My Process</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-card border border-accent/20 rounded-xl p-8 space-y-4 animate-fade-in-up group hover:border-accent/40 transition-all"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Connector line on desktop */}
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                )}
                <div className="text-6xl font-heading font-bold text-accent/15 group-hover:text-accent/25 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ / DROPDOWN ── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-accent/20" />
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">Frequently Asked</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-accent/20 rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/5 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 border-t border-accent/10 pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHARACTER STRIP ── */}
        <section className="mb-24 animate-fade-in-up">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">Character</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {["Determined", "Responsible", "Hard-Working"].map((trait, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-cta">
                    {trait}
                  </div>
                  <div className="h-px w-12 mx-auto bg-accent/30" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center space-y-8 pt-12 border-t border-accent/10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                That Lasts
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available for full-time roles, contract work, remote positions, and international opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 shadow-gold"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a
              href="/ArhamMalikResume.pdf"
              download="Arham_Malik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </a>
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-muted-foreground hover:bg-accent/10 hover:text-accent font-heading font-semibold text-lg px-8 py-6"
              >
                View My Work
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;