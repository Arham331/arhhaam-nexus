import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Zap, ExternalLink } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { projects } from "@/data/projects";
import PortfolioProjects from "@/pages/projects/PortfolioProjects";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filters = [
    { key: "all",     label: "All Projects", count: 11 },
    { key: "AI",      label: "AI",           count: 6  },
    { key: "Backend", label: "Backend",      count: 8  },
    { key: "Web",     label: "Web",          count: 7  },
    { key: "Game",    label: "Game",         count: 1  },
    { key: "Mobile",  label: "Mobile",       count: 2  },
  ];

  const filteredProjects =
  selectedFilter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(selectedFilter));
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-x-hidden">
      <ParticleBackground />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[130px] animate-pulse" style={{ animationDuration: "7s" }} />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cta/4 blur-[120px] animate-pulse" style={{ animationDuration: "9s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className="text-center space-y-5 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-sm font-mono">
            &gt;_ {filteredProjects.length + 1}+ projects loaded
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
            Shipped &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
              Scaled
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Production-grade systems across AI, backend, games, and mobile — not demos, not tutorials. Real users, real stakes.
          </p>
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((f) => {
            const active = selectedFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`group relative px-5 py-2 rounded-xl text-sm font-heading font-semibold transition-all duration-200 overflow-hidden ${
                  active
                    ? "bg-accent text-accent-foreground shadow-[0_0_20px_rgba(var(--accent-rgb),0.35)] scale-105"
                    : "bg-card border border-accent/20 text-muted-foreground hover:border-accent/50 hover:text-accent hover:scale-[1.03]"
                }`}
              >
                {!active && (
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {f.label}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-mono ${
                    active ? "bg-accent-foreground/20 text-accent-foreground" : "bg-accent/10 text-accent"
                  }`}>
                    {f.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sortedProjects.map((project, idx) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              onMouseEnter={() => setHovered(project.slug)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up
                ${hovered === project.slug
                  ? "border-accent/60 scale-[1.02] shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
                  : "border border-accent/15 hover:border-accent/40"
                }
                ${project.highlight ? "lg:col-span-2" : ""}
              `}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Top accent line */}
              <div className={`h-[2px] w-full transition-all duration-300 ${
                hovered === project.slug
                  ? "bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_2s_ease_infinite]"
                  : "bg-accent/20"
              }`} />

              {/* Hover glow bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cta/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className={`relative p-6 md:p-8 ${project.highlight ? "md:grid md:grid-cols-2 md:gap-8 md:items-center" : ""}`}>

                {/* Main content */}
                <div className="space-y-4">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-cta/15 text-cta border-0 text-xs font-mono">
                          {project.role}
                        </Badge>
                        <span className="text-xs text-muted-foreground/60 font-mono">{project.year}</span>
                        {project.highlight && (
                          <Badge className="bg-accent/15 text-accent border-0 text-xs">
                            ★ Featured
                          </Badge>
                        )}
                      </div>
                      <h2 className={`font-heading font-black leading-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-cta transition-all duration-300 ${
                        project.highlight ? "text-3xl md:text-4xl" : "text-2xl"
                      }`}>
                        {project.title}
                      </h2>
                    </div>
                  <div
                    className={`
                      w-10 h-10 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center 
                      group-hover:bg-accent/20 group-hover:border-accent/40 transition-all mt-7
                      ${project.highlight ? "absolute top-6 right-6" : "flex-shrink-0"}
                    `}
                  >
                    <ArrowRight className="w-4 h-4 text-accent/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-accent/15 text-muted-foreground text-xs hover:border-accent/40 hover:text-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats / status — right side for featured, bottom for normal */}
                <div className={`${project.highlight ? "mt-6 md:mt-0" : "mt-5 pt-4 border-t border-accent/8"} flex items-center justify-between gap-4`}>
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse flex-shrink-0" />
                    <span className="text-xs text-muted-foreground truncate">{project.status}</span>
                  </div>
                  {project.metrics?.[0]?.value + project.metrics?.[0]?.suffix && (
                    <div className="flex-shrink-0 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-bold">
                      {project.metrics?.[0]?.value + project.metrics?.[0]?.suffix}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))} 
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-32 space-y-4">
            <Filter className="w-12 h-12 text-muted-foreground/30 mx-auto" />
            <p className="text-muted-foreground font-heading font-semibold">No projects in this category yet.</p>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-28 relative rounded-3xl overflow-hidden border border-accent/20 bg-card/60 backdrop-blur-md p-12 md:p-20 text-center">
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute top-0 left-1/3 w-72 h-56 bg-accent/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
          <div className="absolute bottom-0 right-1/3 w-80 h-56 bg-cta/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cta/30 bg-cta/8 text-cta text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              Available for new projects
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
              Got something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                to build?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Full-time · Contract · Remote · International · Consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold text-base px-10 py-6 shadow-[0_0_35px_rgba(var(--cta-rgb),0.3)] hover:shadow-[0_0_55px_rgba(var(--cta-rgb),0.5)] transition-all hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's talk
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;