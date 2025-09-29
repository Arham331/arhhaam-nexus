import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                <span className="text-xl font-heading font-bold text-primary">A</span>
              </div>
              <span className="text-lg font-heading font-bold text-foreground">
                Arhhaam Awan Qutab
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building future-ready AI systems & playable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Work", path: "/work" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/arhhaam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card hover:bg-accent/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/arhhaam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card hover:bg-accent/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:arham3311@outlook.com"
                className="w-10 h-10 bg-card hover:bg-accent/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available for work
              <span className="inline-block w-2 h-2 bg-cta rounded-full ml-2 animate-pulse"></span>
            </p>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arhhaam Awan Qutab. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision & futuristic vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
