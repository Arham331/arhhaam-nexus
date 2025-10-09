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
  Gamepad2,
  Brain,
  Eye,
  Zap,
  Layers,
  Map,
  Heart,
  Award,
  CheckCircle2,
  Sparkles,
  Rocket,
  Trophy,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const UnHinged = () => {
  const techStack = [
    "Godot Engine",
    "GDScript",
    "AI Systems",
    "Object Pooling",
    "Procedural Generation",
    "State Machines",
    "Physics Engine",
    "Audio Systems",
  ];

  const keyFeatures = [
    {
      icon: Brain,
      title: "Psychological Gameplay Mechanics",
      description: "Designed core gameplay around fear, trauma, and memory loss, creating an emotionally resonant experience that explores mental health through interactive storytelling.",
    },
    {
      icon: Eye,
      title: "Perception-Shifting Environments",
      description: "Implemented dynamic environments that morph based on the player's mental state, creating an unsettling atmosphere where reality itself becomes unreliable.",
    },
    {
      icon: Zap,
      title: "Dynamic Fear Meter System",
      description: "Developed a sophisticated Fear Meter that actively distorts reality, affecting visual perception, audio cues, and gameplay mechanics to heighten psychological tension.",
    },
    {
      icon: Map,
      title: "Procedural Memory Maps",
      description: "Created procedurally generated maps symbolizing fragmented memory, ensuring each playthrough offers unique layouts that reflect the protagonist's fractured psyche.",
    },
    {
      icon: Layers,
      title: "Advanced Object Pooling",
      description: "Engineered optimized object pooling systems to maintain consistent 60 FPS performance on low-end hardware, ensuring accessibility across different platforms.",
    },
    {
      icon: Heart,
      title: "Mental Health Representation",
      description: "Focused on authentic mental health representation, transforming psychological struggles into an immersive, empathetic gaming experience that resonates with players.",
    },
  ];

  const projectHighlights = [
    {
      category: "Game Design",
      items: [
        "Psychological survival mechanics centered on mental health themes",
        "2D top-down perspective with isometric elements",
        "Dynamic difficulty scaling based on player's Fear Meter",
        "Multiple endings influenced by psychological choices",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "Custom AI behavior system for unpredictable encounters",
        "Procedural generation algorithms for unique map layouts",
        "State machine architecture for complex character behaviors",
        "Optimized rendering pipeline achieving 60 FPS on low-end hardware",
      ],
    },
    {
      category: "Innovation & Impact",
      items: [
        "Earned recognition for psychological depth and authenticity",
        "Successfully represented mental health in gaming medium",
        "Created emotional connection through interactive mechanics",
        "Praised for innovative approach to serious subject matter",
      ],
    },
    {
      category: "Audio & Visual Design",
      items: [
        "Dynamic audio system responding to Fear Meter levels",
        "Visual distortion effects reflecting mental state",
        "Atmospheric lighting that shifts with player psychology",
        "Symbolic art design representing trauma and memory",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Game Architecture",
      icon: Gamepad2,
      description: "Built with Godot Engine using GDScript, implementing modular component-based architecture for gameplay systems. Designed scalable state machines for character AI, fear mechanics, and environmental interactions with clean separation of concerns.",
      technologies: ["Godot Engine", "GDScript", "State Machines", "Component Architecture", "Scene Management"],
    },
    {
      title: "AI & Behavior Systems",
      icon: Brain,
      description: "Developed sophisticated AI systems with unpredictable behavior patterns that respond to player's mental state. Implemented behavior trees, steering behaviors, and dynamic decision-making to create compelling psychological encounters.",
      technologies: ["Behavior Trees", "Pathfinding", "State-based AI", "Steering Behaviors", "Dynamic Difficulty"],
    },
    {
      title: "Procedural Generation",
      icon: Map,
      description: "Engineered procedural generation system for creating unique map layouts representing fragmented memories. Utilized algorithms for room placement, corridor generation, and symbolic environmental storytelling to ensure replayability.",
      technologies: ["Procedural Algorithms", "Map Generation", "Room Placement", "Dungeon Generation", "Seed Systems"],
    },
    {
      title: "Performance Optimization",
      icon: Zap,
      description: "Implemented advanced object pooling, efficient collision detection, and optimized rendering techniques. Achieved consistent 60 FPS on low-end hardware through profiling, memory management, and batched rendering strategies.",
      technologies: ["Object Pooling", "Memory Management", "Rendering Optimization", "Collision Optimization", "Profiling Tools"],
    },
  ];

  const projectMetrics = [
    { label: "Timeline", value: "Final Year Project", icon: Calendar },
    { label: "Role", value: "Lead Developer", icon: Users },
    { label: "Performance", value: "60 FPS Low-End", icon: Rocket },
    { label: "Status", value: "Completed", icon: CheckCircle2 },
  ];

  const coreFeatures = [
    {
      title: "Fear Meter Mechanics",
      description: "A core gameplay system that tracks the protagonist's psychological state. As fear increases, reality distorts—visuals warp, audio becomes unreliable, and gameplay mechanics shift, forcing players to manage their mental state strategically.",
      icon: Brain,
    },
    {
      title: "Memory Fragmentation",
      description: "Procedurally generated maps reflect the protagonist's fractured memory. Each playthrough offers different layouts, symbolizing how trauma fragments coherent thought and creates a disorienting psychological landscape.",
      icon: Map,
    },
    {
      title: "Survival Through Psychology",
      description: "Traditional survival mechanics are reimagined through a psychological lens. Health represents mental stability, items symbolize coping mechanisms, and 'enemies' manifest as psychological manifestations rather than physical threats.",
      icon: Heart,
    },
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
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Game Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2025</Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-500 text-lg px-4 py-1">
                <Trophy className="w-4 h-4 mr-1" />
                Final Year Project
              </Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient">
                unHinged
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              A Psychological 2D Survival Escape Game Exploring Mental Health Through Immersive Gameplay and Innovative Design
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
                <span className="text-accent font-semibold">unHinged</span> is an emotionally resonant psychological 2D survival escape game developed as my Final Year Project. The game explores the complex intersection of mental health, trauma, and survival through innovative gameplay mechanics that transform psychological struggles into an interactive, empathetic experience.
              </p>
              
              <p className="text-lg leading-relaxed">
                At its core, the game centers on <span className="text-accent font-semibold">fear, trauma, and memory loss</span> as fundamental gameplay mechanics rather than mere narrative elements. Players navigate perception-shifting environments where reality itself becomes unreliable, controlled by a dynamic Fear Meter that actively distorts visual and audio elements based on the protagonist's psychological state.
              </p>

              <p className="text-lg leading-relaxed">
                The game features <span className="text-cta font-semibold">procedurally generated maps</span> that symbolize fragmented memory, ensuring each playthrough offers unique layouts reflecting the protagonist's fractured psyche. Through advanced object pooling and optimized systems, unHinged maintains consistent 60 FPS performance on low-end hardware, making this emotionally important experience accessible to a wider audience.
              </p>

              <p className="text-lg leading-relaxed">
                The project earned recognition for its <span className="text-accent font-semibold">psychological depth and innovation</span>, successfully representing mental health struggles in the gaming medium with authenticity and empathy. By blending narrative depth with innovative design, unHinged demonstrates how games can tackle serious subject matter while remaining engaging and interactive.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Gamepad2 className="w-6 h-6 mr-2 text-accent" />
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
              Innovative mechanics that define the unHinged experience
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

      {/* Core Gameplay Systems */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Gameplay Systems</h2>
            <p className="text-xl text-muted-foreground">
              Psychological mechanics that drive the experience
            </p>
          </div>

          <div className="space-y-6">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{feature.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
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
              Engineering solutions behind the gameplay
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
              Achievements, innovation, and impact
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

      {/* Design Philosophy */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Design Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-accent">Mental Health Focus</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Authentic representation of psychological struggles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Empathetic approach to sensitive subject matter</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Educational value through interactive experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Avoiding stigmatization or trivialization</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-accent">Gameplay Innovation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Mechanics that reinforce narrative themes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Dynamic systems responding to player psychology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Replayability through procedural generation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Accessible performance on various hardware</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming technical and design obstacles
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Balancing Accessibility with Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensuring the game runs smoothly on low-end hardware while maintaining visual quality and complex systems.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented advanced object pooling to reduce memory allocation overhead. Optimized sprite batching, utilized efficient collision detection algorithms, and profiled extensively to identify bottlenecks. Achieved consistent 60 FPS on low-end hardware through careful resource management and rendering optimization.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Authentic Mental Health Representation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Representing psychological struggles authentically without stigmatization or exploitation of sensitive topics.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Conducted extensive research into psychological trauma and consulted with mental health professionals. Focused on empathetic design that honors the player's experience while maintaining engaging gameplay. Used symbolism and metaphor to represent abstract concepts, creating emotional resonance without exploitation.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Procedural Generation with Narrative Coherence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating procedurally generated maps that feel intentional and support the narrative themes of fragmented memory.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Developed custom algorithms that generate layouts following specific rules reflecting psychological fragmentation. Implemented seed-based generation for consistency, hand-crafted "puzzle pieces" that combine procedurally, and validation systems ensuring playability. The result is unique layouts that always feel thematically appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Recognition */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Impact & Recognition</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">FYP</div>
                <p className="text-muted-foreground">Final Year Project</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">60 FPS</div>
                <p className="text-muted-foreground">On Low-End Hardware</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">Praised</div>
                <p className="text-muted-foreground">For Innovation & Depth</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                unHinged successfully demonstrates how video games can tackle serious subject matter with authenticity and empathy. By transforming mental health struggles into an emotional, interactive experience, the project earned recognition for its psychological depth and innovative approach to game design. The game proves that meaningful storytelling and engaging gameplay can coexist in service of important themes.
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
              Interested in Game Development Projects?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can bring innovative gameplay mechanics and compelling narratives to your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Get in Touch
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

export default UnHinged;
