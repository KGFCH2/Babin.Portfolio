import { Moon, Sun, Stars, Sparkles } from "lucide-react";
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
    }, 150);
    setTimeout(() => setIsToggling(false), 500);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-500 group
        ${isDark
          ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-[0_0_20px_rgba(139,92,246,0.4)]'
          : 'bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]'}
        hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
        ${isToggling ? 'scale-90' : 'scale-100'}
      `}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label="Toggle theme"
    >
      {/* Background stars/clouds animation */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-2 right-1.5 w-1 h-1 bg-yellow-200 rounded-full animate-ping opacity-50" style={{ animationDuration: '2s' }} />
      </div>

      {/* Clouds for light mode */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute bottom-1 left-1 w-4 h-2 bg-white/60 rounded-full blur-[1px]" />
        <div className="absolute bottom-2 right-2 w-3 h-1.5 bg-white/50 rounded-full blur-[1px]" />
        <div className="absolute top-2 left-2 w-2 h-1 bg-white/40 rounded-full blur-[1px]" />
      </div>

      {/* Sun/Moon container */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 
        ${isToggling ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}
      >
        {isDark ? (
          <div className="relative">
            <Moon className="h-6 w-6 text-yellow-100 drop-shadow-[0_0_10px_rgba(254,249,195,0.8)] transition-all duration-300 group-hover:text-yellow-50" />
            <div className="absolute -top-1 -right-1">
              <Stars className="h-3 w-3 text-yellow-200 animate-pulse" />
            </div>
          </div>
        ) : (
          <div className="relative">
            <Sun className="h-7 w-7 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.9)] transition-all duration-300 animate-spin group-hover:text-yellow-400"
              style={{ animationDuration: '10s' }}
            />
            <div className="absolute -bottom-1 -right-1">
              <Sparkles className="h-3 w-3 text-yellow-300 animate-bounce" style={{ animationDuration: '1s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Glow ring on hover */}
      <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 opacity-0 group-hover:opacity-100
        ${isDark ? 'border-purple-400/50' : 'border-yellow-400/50'}
        animate-pulse`}
      />

      {/* Ripple effect on toggle */}
      {isToggling && (
        <div className={`absolute inset-0 rounded-full animate-ping
          ${isDark ? 'bg-yellow-400/30' : 'bg-indigo-400/30'}`}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
