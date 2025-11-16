import { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const navListRef = useRef<HTMLUListElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    const sections = ["home", "about", "projects", "skills", "research", "materials", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Materials", href: "#materials" },
    { name: "Contact", href: "#contact" },
  ], []);

  // Update line position when active section changes or on mount
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.href === `#${activeSection}`);
    const activeLink = navItemsRef.current[activeIndex];

    if (activeLink && navListRef.current) {
      const listRect = navListRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setLineStyle({
        width: linkRect.width,
        left: linkRect.left - listRect.left,
      });
    }
  }, [activeSection, navItems]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-background/80 backdrop-blur-lg shadow-card"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="text-2xl font-bold text-gradient"
        >
          Babin.Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="relative">
          <ul ref={navListRef} className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <a
                  ref={(el) => (navItemsRef.current[index] = el)}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setActiveSection(item.href.slice(1)); // Immediately set active section on click
                  }}
                  className={`text-foreground/80 hover:text-primary transition-smooth font-medium ${activeSection === item.href.slice(1) ? "text-primary" : ""
                    }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Animated Line Indicator */}
          <div
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 transition-all duration-300 ease-out rounded-full"
            style={{
              width: `${lineStyle.width}px`,
              left: `${lineStyle.left}px`,
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-lg text-foreground/80 hover:text-primary transition-smooth font-medium block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
