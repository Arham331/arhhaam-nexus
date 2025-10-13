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
  Smartphone,
  MapPin,
  Navigation,
  Building2,
  Calendar as CalendarIcon,
  Bell,
  Shield,
  Zap,
  Globe,
  Star,
  CheckCircle2,
  Sparkles,
  Rocket,
  Utensils,
  Heart,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const RaahERaast = () => {
  const techStack = [
    "Kotlin",
    "Android SDK",
    "Firebase",
    "Google Cloud API",
    "Firebase Authentication",
    "Firestore",
    "Firebase Realtime Database",
    "Push Notifications",
    "Google Maps API",
    "Material Design",
  ];

  const keyFeatures = [
    {
      icon: Users,
      title: "Tourist-Guide Connection Platform",
      description: "Developed comprehensive platform that seamlessly connects tourists with verified local tour guides, enabling personalized travel experiences and authentic cultural immersion.",
    },
    {
      icon: MapPin,
      title: "Real-Time Location Tracking",
      description: "Implemented GPS-based real-time tracking system allowing tourists to monitor guide location, share itineraries, and ensure safety throughout the travel experience.",
    },
    {
      icon: CalendarIcon,
      title: "Smart Booking System",
      description: "Built intuitive booking interface for scheduling tours, managing reservations, and handling payments with automated confirmation and reminder notifications.",
    },
    {
      icon: Shield,
      title: "Firebase Authentication & Security",
      description: "Integrated Firebase Authentication for secure user sign-up, login, and profile management with email verification and social login options for enhanced security.",
    },
    {
      icon: Zap,
      title: "Live Data Synchronization",
      description: "Leveraged Firebase Realtime Database and Firestore for instant data updates, ensuring tourists and guides receive real-time information about bookings and locations.",
    },
    {
      icon: Building2,
      title: "Curated Travel Recommendations",
      description: "Developed recommendation engine providing personalized suggestions for hotels, restaurants, popular locations, and upcoming festivals based on user preferences.",
    },
  ];

  const projectHighlights = [
    {
      category: "Core Features",
      items: [
        "Tourist-guide matching and connection system",
        "Real-time GPS tracking and navigation",
        "Integrated booking and payment processing",
        "Push notifications for updates and reminders",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "Native Android development using Kotlin",
        "Firebase Authentication for secure user management",
        "Firestore for scalable data storage",
        "Google Maps API for location services",
      ],
    },
    {
      category: "Content & Recommendations",
      items: [
        "Curated database of hotels and accommodations",
        "Restaurant recommendations with ratings",
        "Popular tourist locations and attractions",
        "Upcoming festivals and cultural events calendar",
      ],
    },
    {
      category: "User Experience",
      items: [
        "Material Design UI for intuitive navigation",
        "Responsive layouts for various screen sizes",
        "Offline mode for accessing saved information",
        "Multi-language support for international tourists",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Android Development (Kotlin)",
      icon: Smartphone,
      description: "Built native Android application using Kotlin, leveraging modern Android architecture components including MVVM pattern, LiveData, and ViewModels. Implemented coroutines for asynchronous operations and efficient memory management.",
      technologies: ["Kotlin", "Android SDK", "MVVM Architecture", "Coroutines", "LiveData", "Material Design"],
    },
    {
      title: "Firebase Integration",
      icon: Zap,
      description: "Integrated comprehensive Firebase suite for backend services. Utilized Firebase Authentication for user management, Firestore for structured data storage, Realtime Database for live updates, and Cloud Messaging for push notifications.",
      technologies: ["Firebase Auth", "Firestore", "Realtime Database", "Cloud Messaging", "Firebase Storage", "Analytics"],
    },
    {
      title: "Google Cloud Services",
      icon: Globe,
      description: "Leveraged Google Cloud APIs for location services, geocoding, and place details. Implemented Google Maps SDK for interactive maps, route planning, and real-time navigation features with custom markers and overlays.",
      technologies: ["Google Maps API", "Places API", "Geocoding API", "Directions API", "Location Services"],
    },
    {
      title: "Real-Time Features",
      icon: Navigation,
      description: "Developed real-time tracking system using GPS and Firebase Realtime Database for instant location updates. Implemented WebSocket connections for live chat between tourists and guides, ensuring seamless communication.",
      technologies: ["GPS Tracking", "Real-time Database", "WebSocket", "Location Updates", "Push Notifications"],
    },
  ];

  const projectMetrics = [
    { label: "Platform", value: "Android", icon: Smartphone },
    { label: "Users", value: "1000+ Active", icon: Users },
    { label: "Year", value: "2023", icon: Calendar },
    { label: "Status", value: "Live", icon: CheckCircle2 },
  ];

  const coreModules = [
    {
      title: "Guide Discovery & Booking",
      description: "Comprehensive system for browsing verified tour guides with profiles, ratings, reviews, and availability. Tourists can filter by language, expertise, location, and pricing. Integrated booking flow with calendar selection, instant confirmation, and secure payment processing.",
      icon: Users,
    },
    {
      title: "Location & Navigation",
      description: "Real-time GPS tracking displays guide and tourist locations on interactive maps. Features include route optimization, turn-by-turn navigation, popular attraction markers, and geofencing for location-based notifications and safety alerts.",
      icon: MapPin,
    },
    {
      title: "Travel Recommendations",
      description: "Curated content engine providing personalized recommendations for accommodations, dining, attractions, and events. Features user reviews, ratings, photos, pricing information, and integration with booking platforms for seamless reservations.",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">Mobile Developer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2023</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Delivered Early
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient">
                Raah-e-Raast
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              Native Android Platform Connecting Tourists with Local Guides for Authentic Travel Experiences
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
                <div
                  key={idx}
                  className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group"
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
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-accent font-semibold">Raah-e-Raast</span> is a comprehensive mobile platform designed to revolutionize the travel experience by seamlessly connecting tourists with verified local tour guides. Built natively for Android using Kotlin, the application bridges the gap between travelers seeking authentic experiences and local experts who can provide cultural insights and personalized itineraries.
              </p>
              
              <p className="text-lg leading-relaxed">
                The platform features <span className="text-accent font-semibold">real-time GPS tracking</span> and an intuitive booking system that enables tourists to discover, connect with, and schedule tours with qualified guides. Safety and transparency are prioritized through live location sharing, allowing users to monitor their guide's whereabouts throughout the journey.
              </p>

              <p className="text-lg leading-relaxed">
                Powered by <span className="text-cta font-semibold">Firebase backend services</span>, Raah-e-Raast delivers secure authentication, real-time data synchronization, and instant notifications. The integration of Google Cloud APIs provides robust location services, interactive mapping, and accurate place information, creating a seamless navigation experience.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond guide connections, the app serves as a comprehensive travel companion, offering <span className="text-accent font-semibold">curated recommendations</span> for hotels, restaurants, popular tourist locations, and upcoming cultural festivals. With over 1,000 active users, Raah-e-Raast has successfully enhanced travel experiences by combining local expertise with modern technology.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-accent" />
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
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Essential capabilities that define the Raah-e-Raast experience
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

      {/* Core Modules */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Modules</h2>
            <p className="text-xl text-muted-foreground">
              Essential components powering the platform
            </p>
          </div>

          <div className="space-y-6">
            {coreModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={idx}
                  className="overflow-clip glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-gradient">{module.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {module.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
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
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Project Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Features, implementation, and impact
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
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming mobile development obstacles
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Real-Time Location Accuracy & Battery Optimization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maintaining accurate GPS tracking while minimizing battery drain posed a significant challenge for continuous monitoring during tours.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented intelligent location update intervals that adapt based on movement speed and battery level. Used geofencing to reduce GPS polling when stationary and leveraged Android's FusedLocationProvider for optimal accuracy-battery balance. Background service optimization reduced battery consumption by 40% while maintaining reliable tracking.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Offline Functionality & Data Synchronization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensuring app usability in areas with poor network connectivity while maintaining data consistency when reconnected.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented local caching with Room Database for offline access to guides, locations, and recommendations. Used Firebase offline persistence to queue data changes during disconnection and automatically sync when connectivity is restored. Added conflict resolution logic to handle simultaneous updates from multiple devices.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Scalable Recommendation System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating personalized recommendations for diverse user preferences while handling growing content database efficiently.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Developed hybrid recommendation engine combining collaborative filtering and content-based approaches. Implemented Firebase Cloud Functions for server-side processing and caching. Used indexing strategies in Firestore for fast queries and created user preference profiles that evolve with interaction history, improving recommendation relevance by 60%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Impact & Results</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">1000+</div>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">Android</div>
                <p className="text-muted-foreground">Native Platform</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">High</div>
                <p className="text-muted-foreground">User Satisfaction</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Raah-e-Raast successfully bridges the gap between tourists seeking authentic experiences and local guides offering cultural expertise. By combining real-time tracking, intelligent booking systems, and curated recommendations with robust Firebase integration, the platform has become a trusted companion for travelers exploring new destinations. The application demonstrates how mobile technology can enhance tourism while supporting local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Interested in Mobile Development Projects?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can build innovative mobile solutions that connect people and enhance experiences
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

export default RaahERaast;
