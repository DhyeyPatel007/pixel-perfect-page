import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Gallery", href: "#collections" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1">
            <span className="font-script text-2xl md:text-3xl text-coral">P</span>
            <span className="font-heading text-lg md:text-xl font-semibold text-foreground tracking-wide">aperFellows</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.name === "Home" 
                    ? "text-coral" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/20 bg-background/50 text-sm font-medium text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
          >
            WhatsApp
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-base font-medium py-2 ${
                    link.name === "Home"
                      ? "text-coral"
                      : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-foreground/20 bg-background/50 text-sm font-medium text-foreground mt-2"
              >
                WhatsApp
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
