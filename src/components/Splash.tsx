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
    const isFinishingRef = useRef(false);
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
        if (isFinishingRef.current) return;
        isFinishingRef.current = true;

        // Pause for 2 seconds at 100% so the user can read the code
        setTimeout(() => {
            setExploding(true);
            setTimeout(() => {
                onFinish?.();
            }, 800);
        }, 2000);
    }

    // Calculate how many characters to show based on percentage
    const codeString = `import { Developer } from '@babin/core';

const <span class="highlight">Babin</span> = await Developer.awaken({
  role: 'Full Stack Engineer',
  weapons: ['React', 'TypeScript', 'UI/UX'],
  superpower: 'Turning coffee into code',
  systemStatus: 'Booting...',
  progress: ${percent}%
});

<span class="highlight">Babin.deployPortfolio();</span>`;

    const charsToShow = Math.floor((percent / 100) * codeString.length);
    const visibleCode = codeString.substring(0, charsToShow);

    return (
        <div className={`splash ide-splash ${exploding ? 'splash--exploding' : ''}`} aria-hidden="false">
            <div className="ide-window">
                <div className="ide-header">
                    <div className="ide-buttons">
                        <span className="ide-btn close"></span>
                        <span className="ide-btn minimize"></span>
                        <span className="ide-btn maximize"></span>
                    </div>
                    <div className="ide-title">Developer.ts — <span className="title-highlight">Babin.Portfolio</span></div>
                </div>
                <div className="ide-body">
                    <div className="ide-avatar-container">
                        <img
                            src="/Babin_New.jpeg"
                            alt="Babin"
                            className={`ide-avatar ${percent === 100 ? 'ide-avatar--loaded' : ''}`}
                            onError={(e) => {
                                const el = e.currentTarget as HTMLImageElement;
                                el.style.display = 'none';
                            }}
                        />
                        <div
                            className="ide-avatar-ring"
                            ref={(el) => {
                                if (el) {
                                    el.style.setProperty('--progress', `${percent}%`);
                                }
                            }}
                        ></div>
                    </div>
                    <div className="ide-content">
                        <div className="ide-line-numbers">
                            {codeString.split('\n').map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>
                        <div className="ide-code">
                            <pre>
                                <code dangerouslySetInnerHTML={{ __html: visibleCode }}></code>
                                <span className="ide-cursor"></span>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splash;
