import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Lightbulb,
  Users,
  Zap,
  Download,
  ExternalLink,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Precision Engineering",
      description: "Clean, maintainable code with a focus on scalability and performance optimization.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies to solve complex problems with elegant solutions.",
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Building strong teams through clear communication and shared technical vision.",
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Shipping production-ready features quickly without compromising on quality.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      description: "Understanding requirements, constraints, and success metrics through stakeholder alignment.",
    },
    {
      step: "02",
      title: "Build",
      description: "Architecting scalable systems with modern tech stacks and best practices.",
    },
    {
      step: "03",
      title: "Scale",
      description: "Optimizing performance, implementing monitoring, and ensuring production stability.",
    },
  ];

  const expertise = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Native"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    },
    {
      category: "AI/ML",
      skills: ["Python", "PyTorch", "LangChain", "GPT-4", "Computer Vision", "NLP"],
    },
    {
      category: "Game Dev",
      skills: ["Godot Engine", "GDScript", "Game AI", "Object Pooling", "Physics Systems"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 md:px-6 relative">
      <ParticleBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack developer with a passion for building future-ready systems. I combine
            technical depth with product thinking to deliver meaningful solutions.
          </p>
        </div>

        {/* Story */}
        <section className="mb-24 animate-fade-in-up">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-6">My Journey</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Arham Malik</span>, a software engineer who builds 
              AI platforms, scalable backends, and game systems that ship to real users. My journey started with a deep 
              curiosity for how systems work under the hood — today, I work across React, Node.js, Python, .NET, and 
              game engines like Godot to deliver production-grade products used in real business environments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="text-accent font-semibold">RedCoast Corporation</span>, I grew from a trainee into a 
              core engineer working on data platforms, AI systems, and backend infrastructure. I’ve optimized large-scale 
              ETL pipelines on BigQuery, cut query latency and costs by major margins, automated critical workflows using 
              GCP, and helped modernize legacy systems into clean, modular, API-driven architectures that scale reliably.
              My work directly supports data-driven decision-making and real-time marketing technology.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In parallel, I’ve led and shipped complex AI systems — including an enterprise AI platform built with 
              <span className="text-accent font-semibold"> LangChain</span>, real-time document processing, contextual memory, 
              and high-performance APIs. I focus heavily on system design, performance, and maintainability — building 
              things that don’t just work, but keep working as they grow.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond enterprise systems, I’m also a game developer. I built 
              <span className="text-accent font-semibold"> unHinged</span>, a psychological survival game using Godot and C#, 
              featuring procedural generation, AI behavior systems, and dynamic narrative mechanics. Whether I’m building 
              multimodal AI tools, mobile apps, or gameplay systems, I bring the same engineering discipline: performance, 
              clarity, and long-term scalability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, my focus is on building <span className="text-foreground font-semibold">future-ready AI platforms, 
              scalable backend systems, and technically ambitious products</span> — taking ideas from prototype to 
              production with a strong emphasis on impact, reliability, and clean architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <Badge className="bg-cta/20 text-cta border-0 text-base px-4 py-2">
                Full-Stack Developer
              </Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-base px-4 py-2">
                AI Engineer
              </Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-base px-4 py-2">
                Game Developer
              </Badge>
              <Badge className="bg-accent/20 text-accent border-0 text-base px-4 py-2">
                Mobile Developer
              </Badge>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-accent/20 rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover:scale-105 animate-fade-in-up"
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

        {/* Process */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-card border border-accent/20 rounded-xl p-6 space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="text-6xl font-heading font-bold text-accent/20">{item.step}</div>
                <h3 className="text-2xl font-heading font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((area, idx) => (
              <div
                key={idx}
                className="bg-card border border-accent/20 rounded-xl p-6 space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-heading font-semibold text-accent">
                  {area.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-accent/30 text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-8 pt-12 border-t border-accent/10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for full-time opportunities, contract work, and technical consulting
          </p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
