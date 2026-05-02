import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Clock,
  Zap,
  MapPin,
  ArrowRight,
  Terminal,
  Briefcase,
  Code2,
  Rocket,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description:
          "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:arham3311@outlook.com",
      label: "arham3311@outlook.com",
      accent: "cta",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arham-malik-943152352",
      label: "/in/arham-malik-943152352",
      accent: "accent",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Arham331",
      label: "github.com/Arham331",
      accent: "accent",
    },
  ];

  const openFor = [
    { icon: Briefcase, label: "Full-time positions", sub: "Remote & On-site" },
    { icon: Code2,     label: "Contract projects",   sub: "Short & long term" },
    { icon: Zap,       label: "Technical consulting", sub: "Architecture & AI" },
    { icon: Rocket,    label: "Freelance work",       sub: "Startups welcome" },
  ];

  const fields = [
    { id: "name",    label: "Name",    type: "text",  placeholder: "Your full name",          as: "input"    },
    { id: "email",   label: "Email",   type: "email", placeholder: "your.email@example.com",  as: "input"    },
    { id: "subject", label: "Subject", type: "text",  placeholder: "What's this about?",      as: "input"    },
    { id: "message", label: "Message", type: "text",  placeholder: "Tell me about your project, timeline, and goals...", as: "textarea" },
  ] as const;

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 relative overflow-x-hidden">
      <ParticleBackground />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
        <div className="absolute top-20 -left-32 w-[480px] h-[480px] rounded-full bg-accent/6 blur-[120px] animate-pulse" style={{ animationDuration: "7s" }} />
        <div className="absolute bottom-20 -right-32 w-[560px] h-[560px] rounded-full bg-cta/5 blur-[140px] animate-pulse" style={{ animationDuration: "9s", animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className="text-center space-y-5 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cta/30 bg-cta/8 text-cta text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cta" />
            </span>
            Response in &lt;24h
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]">
              Build Together
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a system to architect, a pipeline to build, or an AI idea to ship?
            Drop me a message — I read every one.
          </p>

          {/* Location + timezone strip */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Islamabad, Pakistan
            </span>
            <span className="w-px h-4 bg-accent/20" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              PKT (UTC+5)
            </span>
            <span className="w-px h-4 bg-accent/20" />
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              Open to remote globally
            </span>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: Form ── */}
          <div id="contact-form" className="lg:col-span-3 animate-fade-in-up">
            <div className="relative bg-card border border-accent/20 rounded-3xl overflow-hidden">

              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent via-cta to-accent bg-[length:200%_auto] animate-[gradientShift_4s_ease_infinite]" />

              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-accent/10 bg-card/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  ~/contact — new_message.sh
                </span>
              </div>

              {/* Success state */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 px-8 text-center space-y-5">
                  <div className="w-20 h-20 rounded-full bg-cta/15 border border-cta/30 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-cta" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-foreground">Message Delivered!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Thanks for reaching out. I'll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/arham3311@outlook.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Message" />

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {(["name", "email"] as const).map((id) => {
                      const f = fields.find((x) => x.id === id)!;
                      return (
                        <div key={id} className="space-y-1.5 group">
                          <label
                            htmlFor={id}
                            className={`block text-xs font-mono font-semibold tracking-widest uppercase transition-colors ${
                              focused === id ? "text-accent" : "text-muted-foreground"
                            }`}
                          >
                            &gt;_ {f.label}
                          </label>
                          <div className={`relative rounded-xl border transition-all duration-200 ${
                            focused === id
                              ? "border-accent shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.1)]"
                              : "border-accent/20 hover:border-accent/40"
                          }`}>
                            <Input
                              id={id}
                              name={id}
                              type={f.type}
                              value={formData[id]}
                              onChange={handleChange}
                              onFocus={() => setFocused(id)}
                              onBlur={() => setFocused(null)}
                              required
                              placeholder={f.placeholder}
                              className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground/40 font-mono text-sm h-12"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-mono font-semibold tracking-widest uppercase transition-colors ${
                        focused === "subject" ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      &gt;_ Subject
                    </label>
                    <div className={`relative rounded-xl border transition-all duration-200 ${
                      focused === "subject"
                        ? "border-accent shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.1)]"
                        : "border-accent/20 hover:border-accent/40"
                    }`}>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder="What's this about?"
                        className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground/40 font-mono text-sm h-12"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className={`block text-xs font-mono font-semibold tracking-widest uppercase transition-colors ${
                        focused === "message" ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      &gt;_ Message
                    </label>
                    <div className={`relative rounded-xl border transition-all duration-200 ${
                      focused === "message"
                        ? "border-accent shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.1)]"
                        : "border-accent/20 hover:border-accent/40"
                    }`}>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                        rows={6}
                        placeholder="Tell me about your project, tech stack, timeline, and what you need built..."
                        className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground/40 font-mono text-sm resize-none"
                      />
                      {/* Char counter feel */}
                      {formData.message.length > 0 && (
                        <div className="absolute bottom-3 right-4 text-xs font-mono text-muted-foreground/40">
                          {formData.message.length} chars
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-bold text-base py-6 shadow-[0_0_30px_rgba(var(--cta-rgb),0.25)] hover:shadow-[0_0_50px_rgba(var(--cta-rgb),0.45)] transition-all hover:scale-[1.02] relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-cta-foreground/30 border-t-cta-foreground rounded-full animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground/50 font-mono">
                    Encrypted via HTTPS · No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Info panels ── */}
          <div className="lg:col-span-2 space-y-5 animate-fade-in-up" style={{ animationDelay: "150ms" }}>

            {/* Social links */}
            <div className="bg-card border border-accent/20 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/10">
                <h2 className="text-base font-heading font-bold text-foreground">Connect directly</h2>
              </div>
              <div className="p-4 space-y-3">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-3 rounded-xl border border-accent/10 hover:border-accent/35 bg-background/30 hover:bg-accent/5 transition-all hover:scale-[1.02]"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        link.accent === "cta"
                          ? "bg-cta/10 group-hover:bg-cta/20"
                          : "bg-accent/10 group-hover:bg-accent/20"
                      }`}>
                        <Icon className={`w-5 h-5 ${link.accent === "cta" ? "text-cta" : "text-accent"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{link.name}</p>
                        <p className="text-xs text-muted-foreground truncate font-mono">{link.label}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-card border border-accent/20 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-cta" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold text-foreground mb-1">Fast Responses</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically reply within <span className="text-foreground font-semibold">24–48 hours</span> on weekdays.
                  For urgent requests, email directly.
                </p>
              </div>
            </div>

            {/* Open for */}
            <div className="bg-card border border-accent/20 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-accent/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                <h2 className="text-base font-heading font-bold text-foreground">Currently open for</h2>
              </div>
              <div className="p-4 space-y-2">
                {openFor.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background/30 border border-accent/8 hover:border-accent/25 hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote card */}
            <div className="relative bg-gradient-to-br from-card via-card to-accent/5 border border-accent/20 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="text-4xl font-heading font-black text-accent/20 leading-none mb-3">"</div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  Time should work for you, not against you.
                </p>
                <p className="text-xs text-accent mt-3 font-medium">— Beloved Mother</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;