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
          : 'bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 shadow-lg shadow-orange-400/40'}
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

      {/* Animated rays for light mode */}
      <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60 rounded-full origin-bottom animate-[ray_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60 rounded-full origin-top animate-[ray_4s_ease-in-out_infinite_0.5s]" />
        <div className="absolute left-1 top-1/2 -translate-y-1/2 h-0.5 w-2 bg-white/60 rounded-full origin-right animate-[ray_4s_ease-in-out_infinite_1s]" />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 h-0.5 w-2 bg-white/60 rounded-full origin-left animate-[ray_4s_ease-in-out_infinite_1.5s]" />
      </div>

      {/* Sun/Moon container with smooth transition */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out
        ${isToggling ? 'rotate-[360deg] scale-0' : 'rotate-0 scale-100'}`}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-yellow-100 drop-shadow-[0_0_8px_rgba(254,249,195,0.8)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(254,249,195,1)]" />
        ) : (
          <Sun className="h-6 w-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,1)]" />
        )}
      </div>

      {/* Animated glow ring on hover */}
      <div className={`absolute inset-[-2px] rounded-full border-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110
        ${isDark ? 'border-purple-400/60' : 'border-white/70'}`}
      />

      {/* Inner glow effect */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-300
        ${isDark
          ? 'bg-gradient-to-t from-purple-500/20 to-transparent'
          : 'bg-gradient-to-t from-white/30 to-transparent'}`}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes ray {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.3); }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
