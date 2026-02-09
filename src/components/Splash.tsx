import React, { useEffect, useRef, useState } from 'react';

interface SplashProps {
    durationMs?: number;
    onFinish?: () => void;
}

const Splash: React.FC<SplashProps> = ({ durationMs = 3500, onFinish }) => {
    const [percent, setPercent] = useState(0);
    const [exploding, setExploding] = useState(false);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    useEffect(() => {
        let duration = durationMs;
        if (prefersReduced) duration = 600;

        const step = (t: number) => {
            if (!startRef.current) startRef.current = t;
            const elapsed = t - (startRef.current || 0);
            const p = Math.min(1, elapsed / duration);
            setPercent(Math.floor(p * 100));
            if (p < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                triggerFinish();
            }
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durationMs]);

    function triggerFinish() {
        if (exploding) return;
        setExploding(true);
        setTimeout(() => {
            onFinish?.();
        }, 750);
    }

    const particles = Array.from({ length: 28 });

    return (
        <div className={`splash ${exploding ? 'splash--exploding' : ''}`} aria-hidden={false}>
            <div className="splash__bg" />

            <svg className="splash__grid" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden>
                <rect width="100%" height="100%" fill="transparent" />
                <g className="grid-lines" stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line key={i} x1={0} x2={800} y1={(i + 1) * 50} y2={(i + 1) * 50} />
                    ))}
                </g>
            </svg>

            <div className="splash__center">
                <div className="splash__ring" aria-hidden>
                    <div className="splash__shape" />
                    {/* Decorative hero image: put your attachment into public/preloader-hero.png */}
                    <img
                        src="/Babin_New.jpeg"
                        alt="Babin avatar"
                        className="splash__hero"
                        aria-hidden="true"
                        onError={(e) => {
                            // hide image if it fails to load in production (case/casing/path issues)
                            const el = e.currentTarget as HTMLImageElement;
                            el.style.display = 'none';
                        }}
                    />
                </div>

                <div className="splash__percent" aria-live="polite">{percent}%</div>

                <div className="splash__text" aria-hidden>
                    <span className="typewriter">Babin.Portfolio&nbsp;Loading...</span>
                </div>
            </div>

            <div className="splash__particles" aria-hidden>
                {particles.map((_, i) => {
                    // generate per-particle offsets (kept deterministic-ish via index seed)
                    const tx = Math.round((Math.random() * 2 - 1) * 220); // px
                    const ty = Math.round((Math.random() * 2 - 1) * 160); // px
                    return (
                        <span
                            className="splash__particle"
                            key={i}
                            style={{
                                '--i': i,
                                '--tx': `${tx}px`,
                                '--ty': `${ty}px`,
                            } as React.CSSProperties}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Splash;
