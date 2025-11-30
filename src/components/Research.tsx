import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Users, TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionTitle from "./SectionTitle";

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

  // glow styles for highlight boxes (multi-color per index)
  const glowStyles = `
    .highlight-box-0::after {
      content: ""; position: absolute; inset: -6px; border-radius: 12px;
      background: radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 50%);
      filter: blur(12px); opacity: 0; transition: opacity .25s ease-in-out; pointer-events: none;
    }
    .highlight-box-0:hover::after { opacity: 1; }

    .highlight-box-1::after {
      content: ""; position: absolute; inset: -6px; border-radius: 12px;
      background: radial-gradient(closest-side, rgba(168,85,247,0.16), transparent 50%);
      filter: blur(12px); opacity: 0; transition: opacity .25s ease-in-out; pointer-events: none;
    }
    .highlight-box-1:hover::after { opacity: 1; }

    .highlight-box-2::after {
      content: ""; position: absolute; inset: -6px; border-radius: 12px;
      background: radial-gradient(closest-side, rgba(34,197,94,0.14), transparent 50%);
      filter: blur(12px); opacity: 0; transition: opacity .25s ease-in-out; pointer-events: none;
    }
    .highlight-box-2:hover::after { opacity: 1; }
  `;

  return (
    <section id="research" className="py-20 relative section-divider-top bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-transparent dark:to-transparent">
      <div className="container mx-auto px-4">
        <style>{glowStyles}</style>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <SectionTitle
              segments={[
                {
                  text: "Research",
                  className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                },
                {
                  text: " Publications",
                  className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
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
          <Card className="glass p-8 lg:p-12 hover:tricolor-glow transition-all">
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

                <div className="flex gap-4 pt-4">
                  <Button size="lg" className="btn-hero text-white" onClick={() => setShowPaper(true)}>
                    <FileText className="mr-2" size={20} />
                    View Paper
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com/KGFCH2/Price_Prediction" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        className={`relative group rounded-xl p-5 text-center bg-gradient-to-br from-white/3 to-white/5 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:scale-105 highlight-box-${index}`}
                      >
                        <div className="mx-auto mb-3">
                          <Icon className="text-primary transform transition-transform duration-200 ease-out group-hover:scale-125" size={28} />
                        </div>
                        <div className="mb-2 text-xs text-muted-foreground">{item.label}</div>
                        <div className="text-lg font-bold text-foreground">{item.value}</div>
                      </motion.div>
                    );
                  })}
                </div>

                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <h4 className="font-bold text-lg mb-3">🛠️ Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      const defaultClass = 'px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium transition transform';
                      const techClasses: Record<string, string> = {
                        Python: defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500',
                        Pandas: defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                        'NumPy': defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:to-sky-500',
                        Matplotlib: defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-500',
                        Seaborn: defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500',
                        'Scikit-Learn': defaultClass + ' hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-violet-500',
                      };

                      return ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'].map((tech) => (
                        <span key={tech} className={techClasses[tech] ?? defaultClass}>
                          {tech}
                        </span>
                      ));
                    })()}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-accent/5 to-secondary/5 p-6">
                  <h4 className="font-bold text-lg mb-3">🍀 Seasonal Coverage</h4>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowPaper(false)} />
            <div className="relative w-[90%] max-w-5xl max-h-[90vh] overflow-auto p-6">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">Research Paper — Details</h3>
                  <button className="p-2 rounded-md hover:bg-muted/10" onClick={() => setShowPaper(false)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {highlights.map((h) => {
                    return (
                      <div key={h.label} className="rounded-xl p-4 text-center glass hover:tricolor-glow transition-all cursor-default">
                        <h5 className="text-sm text-muted-foreground mb-1">{h.label}</h5>
                        <p className="text-lg font-bold">{h.value}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">You can download or open the full paper using the link below.</p>
                    <a href="/ML-Based Price Prediction for Agri-Horticultural Commodities.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-semibold underline">Open paper in a new tab</a>
                  </div>
                  <div className="bg-muted/10 p-2">
                    <iframe src="/ML-Based Price Prediction for Agri-Horticultural Commodities.pdf" title="Research Paper" className="w-full h-96 border" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;