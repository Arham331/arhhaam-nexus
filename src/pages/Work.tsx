import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = ["all", "AI", "Game", "Web", "Mobile", "Backend"];

  const projects = [
    {
      id: "vector-ai",
      title: "Vector AI Platform",
      year: "2024",
      category: ["AI", "Web", "Backend"],
      role: "Lead Developer",
      description: "Comprehensive AI platform with LangChain integration, real-time document processing, and advanced Q&A capabilities.",
      tech: ["React", "Node.js", "LangChain", "PostgreSQL", "Docker"],
      metrics: "50+ concurrent users, <200ms response time",
      status: "Production",
    },
    {
      id: "unhinged",
      title: "unHinged",
      year: "2024",
      category: ["Game"],
      role: "Game Developer",
      description: "Psychological game featuring advanced AI, dynamic narratives, object pooling for optimization, and complex game mechanics.",
      tech: ["Godot Engine", "GDScript", "AI Systems", "Object Pooling"],
      metrics: "60 FPS on mid-range hardware",
      status: "Released",
    },
    {
      id: "meme-checker",
      title: "AI Meme Checker",
      year: "2024",
      category: ["AI", "Backend"],
      role: "AI Engineer",
      description: "Multimodal AI tool using PyTorch and GPT-4 for content analysis, combining computer vision and language models.",
      tech: ["Python", "PyTorch", "GPT-4", "Computer Vision", "NLP"],
      metrics: "95%+ accuracy on test dataset",
      status: "Production",
    },
    {
      id: "raah-e-raast",
      title: "Raah-e-Raast",
      year: "2023",
      category: ["Mobile", "Backend"],
      role: "Mobile Developer",
      description: "Islamic mobile application with Firebase integration, real-time data sync, and user authentication.",
      tech: ["React Native", "Firebase", "Redux", "Push Notifications"],
      metrics: "1000+ active users",
      status: "Live",
    },
    {
      id: "portfolio-projects",
      title: "Portfolio & Client Projects",
      year: "2023-2024",
      category: ["Web"],
      role: "Full-Stack Developer",
      description: "Multiple web applications including e-commerce platforms, dashboards, and content management systems.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      metrics: "10+ projects delivered",
      status: "Various",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter));

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">My Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-grade projects across AI platforms, game development, web applications, and
            scalable backend systems
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? "default" : "outline"}
              className={
                selectedFilter === filter
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "border-accent/30 text-muted-foreground hover:text-accent hover:border-accent"
              }
            >
              {filter === "all" ? "All Projects" : filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group relative bg-card border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all hover:scale-[1.02] card-elevated animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-cta/20 text-cta border-0">{project.role}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-accent/30 text-accent/90 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics & Status */}
                <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">{project.status}</span>
                  </div>
                  <span className="text-sm text-accent">{project.metrics}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <Filter className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
            <h3 className="text-2xl font-heading font-semibold text-muted-foreground">
              No projects found
            </h3>
            <p className="text-muted-foreground">Try selecting a different filter</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-24 pt-16 border-t border-accent/10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm available for full-time roles, contract projects, and consulting opportunities
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 shadow-gold"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
