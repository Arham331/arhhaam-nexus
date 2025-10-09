import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Shield,
  Database,
  Layout,
  Code2,
  CheckCircle2,
  Sparkles,
  Rocket,
  GraduationCap,
  ClipboardList,
  UserCheck,
  FileText,
  Lock,
  Settings,
  TrendingUp,
  Activity,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const TALabPortal = () => {
  const techStack = [
    "ASP.NET",
    "C#",
    "Web Forms",
    "SQL Server",
    "Visual Studio",
    "ADO.NET",
    "IIS",
    "JavaScript",
    "CSS3",
    "Bootstrap",
  ];

  const keyFeatures = [
    {
      icon: Users,
      title: "Multi-User Role System",
      description: "Developed sophisticated 4-tier role-based access control system supporting Admin, Faculty, Teacher Assistants, and Lab Demonstrators with distinct permissions and workflows for each user type.",
    },
    {
      icon: ClipboardList,
      title: "Task Management System",
      description: "Built comprehensive assignment and task distribution platform enabling faculty to create, assign, and monitor work completion by TAs and Lab Demonstrators with deadline tracking and progress monitoring.",
    },
    {
      icon: Shield,
      title: "Secure Authentication & Authorization",
      description: "Implemented robust authentication system with role-based authorization, session management, and secure password hashing to protect sensitive academic data and user information.",
    },
    {
      icon: Settings,
      title: "Administrative Control Panel",
      description: "Created powerful admin dashboard for course registration, faculty management, and TA/LA enrollment with bulk operations, data validation, and audit logging capabilities.",
    },
    {
      icon: Database,
      title: "Normalized Database Architecture",
      description: "Designed efficient SQL Server database schema with proper normalization, foreign key constraints, and optimized indexes for fast query performance across multiple tables.",
    },
    {
      icon: FileText,
      title: "Faculty Dashboard & Reporting",
      description: "Developed intuitive faculty interface for staff management, task assignment, progress tracking, and generating detailed reports on TA/LA performance and task completion rates.",
    },
  ];

  const projectHighlights = [
    {
      category: "User Management",
      items: [
        "4-tier role system (Admin, Faculty, TA, Lab Demonstrator)",
        "Secure registration and authentication workflows",
        "Profile management and account settings",
        "200+ users active per semester",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "ASP.NET Web Forms with Master Pages",
        "ADO.NET for database connectivity",
        "Stored procedures for data operations",
        "Session state management for security",
      ],
    },
    {
      category: "Task & Assignment Features",
      items: [
        "Assignment creation with deadlines and descriptions",
        "Task distribution to multiple TAs/Lab Demonstrators",
        "Work submission with file upload capabilities",
        "Progress tracking and completion status monitoring",
      ],
    },
    {
      category: "Administrative Functions",
      items: [
        "Course registration and management",
        "Faculty member enrollment and role assignment",
        "TA and Lab Demonstrator onboarding",
        "Semester-based data organization",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "ASP.NET Web Forms Architecture",
      icon: Layout,
      description: "Built using ASP.NET Web Forms framework with Master Pages for consistent layout across all pages. Implemented ViewState management, server-side controls, and event-driven programming model. Utilized User Controls for reusable components like navigation menus and user profile widgets.",
      technologies: ["ASP.NET Web Forms", "Master Pages", "User Controls", "ViewState", "PostBack Events"],
    },
    {
      title: "Backend & Business Logic (C#)",
      icon: Code2,
      description: "Developed robust backend using C# with three-tier architecture separating presentation, business logic, and data access layers. Implemented comprehensive validation, error handling, and logging mechanisms. Created custom authentication and authorization modules for role-based access control.",
      technologies: ["C#", "Three-Tier Architecture", "Custom Authentication", "Data Validation", "Error Handling"],
    },
    {
      title: "Database Design & Management",
      icon: Database,
      description: "Designed normalized SQL Server database with 15+ tables including Users, Roles, Courses, Assignments, Submissions, and audit logs. Implemented stored procedures and triggers for complex operations. Used parameterized queries to prevent SQL injection attacks and optimize performance.",
      technologies: ["SQL Server", "T-SQL", "Stored Procedures", "Triggers", "Database Normalization"],
    },
    {
      title: "Security & Role Management",
      icon: Shield,
      description: "Implemented comprehensive security framework with password hashing using SHA-256, session-based authentication, and CSRF protection. Created role-based authorization system restricting access to pages and features based on user roles. Added audit trail for tracking user actions and data modifications.",
      technologies: ["Forms Authentication", "SHA-256 Hashing", "Session Management", "Authorization", "Audit Logging"],
    },
  ];

  const userRoles = [
    {
      role: "Administrator",
      icon: Shield,
      description: "Full system access for managing courses, faculty members, TAs, and Lab Demonstrators. Handles initial setup and semester configuration.",
      capabilities: [
        "Register and manage courses",
        "Enroll faculty members",
        "Add Teacher Assistants and Lab Demonstrators",
        "System configuration and settings",
        "Generate system-wide reports",
      ],
    },
    {
      role: "Faculty",
      icon: GraduationCap,
      description: "Course instructors who create assignments, manage their teaching team, and monitor progress throughout the semester.",
      capabilities: [
        "Create and assign tasks to TAs/Lab Demonstrators",
        "Monitor assignment completion and progress",
        "Manage team members (TAs and Lab Demonstrators)",
        "Review submitted work and provide feedback",
        "Generate performance reports",
      ],
    },
    {
      role: "Teacher Assistant",
      icon: UserCheck,
      description: "TAs who receive task assignments, submit completed work, and support course operations under faculty supervision.",
      capabilities: [
        "View assigned tasks and deadlines",
        "Submit completed assignments",
        "Upload supporting documents",
        "Track personal work history",
        "Communicate with faculty",
      ],
    },
    {
      role: "Lab Demonstrator",
      icon: Activity,
      description: "Lab demonstrators responsible for practical sessions who complete lab-related tasks and maintain lab schedules.",
      capabilities: [
        "Access lab-specific assignments",
        "Submit lab reports and documentation",
        "Update lab session attendance",
        "Manage lab resources",
        "Report technical issues",
      ],
    },
  ];

  const projectMetrics = [
    { label: "User Types", value: "4 Roles", icon: Users },
    { label: "Active Users", value: "200+ per semester", icon: UserCheck },
    { label: "Year", value: "2024", icon: Calendar },
    { label: "Status", value: "Delivered", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Full-Stack Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2024</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Delivered
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
                Teacher Assistant & Lab Demonstrator Application
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              Centralized Academic Management Platform for Faculty, TAs, and Lab Demonstrators
            </p>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
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
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                The <span className="text-accent font-semibold">Teacher Assistant & Lab Demonstrator Application</span> is a comprehensive web-based platform developed using ASP.NET Web Forms to streamline academic operations within educational institutions. This centralized portal serves as a hub where faculty members can efficiently manage their teaching teams, assign tasks, and monitor progress to ensure smooth course operations.
              </p>
              
              <p className="text-lg leading-relaxed">
                Built with <span className="text-accent font-semibold">C# and SQL Server</span> in Visual Studio, the platform implements a sophisticated <span className="text-cta font-semibold">4-tier user role system</span> encompassing Administrators, Faculty members, Teacher Assistants, and Lab Demonstrators. Each role has carefully defined permissions and customized workflows tailored to their specific responsibilities within the academic ecosystem.
              </p>

              <p className="text-lg leading-relaxed">
                The application serves as a critical operational tool where Teacher Assistants and Lab Demonstrators can sign in to view their assigned tasks, submit completed work with supporting documentation, and track their progress throughout the semester. Faculty members utilize the platform's comprehensive dashboard to add and manage staff, create and distribute assignments, set deadlines, and generate performance reports.
              </p>

              <p className="text-lg leading-relaxed">
                With <span className="text-accent font-semibold">200+ active users per semester</span>, the platform has become an essential tool for maintaining organized course operations. The system's robust security features, including role-based access control and audit logging, ensure data integrity while the intuitive interface enables users to quickly adapt and efficiently complete their academic responsibilities.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2 text-accent" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 hover:border-accent/50 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Core capabilities powering academic operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Roles & Capabilities */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">User Roles & Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Four distinct user types with specialized permissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRoles.map((roleInfo, idx) => {
              const Icon = roleInfo.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-gradient">{roleInfo.role}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {roleInfo.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {roleInfo.capabilities.map((capability, i) => (
                        <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Architecture and technology powering the platform
            </p>
          </div>

          <div className="space-y-6">
            {technicalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{detail.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {detail.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Project Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Features, implementation, and organizational impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectHighlights.map((section, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-heading font-semibold flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent" />
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming development and deployment obstacles
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Complex Role-Based Access Control</h3>
              <p className="text-muted-foreground leading-relaxed">
                Managing four distinct user roles with overlapping yet different permissions while maintaining security and preventing unauthorized access.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented custom authorization module using ASP.NET's role provider with database-backed roles. Created permission matrices and access control lists stored in SQL Server. Developed reusable authorization attributes for page-level and feature-level access control, ensuring proper segregation of duties.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Task Assignment Workflow Complexity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing intuitive interface for faculty to assign tasks to multiple TAs and Lab Demonstrators while tracking deadlines and submission status.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Created multi-step wizard interface for task creation with assignment preview. Implemented database triggers for automatic email notifications upon task assignment. Built comprehensive dashboard with color-coded status indicators (pending, in-progress, completed, overdue) enabling faculty to quickly assess team productivity at a glance.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Data Integrity & Concurrent Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining data consistency when multiple users access and modify records simultaneously during peak usage times.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented optimistic concurrency control using SQL Server's timestamp/rowversion columns. Added transaction management in data access layer to ensure ACID properties. Created comprehensive error handling for concurrency violations with user-friendly conflict resolution interfaces, reducing data conflicts by 90%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Impact & Results</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">200+</div>
                <p className="text-muted-foreground">Users per Semester</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">4</div>
                <p className="text-muted-foreground">User Role Types</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">100%</div>
                <p className="text-muted-foreground">Task Tracking Coverage</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                The Teacher Assistant & Lab Demonstrator Application has become an essential operational tool within the academic institution, successfully streamlining task management, improving communication between faculty and teaching assistants, and maintaining organized course operations throughout multiple semesters. The platform's intuitive interface and robust security features ensure reliable performance while supporting over 200 active users each semester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Need an Academic Management System?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can build scalable web applications for educational institutions and enterprise organizations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Start a Conversation
                  <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6 hover:scale-105 transition-all"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TALabPortal;
