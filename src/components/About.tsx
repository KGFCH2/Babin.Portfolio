import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { ChevronDown, Code, Database, Layout, Server, User } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { previewThenDownload } from "@/lib/utils";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Express, Python, Django",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
    },
  ];

  return (
    <section id="about" className="py-20 relative section-divider-top" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="about-blobs" aria-hidden>
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div
          className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400">About</span>
              <span className="ml-2 text-blueviolet">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate B.Tech student specializing in Computer Science & Engineering at
              Adamas University, Kolkata, India
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="group relative">
                {/* Neon edge glow (outside the box) */}
                <span className="pointer-events-none absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                </span>
                <Card className="relative z-10 p-6 bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-transparent border-border/50 overflow-hidden">
                  <div className="absolute -right-20 -top-20 opacity-20 transform rotate-12">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-deep via-violet-900 to-violet-950 blur-3xl" />
                  </div>
                  <div className="flex items-start gap-6 relative">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden avatar-glow transform transition-transform duration-700 ${inView ? 'scale-105' : 'scale-90'}`}>
                      <img src="/Babin.jpeg" alt="Avatar" className="w-full h-full object-cover avatar-pulse rounded-full" />
                    </div>
                    {/* floating badges removed per request */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground">Babin Bid</h3>
                      <p className="text-sm text-muted-foreground">B.Tech CSE student • Adamas University</p>
                      <p className="mt-3 text-muted-foreground">
                        ≻ Curious mind exploring the universe of code, quantum physics & mathematical beauty 💞
                        <br />
                        ≻ Cricket & Badminton lover | Drawing keeps my creativity flowing.
                        <p>
                          ≻ Interest in <strong>Mathematical Problems</strong>, AI/ML, Python, Web Development 🌐
                          <br />
                          ≻ Building creative solutions and exploring research.
                        </p>
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="text-sm text-muted-foreground"><b>Primary Skills</b></div>
                        {[
                          { name: 'Swiching Circuits', val: 95 },
                          { name: 'Mathematics (including Calculus)', val: 90 },
                          { name: 'Frontend Development', val: 90 },
                          { name: 'Discrete Structure & Logic', val: 88 },
                          { name: 'Data Structure & Algorithms (DSA)', val: 85 },
                          { name: 'Python', val: 85 },
                        ].map((s) => (
                          <div key={s.name} className="space-y-1">
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{s.name}</span>
                              <span className="font-medium text-foreground">{s.val}%</span>
                            </div>

                            <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                              {/* Keep native progress for screen readers, hide visually */}
                              <progress
                                className="sr-only"
                                value={s.val}
                                max={100}
                                aria-label={`Proficiency in ${s.name}: ${s.val} percent`}
                              />

                              {/* Visible custom bar (solid green) - width set inline for percent */}
                              <div
                                className="h-1.5 bg-emerald-600 rounded-full shadow-sm ring-1 ring-emerald-700/20 border border-black/80 dark:border-transparent"
                                role="progressbar"
                                aria-valuenow={s.val}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`Proficiency in ${s.name}: ${s.val} percent`}
                                style={{ width: `${s.val}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      className="px-4 py-2 rounded-md gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-smooth"
                      onClick={() => previewThenDownload('/Babin_Bid_Resume.pdf', 'Babin_Bid_Resume.pdf')}
                    >
                      View Resume
                    </button>
                    <button
                      className="px-4 py-2 rounded-md border border-border/50 text-foreground hover:bg-primary/5 transition-smooth"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Contact Me
                    </button>
                  </div>

                </Card>
              </div>

              {/* Currently Learning moved to the right column */}

              {/* Hobbies moved to right column */}
            </div>

            <div className="space-y-4">
              {/* Programming & Design Tools section removed */}
              <Collapsible defaultOpen={false}>
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                  </span>
                  <Card className="relative z-10 p-0 border-border/50 overflow-hidden">
                    <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">💻 Currently Learning</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-0">
                      <p className="text-muted-foreground">
                        HTML • CSS • JavaScript 🖊️💻 | Python 🐍 | Computer Architecture & Organization 🖥️ | Computer Networks 🌐
                      </p>
                    </CollapsibleContent>
                  </Card>
                </div>
              </Collapsible>

              <Collapsible defaultOpen={false}>
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                  </span>
                  <Card className="relative z-10 p-0 border-border/50 overflow-hidden">
                    <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">🚀 Upskilling Platforms</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-0">
                      <p className="text-muted-foreground">Google Cloud Skill Boost, Microsoft Learn, Oracle MyLearn, HP Life, Simplilearn, Skill India Digital Hub, SWAYAM, IBM SkillBuild, AWS Skill Builder, Cisco Networking Academy, Infosys Springboard, Qualcomm Academy</p>
                    </CollapsibleContent>
                  </Card>
                </div>
              </Collapsible>

              <Collapsible defaultOpen={false}>
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                  </span>
                  <Card className="relative z-10 p-0 border-border/50 overflow-hidden">
                    <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">💫 Hobbies</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-0">
                      <p className="text-muted-foreground">Cricket 🏏 | Badminton 🏸 | Drawing 🎨🖌️</p>
                    </CollapsibleContent>
                  </Card>
                </div>
              </Collapsible>

              <Collapsible defaultOpen={false}>
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                  </span>
                  <Card className="relative z-10 p-0 border-border/50 overflow-hidden">
                    <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">🎓 Bootcamps & Competitions</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-0">
                      <p className="text-muted-foreground">LetsUpgrade, Scalar, Microsoft Cloud & AI Bootcamp, myGov Quizzes, myBharat Competitions</p>
                    </CollapsibleContent>
                  </Card>
                </div>
              </Collapsible>

              <Collapsible defaultOpen={false}>
                <div className="group relative">
                  <span className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 m-1 rounded-lg blur-[28px] bg-gradient-to-r from-violet-700/40 via-violet-800/30 to-violet-900/20 mix-blend-screen" />
                  </span>
                  <Card className="relative z-10 p-0 border-border/50 overflow-hidden">
                    <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">🌟 Professional Focus</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 pt-0">
                      <p className="text-muted-foreground">Active on GitHub | Building full-stack web development skills | Open to internships, projects & collaborations</p>
                    </CollapsibleContent>
                  </Card>
                </div>
              </Collapsible>
            </div>
          </div>
          <blockquote className="mt-6 italic text-center text-sm text-foreground/80 tricolor-border-left">
            “Driven by curiosity, grounded in Indian values, and inspired by global innovation.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
