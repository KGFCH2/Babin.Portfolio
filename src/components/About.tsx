import { ChevronDown, X, FileText, MessageCircle, Lightbulb, Compass, Palette, Brain, Code, Zap, Rocket, Target, Briefcase, Cog, Globe, Wrench, Sparkles, Award, CheckCircle, Activity, Wind, BookA, CircuitBoard, WholeWord, BookAudio, BookCopy, PlayCircle, GraduationCap, Quote, Terminal, Layers, Cpu } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { previewThenDownload } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import StudyBackground from "./StudyBackground";

const About = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  // Handle closing with animation
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowImageModal(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-mt-20">
      <StudyBackground />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-blue-700/10 dark:bg-[#89D3BD]/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-16 w-72 h-72 bg-blue-700/10 dark:bg-[#89D3BD]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-black mb-3 tracking-tighter max-w-xs mx-auto md:max-w-none">
                <SectionTitle
                  segments={[
                    {
                      text: "About",
                      className: "text-blue-900 dark:text-cyan-300",
                    },
                    {
                      text: " Me",
                      className: "text-blue-700 dark:text-[#89D3BD]",
                    },
                  ]}
                />
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
            >
              B.Tech Computer Science & Engineering Undergraduate | Software Developer | AI/ML Enthusiast
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Professional info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-6">
                <motion.h3
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="text-xl md:text-2xl font-black tracking-tight cursor-default inline-block"
                >
                  <span className="font-bold text-blue-700 dark:text-[#89D3BD]">
                    Babin Bid
                  </span>
                </motion.h3>

                <div className="space-y-4">
                  <motion.p
                    className="text-sm text-muted-foreground flex items-center gap-3 font-medium group/edu cursor-default"
                  >
                    <GraduationCap className="w-5 h-5 text-blue-700 dark:text-[#89D3BD] group-hover/edu:scale-125 group-hover/edu:rotate-12 transition-all duration-300" />
                    B.Tech In CSE • Adamas University, Kolkata
                  </motion.p>

                  <motion.p
                    className="text-foreground/80 leading-relaxed text-sm font-light italic border-l-4 border-primary/30 pl-6"
                  >
                    "Aspiring Software Engineer with a passion for building robust and scalable web applications. I bridge the gap between complex mathematical concepts and practical software solutions."
                  </motion.p>
                </div>

                <div className="flex gap-3 flex-wrap pt-2">
                  {[
                    { label: "Software Engineering", color: "emerald", hex: "#10b981", icon: Code, bg: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-500/20" },
                    { label: "Full-Stack Development", color: "blue", hex: "#1d4ed8", icon: Rocket, bg: "bg-blue-500/10", text: "text-blue-700 dark:text-blue-400", border: "border-blue-500/20" },
                    { label: "Machine Learning", color: "purple", hex: "#8b5cf6", icon: Brain, bg: "bg-purple-500/10", text: "text-purple-700 dark:text-purple-400", border: "border-purple-500/20" },
                  ].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: `0 15px 30px -5px ${tag.hex}44`,
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        transition: { type: "spring", stiffness: 500, damping: 20 }
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold ${tag.bg} ${tag.text} border ${tag.border} cursor-default group transition-all duration-200`}
                    >
                      <tag.icon className={`w-3 h-3 group-hover:rotate-12 transition-transform duration-300 ${tag.text}`} />
                      {tag.label}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 20px var(--shadow-color)",
                      transition: { type: "spring", stiffness: 500, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex-1 px-5 py-3 rounded-xl border-2 border-blue-900 dark:border-cyan-300 text-blue-700 dark:text-cyan-300 font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden bg-transparent"
                    onClick={() => previewThenDownload('/Babin_Bid_Resume.pdf', 'Babin_Bid_Resume.pdf')}
                  >
                    <div className="absolute inset-0 bg-blue-900 dark:bg-cyan-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform duration-200" />
                      View Resume
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 20px var(--shadow-color-contact)",
                      transition: { type: "spring", stiffness: 500, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex-1 px-5 py-3 rounded-xl border-2 border-blue-700 dark:border-[#89D3BD] text-blue-700 dark:text-[#89D3BD] font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-transparent overflow-hidden"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className="absolute inset-0 bg-blue-700 dark:bg-[#89D3BD] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                      <MessageCircle className="w-4 h-4 group-hover:rotate-6 transition-transform duration-200" />
                      Get in Touch
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="group relative">
                {/* Decorative background aura */}
                <div className="absolute -inset-6 bg-blue-700/10 dark:bg-[#89D3BD]/10 rounded-full opacity-30 group-hover:opacity-50 blur-[60px] transition duration-500" />

                <div className="relative">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative cursor-pointer rounded-[2.5rem]"
                    onClick={() => setShowImageModal(true)}
                  >
                    <img
                      src="/Babin_New.jpeg"
                      alt="Babin Bid"
                      className="w-56 h-56 md:w-[18rem] md:h-[18rem] rounded-[2.5rem] object-cover border-[8px] border-background relative z-10"
                    />
                    {/* Floating Orbits */}
                    <div className="absolute -inset-2 border border-primary/10 rounded-[3rem] animate-[spin_20s_linear_infinite] pointer-events-none" />
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-white/20 dark:border-white/10 flex items-center gap-2 z-20"
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-60" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-[10px] tracking-tight">Active for Hiring</span>
                      <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">2027 Grad</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats & Detailed Info */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-10 items-start">
            {/* Left: Interactive Skills Stack */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black tracking-tight flex items-center gap-3 text-blue-700 dark:text-[#89D3BD]">
                  <div className="w-1.5 h-8 bg-blue-700 dark:bg-[#89D3BD] rounded-full" />
                  Core Knowledge
                </h4>
              </div>

              <div className="grid gap-4">
                {[
                  { name: 'Mathematics & Calculus', val: 90, icon: BookA, styles: { bg: 'bg-blue-700 dark:bg-[#89D3BD]', text: 'text-blue-700 dark:text-[#89D3BD]', light: 'bg-blue-700/10 dark:bg-[#89D3BD]/10' } },
                  { name: 'Switching Circuits', val: 84, icon: CircuitBoard, styles: { bg: 'bg-blue-700 dark:bg-[#89D3BD]', text: 'text-blue-700 dark:text-[#89D3BD]', light: 'bg-blue-700/10 dark:bg-[#89D3BD]/10' } },
                  { name: 'Frontend Development', val: 78, icon: Cog, styles: { bg: 'bg-blue-700 dark:bg-[#89D3BD]', text: 'text-blue-700 dark:text-[#89D3BD]', light: 'bg-blue-700/10 dark:bg-[#89D3BD]/10' } },
                  { name: 'Data Structures & Algorithms', val: 70, icon: Brain, styles: { bg: 'bg-blue-700 dark:bg-[#89D3BD]', text: 'text-blue-700 dark:text-[#89D3BD]', light: 'bg-blue-700/10 dark:bg-[#89D3BD]/10' } },
                  { name: 'Python Programming', val: 70, icon: Code, styles: { bg: 'bg-blue-700 dark:bg-[#89D3BD]', text: 'text-blue-700 dark:text-[#89D3BD]', light: 'bg-blue-700/10 dark:bg-[#89D3BD]/10' } },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 10px 30px -10px var(--shadow-color)",
                    }}
                    className="group/skill relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 dark:border-white/10 hover:border-blue-700/50 dark:hover:border-[#89D3BD]/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${skill.styles.light} ${skill.styles.text}`}>
                          <skill.icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-black ${skill.styles.text}`}>{skill.val}%</span>
                    </div>
                    <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                        className={`h-full ${skill.styles.bg} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Career Highlights */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black tracking-tight flex items-center gap-3 text-blue-700 dark:text-[#89D3BD]">
                  <div className="w-1.5 h-8 bg-blue-700 dark:bg-[#89D3BD] rounded-full" />
                  Career Highlights
                </h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    id: 'knowledge',
                    title: 'Tech Stack',
                    icon: Brain,
                    isStack: true,
                    stacks: [
                      { content: '<b>Full Stack Web:</b> React, Node.js, FastAPI/Flask, MongoDB/MySQL, TS' },
                      { content: '<b>AI & Data Science:</b> TensorFlow, Scikit-learn, XGBoost, Pandas, Seaborn' },
                      { content: '<b>Deployment:</b> Vercel, Netlify, Streamlit' }
                    ]
                  },
                  { id: 'upskilling', title: 'Certifications', icon: Rocket, content: 'AWS, Google, Microsoft, Cisco, IBM, Kaggle, HackerRank, Qualcomm, Infosys Springboard, SimpliLearn' },
                  { id: 'interests', title: 'Passions', icon: Zap, content: 'AI/ML, Quantum Computing, Digital Art, Community Learning' },
                  { id: 'focus', title: 'Current Mission', icon: Compass, content: 'Actively seeking 2026 SDE Internships & OSS Contribution' },
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px var(--shadow-color-highlights)",
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    className={`p-6 rounded-[2rem] bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-blue-700 dark:hover:border-[#89D3BD] transition-all duration-300 group flex flex-col justify-center min-h-[190px] ${i >= 2 ? 'sm:mt-4 lg:mt-6' : ''}`}
                  >
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-[2.25rem] h-[2.25rem] rounded-xl bg-blue-700/10 dark:bg-[#89D3BD]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500 shrink-0">
                        <item.icon className="w-4 h-4 text-blue-700 dark:text-[#89D3BD]" />
                      </div>
                      <h5 className="text-[1.1rem] font-black text-center group-hover:text-blue-700 dark:group-hover:text-[#89D3BD] transition-colors duration-300">{item.title}</h5>
                      <div className="w-[2.25rem] h-[2.25rem] rounded-xl bg-blue-700/10 dark:bg-[#89D3BD]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-360deg] transition-all duration-500 shrink-0">
                        <item.icon className="w-4 h-4 text-blue-700 dark:text-[#89D3BD] -scale-x-100" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      {item.isStack ? (
                        <div className="space-y-3 w-full">
                          {item.stacks?.map((stack, idx) => (
                            <div key={idx} className="space-y-0.5">
                              <div className="flex items-center justify-center gap-1.5 text-blue-700 dark:text-[#89D3BD]">
                              </div>
                              <p className="text-muted-foreground text-sm font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: stack.content }} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-[280px]" dangerouslySetInnerHTML={{ __html: item.content || '' }} />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.blockquote
            variants={itemVariants}
            className="mt-12 relative p-8 text-center group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-700 dark:via-[#89D3BD] to-transparent" />
            <Quote className="w-10 h-10 text-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 group-hover:scale-125 transition-transform duration-500" />
            <p className="text-lg md:text-xl font-bold italic leading-relaxed max-w-3xl mx-auto relative z-10 text-primary">
              "Bridging the gap between theoretical computer science and impactful real-world applications."
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-700 dark:via-[#89D3BD] to-transparent" />
          </motion.blockquote>
        </motion.div>
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
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-red-500 hover:rotate-90 transition-all duration-300"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image with glow effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <img
                src="/Babin_New.jpeg"
                alt="Babin Bid"
                loading="lazy"
                decoding="async"
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
