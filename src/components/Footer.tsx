import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Gallery", href: "#collections" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="gradient-footer py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1">
            <span className="font-script text-2xl text-coral">P</span>
            <span className="font-heading text-lg font-semibold text-foreground tracking-wide">
              aperFellows
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.name === "Reviews"
                    ? "text-coral"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/paperfellows"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/paperfellows"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
