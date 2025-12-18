import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ChevronDown, User, Globe, Compass, Zap, Brain, Users, Cpu, Atom, Microscope, BarChart3, Rocket, Search } from "lucide-react";
import { previewThenDownload } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadResume = () => previewThenDownload("/Babin_Bid_Resume.pdf", "Babin_Bid_Resume.pdf");

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8"
    >
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium" role="status" aria-live="polite">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <SectionTitle
                text="Babin Bid"
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400"
              />
            </h1>
            <div className="text-2xl md:text-3xl lg:text-3xl font-semibold text-foreground min-h-[140px] md:min-h-[160px] flex items-center justify-center">
              <div className="whitespace-nowrap flex items-center gap-2">
                <TypeAnimation
                  sequence={[
                    '👨‍💻 Computer Science Engineer 👨‍💻',
                    1600,
                    '🌐 Learning Web Development 🌐',
                    1500,
                    '📐 Mathematics Lover ❤️',
                    1400,
                    '🧩 Problem Solver 🧩',
                    1200,
                    '🔬 Research on various aspects 🔬',
                    1500,
                    '⚡ Tech Enthusiast ⚡',
                    1200,
                    '🧠 Brainstorming 🧠',
                    1200,
                    '🤝 Radical Collaboration 🤝',
                    1400,
                    '🤖 Exploring Artificial Intelligence & Machine Learning 🤖',
                    1500,
                    '⚛️ Quantum Computing ⚛️ | 🌐 Edge Computing 🌐',
                    1700,
                    '🔬 Gathering knowledge in Quantum Physics 🔬',
                    1400,
                    '📊 Interested in Data Analysis & Data Science 📊',
                    1400,
                    '🚀 Always Eager to Learn, Collaborate & Innovate 🚀',
                    1600,
                    '🔍 Open to Internships, Projects, Papers & Opportunities 🔍',
                    2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech 3rd Year Student at Adamas University, Kolkata, India. Passionate
            about building innovative solutions and contributing to cutting-edge
            research.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all duration-300 active:scale-95 w-full sm:w-auto"
              onClick={handleDownloadResume}
              aria-label="Download Babin Bid Resume"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 active:scale-95 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
              aria-label="Navigate to contact section"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8 flex-wrap">
            <a
              href="https://github.com/KGFCH2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
              className="relative group p-3 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {/* Grey background box on hover - dark mode */}
              <div className="absolute inset-0 bg-gray-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl dark:block hidden" />
              <div className="absolute inset-0 bg-gray-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden" />
              {/* Grey background box on hover - light mode */}
              <div className="absolute inset-0 bg-gray-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <div className="absolute inset-0 bg-gray-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <Github className="h-6 w-6 text-foreground/60 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors relative z-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/babin-bid-853728293"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
              className="relative group p-3 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {/* Blue background box on hover - dark mode */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl dark:block hidden" />
              <div className="absolute inset-0 bg-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden" />
              {/* Blue background box on hover - light mode */}
              <div className="absolute inset-0 bg-blue-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <div className="absolute inset-0 bg-blue-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <Linkedin className="h-6 w-6 text-foreground/60 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors relative z-10" />
            </a>
            <a
              href="mailto:babin.bid@stu.adamasuniversity.ac.in"
              aria-label="Send email"
              title="Email"
              className="relative group p-3 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {/* Red background box on hover - dark mode */}
              <div className="absolute inset-0 bg-red-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl dark:block hidden" />
              <div className="absolute inset-0 bg-red-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden" />
              {/* Red background box on hover - light mode */}
              <div className="absolute inset-0 bg-red-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <div className="absolute inset-0 bg-red-300/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden" />
              <Mail className="h-6 w-6 text-foreground/60 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors relative z-10" />
            </a>
          </div>

          {/* Interactive scroll indicator */}
          <div className="pt-6 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Explore More</p>
              <ChevronDown className="h-6 w-6 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
