import { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const navListRef = useRef<HTMLUListElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

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

    // Only observe sections on the home page
    if (location.pathname === "/") {
      const sections = ["home", "about", "skills", "projects", "research", "contact"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = useMemo(() => [
    { name: "Home", href: "#home", type: "section" as const },
    { name: "About", href: "#about", type: "section" as const },
    { name: "Skills", href: "#skills", type: "section" as const },
    { name: "Projects", href: "#projects", type: "section" as const },
    { name: "Achievements", href: "/achievements", type: "route" as const },
    { name: "Research", href: "#research", type: "section" as const },
    { name: "Contact", href: "#contact", type: "section" as const },
  ], []);

  // Update line position when active section changes or on mount
  useEffect(() => {
    // For section-based items, highlight based on scroll. For route items, highlight based on pathname.
    const activeIndex = navItems.findIndex(item => {
      if (item.type === "section") {
        return item.href === `#${activeSection}` && location.pathname === "/";
      }
      if (item.type === "route") {
        return item.href === location.pathname;
      }
      return false;
    });

    const activeLink = navItemsRef.current[activeIndex];

    if (activeLink && navListRef.current) {
      const listRect = navListRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setLineStyle({
        width: linkRect.width,
        left: linkRect.left - listRect.left,
      });
    }
  }, [activeSection, navItems, location.pathname]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // If it's a section link
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(href.slice(1));
            // Update URL hash
            window.history.pushState(null, "", href);
          }
        }, 150);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(href.slice(1));
          // Update URL hash
          window.history.pushState(null, "", href);
        }
      }
    } else {
      // If it's a route link (like /achievements)
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-background/10 backdrop-blur-2xl shadow-card"
        : "bg-background/02 backdrop-blur-2xl"
        }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === "/") {
              scrollToSection("#home");
            } else {
              navigate("/");
              setTimeout(() => {
                setActiveSection("home");
                window.history.pushState(null, "", "/");
              }, 150);
            }
          }}
          className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 dark:from-[#89D3BD] dark:to-cyan-400 text-transparent bg-clip-text"
        >
          Babin.Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="relative">
          <ul ref={navListRef} className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                {item.type === "route" ? (
                  <Link
                    ref={(el) => (navItemsRef.current[index] = el)}
                    to={item.href}
                    className={`text-foreground/80 hover:text-primary transition-smooth font-medium ${location.pathname === item.href ? "text-primary" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    ref={(el) => (navItemsRef.current[index] = el)}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`text-foreground/80 hover:text-primary transition-smooth font-medium ${activeSection === item.href.slice(1) && location.pathname === "/" ? "text-primary" : ""}`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Animated Line Indicator */}
          <div
            className="absolute bottom-0 h-0.5 bg-blue-700 dark:bg-[#89D3BD] transition-all duration-300 ease-out rounded-full"
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
            className="md:hidden p-2 min-h-[48px] min-w-[48px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
        <div
          className="md:hidden bg-background/10 backdrop-blur-2xl border-t border-border animate-fade-in"
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.type === "route" ? (
                  <Link
                    to={item.href}
                    className={`text-base px-4 py-3 min-h-[48px] rounded-lg transition-colors flex items-center font-medium ${location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`text-base px-4 py-3 min-h-[48px] rounded-lg transition-colors flex items-center font-medium ${activeSection === item.href.slice(1) && location.pathname === "/"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
