import { motion, Variants } from "framer-motion";
import { Award, Trophy, Medal, Star, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import StudyBackground from "./StudyBackground";

interface FeaturedAchievement {
  title: string;
  category: string;
  file: string;
  icon: typeof Award;
}

const featuredAchievements: FeaturedAchievement[] = [
  {
    title: "SSWC'25 Best Paper Award",
    category: "Awards & Recognitions",
    file: "/Achievements/SSWC'2025/SSWC'25_Best_Paper_Award.jpg",
    icon: Trophy,
  },
  {
    title: "Merit Scholarship Award (2023)",
    category: "Awards & Recognitions",
    file: "/Achievements/Merit_Scholarship_Award.jpeg",
    icon: Medal,
  },
  {
    title: "Google Solution Challenge 2024",
    category: "Awards & Recognitions",
    file: "/Achievements/Google_Solution_Challenge_2024.jpeg",
    icon: Star,
  },
  {
    title: "SSWC'25 Best Paper Certificate",
    category: "Awards & Recognitions",
    file: "/Achievements/SSWC'2025/SSWC'25_Best_Paper_Certificate.jpg",
    icon: Award,
  },
  {
    title: "5-Day AI Agents Intensive Course with Google",
    category: "Kaggle",
    file: "/Achievements/Kaggle/5-Day_AI_Agents_Intensive_Course_with_Google.png",
    icon: Star,
  },
  {
    title: "Awards and Certificates in SSWC-2025",
    category: "Awards & Recognitions",
    file: "/Achievements/SSWC'2025/Awards_and_Certificates_in_SSWC-2025.png",
    icon: Trophy,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AchievementsPreview = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{ file: string; title: string } | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section id="achievements-preview" className="py-20 relative overflow-hidden">
      <StudyBackground />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-700/10 dark:bg-[#89D3BD]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-700/10 dark:bg-[#89D3BD]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black mb-3 tracking-tighter max-w-xs mx-auto md:max-w-none">
              <SectionTitle
                segments={[
                  {
                    text: "Key",
                    className: "text-blue-900 dark:text-cyan-300",
                  },
                  {
                    text: " Achievements",
                    className: "text-blue-700 dark:text-[#89D3BD]",
                  },
                ]}
              />
            </h2>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              Awards, recognitions, and milestones from my academic and professional journey
            </motion.p>
          </motion.div>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px var(--shadow-color-highlights)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="group relative bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-700 dark:hover:border-[#89D3BD] transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({ file: achievement.file, title: achievement.title })}
              >
                {/* Achievement Image */}
                <div className="relative h-44 overflow-hidden">
                  {!imageErrors.has(achievement.file) ? (
                    <img
                      src={encodeURI(achievement.file)}
                      alt={achievement.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => setImageErrors(prev => new Set(prev).add(achievement.file))}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-700/5 dark:bg-[#89D3BD]/5">
                      <achievement.icon className="w-16 h-16 text-blue-700/30 dark:text-[#89D3BD]/30" />
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-black/70 text-blue-700 dark:text-[#89D3BD] backdrop-blur-sm border border-blue-700/20 dark:border-[#89D3BD]/20">
                      {achievement.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-700/10 dark:bg-[#89D3BD]/10 shrink-0 group-hover:scale-110 transition-all duration-300">
                      <achievement.icon className="w-4 h-4 text-blue-700 dark:text-[#89D3BD]" />
                    </div>
                    <h3 className="text-sm font-bold leading-snug group-hover:text-blue-700 dark:group-hover:text-[#89D3BD] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center pt-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px var(--shadow-color)",
                transition: { type: "spring", stiffness: 500, damping: 25 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/achievements")}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border-2 border-blue-900 dark:border-cyan-300 text-blue-700 dark:text-cyan-300 font-black text-sm transition-all duration-300 overflow-hidden bg-transparent"
            >
              <div className="absolute inset-0 bg-blue-900 dark:bg-cyan-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                <Award className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                View All Achievements
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 ${isClosing ? "opacity-0" : "animate-fade-in"}`}
          onClick={handleCloseModal}
        >
          <div className={`relative max-w-[90vw] max-h-[90vh] transition-all duration-300 ${isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}>
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-red-500 hover:rotate-90 transition-all duration-300"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <img
                src={encodeURI(selectedImage.file)}
                alt={selectedImage.title}
                loading="lazy"
                decoding="async"
                className="relative rounded-2xl shadow-2xl max-w-full max-h-[80vh] object-contain border-4 border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <p className="text-center mt-4 text-white text-lg font-semibold">
              {selectedImage.title}
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

export default AchievementsPreview;
