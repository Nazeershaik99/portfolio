
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button>
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
