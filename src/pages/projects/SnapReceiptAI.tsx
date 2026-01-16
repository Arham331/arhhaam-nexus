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
  Search,
  Receipt,
  Wand2,
  Database,
  FileText,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const SnapReceiptAI = () => {
  const techStack = [
    "Python",
    "Django",
    "MongoDB",
    "LLM Prompt Engineering",
    "OCR Technology",
    "REST API",
    "Tailwind CSS",
    "Data Visualization",
  ];

  const keyFeatures = [
    {
      icon: Wand2,
      title: "AI Data Extraction",
      description: "Integrated AI via LLM Prompt Engineering to instantly extract key data like merchant names, dates, and totals from uploaded receipts with high accuracy.",
    },
    {
      icon: Receipt,
      title: "Automated Organization",
      description: "Developed a system that automates the capturing and tracking of purchases, significantly reducing manual data entry for financial records.",
    },
    {
      icon: Search,
      title: "Searchable Dashboard",
      description: "Designed a secure interface allowing users to categorize, tag, and search through their digital financial records efficiently.",
    },
    {
      icon: Database,
      title: "Flexible Storage",
      description: "Utilized MongoDB to handle unstructured receipt data, ensuring a scalable architecture for long-term expense tracking.",
    },
    {
      icon: FileText,
      title: "Exportable Reports",
      description: "Enabled users to export organized financial data, simplifying the process of expense reporting and tax preparation.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Record Keeping",
      description: "Engineered a robust platform that prioritizes data integrity and security for sensitive financial information.",
    },
  ];

  const projectHighlights = [
    {
      category: "AI & Automation",
      items: [
        "LLM-driven data extraction from images",
        "Automated expense categorization",
        "High-accuracy financial data parsing",
        "Streamlined capture-to-archive workflow",
      ],
    },
    {
      category: "Platform Architecture",
      items: [
        "Scalable Django backend structure",
        "Document-oriented MongoDB integration",
        "Real-time data synchronization",
        "Production-ready deployment standards",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Intelligent Extraction Engine",
      icon: Brain,
      description: "Leveraged Large Language Models and specialized prompt engineering to turn unstructured receipt images into structured JSON data.",
      technologies: ["Python", "LLM APIs", "Prompt Engineering", "Image Processing"],
    },
    {
      title: "Backend Financial Logic",
      icon: Code2,
      description: "Built a robust Django server to manage user accounts, receipt metadata, and automated expense organization workflows.",
      technologies: ["Python", "Django", "REST Framework", "JWT Auth"],
    },
    {
      title: "Data Management & Storage",
      icon: Database,
      description: "Implemented MongoDB for its schema flexibility, allowing for diverse receipt formats and detailed transaction logging.",
      technologies: ["MongoDB", "NoSQL", "Cloud Storage", "Aggregation"],
    },
  ];

  const projectMetrics = [
    { label: "Role", value: "Full-Stack Engineer", icon: Code2 },
    { label: "Timeline", value: "2025", icon: Calendar },
    { label: "Backend", value: "Django / Python", icon: Database },
    { label: "AI Tech", value: "LLM Extraction", icon: Wand2 },
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
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Full-Stack Engineer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2025</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <Brain className="w-4 h-4 mr-1" />
                AI-Driven
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient uppercase">
                SnapReceipt AI
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A smart receipt-management platform that automates capturing, organizing, and tracking purchases using AI.
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
                <span className="text-accent font-semibold">SnapReceipt AI</span> is an innovative expense-management platform designed to eliminate the friction of manual bookkeeping. By combining <span className="text-accent font-semibold">Python, Django, and MongoDB</span>, I developed a production-ready system that handles the entire lifecycle of a financial record—from image upload to organized data.
              </p>
              
              <p className="text-lg leading-relaxed">
                The core of the platform utilizes <span className="text-cta font-semibold">LLM Prompt Engineering</span> to interpret and extract structured information from receipts with high precision. This AI-driven approach allows users to manage their finances effortlessly through a secure, searchable dashboard that categorizes spending automatically.
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
            <p className="text-xl text-muted-foreground">Automating financial organization with AI</p>
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
            <p className="text-xl text-muted-foreground">AI Orchestration & Financial Architecture</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Automate your Finances?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover how AI-driven data capture can transform your expense tracking and organizational workflows.</p>
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

export default SnapReceiptAI;