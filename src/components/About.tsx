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
            {/* Left: Professional info - floating style without boxes */}
            <div className="space-y-8 order-2 md:order-1">
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
            </div>

            {/* Right: Image with enhanced animation */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
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
                    className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl border-4 border-background/50 avatar-pulse"
                  />
                  {/* Floating accent badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full px-6 py-3 shadow-lg font-semibold text-sm text-background transform hover:scale-110 transition-transform">
                    ✨ Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Skills Section - Below the grid */}
          <div className="max-w-4xl mx-auto">
            {/* Primary Skills - CRAZY Animated Version */}
            <div className="space-y-5 pt-4">
              <h4 className="font-bold text-xl text-foreground flex items-center gap-2 group">
                <span className="text-2xl animate-bounce">💡</span>
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">Primary Knowledges</span>
                <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white animate-pulse">PRO</span>
              </h4>
              <div className="space-y-4">
                {[
                  { name: 'Switching Circuits', val: 95, icon: '⚡', color: 'from-orange-500 via-amber-400 to-yellow-300', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', textColor: 'text-orange-400', glowColor: 'shadow-orange-500/50' },
                    { name: 'Mathematics & Calculus', val: 90, icon: '📐', color: 'from-blue-500 via-cyan-400 to-sky-300', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', textColor: 'text-blue-400', glowColor: 'shadow-blue-500/50' },
                    { name: 'Frontend Development', val: 90, icon: '🎨', color: 'from-purple-500 via-violet-400 to-fuchsia-300', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', textColor: 'text-purple-400', glowColor: 'shadow-purple-500/50' },
                    { name: 'Data Structures & Algorithms', val: 85, icon: '🧠', color: 'from-rose-500 via-pink-400 to-red-300', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/30', textColor: 'text-rose-400', glowColor: 'shadow-rose-500/50' },
                    { name: 'Python Programming', val: 85, icon: '🐍', color: 'from-emerald-500 via-green-400 to-lime-300', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', textColor: 'text-emerald-400', glowColor: 'shadow-emerald-500/50' },
                  ].map((s, index) => (
                    <div
                      key={s.name}
                      className={`group/skill relative p-3 rounded-xl ${s.bgColor} border ${s.borderColor} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:${s.glowColor} cursor-pointer`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Animated background gradient on hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${s.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-500`} />

                      <div className="relative flex items-center gap-3">
                        {/* Animated Icon */}
                        <span className="text-2xl group-hover/skill:animate-bounce group-hover/skill:scale-125 transition-transform duration-300">{s.icon}</span>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-foreground/90 font-semibold group-hover/skill:text-foreground transition-colors">{s.name}</span>
                            <div className="flex items-center gap-2">
                              {/* Animated percentage with glow */}
                              <span className={`font-black text-lg ${s.textColor} group-hover/skill:scale-110 transition-transform tabular-nums`}>
                                {s.val}%
                              </span>
                              {/* Fire icon for high skills */}
                              {s.val >= 90 && <span className="animate-pulse">🔥</span>}
                            </div>
                          </div>

                          {/* Progress bar container */}
                          <div className="relative w-full h-3 bg-muted/40 rounded-full overflow-hidden">
                            <progress className="sr-only" value={s.val} max={100} aria-label={`Proficiency: ${s.val}%`} />

                            {/* Animated gradient bar */}
                            <div
                              className={`h-full bg-gradient-to-r ${s.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                              style={{ width: `${s.val}%` }}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000" />

                              {/* Glowing edge */}
                              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 rounded-full blur-sm animate-pulse" />
                            </div>

                            {/* Animated dots on the track */}
                            <div className="absolute inset-0 flex items-center justify-around opacity-20">
                              {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-white rounded-full" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 border border-border rounded-md text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm">
                        {s.val >= 90 ? '🌟 Expert Level!' : s.val >= 85 ? '💪 Advanced' : '📈 Proficient'}
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
