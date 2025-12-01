import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 200);
    setTimeout(() => setIsToggling(false), 500);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-500 ease-out group
        ${isDark
          ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 shadow-lg shadow-purple-500/30'
          : 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 shadow-lg shadow-red-400/40'}
        hover:scale-110 hover:rotate-12
        ${isToggling ? 'scale-90 rotate-180' : 'scale-100 rotate-0'}
      `}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label="Toggle theme"
    >
      {/* Animated stars for dark mode */}
      <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'opacity-100' : 'opacity-0 scale-0'}`}>
        <div className="absolute top-1.5 left-2 w-1 h-1 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite]" />
        <div className="absolute top-3 right-2.5 w-0.5 h-0.5 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-2.5 left-2.5 w-0.5 h-0.5 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite_1s]" />
        <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-[twinkle_3s_ease-in-out_infinite_0.3s]" />
      </div>

      {/* Animated clouds for light mode */}
      <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
        {/* Cloud 1 - bottom left */}
        <div className="absolute bottom-1 left-0 animate-[floatCloud_8s_ease-in-out_infinite]">
          <div className="relative">
            <div className="w-3 h-1.5 bg-white/90 rounded-full" />
            <div className="absolute -top-0.5 left-0.5 w-2 h-1.5 bg-white/90 rounded-full" />
            <div className="absolute -top-0.5 left-1.5 w-1.5 h-1 bg-white/90 rounded-full" />
          </div>
        </div>
        {/* Cloud 2 - top right */}
        <div className="absolute top-1.5 right-0 animate-[floatCloud_6s_ease-in-out_infinite_1s]">
          <div className="relative">
            <div className="w-2.5 h-1 bg-white/80 rounded-full" />
            <div className="absolute -top-0.5 left-0.5 w-1.5 h-1 bg-white/80 rounded-full" />
          </div>
        </div>
        {/* Cloud 3 - middle */}
        <div className="absolute bottom-3 right-1 animate-[floatCloud_10s_ease-in-out_infinite_2s]">
          <div className="relative">
            <div className="w-2 h-1 bg-white/70 rounded-full" />
            <div className="absolute -top-0.5 left-0.5 w-1 h-0.5 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Sun/Moon container with smooth transition */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out
        ${isToggling ? 'rotate-[360deg] scale-0' : 'rotate-0 scale-100'}`}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-yellow-100 drop-shadow-[0_0_8px_rgba(254,249,195,0.8)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(254,249,195,1)]" />
        ) : (
          <Sun className="h-6 w-6 text-red-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.9)] transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(253,224,71,1)]" />
        )}
      </div>

      {/* Animated glow ring on hover */}
      <div className={`absolute inset-[-2px] rounded-full border-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110
        ${isDark ? 'border-purple-400/60' : 'red-red-300/70'}`}
      />

      {/* Inner glow effect */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-300
        ${isDark
          ? 'bg-gradient-to-t from-purple-500/20 to-transparent'
          : 'bg-gradient-to-t from-red-500/20 to-transparent'}`}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes floatCloud {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
