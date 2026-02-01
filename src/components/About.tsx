import { useInView } from "react-intersection-observer";
import { ChevronDown, X, FileText, MessageCircle, Lightbulb, Compass, Palette, Brain, Code, Zap, Rocket, Target, Briefcase, Cog, Globe, Wrench, Sparkles, Award, CheckCircle, Activity, Wind, BookA, CircuitBoard, WholeWord, BookAudio, BookCopy, PlayCircle, GraduationCap, Quote } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { previewThenDownload } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import StudyBackground from "./StudyBackground";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Handle closing with animation
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowImageModal(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  return (
    <section id="about" className="py-12 relative overflow-hidden section-divider-top scroll-mt-20" ref={ref}>
      <StudyBackground />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-orange-500/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-6xl font-black mb-3 tracking-tighter max-w-[280px] mx-auto md:max-w-none">
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
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
            >
              B.Tech Computer Science & Engineering Undergraduate | Software Developer | AI/ML Enthusiast
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Left: Professional info */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  whileHover={{
                    scale: 1.5,
                  }}
                  className="text-xl md:text-2xl font-black tracking-tight cursor-default inline-block"
                >
                  <span className="font-bold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                    Babin Bid
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.25 }}
                  className="text-sm text-muted-foreground flex items-center gap-3 font-medium group/edu cursor-default"
                >
                  <GraduationCap className="w-5 h-5 text-blue-500 group-hover/edu:scale-125 group-hover/edu:rotate-12 transition-all duration-300" />
                  B.Tech In CSE • Adamas University, Kolkata
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-foreground/80 leading-relaxed text-sm font-light italic border-l-4 border-primary/30 pl-6"
                >
                  "Aspiring Software Engineer with a passion for building robust and scalable web applications. I bridge the gap between complex mathematical concepts and practical software solutions."
                </motion.p>

                <div className="flex gap-3 flex-wrap pt-2">
                  {[
                    { label: "Software Engineering", color: "emerald", hex: "#10b981", icon: Code },
                    { label: "Full-Stack Development", color: "blue", hex: "#3b82f6", icon: Rocket },
                    { label: "Machine Learning", color: "purple", hex: "#8b5cf6", icon: Brain }
                  ].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.35 + (idx * 0.02) }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: `0 15px 30px -5px ${tag.hex}44`,
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        transition: { type: "spring", stiffness: 500, damping: 20 }
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold bg-${tag.color}-500/10 text-${tag.color}-400 border border-${tag.color}-500/20 cursor-default group transition-all duration-200 shadow-${tag.color}-500/10`}
                    >
                      <tag.icon className={`w-3 h-3 group-hover:rotate-12 transition-transform duration-300 text-${tag.color}-400`} />
                      {tag.label}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                      transition: { type: "spring", stiffness: 500, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex-1 px-5 py-3 rounded-xl bg-foreground text-background font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden shadow-xl"
                    onClick={() => previewThenDownload('/Babin_Bid_Resume.pdf', 'Babin_Bid_Resume.pdf')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="relative z-10 flex items-center gap-2">
                      <FileText className="w-4 h-4 group-hover:rotate-6 transition-transform duration-200 text-emerald-400 group-hover:text-white" />
                      View Resume
                    </span>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex-1 px-5 py-3 rounded-xl border-2 border-white/20 dark:border-white/10 font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-4 h-4 group-hover:rotate-6 transition-transform duration-200 text-blue-500" />
                    Get in Touch
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, type: "spring", damping: 25 }}
                className="group relative"
              >
                {/* Decorative background aura */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-orange-500/20 via-primary/10 to-blue-500/20 rounded-full opacity-30 group-hover:opacity-50 blur-[60px] transition duration-500" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  >
                    <motion.div
                      className="relative z-10 transition-transform duration-200"
                    >
                      <img
                        src="/Babin_New.jpeg"
                        alt="Babin Bid"
                        className="w-56 h-56 md:w-[18rem] md:h-[18rem] rounded-[2.5rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[8px] border-background relative"
                      />
                    </motion.div>

                    {/* Floating Orbits */}
                    <div className="absolute -inset-2 border border-primary/10 rounded-[3rem] animate-[spin_20s_linear_infinite] pointer-events-none" />
                  </motion.div>

                  {/* Enhanced Status Badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{
                      scale: 1.1,
                      y: -15,
                      boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
                      borderColor: "rgba(16, 185, 129, 0.6)"
                    }}
                    className="absolute -bottom-4 -right-4 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-white/20 dark:border-white/10 flex items-center gap-2 z-20 group/badge cursor-default transition-all duration-300"
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
              </motion.div>
            </div>
          </div>

          {/* Stats & Detailed Info */}
          <div className="grid lg:grid-cols-2 gap-6 pt-2">
            {/* Left: Interactive Skills Stack */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <motion.h4
                  whileHover={{ x: 5, textShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                  className="text-lg font-black tracking-tight flex items-center gap-3 cursor-default"
                >
                  <div className="w-1.5 h-8 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  Core Competencies
                </motion.h4>
                <div className="flex -space-x-2">
                  {[
                    { icon: Code, color: "text-blue-500" },
                    { icon: Brain, color: "text-purple-500" },
                    { icon: Rocket, color: "text-emerald-500" }
                  ].map((item, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shadow-md">
                      <item.icon className={`w-3 h-3 ${item.color}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  { name: 'Mathematics & Calculus', val: 95, icon: BookA, color: 'orange', styles: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-600/10' } },
                  { name: 'Switching Circuits', val: 95, icon: CircuitBoard, color: 'blue', styles: { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-500/10' } },
                  { name: 'Frontend Development', val: 92, icon: Cog, color: 'purple', styles: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-500/10' } },
                  { name: 'Data Structures & Algorithms', val: 88, icon: Brain, color: 'emerald', styles: { bg: 'bg-emerald-500', text: 'text-emerald-500', light: 'bg-emerald-500/10' } },
                  { name: 'Python Programming', val: 85, icon: Code, color: 'amber', styles: { bg: 'bg-amber-500', text: 'text-amber-500', light: 'bg-amber-500/10' } },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + (i * 0.02) }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                    className="group relative h-16 bg-white/40 dark:bg-transparent backdrop-blur-md rounded-2xl p-3 transition-all duration-300 border border-white/20 dark:border-white/10 overflow-hidden cursor-default shadow-sm"
                  >
                    <div className="relative z-10 flex items-center justify-between h-full">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${skill.styles.light} ${skill.styles.text} shadow-sm transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                          <skill.icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-xs md:text-sm">{skill.name}</span>
                      </div>
                      <div className="flex flex-col items-end w-32 md:w-44">
                        <span className={`text-lg font-black tabular-nums ${skill.styles.text}`}>{skill.val}%</span>
                        <div className="w-full h-2 bg-secondary/10 rounded-full mt-1 overflow-hidden shadow-inner border border-border/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.val}%` } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + (i * 0.02), ease: "circOut" }}
                            className={`h-full ${skill.styles.bg} shadow-[0_0_10px_rgba(0,0,0,0.2)]`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Dossier / Professional Highlights */}
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <motion.h4
                  whileHover={{ x: 5, textShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
                  className="text-lg font-black tracking-tight flex items-center gap-3 cursor-default"
                >
                  <div className="w-1.5 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  Career Highlights
                </motion.h4>
                <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest">
                  Undergrad Dossier
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 mt-6">
                {[
                  {
                    id: 'knowledge',
                    title: 'Tech Stack',
                    icon: Brain,
                    color: 'blue',
                    content: 'C/C++, Python, React, Node.js, Express, Flask, ML (TensorFlow)'
                  },
                  {
                    id: 'upskilling',
                    title: 'Certifications',
                    icon: Rocket,
                    color: 'emerald',
                    content: 'AWS, CISCO, Google, Microsoft, IBM, Infosys, Udemy, Scaler, NPTEL, Kaggle, Skill India, GFG, Qualcomm, HackerRank, Saylor, SimpliLearn, HP Life'
                  },
                  {
                    id: 'interests',
                    title: 'Passions',
                    icon: Zap,
                    color: 'red',
                    content: 'AI/ML, Quantum Computing, Digital Art, Community Learning'
                  },
                  {
                    id: 'focus',
                    title: 'Current Mission',
                    icon: Compass,
                    color: 'orange',
                    content: 'Actively seeking 2026 SDE Internships & OSS Contribution'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (i * 0.02) }}
                    whileHover={{
                      y: -12,
                      scale: 1.05,
                      boxShadow: "0 30px 60px -12px rgba(0,0,0,0.2)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    className="p-4 rounded-[2rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all duration-300 group cursor-default shadow-lg"
                  >
                    <div className={`w-8 h-8 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-500`} />
                    </div>
                    <h5 className="text-base font-black mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h5>
                    <p className="text-muted-foreground text-xs font-medium leading-relaxed group-hover:text-foreground transition-colors duration-200">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-6 relative p-6 text-center group/quote"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <Quote className="w-6 h-6 text-primary/20 absolute top-2 left-1/2 -translate-x-1/2 -z-10 group-hover/quote:text-primary/40 group-hover/quote:scale-110 transition-all duration-500" />
            <p className="text-sm md:text-base font-bold italic leading-relaxed max-w-3xl mx-auto relative z-10" style={{ background: 'linear-gradient(to right, #4ade80, #3b82f6, #8b5cf6, #ef4444)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              "Bridging the gap between theoretical computer science and impactful real-world applications."
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse" />
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
