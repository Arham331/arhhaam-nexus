import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Rocket,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { Link } from "react-router-dom";

import projectsData, { iconMap } from "@/data/portfolio-projects";

const PortfolioProjects = () => {
  const [active, setActive] = useState<any | null>(null);

  const allTechStack = [
    ...new Set(projectsData.flatMap((p: any) => p.techStack)),
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />

      <section className="relative pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-accent to-cta bg-clip-text text-transparent">
          Projects
        </h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Collection of 10 diverse projects spanning web development, mobile apps, AI/ML, game development, and system optimization
        </p>

        <p className="mt-6 text-xm text-muted-foreground max-w-2xl mx-auto">
          {"("}click or tap the cards for details{")"}
        </p>
      </section>

      {/* ⚡ PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectsData.map((project: any, i: number) => {
          const Icon = iconMap[project.icon];

          return (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setActive(project)}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cta/20 opacity-0 group-hover:opacity-100 blur-2xl transition" />

              <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-white/10">{project.year}</Badge>
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((t: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            layoutId={active.id}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto px-6 py-20">
              {/* Close */}
              <button
                onClick={() => setActive(null)}
                className="mb-10 text-muted-foreground hover:text-white"
              >
                ← Back
              </button>

              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-5xl font-bold">{active.title}</h2>

                <div className="flex gap-3 flex-wrap">
                  <Badge>{active.role}</Badge>
                  <Badge variant="outline">{active.year}</Badge>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {active.description}
              </p>

              {/* Highlights */}
              <div className="mt-10">
                <h4 className="text-sm text-accent uppercase mb-4">
                  Highlights
                </h4>

                <ul className="grid md:grid-cols-2 gap-3">
                  {active.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cta mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="mt-10">
                <h4 className="text-sm text-accent uppercase mb-4">
                  Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {active.techStack.map((t: string, i: number) => (
                    <Badge key={i} className="bg-white/10">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-10 flex gap-6 flex-wrap">
                {Object.entries(active.metrics).map(([k, v]: any) => (
                  <div key={k}>
                    <p className="text-muted-foreground text-sm">{k}</p>
                    <p className="text-xl font-bold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════
          CTA
        ══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden border border-accent/20 bg-card/60 backdrop-blur-md p-12 md:p-20 text-center">
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
              backgroundImage: "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-0 left-1/4 w-72 h-48 bg-accent/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-cta/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
                Looking for a {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                  Versatile Engineer?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                With expertise across web, mobile, AI, and systems programming, I can bring diverse technical solutions to your projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/contact">
                  <Button
                    size="sm"
                    className="group 
                        bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold
                        text-sm md:text-base
                        px-5 py-3 md:px-10 md:py-6
                        shadow-[0_0_35px_rgba(var(--cta-rgb),0.3)] 
                        hover:shadow-[0_0_55px_rgba(var(--cta-rgb),0.5)] 
                        transition-all hover:scale-105 relative overflow-hidden"
                    >
                    <span className="relative z-10 flex items-center gap-2">
                      Start a project
                      <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group 
                        border-accent/35 text-accent hover:bg-accent/10 hover:border-accent 
                        font-heading font-bold
                        text-sm md:text-base
                        px-5 py-3 md:px-10 md:py-6
                        transition-all hover:scale-105"
                    >
                    <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    More projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioProjects;