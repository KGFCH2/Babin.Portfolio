import React from "react";
import { Terminal, Link as LinkIcon, MessageSquare, Code2, Star } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
          element.scrollIntoView({ behavior: "smooth", block: "start" });
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
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", href);
          }
        }, 150);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-6 md:mb-8 relative z-10">
            <div className="space-y-3 md:space-y-6 text-center md:text-left">
              <h3 className="text-2xl md:text-2xl font-bold flex items-center justify-center md:justify-start gap-2 group cursor-default">
                <motion.div whileHover={{ scale: 1.15, y: -6 }} className="transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                  <Terminal className="h-6 w-6 text-blue-700 dark:text-[#89D3BD]" />
                </motion.div>
                <span className="text-blue-700 dark:text-[#89D3BD]">
                  Babin.Portfolio
                </span>
              </h3>
              <p className="text-foreground text-sm md:text-lg leading-relaxed font-medium">
                B.Tech Student at Adamas University,
                <br />passionate about <b className="text-blue-700 dark:text-[#89D3BD]">Technology</b>
                <br />and <b className="text-blue-700 dark:text-[#89D3BD]">Innovation.</b>
              </p>
            </div>

            <div className="space-y-3 md:space-y-6 text-center relative z-10">
              <h3 className="text-2xl md:text-2xl font-bold flex items-center justify-center gap-2 group cursor-default">
                <motion.div whileHover={{ scale: 1.15, y: -6 }} className="transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                  <LinkIcon className="h-6 w-6 text-blue-700 dark:text-[#89D3BD]" />
                </motion.div>
                <span className="text-blue-700 dark:text-[#89D3BD]">
                  Quick Links
                </span>
              </h3>
              <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  "About",
                  "Skills",
                  "Projects",
                  "Research",
                  "Achievements",
                  "Contact",
                ].map((item) => {
                  const href = item === "Achievements" ? "#achievements-preview" : `#${item.toLowerCase()}`;
                  return (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="inline-block"
                    >
                      <a
                        href={href}
                        onClick={(e) => handleSectionClick(e, href)}
                        className="text-muted-foreground hover:text-blue-700 dark:hover:text-[#89D3BD] transition-smooth nav-underline text-sm md:text-base font-medium"
                      >
                        {item}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-3 md:space-y-6 text-center md:text-right relative z-10">
              <h3 className="text-2xl md:text-2xl font-bold flex items-center justify-center md:justify-end gap-2 group cursor-default">
                <motion.div whileHover={{ scale: 1.15, y: -6 }} className="transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                  <MessageSquare className="h-6 w-6 text-blue-700 dark:text-[#89D3BD]" />
                </motion.div>
                <span className="text-blue-700 dark:text-[#89D3BD]">
                  Let's Connect
                </span>
              </h3>
              <div className="flex justify-center md:justify-end mt-4 md:mt-8">
                <div className="md:translate-x-0">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-8 border-t border-border text-center relative z-20">
            <p className="text-foreground/90 italic text-sm md:text-base mb-3 md:mb-2 px-2 flex items-center justify-center gap-2">
              <Star className="h-4 w-4 text-blue-700 dark:text-[#89D3BD] fill-blue-700 dark:fill-[#89D3BD] animate-pulse" />
              <span className="text-blue-700 dark:text-[#89D3BD]">
                <b>"I don't just write code, I build logic, solve problems, and shape the future — one line at a time."</b>
              </span>
              <Star className="h-4 w-4 text-blue-700 dark:text-[#89D3BD] fill-blue-700 dark:fill-[#89D3BD] animate-pulse" />
            </p>

            <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-sm md:text-base px-2">
              <Code2 className="h-4 w-4 text-green-400 fill-green-500 text-primary shrink-0" />
              <span className="font-medium text-blue-700 dark:text-[#89D3BD]">
                © {currentYear} Crafted with Logic & Dedication by <b>Babin Bid</b>
              </span>
              <Code2 className="h-4 w-4 text-green-400 fill-green-500 text-primary shrink-0" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
