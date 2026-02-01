import { Heart, Star } from "lucide-react";
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
    <footer className="border-t border-border bg-card/50 tricolor-divider-top relative pb-6 md:pb-8">
      <StudyBackground />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-6 relative z-10">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold" style={{ background: 'linear-gradient(to right, #4ade80, #3b82f6, #8b5cf6, #ef4444)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Babin.Portfolio</h3>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                B.Tech Student at Adamas University,
                <br />passionate about <b>Technology</b>
                <br />and <b>Innovation.</b>
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-center relative z-10">
              <h3 className="text-xl md:text-2xl font-bold" style={{ background: 'linear-gradient(to right, #4ade80, #3b82f6, #8b5cf6, #ef4444)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}> Quick Links </h3>
              <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
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

            <div className="space-y-4 md:space-y-6 text-center md:text-right relative z-10">
              <h3 className="text-xl md:text-2xl font-bold md:-translate-x-4" style={{ background: 'linear-gradient(to right, #4ade80, #3b82f6, #8b5cf6, #ef4444)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Let's Connect</h3>
              <div className="flex justify-center md:justify-end mt-16 md:mt-18">
                <SocialIcons />
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-border text-center relative z-20">
            <p className="text-foreground/90 italic text-sm md:text-base mb-3 md:mb-2 px-2 flex items-center justify-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 animate-pulse" />
              "I don't just write code, I build logic, solve problems, and
              shape the future — one line at a time."
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 animate-pulse" />
            </p>

            <p className="text-muted-foreground flex items-center justify-center gap-2 text-base">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-500 fill-red-500" /> by Babin
              Bid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;