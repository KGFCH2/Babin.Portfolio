import { Code, BookOpen, Laptop, Brain, Lightbulb, Zap } from "lucide-react";

const StudyBackground = () => {
  // Array of floating icons for the background
  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 6, x: "10%", y: "20%" },
    { Icon: BookOpen, delay: 1, duration: 8, x: "80%", y: "30%" },
    { Icon: Laptop, delay: 2, duration: 7, x: "15%", y: "70%" },
    { Icon: Brain, delay: 0.5, duration: 9, x: "85%", y: "60%" },
    { Icon: Lightbulb, delay: 1.5, duration: 7.5, x: "50%", y: "15%" },
    { Icon: Zap, delay: 2.5, duration: 8.5, x: "20%", y: "85%" },
    { Icon: Code, delay: 1.2, duration: 6.5, x: "70%", y: "80%" },
    { Icon: Brain, delay: 2.8, duration: 9.5, x: "30%", y: "40%" },
  ];

  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-black dark:via-black dark:to-black" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s" }} />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden" style={{ perspective: '1000px' }}>
        {floatingIcons.map((item, idx) => {
          const { Icon, delay, duration, x, y } = item;
          return (
            <div
              key={idx}
              className="absolute"
              style={{
                left: x,
                top: y,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            >
              <Icon
                size={48}
                className="text-blue-500/60 dark:text-purple-400/50 drop-shadow-lg"
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>

      {/* CSS animations for floating */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-40px) translateX(20px);
            opacity: 0.65;
          }
          50% {
            transform: translateY(-60px) translateX(30px);
            opacity: 0.75;
          }
          75% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.65;
          }
        }

        @keyframes float-alt {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(25px) translateX(-25px);
            opacity: 0.55;
          }
          50% {
            transform: translateY(50px) translateX(-40px);
            opacity: 0.65;
          }
          75% {
            transform: translateY(20px) translateX(-15px);
            opacity: 0.55;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default StudyBackground;
