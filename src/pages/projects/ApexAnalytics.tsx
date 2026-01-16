import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Database,
  LineChart,
  Layout,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Zap,
  Share2,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ApexAnalytics = () => {
  const techStack = [
    "React",
    "Django",
    "GCP",
    "Docker",
    "PostgreSQL",
    "Google BigQuery",
    "REST API",
  ];

  const keyFeatures = [
    {
      icon: Share2,
      title: "100+ System Integration",
      description: "Architected a centralized hub that aggregates data from over 100 diverse external systems for unified analysis.",
    },
    {
      icon: LineChart,
      title: "Real-Time KPI Monitoring",
      description: "Built dynamic dashboards providing live performance tracking and sub-second data visualization via BigQuery.",
    },
    {
      icon: Database,
      title: "GCP Data Pipelines",
      description: "Utilized Google Cloud Platform services to optimize ETL pipelines, ensuring scalable performance for massive datasets.",
    },
    {
      icon: Code2,
      title: "Custom Reporting Engine",
      description: "Developed a robust REST API allowing users to generate, customize, and export tailored data reports for decision making.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description: "Implemented high-level security protocols and compliance standards to protect sensitive enterprise information.",
    },
    {
      icon: Zap,
      title: "Dockerized Architecture",
      description: "Containerized the entire application stack to ensure seamless deployment and environment consistency.",
    },
  ];

  const projectHighlights = [
    {
      category: "Data Performance",
      items: [
        "Optimized BigQuery pipelines for massive scale",
        "Centralized 100+ fragmented data sources",
        "Real-time processing for dynamic KPI dashboards",
        "Sub-second query response times for complex viz",
      ],
    },
    {
      category: "Infrastructure",
      items: [
        "Docker containerization for dev/prod parity",
        "GCP cloud-native service integration",
        "Automated deployment for microservices",
        "Enterprise-grade security and compliance",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Full-Stack Architecture",
      icon: Layout,
      description: "Developed a high-performance frontend using React for interactive visualization, paired with a robust Django/PostgreSQL backend for complex data management and aggregation.",
      technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Cloud & Big Data",
      icon: Database,
      description: "Leveraged the GCP ecosystem, specifically BigQuery, to handle large-scale data transformations and real-time analytical processing from disparate sources.",
      technologies: ["GCP", "BigQuery", "ETL Pipelines", "Cloud SQL"],
    },
    {
      title: "DevOps & Deployment",
      icon: Rocket,
      description: "Standardized the deployment lifecycle using Docker, enabling consistent enterprise-grade delivery and horizontal scaling within cloud environments.",
      technologies: ["Docker", "GCP Compute Engine", "CI/CD", "IAM Security"],
    },
  ];

  const projectMetrics = [
    { label: "Data Sources", value: "100+", icon: Database },
    { label: "Infrastructure", value: "GCP / Docker", icon: Zap },
    { label: "Security", value: "Enterprise", icon: ShieldCheck },
    { label: "Status", value: "Production", icon: CheckCircle2 },
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
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Full-Stack Architect</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2026</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Enterprise Ready
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient uppercase">
                Apex Analytics
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A scalable data analytics platform for real-time KPI monitoring, data centralization, and custom visualization.
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
                <span className="text-accent font-semibold">Apex Analytics</span> is an enterprise-level platform designed to solve the fragmentation of modern data ecosystems. By architecting a centralized hub using <span className="text-accent font-semibold">Django and React</span>, I enabled the integration of over 100 diverse systems, turning siloed information into a unified data asset.
              </p>
              
              <p className="text-lg leading-relaxed">
                The core engine utilizes <span className="text-cta font-semibold">GCP BigQuery</span> to drive high-performance data pipelines. This allows for real-time KPI monitoring and the generation of dynamic dashboards that remain responsive even when processing millions of data points across complex ETL (Extract, Transform , Load) workflows.
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
            <p className="text-xl text-muted-foreground">Engineering power and precision for data visualization</p>
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold">System Architecture</h2>
            <p className="text-xl text-muted-foreground">Deep dive into the GCP and Docker infrastructure</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Scale Your Data?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Let's discuss how I can help architect your next big data or analytics project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all">
                  Start a Conversation
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

export default ApexAnalytics;