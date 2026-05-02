import { useParams, Link } from "react-router-dom";
import { projects, iconMap } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import * as Icons from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Target, CheckCircle2, Terminal, Rocket } from "lucide-react"

/* ── Animated counter ── */
function Counter({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-20">Project not found</div>;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
        <ParticleBackground />
        {/* Ambient glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-accent/6 blur-[140px] animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-cta/5 blur-[130px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "3s" }} />
        </div>

        {/* ══════════════════════════════════════
          HERO
        ══════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 bottom-10">
        <div className="container mx-auto max-w-6xl">

          {/* Back */}
          <Link to="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-10 group text-sm font-mono">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            cd ../work
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="space-y-7 animate-fade-in-up">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cta/15 text-cta border-0 font-mono text-xs">{project.role}</Badge>
                <Badge variant="outline" className="border-accent/25 text-accent font-mono text-xs">{project.year}</Badge>
                <Badge className="bg-green-500/10 text-green-400 border-0 font-mono text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {project.status}
                </Badge>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-accent/60 tracking-[0.3em] uppercase">&gt;_ {project.subtitle}</p>
                <h1 className="text-2xl md:text-5xl font-heading font-black leading-[0.9] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                    {project.title}
                  </span>
                </h1>
                <div className="h-[3px] w-24 bg-gradient-to-r from-accent to-cta rounded-full" />
              </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {project.description}
            </p>

              {/* Tech strip */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t, i) => (
                  <Badge key={i} variant="outline" className="border-accent/20 text-muted-foreground text-xs hover:border-accent/50 hover:text-accent transition-all">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-1">
                <Link to="/contact#contact-form">
                  <Button
                    size="sm"
                    className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact for demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — metrics */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {project.metrics.map((m, i) => {
                const Icon = iconMap[m.icon];
                return (
                  <div
                    key={i}
                    className="group relative bg-card border border-accent/15 rounded-2xl p-6 text-center overflow-hidden hover:border-accent/40 hover:scale-[1.04] transition-all"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cta/3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-accent/8 blur-xl group-hover:bg-accent/15 transition-all" />
                    <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${m.color === "cta" ? "bg-cta/10" : "bg-accent/10"}`}>
                      { Icon && <Icon className={`w-5 h-5 ${m.color === "cta" ? "text-cta" : "text-accent"}`} /> }
                    </div>
                    <div
                      className={`text-1xl font-heading font-black ${
                        m.color === "cta"
                          ? "text-cta"
                          : "text-transparent bg-clip-text bg-gradient-to-br from-accent to-cta"
                      }`}
                    >
                      {typeof m.value === "number" ? (
                        <Counter target={m.value} suffix={` ${m.suffix}`} />
                      ) : (
                        <span className="tracking-tight">{m.value}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{m.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* ══════════════════════════════════════
          TECH ARCHITECTURE
        ══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-6 bg-gradient-to-b from-card/20 via-accent/3 to-card/20">
        <div className="container mx-auto max-w-6xl">

          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Architecture</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
              How it's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">Built</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.techLayers.map((layer, idx) => {
              const Icon = iconMap[layer.icon];
              return (
                <div
                  key={idx}
                  className="group relative bg-card border border-accent/15 rounded-2xl p-7 overflow-hidden hover:border-accent/40 hover:scale-[1.02] transition-all"
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${layer.color === "cta" ? "bg-gradient-to-r from-transparent via-cta to-transparent" : "bg-gradient-to-r from-transparent via-accent to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all" />

                  <div className="relative space-y-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${layer.color === "cta" ? "bg-cta/10" : "bg-accent/10"} group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${layer.color === "cta" ? "text-cta" : "text-accent"}`} />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {layer.stack.map((s, i) => (
                        <Badge key={i} variant="outline" className="border-accent/15 text-muted-foreground text-xs hover:border-accent/35 hover:text-accent transition-colors">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KEY FEATURES
        ══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">

          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Features</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
              What It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">Does</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((f, idx) => {
              const Icon = iconMap[f.icon];
              return (
                <div
                  key={idx}
                  className="group bg-card border border-accent/15 rounded-2xl p-6 space-y-3 hover:border-accent/40 hover:scale-[1.02] transition-all overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        {/* ══════════════════════════════════════
                CORE SYSTEM MODULES
            ══════════════════════════════════════ */}
        {project.modules && project.modules.length > 0 && (
        <section className="relative py-24 px-4 md:px-6 bg-gradient-to-b from-card/20 via-accent/3 to-card/20">
            <div className="container mx-auto max-w-6xl">

            <div className="mb-14">
                <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-accent/15" />
                <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">System Modules</span>
                <div className="h-px flex-1 bg-accent/15" />
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                    Architecture
                </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {project.modules.map((m, idx) => {
                const Icon = iconMap[m.icon];

                return (
                    <div
                    key={idx}
                    className="group relative bg-card border border-accent/15 rounded-2xl p-6 space-y-3 hover:border-accent/40 hover:scale-[1.02] transition-all overflow-hidden"
                    >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center group-hover:bg-cta/20 group-hover:scale-110 transition-all">
                        {Icon && <Icon className="w-5 h-5 text-cta" />}
                    </div>

                    <h3 className="font-heading font-bold text-foreground text-base">
                        {m.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {m.description}
                    </p>
                    </div>
                );
                })}
            </div>
            </div>
        </section>
        )}
      
      {/* ══════════════════════════════════════
          CHALLENGES & SOLUTIONS
        ══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-6 bg-gradient-to-b from-card/20 via-accent/3 to-card/20">
        <div className="container mx-auto max-w-5xl">

          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Problem → Solution</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
              Challenges{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">Solved</span>
            </h2>
          </div>

          <div className="space-y-5">
            {project.challenges.map((c, idx) => (
              <div
                key={idx}
                className="group relative bg-card border border-accent/15 rounded-2xl overflow-hidden hover:border-accent/40 transition-all"
              >
                {/* Left accent strip */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent/60 to-accent/10 group-hover:from-accent to-accent/30 transition-all" />

                <div className="p-7 pl-9 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <h3 className="text-lg font-heading font-bold text-foreground">
                        {c.title}
                    </h3>

                    <span className="self-start sm:self-auto flex-shrink-0 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-bold">
                        {c.metric}
                    </span>
                    </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">&gt;_ Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs font-mono text-cta/70 uppercase tracking-widest">&gt;_ Solution</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RESULTS + PRACTICES
        ══════════════════════════════════════ */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Results */}
            <div className="relative bg-card border border-accent/20 rounded-3xl overflow-hidden">
              <div className="h-[2px] w-full bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]" />
              <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-heading font-black">Results & Impact</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                {project.results?.map((r, i) => (
                    <div key={i} className="text-center space-y-1">
                    <div className="text-2xl md:text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-cta">
                        <Counter target={r.value} suffix={r.suffix} />
                    </div>
                    <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                ))}
                </div>

                <div className="border-t border-accent/10 pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                </p>
                </div>
              </div>
            </div>

            {/* Practices */}
            <div className="bg-card border border-accent/15 rounded-3xl p-8 md:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cta" />
                </div>
                <h2 className="text-2xl font-heading font-black">Engineering Practices</h2>
              </div>

              <div className="space-y-3">
                {project.practices.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-cta/10 border border-cta/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cta/20 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-cta" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {project.cta_text}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                  {project.cta_action}
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                {project.cta_subtext}
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

export default ProjectPage;