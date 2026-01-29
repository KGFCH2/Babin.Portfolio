import { Heart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StudyBackground from "./StudyBackground";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === "/") {
      if (location.pathname === "/") {
        const element = document.querySelector("#home");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      } else {
        navigate("/");
        setTimeout(() => {
          window.history.pushState(null, "", "/");
        }, 150);
      }
    } else if (href.startsWith("#")) {
      // It's a section link
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", href);
          }
        }, 150);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    } else {
      // It's a route link (like /achievements)
      navigate(href);
    }
  };

  return (
    <footer className="border-t border-border bg-card/50 tricolor-divider-top relative pb-2 md:pb-1">
      <StudyBackground />
      <div className="container mx-auto px-4 py-4 md:py-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-2 relative z-10">
            <div className="space-y-3 md:space-y-4 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gradient">Babin.Portfolio</h3>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                B.Tech Student at Adamas University,
                passionate about technology and innovation.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-center relative z-10">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Quick Links
              </h3>
              <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                {[
                  "About",
                  "Projects",
                  "Skills",
                  "Achievements",
                  "Research",
                  "Materials",
                  "Contact",
                ].map((item) => {
                  const href = item === "Achievements" ? "/achievements" : `#${item.toLowerCase()}`;
                  return (
                    <li key={item} className="inline-block">
                      <a
                        href={href}
                        onClick={(e) => handleSectionClick(e, href)}
                        className="text-muted-foreground hover:text-primary transition-smooth nav-underline text-sm md:text-base"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4 text-center md:text-right relative z-10">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Let's Connect</h3>
              <div className="flex justify-center md:justify-end">
                <SocialIcons />
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-3 border-t border-border text-center">
            <p className="text-foreground/90 italic text-xs md:text-sm mb-2 md:mb-1 px-2">
              ⭐ "I don't just write code, I build logic, solve problems, and
              shape the future — one line at a time." ⭐
            </p>

            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              © {currentYear} Made with{" "}
              <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-red-500" /> by Babin
              Bid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;