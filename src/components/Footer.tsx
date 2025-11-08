import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 tricolor-divider-top">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Portfolio</h3>
              <p className="text-muted-foreground">
                B.Tech Student at Adamas University, passionate about
                technology
                <br />and innovation.
              </p>
            </div>

            <div className="space-y-4 md:text-center md:items-center">
              <h3 className="text-lg font-semibold text-foreground">
                Quick Links
              </h3>
              <ul className="flex flex-wrap items-center gap-4 md:justify-center">
                {[
                  "About",
                  "Projects",
                  "Skills",
                  "Research",
                  "Materials",
                  "Contact",
                ].map((item) => (
                  <li key={item} className="inline-block">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-smooth nav-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 md:items-end md:text-right">
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://github.com/KGFCH2"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/babin-bid-853728293"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:babinbid05@gmail.com"
                  title="Email"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center space-y-3">
            <p className="text-foreground/90 italic text-sm md:text-base">
              ⭐ "I don't just write code, I build logic, solve problems, and
              shape the future — one line at a time." ⭐
            </p>

            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Babin
              Bid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;