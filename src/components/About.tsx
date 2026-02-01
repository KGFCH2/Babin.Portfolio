import { useInView } from "react-intersection-observer";
import { ChevronDown, X, FileText, MessageCircle, Lightbulb, Compass, Palette, Brain, Code, Zap, Rocket, Target, Briefcase, Cog, Globe, Wrench, Sparkles, Award, CheckCircle, Activity, Wind, BookA, CircuitBoard, WholeWord, BookAudio, BookCopy, PlayCircle } from "lucide-react";
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
    <section id="about" className="py-24 relative overflow-hidden section-divider-top" ref={ref}>
      <StudyBackground />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto space-y-20"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.5, type: "spring" }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
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
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
            >
              B.Tech Computer Science & Engineering Undergraduate | Software Developer | AI/ML Enthusiast
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Professional info */}
            <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
              <div className="space-y-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Innovating the Future
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="text-3xl md:text-3xl font-black tracking-tight cursor-default"
                >
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent italic hover:tracking-wider transition-all duration-200">
                    _Babin Bid_
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground flex items-center gap-3 font-medium"
                >
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  B.Tech In CSE • Adamas University, Kolkata
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-foreground/80 leading-relaxed text-base lg:text-lg font-light italic border-l-4 border-primary/30 pl-6"
                >
                  "Aspiring Software Engineer with a passion for building robust and scalable web applications. I bridge the gap between complex mathematical concepts and practical software solutions. Currently focused on Full-Stack Development, Machine Learning, and exploring core Computer Science fundamentals."
                </motion.p>

                <div className="flex gap-4 flex-wrap pt-4">
                  {[
                    { label: "Software Engineering", color: "emerald", icon: Code },
                    { label: "Full-Stack Development", color: "blue", icon: Rocket },
                    { label: "Machine Learning", color: "purple", icon: Brain }
                  ].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.15 + (idx * 0.05) }}
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        boxShadow: `0 20px 40px -10px var(--tw-shadow-color)`,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold bg-${tag.color}-500/10 text-${tag.color}-400 border border-${tag.color}-500/20 shadow-xl shadow-${tag.color}-500/10 cursor-default group transition-all duration-200`}
                    >
                      <tag.icon className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                      {tag.label}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-10">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex-1 px-8 py-5 rounded-2xl bg-foreground text-background font-black text-base transition-all duration-200 flex items-center justify-center gap-3 overflow-hidden shadow-2xl hover:shadow-emerald-500/20"
                    onClick={() => previewThenDownload('/Babin_Bid_Resume.pdf', 'Babin_Bid_Resume.pdf')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="relative z-10 flex items-center gap-3">
                      <FileText className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                      View Resume
                    </span>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex-1 px-8 py-5 rounded-2xl border-2 border-foreground/10 font-black text-base transition-all duration-200 flex items-center justify-center gap-3 bg-background/50 backdrop-blur-xl shadow-xl hover:shadow-blue-500/20"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                    Get in Touch
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
                className="group relative"
              >
                {/* Decorative background aura */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-orange-500/30 via-primary/20 to-blue-500/30 rounded-full opacity-40 group-hover:opacity-70 blur-[100px] transition duration-700 animate-pulse" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  >
                    <motion.div
                      className="relative z-10 transition-transform duration-200"
                    >
                      <img
                        src="/Babin_New.jpeg"
                        alt="Babin Bid"
                        className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-[3rem] object-cover shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-[12px] border-background relative"
                      />
                    </motion.div>

                    {/* Floating Orbits */}
                    <div className="absolute -inset-4 border-2 border-primary/20 rounded-[4rem] animate-[spin_15s_linear_infinite] pointer-events-none" />
                    <div className="absolute -inset-8 border border-white/10 rounded-[5rem] animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
                  </motion.div>

                  {/* Enhanced Status Badge */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, rotate: -2, y: -20 }}
                    className="absolute -bottom-8 -right-8 bg-background/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-border flex items-center gap-4 z-20 group/badge cursor-default transition-all duration-200 hover:border-emerald-500/50 hover:shadow-emerald-500/20"
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)]" />
                      <div className="absolute inset-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-sm tracking-tight">Active for Hirings</span>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">2026 Grad</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats & Detailed Info */}
          <div className="grid lg:grid-cols-2 gap-12 pt-10">
            {/* Left: Interactive Skills Stack */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-black tracking-tight flex items-center gap-3">
                  <div className="w-2 h-10 bg-primary rounded-full" />
                  Core Competencies
                </h4>
                <div className="flex -space-x-3">
                  {[Code, Brain, Rocket].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  { name: 'Mathematics & Calculus', val: 95, icon: BookA, color: 'orange' },
                  { name: 'Digital Logic & Optimization', val: 95, icon: CircuitBoard, color: 'blue' },
                  { name: 'Frontend Architecture', val: 92, icon: Cog, color: 'purple' },
                  { name: 'Data Structures & Alg.', val: 88, icon: Brain, color: 'emerald' },
                  { name: 'Python Engineering', val: 85, icon: Code, color: 'amber' },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="group relative h-24 bg-muted/20 rounded-3xl p-6 transition-all duration-200 border border-border/50 overflow-hidden cursor-default shadow-sm"
                  >
                    <div className="relative z-10 flex items-center justify-between h-full">
                      <div className="flex items-center gap-5">
                        <div className={`p-4 rounded-2xl bg-${skill.color}-500/10 text-${skill.color}-500 shadow-sm transition-all duration-300`}>
                          <skill.icon className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-base md:text-lg">{skill.name}</span>
                      </div>
                      <div className="flex flex-col items-end w-48 md:w-64">
                        <span className={`text-2xl font-black tabular-nums text-${skill.color}-500`}>{skill.val}%</span>
                        <div className="w-full h-3 bg-secondary/10 rounded-full mt-2 overflow-hidden shadow-inner border border-border/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.val}%` } : {}}
                            transition={{ duration: 0.8, delay: 0.4 + (i * 0.05), ease: "circOut" }}
                            className={`h-full bg-${skill.color}-500 shadow-[0_0_15px_var(--tw-shadow-color)] shadow-${skill.color}-500/40`}
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
              initial={{ x: 20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-black tracking-tight flex items-center gap-3">
                  <div className="w-2 h-10 bg-secondary rounded-full" />
                  Career Highlights
                </h4>
                <div className="px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-black uppercase tracking-widest">
                  Undergrad Dossier
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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
                    color: 'pink',
                    content: 'AI/ML, Quantum Computing, Digital Art, Community Learning'
                  },
                  {
                    id: 'focus',
                    title: 'Current Mission',
                    icon: Compass,
                    color: 'orange',
                    content: 'Actively seeking 2026 SDE Internships & Open Source Contribution'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="p-8 rounded-[2.5rem] bg-background/40 backdrop-blur-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-200 group cursor-default shadow-xl"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                    </div>
                    <h5 className="text-lg font-black mb-3 group-hover:text-primary transition-colors duration-200">{item.title}</h5>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed group-hover:text-foreground transition-colors duration-200">
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
            transition={{ delay: 0.6 }}
            className="mt-20 relative p-10 text-center"
          >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="text-lg md:text-xl font-light italic text-foreground/70 leading-relaxed max-w-4xl mx-auto">
          "Bridging the gap between theoretical computer science and impactful real-world applications."
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
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
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
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
