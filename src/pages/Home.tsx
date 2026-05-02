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
  Github,
  Zap,
  Rocket,
  Terminal,
  Layers,
  Activity,
  ChevronDown,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Tiny hook: animate a counter from 0 → target
───────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
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
  }, [start, target, duration]);
  return val;
}

/* ─── Animated stat card ──────────────────── */
const StatCard = ({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(value, 1600, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-card border border-accent/20 rounded-2xl p-6 text-center overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-[1.04]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
      <div className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-cta relative z-10">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium tracking-wide uppercase relative z-10">{label}</div>
    </div>
  );
};

/* ─── Typewriter ──────────────────────────── */
const roles = [
  "Backend Engineer",
  "AI Systems Architect",
  "Data Pipeline Builder",
  "Game Developer",
  "Full-Stack Builder",
];

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta font-bold">
      {displayed}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

/* ─── Main Component ──────────────────────── */
const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) =>
      observerRef.current?.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: "AVENIX",
      subtitle: "Enterprise AI Platform",
      description:
        "Built enterprise AI with LLM agents, contextual memory, WebSocket real-time architecture and sub-second latency. +40% query performance.",
      tech: ["React", "LangChain", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
      role: "Lead Developer",
      accent: "accent",
      link: "/work/avenix",
      stat: "sub-second latency",
    },
    {
      title: "unHinged",
      subtitle: "Psychological Survival Game",
      description:
        'Godot-built 2D psychological horror with a real-time "Fear Meter" driving visuals, audio and mechanics. Stable 60 FPS via object pooling.',
      tech: ["Godot Engine", "C#", "AI Systems", "Procedural Gen"],
      role: "Game Developer",
      accent: "cta",
      link: "/work/unhinged",
      stat: "stable 60 FPS",
    },
    {
      title: "Apex Analytics",
      subtitle: "Data Analytics Platform",
      description:
        "Scalable analytics integrating 100+ data sources with real-time BigQuery ETL, REST APIs and interactive dashboards.",
      tech: ["React", "Django", "GCP", "BigQuery", "Docker"],
      role: "Full-Stack Engineer",
      accent: "accent",
      link: "/work/apex",
      stat: "100+ data sources",
    },
  ];

  const skills = [
    { name: "FastAPI / Django / Flask", icon: Terminal, level: 94 },
    { name: "Python & Data Engineering", icon: Database, level: 92 },
    { name: "AI / LangChain / RAG", icon: Brain, level: 90 },
    { name: "React & TypeScript", icon: Code2, level: 88 },
    { name: "Cloud & DevOps (GCP/AWS)", icon: Layers, level: 86 },
    { name: "Game Dev (Godot / C#)", icon: Gamepad2, level: 82 },
    { name: "System Architecture", icon: Cpu, level: 91 },
    { name: "Real-Time Systems", icon: Activity, level: 88 },
  ];

  const timeline = [
    { year: "2026–Now", role: "Junior Python Developer", company: "Tech Solutions.ae", tag: "Data" },
    { year: "2025–2026", role: "Junior Java Developer", company: "Zindigi (FinTech)", tag: "Banking" },
    { year: "2025", role: "Software Engineer", company: "RedCoast Corporation", tag: "AI/Data" },
    { year: "2024–2025", role: "Junior Software Engineer", company: "RedCoast Corporation", tag: "Backend" },
    { year: "2023", role: "Intern", company: "PTCL", tag: "C#/.NET" },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground />

      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden -z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cta/6 blur-[140px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <div className="absolute bottom-[-5%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "4s" }} />
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Left 3/5 */}
            <div className="lg:col-span-3 space-y-8 animate-fade-in-up">

              {/* Status pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-card border border-accent/25 rounded-full text-sm group hover:border-accent/50 transition-all cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cta" />
                </span>
                <span className="text-muted-foreground">Available for opportunities</span>
                <span className="text-accent font-semibold">·</span>
                <span className="text-accent font-medium">Remote &amp; On-site</span>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <p className="text-sm font-mono text-accent/70 tracking-[0.3em] uppercase">
                  &gt;_ hello, world. I'm
                </p>
                <h1 className="text-6xl md:text-8xl font-heading font-black leading-[0.9] tracking-tight">
                  <span className="block text-foreground">Arham</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                    Malik
                  </span>
                </h1>
                <div className="h-[3px] w-32 bg-gradient-to-r from-accent to-cta rounded-full mt-3" />
              </div>

              {/* Typewriter */}
              <h2 className="text-xl md:text-2xl font-heading text-muted-foreground">
                <Typewriter />
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I architect <span className="text-foreground font-semibold">scalable backends</span>, ship{" "}
                <span className="text-foreground font-semibold">production AI systems</span>, and build{" "}
                <span className="text-foreground font-semibold">data pipelines</span> that run in real business environments — not demos.
              </p>

              {/* Key metrics inline */}
              <div className="flex flex-wrap gap-3">
                {[
                  "60% query latency cut",
                  "80% AI workflow automation",
                  "p95 ≤ 150ms APIs",
                  "3+ yrs production",
                ].map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/8 border border-accent/20 text-accent text-sm font-medium"
                  >
                    <Zap className="w-3 h-3" />
                    {m}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold text-base px-8 py-6 shadow-[0_0_30px_rgba(var(--cta-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--cta-rgb),0.5)] transition-all hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Work with me
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-accent/40 text-accent hover:bg-accent/10 hover:border-accent font-heading font-bold text-base px-8 py-6 transition-all hover:scale-105"
                  >
                    <Terminal className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                    See my work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right 2/5 — Photo card */}
            <div className="lg:col-span-2 flex justify-center animate-fade-in">
              <div className="relative w-72 md:w-80 group">

                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-cta/20 to-accent/10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-card border border-accent/25 rounded-3xl p-4 group-hover:border-accent/50 transition-all duration-300">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ animation: "gentleFloat 5s ease-in-out infinite" }}
                  >
                    <img
                      src="/Professional.jpeg"
                      alt="Arham Malik"
                      className="w-full object-cover rounded-2xl"
                    />
                    {/* Overlay shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent rounded-2xl" />
                    {/* Name tag at bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-card/80 backdrop-blur-md border border-accent/20 rounded-xl px-4 py-2.5 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground font-mono">@arham-malik</p>
                          <p className="text-sm font-heading font-semibold text-foreground">The System Builder</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div
                  className="absolute -top-4 -right-4 bg-card border border-accent/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg"
                  style={{ animation: "gentleFloat 4s ease-in-out infinite" }}
                >
                  <Rocket className="w-4 h-4 text-accent" />
                  <span className="text-xs font-heading font-semibold text-foreground whitespace-nowrap">3+ yrs exp.</span>
                </div>

                {/* Floating badge — bottom left */}
                <div
                  className="absolute -bottom-4 -left-4 bg-card border border-cta/30 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg"
                  style={{ animation: "gentleFloat 5.5s ease-in-out infinite", animationDelay: "1s" }}
                >
                  <Zap className="w-4 h-4 text-cta" />
                  <span className="text-xs font-heading font-semibold text-foreground whitespace-nowrap">AI + Backend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-16 animate-bounce opacity-40">
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section className="relative py-16 px-6 border-y border-accent/10 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value={3}  suffix="+"  label="Years in Production"   delay={0}   />
            <StatCard value={60} suffix="%" label="Query Latency Reduced" delay={100} />
            <StatCard value={80} suffix="%" label="AI Workflows Automated" delay={200} />
            <StatCard value={50} suffix="+" label="Dashboard Users Served" delay={300} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Section header */}
          <div className="mb-16 animate-on-scroll">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Selected Work</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-center leading-tight">
              Shipped.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                Scaled.
              </span>{" "}
              Real.
            </h2>
            <p className="text-center text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
              Not side projects. Systems running in production environments with real users and real stakes.
            </p>
          </div>

          {/* Project cards — alternating layout */}
          <div className="space-y-6">
            {featuredProjects.map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="animate-on-scroll group relative flex flex-col md:flex-row items-stretch bg-card border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_60px_rgba(0,0,0,0.4)]"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Left accent strip */}
                <div className={`w-full md:w-1.5 min-h-[6px] bg-gradient-to-b ${project.accent === "cta" ? "from-cta to-cta/40" : "from-accent to-accent/40"} flex-shrink-0`} />

                {/* Index number */}
                <div className="hidden md:flex items-center justify-center px-8 border-r border-accent/10 min-w-[80px]">
                  <span className="text-6xl font-heading font-black text-accent/10 group-hover:text-accent/20 transition-colors select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className={`${project.accent === "cta" ? "bg-cta/20 text-cta" : "bg-accent/20 text-accent"} border-0 text-xs font-mono`}>
                      {project.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">{project.subtitle}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-cta transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="outline" className="border-accent/20 text-muted-foreground text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right stat */}
                <div className="hidden lg:flex flex-col items-center justify-center px-8 border-l border-accent/10 min-w-[140px] text-center gap-2">
                  <div className={`text-sm font-mono font-bold ${project.accent === "cta" ? "text-cta" : "text-accent"}`}>
                    {project.stat}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                className="group border-accent/40 text-accent hover:bg-accent/10 hover:border-accent font-heading font-bold hover:scale-105 transition-all"
              >
                View all projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS — horizontal bar chart style
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-card/20 via-accent/5 to-card/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">

          <div className="mb-16 animate-on-scroll">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Technical Stack</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
              Built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                real experience
              </span>
            </h2>
            <p className="text-center text-muted-foreground mt-3 text-base">
              Every bar is backed by shipped code in production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <SkillBar key={idx} skill={skill} Icon={Icon} idx={idx} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAREER TIMELINE
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="container mx-auto max-w-4xl">

          <div className="mb-16 animate-on-scroll">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-accent/15" />
              <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Experience</span>
              <div className="h-px flex-1 bg-accent/15" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-center">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
                Journey
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="animate-on-scroll group relative flex gap-6 items-start"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-card border border-accent/30 items-center justify-center group-hover:border-accent/70 group-hover:bg-accent/10 transition-all z-10">
                    <div className={`w-2.5 h-2.5 rounded-full ${idx === 0 ? "bg-cta animate-pulse" : "bg-accent/50"}`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card border border-accent/15 rounded-xl p-5 group-hover:border-accent/35 transition-all hover:scale-[1.01]">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-accent/70">{item.year}</span>
                      <Badge className="bg-accent/10 text-accent border-0 text-xs">{item.tag}</Badge>
                      {idx === 0 && (
                        <Badge className="bg-cta/20 text-cta border-0 text-xs animate-pulse">Current</Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-lg leading-tight">{item.role}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            className="relative animate-on-scroll rounded-3xl overflow-hidden border border-accent/25 bg-card/60 backdrop-blur-md p-12 md:p-20 text-center"
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Glow blobs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-64 bg-cta/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                Open to work — Remote &amp; International
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight">
                Let's build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
                  that lasts.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Full-time roles · Contract · Remote · International · Consulting
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold text-base px-10 py-6 shadow-[0_0_40px_rgba(var(--cta-rgb),0.35)] hover:shadow-[0_0_60px_rgba(var(--cta-rgb),0.55)] transition-all hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get in touch
                      <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <a href="https://github.com/Arham331" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-accent/40 text-accent hover:bg-accent/10 hover:border-accent font-heading font-bold text-base px-10 py-6 transition-all hover:scale-105"
                  >
                    <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    GitHub
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

/* ─── Skill bar — isolated so IntersectionObserver works per-bar ── */
function SkillBar({
  skill,
  Icon,
  idx,
}: {
  skill: { name: string; level: number };
  Icon: React.ElementType;
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group bg-card border border-accent/15 rounded-xl p-5 hover:border-accent/40 transition-all hover:scale-[1.02] animate-on-scroll"
      style={{ animationDelay: `${idx * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="font-heading font-semibold text-sm text-foreground">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-cta font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-accent/8 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-accent to-cta transition-all duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default Home;