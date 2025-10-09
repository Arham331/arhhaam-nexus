import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <ParticleBackground />
      <div className="text-center space-y-6 relative z-10 px-6">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-gradient">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent via-cta to-accent rounded-full mx-auto"></div>
        </div>
        <p className="text-2xl md:text-3xl font-heading text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Oops! Page not found
        </p>
        <p className="text-lg text-muted-foreground max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Link to="/">
            <Button
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold"
            >
              <Home className="mr-2 w-5 h-5" />
              Return to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
