import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Users, TrendingUp, Wrench, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionTitle from "./SectionTitle";
import AnimatedIcon from "./AnimatedIcon";
import StudyBackground from "./StudyBackground";

const Research = () => {

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

  const getHighlightColor = (label: string) => {
    switch (label) {
      case 'Conference':
        return '#F59E0B'; // amber
      case 'Authors':
        return '#06B6D4'; // cyan
      case 'Status':
        return '#10B981'; // green
      default:
        return 'hsl(var(--primary) / 1)';
    }
  };

  // glow styles removed for Task 5
  const glowStyles = ``;

  return (
    <section id="research" className="group py-20 relative section-divider-top scroll-mt-20">
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
                  className: "text-blue-700 dark:text-[#89D3BD]",
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
                    <span className="text-blue-700 dark:text-[#89D3BD] font-semibold">Accepted for oral presentation</span>
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
                      asChild
                      className="w-full bg-blue-700 dark:bg-[#89D3BD] text-white dark:text-black hover:opacity-90 font-black text-xs md:text-sm transition-all duration-300 hover:shadow-[0_10px_20px_var(--shadow-color)]"
                    >
                      <a
                        href="/ML-Based Price Prediction for Agri-Horticultural Commodities.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open research paper in new tab"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <FileText className="mr-2 text-white dark:text-black hidden sm:block" size={18} />
                        View Paper
                      </a>
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
                      className="w-full border-2 border-blue-700 dark:border-[#89D3BD] text-blue-700 dark:text-[#89D3BD] hover:bg-blue-700 dark:hover:bg-[#89D3BD] hover:text-white dark:hover:text-black font-black bg-transparent text-xs md:text-sm transition-all duration-300 hover:shadow-[0_10px_20px_var(--shadow-color)]"
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
                        <div className="mx-auto mb-3 w-fit">
                          <AnimatedIcon
                            Icon={Icon}
                            size={32}
                            color={getHighlightColor(item.label)}
                            glowColor="transparent"
                            animationType="scale"
                            className="group-hover/section:-translate-y-1"
                          />
                        </div>
                        <div className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground font-black">{item.label}</div>
                        <div className="text-lg font-bold text-foreground">{item.value}</div>
                      </div>
                    );
                  })}
                </div>

                <Card className="group/section bg-primary/5 p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AnimatedIcon Icon={Wrench} size={20} color="hsl(var(--primary) / 1)" glowColor="transparent" animationType="scale" className="group-hover/section:-translate-y-1" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      const defaultClass = 'px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium transition transform cursor-pointer';
                      const techHoverClass = ' hover:scale-105 hover:text-white dark:hover:text-black hover:bg-blue-700 dark:hover:bg-[#89D3BD] hover:shadow-[0_10px_20px_var(--shadow-color)]';

                      return ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'].map((tech) => (
                        <span key={tech} className={defaultClass + techHoverClass}>
                          {tech}
                        </span>
                      ));
                    })()}
                  </div>
                </Card>

                <Card className="group/section bg-gradient-to-r from-blue-700/5 to-emerald-400/5 dark:from-[#89D3BD]/10 dark:to-emerald-700/10 p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AnimatedIcon Icon={Leaf} size={20} color="#10B981" glowColor="transparent" animationType="scale" className="group-hover/section:-translate-y-2" />
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

      </div>
    </section>
  );
};

export default Research;