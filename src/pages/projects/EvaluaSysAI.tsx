import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Target,
  Layout,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Brain,
  Mic,
  Eye,
  FileSearch,
  Bot,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const EvaluaSysAI = () => {
  const techStack = [
    "React",
    "Flask",
    "MongoDB",
    "REST API",
    "Speech-to-Text",
    "Text-to-Speech",
    "NLP",
    "Facial Detection",
  ];

  const keyFeatures = [
    {
      icon: Eye,
      title: "Real-time Malpractice Detection",
      description: "Engineered facial detection and expression evaluation during live demos to ensure transparency and prevent student malpractice.",
    },
    {
      icon: Mic,
      title: "NLP Voice & Text Q&A",
      description: "Integrated Speech-to-Text and Text-to-Speech capabilities to facilitate seamless AI-based student verification and Q&A.",
    },
    {
      icon: Bot,
      title: "Dynamic AI Quiz Generation",
      description: "Implemented automated system that generates quizzes tailored specifically to the content of an uploaded project.",
    },
    {
      icon: CheckCircle2,
      title: "Automated Assessment",
      description: "Moved beyond manual checking by automating project assessment workflows for live demos and code submissions.",
    },
    {
      icon: FileSearch,
      title: "Plagiarism Detection",
      description: "Integrated intelligent scanning to detect code duplication and ensure the fairness of marking criteria.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Evaluation",
      description: "Built a large-scale portal that provides fair, data-driven marking via live project tracking and automated scoring.",
    },
  ];

  const projectHighlights = [
    {
      category: "AI & NLP Capabilities",
      items: [
        "Real-time expression & facial tracking",
        "Seamless voice-to-text Q&A verification",
        "Context-aware dynamic quiz generation",
        "End-to-end automated marking workflows",
      ],
    },
    {
      category: "Platform Architecture",
      items: [
        "Highly responsive React frontend interface",
        "Scalable Flask & MongoDB backend structure",
        "Integrated Speech/Text NLP engine",
        "Production-ready deployment standards",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Frontend & UI Experience",
      icon: Layout,
      description: "Designed a comprehensive web portal using React to handle complex evaluation interfaces, live demo tracking, and interactive AI-driven quizzes.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Webcam API"],
    },
    {
      title: "Backend AI Engine",
      icon: Brain,
      description: "Developed a robust Flask server to orchestrate AI models, including facial detection algorithms and NLP services for student interaction.",
      technologies: ["Flask", "Python", "NLP Models", "OpenCV"],
    },
    {
      title: "Data Management",
      icon: Code2,
      description: "Utilized MongoDB for flexible project storage and automated assessment logging, ensuring high availability for large-scale student submissions.",
      technologies: ["MongoDB", "RESTful API", "JWT Auth", "Cloud Storage"],
    },
  ];

  const projectMetrics = [
    { label: "Role", value: "Backend Developer", icon: Code2 },
    { label: "Timeline", value: "2025", icon: Calendar },
    { label: "AI Tech", value: "NLP / Vision", icon: Brain },
    { label: "Status", value: "Production Ready", icon: Rocket },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:px-6">
        <div className="container mx-auto">
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Backend Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2025</Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-500 text-lg px-4 py-1">
                <Brain className="w-4 h-4 mr-1" />
                AI-Driven
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient uppercase">
                EvaluaSys AI
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A large-scale web portal providing AI-driven, transparent assignment evaluation via live project demos, quizzes, and plagiarism detection.
            </p>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="relative py-12 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group">
                  <Icon className="w-8 h-8 text-accent mx-auto group-hover:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                    <p className="text-xl font-heading font-bold text-foreground">{metric.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-semibold">EvaluaSys AI</span> is an innovative evaluation portal designed to automate project assessment, moving beyond traditional manual checking and test-case evaluations. By combining <span className="text-accent font-semibold">React, Flask, and MongoDB</span>, I developed an end-to-end system that handles live demos and complex project submissions efficiently.
              </p>
              
              <p className="text-lg leading-relaxed">
                The platform integrates advanced AI capabilities, including <span className="text-cta font-semibold">Natural Language Processing (NLP)</span> for voice-based student Q&A and computer vision for facial detection. These features work together to ensure transparency and fairness in marking criteria while streamlining the workload for evaluators.
              </p>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-accent" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 transition-all">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground">Automating evaluation with intelligent transparency</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-card rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover-lift group">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">AI Integration & Backend Architecture</p>
          </div>
          <div className="space-y-6">
            {technicalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{detail.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{detail.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {detail.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-accent/10 text-accent border-accent/20">{tech}</Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights & Impact */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Results & Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectHighlights.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold text-accent">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Interested in AI Automation?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Let's discuss how I can help build your next AI-powered portal or intelligent backend system.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all">
                  Start a Project
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvaluaSysAI;