import { useInView } from "react-intersection-observer";
import { ChevronDown, X } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { previewThenDownload } from "@/lib/utils";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Handle closing with animation
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowImageModal(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  return (
    <section id="about" className="py-20 relative section-divider-top" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <SectionTitle
                segments={[
                  {
                    text: "About",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                  },
                  {
                    text: " Me",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                  },
                ]}
              />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Computer Science & Engineering student | Full-Stack Developer | Problem Solver
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Image with enhanced animation */}
            <div className="flex justify-center md:justify-start pt-24">
              <div className="group relative">
                {/* Glowing background on hover */}
                <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-orange-500/40 via-blue-500/40 to-emerald-500/40 animate-pulse" />
                </div>
                {/* Image container with border and shadow */}
                <div className="relative">
                  <img
                    src="/Babin_New.jpeg"
                    alt="Babin Bid - Full Stack Developer and CS Engineer"
                    loading="lazy"
                    className="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl border-4 border-background/50 avatar-pulse"
                  />
                  {/* Floating accent badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full px-6 py-3 shadow-lg font-semibold text-sm text-background transform hover:scale-110 transition-transform">
                    ✨ Available
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Professional info - floating style without boxes */}
            <div className="space-y-8">
              {/* Intro Section - Floating */}
              <div className="space-y-4">
                <h3
                  onClick={() => setShowImageModal(true)}
                  className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent inline-block cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.8)] hover:filter"
                  title="Click to view my image"
                >
                👉🏽 Babin Bid 👈🏽
                </h3>
                <p className="text-base text-muted-foreground">
                  B.Tech CSE • Adamas University, Kolkata
                </p>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  Curious developer passionate about crafting elegant solutions to complex problems. Fascinated by mathematics, AI/ML, and quantum concepts. I thrive on building meaningful projects and sharing knowledge with the community.
                </p>
                <div className="flex gap-3 flex-wrap pt-2">
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(16,185,129,0.6),0_0_40px_rgba(16,185,129,0.4),0_0_60px_rgba(16,185,129,0.2)] hover:scale-105">Full-Stack Dev</span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.2)] hover:scale-105">Problem Solver</span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.4),0_0_60px_rgba(168,85,247,0.2)] hover:scale-105">Innovator</span>
                </div>
              </div>

              {/* Primary Skills - Floating */}
              <div className="space-y-5 pt-4">
                <h4 className="font-bold text-xl text-foreground flex items-center gap-2">
                  <span className="text-2xl">💡</span> Primary Skills
                </h4>
                <div className="space-y-4">
                  {[
                    { name: 'Switching Circuits', val: 95 },
                    { name: 'Mathematics & Calculus', val: 90 },
                    { name: 'Frontend Development', val: 90 },
                    { name: 'Data Structures & Algorithms', val: 85 },
                    { name: 'Python Programming', val: 85 },
                  ].map((s) => (
                    <div key={s.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/90 font-medium">{s.name}</span>
                        <span className="font-bold text-emerald-400">{s.val}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                        <progress
                          className="sr-only"
                          value={s.val}
                          max={100}
                          aria-label={`Proficiency: ${s.val}%`}
                        />
                        <div
                          className="h-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-500"
                          style={{ width: `${s.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                <button
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:shadow-glow transition-all hover:scale-105"
                  onClick={() => previewThenDownload('/Babin_Bid_Resume.pdf', 'Babin_Bid_Resume.pdf')}
                >
                  📄 View Resume
                </button>
                <button
                  className="flex-1 px-4 py-3 rounded-lg border border-border/50 text-foreground font-semibold hover:bg-primary/10 transition-all"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  💬 Get in Touch
                </button>
              </div>
            </div>
          </div>

          {/* Professional Accordion Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">📚 Professional Highlights</h3>
            <div className="max-w-3xl mx-auto space-y-3">
              {/* Knowledge In */}
              <Collapsible open={openPanel === "knowledge"} onOpenChange={(open) => setOpenPanel(open ? "knowledge" : null)}>
                <div className="group">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-border/50 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-lg font-semibold text-left">🧠 Knowledge In</span>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${openPanel === "knowledge" ? "rotate-180" : ""}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden">
                    <div className="p-4 bg-muted/20 border-b border-l border-r border-border/30 rounded-b-lg animate-fade-in">
                      <p className="text-foreground/90 leading-relaxed">
                        🔧 <strong>Programming Languages:</strong> C • C++ • Java • Python • JavaScript <br />
                        🌐 <strong>Web Development:</strong> HTML • CSS • React • Tailwind CSS <br />
                        🛠️ <strong>Backend & Database:</strong> Node.js • MySQL • Python Libraries (NumPy • Pandas • Matplotlib • Scikit-learn • XGBoost • TensorFlow • Flask) <br />
                        🚀 <strong>Deployment Platforms:</strong> Vercel • Streamlit <br />
                        🔗 <strong>APIs & Integrations:</strong> Google Gemini API • OpenWeatherMap API • WeatherAPI.com <br />
                        📐 <strong>Computer Science:</strong> Data Structures & Algorithms • Mathematics & Calculus • Switching Circuits <br />
                        🎨 <strong>Design & Tools:</strong> MS Word • MS PowerPoint • MS Excel • Paint • VS Code • GitHub • Canva <br />
                        💻 <strong>Coding Platforms:</strong> LeetCode • Hackerrank • Codolio
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Upskilling & Certifications */}
              <Collapsible open={openPanel === "upskilling"} onOpenChange={(open) => setOpenPanel(open ? "upskilling" : null)}>
                <div className="group">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg border border-border/50 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-lg font-semibold text-left">🚀 Upskilling & Certifications</span>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${openPanel === "upskilling" ? "rotate-180" : ""}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden">
                    <div className="p-4 bg-muted/20 border-b border-l border-r border-border/30 rounded-b-lg animate-fade-in">
                      <div className="space-y-2 text-foreground/90">
                        <p><strong>Learning Platforms:</strong> Google Cloud Skill Boost • Microsoft Learn • Oracle MyLearn • IBM SkillBuild • AWS Skill Builder</p>
                        <p><strong>Bootcamps:</strong> Microsoft Cloud & AI Bootcamp • LetsUpgrade • Scalar • Simplilearn</p>
                        <p><strong>Academic Programs:</strong> HP Life • SWAYAM • Cisco Networking Academy • Infosys Springboard • Qualcomm Academy</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Interests & Passions */}
              <Collapsible open={openPanel === "interests"} onOpenChange={(open) => setOpenPanel(open ? "interests" : null)}>
                <div className="group">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg border border-border/50 hover:border-pink-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-lg font-semibold text-left">⚡ Interests & Passions</span>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${openPanel === "interests" ? "rotate-180" : ""}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden">
                    <div className="p-4 bg-muted/20 border-b border-l border-r border-border/30 rounded-b-lg animate-fade-in">
                      <div className="space-y-2 text-foreground/90">
                        <p><strong>Subjects:</strong> AI/ML • Quantum Computing • Mathematics • Quantum Physics • Data Structures & Algorithms (DSA)</p>
                        <p><strong>Hobbies:</strong> 🏏 Cricket • 🏸 Badminton • 🎨 Drawing & Digital Art</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Professional Focus */}
              <Collapsible open={openPanel === "focus"} onOpenChange={(open) => setOpenPanel(open ? "focus" : null)}>
                <div className="group">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg border border-border/50 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="text-lg font-semibold text-left">🎯 Professional Focus</span>
                      <ChevronDown className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${openPanel === "focus" ? "rotate-180" : ""}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden">
                    <div className="p-4 bg-muted/20 border-b border-l border-r border-border/30 rounded-b-lg animate-fade-in">
                      <p className="text-foreground/90 leading-relaxed">
                        ✅ Active contributor on GitHub with multiple full-stack projects<br />
                        ✅ Open to <strong>internships, freelance projects & collaborations</strong><br />
                        ✅ Passionate about solving real-world problems with elegant code
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>

            </div>
          </div>

          {/* Closing quote */}
          <blockquote className="mt-6 italic text-center text-sm text-foreground/80 tricolor-border-left">
            "Driven by curiosity, grounded in Indian values, and inspired by global innovation."
          </blockquote>
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {showImageModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 ${isClosing ? 'opacity-0' : 'animate-fade-in'}`}
          onClick={handleCloseModal}
        >
          <div className={`relative max-w-[90vw] max-h-[90vh] transition-all duration-300 ${isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image with glow effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <img
                src="/Babin.jpeg"
                alt="Babin Bid - Full Stack Developer"
                className="relative rounded-2xl shadow-2xl max-w-full max-h-[80vh] object-contain border-4 border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Name below image */}
            <p className="text-center mt-4 text-white text-xl font-semibold">
              Babin Bid
            </p>
            <p className="text-center text-white/60 text-sm">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
