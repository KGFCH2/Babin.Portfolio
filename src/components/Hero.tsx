import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { previewThenDownload } from "@/lib/utils";

const Hero = () => {
  const handleDownloadResume = () => previewThenDownload("/Babin Bid Resume.pdf", "Babin Bid Resume.pdf");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400">Babin Bid</span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground min-h-[160px] flex items-center justify-center">
              <div className="whitespace-nowrap">
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

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              View / Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-smooth"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/KGFCH2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
              title="GitHub"
              className="text-foreground/60 hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/babin-bid-853728293"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn"
              title="LinkedIn"
              className="text-foreground/60 hover:text-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:babin.bid@stu.adamasuniversity.ac.in"
              aria-label="Send me an email"
              title="Email"
              className="text-foreground/60 hover:text-primary transition-smooth"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated gradient background removed to avoid duplicate divider with About section */}
    </section>
  );
};

export default Hero;
