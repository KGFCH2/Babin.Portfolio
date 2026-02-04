import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Users, TrendingUp, X, Wrench, Leaf, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import StudyBackground from "./StudyBackground";

const Research = () => {
  const [showPaper, setShowPaper] = React.useState(false);
  const highlights = [
    {
      icon: Award,
      label: 'Conference',
      value: 'SSWC2025',
    },
    {
      icon: Users,
      label: 'Authors',
      value: '4 Co-authors',
    },
    {
      icon: TrendingUp,
      label: 'Status',
      value: 'Accepted',
    },
  ];

  // glow styles removed for Task 5
  const glowStyles = ``;

  return (
    <section id="research" className="py-20 relative section-divider-top scroll-mt-20">
      <StudyBackground />
      <div className="container mx-auto px-4 relative z-10">
        <style>{glowStyles}</style>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-[280px] mx-auto md:max-w-none">
            <SectionTitle
              segments={[
                {
                  text: "Research",
                  className: "text-blue-700 dark:text-cyan-300",
                },
                {
                  text: " Publications",
                  className: "text-blue-700 dark:text-cyan-300",
                },
              ]}
            />
          </h2>
          <p className="text-xl text-muted-foreground">
            Contributing to academic knowledge and innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass p-8 lg:p-12 transition-all">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <FileText size={20} />
                  <span className="font-semibold">Research Paper</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  ML-Based Price Prediction for Agri-Horticultural Commodities
                </h3>

                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground">Authors:</span>
                    <span>Babin Bid, Dr. Debdutta Pal, Ritika Pramanick, Liza Ghosh</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground">Conference:</span>
                    <span>2nd International Conference on Smart Systems and Wireless Communication (SSWC2025)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground">Status:</span>
                    <span className="text-accent font-semibold">Accepted for oral presentation</span>
                  </p>
                </div>

                <div className="prose prose-sm text-muted-foreground">
                  <p>
                    This research presents machine learning models for predicting future prices of seasonal crops in India.
                    Comparing Support Vector Regressor (SVM) and Random Forest across different crop seasons.
                  </p>
                  <p className="font-semibold text-foreground">Key Focus:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Analyze seasonal crop price trends (Summer, Rainy, Winter)</li>
                    <li>Predict future price variations using ML</li>
                    <li>Evaluate models using R², MAE, and RMSE metrics</li>
                    <li>Cover 15+ crop varieties across three seasons</li>
                  </ul>
                </div>

                <div className="flex flex-row gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="flex-1 sm:flex-initial"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-blue-700 dark:bg-cyan-300 text-white dark:text-black hover:opacity-90 font-black shadow-lg text-xs md:text-sm"
                      onClick={() => setShowPaper(true)}
                    >
                      <FileText className="mr-2 text-white dark:text-black hidden sm:block" size={18} />
                      View Paper
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="flex-1 sm:flex-initial"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="w-full border-2 border-blue-700 dark:border-cyan-300 text-blue-700 dark:text-cyan-300 hover:bg-blue-700 dark:hover:bg-cyan-300 hover:text-white dark:hover:text-black font-black bg-transparent text-xs md:text-sm"
                    >
                      <a href="https://github.com/KGFCH2/Price_Prediction" target="_blank" rel="noopener noreferrer">
                        Codebase
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`group/section relative rounded-xl p-5 text-center bg-white/5 backdrop-blur-sm border border-white/5 transition-all duration-300 cursor-default shadow-sm`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.25, rotate: 12 }}
                          className="mx-auto mb-3 w-fit"
                        >
                          <Icon className="text-blue-700 dark:text-cyan-300 transform transition-transform duration-200 ease-out" size={32} />
                        </motion.div>
                        <div className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground font-black">{item.label}</div>
                        <div className="text-lg font-bold text-foreground">{item.value}</div>
                      </div>
                    );
                  })}
                </div>

                <Card className="group/section bg-primary/5 p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AnimatedIcon Icon={Wrench} size={20} glowColor="hsl(var(--primary) / 0.6)" animationType="bounce" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      const defaultClass = 'px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium transition transform';
                      const techHoverClass = ' hover:scale-105 hover:text-white dark:hover:text-gray-900 hover:bg-blue-700 dark:hover:bg-cyan-300';

                      return ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'].map((tech) => (
                        <span key={tech} className={defaultClass + techHoverClass}>
                          {tech}
                        </span>
                      ));
                    })()}
                  </div>
                </Card>

                <Card className="group/section bg-accent/5 p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AnimatedIcon Icon={Leaf} size={20} glowColor="hsl(var(--primary) / 0.6)" animationType="pulse" />
                    Seasonal Coverage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Summer:</span> Bhindi, Bitter Gourd, Brinjal, Mango, Spinach</p>
                    <p><span className="font-semibold">Rainy:</span> Banana, Guava, Papaya, Peach, Plum</p>
                    <p><span className="font-semibold">Winter:</span> Apple, Beetroot, Cabbage, Carrot, Cauliflower, Orange</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>
        {/* Modal for viewing paper + highlights */}
        {showPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowPaper(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full h-[85vh] md:w-[85%] md:h-[80vh] max-w-5xl overflow-hidden shadow-[0_0_50px_rgba(29,78,216,0.3)] transition-all duration-300 z-10"
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden border border-blue-700/30 dark:border-cyan-300/30 rounded-2xl">
                <div className="flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur-md">
                  <h3 className="text-xl md:text-2xl font-black flex items-center gap-2 text-blue-700 dark:text-cyan-300">
                    <FileText />
                    Research Paper — Details
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:text-red-500 transition-colors"
                    onClick={() => setShowPaper(false)}
                    aria-label="Close"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 custom-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {highlights.map((h) => {
                      return (
                        <div key={h.label} className="rounded-xl p-4 text-center bg-blue-700/5 dark:bg-cyan-300/5 border border-blue-700/10 dark:border-cyan-300/10 cursor-default">
                          <h5 className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest font-black">{h.label}</h5>
                          <p className="text-lg font-black text-blue-700 dark:text-cyan-300">{h.value}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="p-5 rounded-2xl bg-muted/5 border border-border flex flex-col justify-between h-auto">
                        <div>
                          <h4 className="font-black text-base mb-2 text-blue-700 dark:text-cyan-300">Paper Abstract</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                            This research presents machine learning models for predicting future prices of seasonal crops in India.
                            Comparing SVM and Random Forest models across multiple crop seasons (Summer, Rainy, Winter).
                          </p>
                        </div>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href="/ML-Based Price Prediction for Agri-Horticultural Commodities.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-blue-700 dark:bg-cyan-300 text-white dark:text-black font-black hover:opacity-90 transition-all shadow-lg"
                      >
                        <ExternalLink size={20} />
                        Open PDF In New Tab
                      </motion.a>
                    </div>
                    <div className="lg:col-span-3 bg-muted/20 rounded-xl overflow-hidden border border-border/50 h-[400px]">
                      <iframe
                        src="/ML-Based Price Prediction for Agri-Horticultural Commodities.pdf#toolbar=0"
                        title="Research Paper PDF Preview"
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;