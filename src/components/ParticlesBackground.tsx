import { useCallback, useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef<Container | null>(null);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Pause particles when the page is not visible to save CPU
  useEffect(() => {
    const onVisibility = () => {
      if (!containerRef.current) return;
      if (document.hidden) {
        try {
          containerRef.current.pause();
        } catch (e) { }
      } else {
        try {
          containerRef.current.play();
        } catch (e) { }
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // keep a ref to the container so we can pause/play when needed
    if (container) containerRef.current = container;
  }, []);
  // Decide whether to show a lightweight fallback (no canvas) for mobile/low-power users
  useEffect(() => {
    if (typeof window === "undefined") return;
    const small = window.matchMedia("(max-width: 640px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setShowFallback(small.matches || reduce.matches);
    };

    update();

    const handler = () => update();
    if (small.addEventListener) {
      small.addEventListener("change", handler);
      reduce.addEventListener("change", handler);
    } else {
      // older browsers
      // @ts-ignore
      small.addListener(handler);
      // @ts-ignore
      reduce.addListener(handler);
    }

    return () => {
      if (small.removeEventListener) {
        small.removeEventListener("change", handler);
        reduce.removeEventListener("change", handler);
      } else {
        // @ts-ignore
        small.removeListener(handler);
        // @ts-ignore
        reduce.removeListener(handler);
      }
    };
  }, []);

  if (showFallback) {
    // Simple CSS gradient fallback that is cheap to render on mobile / low-power
    return (
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-violet-900 opacity-95" />
      </div>
    );
  }

  if (!init) {
    return null;
  }
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          opacity: 0,
        },
        // cap FPS to a sane default
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            // disable hover interactions on touch devices to avoid heavy repulse calculations
            onHover: {
              enable: typeof window !== "undefined" && !("ontouchstart" in window),
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 120,
              duration: 0.35,
            },
          },
        },
        particles: {
          // tricolor: saffron -> white -> green
          color: {
            value: ["#FF9933", "#FFFFFF", "#138808"],
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.45,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            // default value, will be reduced on small screens via CSS media query check below
            value: 60,
          },
          opacity: {
            value: { min: 0.25, max: 0.8 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
