import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:arham3311@outlook.com",
      label: "arham3311@outlook.com",
      color: "text-cta",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/arhhaam",
      label: "linkedin.com/in/arhhaam",
      color: "text-accent",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/arhhaam",
      label: "github.com/arhhaam",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for full-time roles, contract work, and consulting opportunities. Let's
            discuss how we can work together.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cta/10 border border-cta/20 rounded-full">
            <div className="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
            <span className="text-sm text-cta font-medium">Available for work</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-card border border-accent/20 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-accent/30 focus:border-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-accent/30 focus:border-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-accent/30 focus:border-accent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-accent/30 focus:border-accent resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg shadow-gold"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-card border border-accent/20 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Connect With Me</h2>
              <div className="space-y-6">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-background/50 border border-accent/10 rounded-lg hover:border-accent/30 hover:bg-accent/5 transition-all hover:scale-105 group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className={`w-6 h-6 ${link.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-card border border-accent/20 rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Response Time</h3>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    I typically respond within 24-48 hours during weekdays. For urgent inquiries,
                    feel free to reach out directly via email.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-card to-primary border border-accent/20 rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold mb-3">Open to Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Currently available for:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                  <span>Full-time positions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                  <span>Contract projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                  <span>Technical consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-cta rounded-full"></div>
                  <span>Freelance opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
