import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItem {
    label: string;
    value: number;
    suffix?: string;
    description: string;
}

const InteractiveStats: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const stats: StatItem[] = [
        {
            label: 'Projects Completed',
            value: 10,
            suffix: '+',
            description: 'Full-stack applications and ML systems'
        },
        {
            label: 'Technologies',
            value: 40,
            suffix: '+',
            description: 'Languages, frameworks, and tools'
        },
        {
            label: 'Experience',
            value: 2,
            suffix: '+',
            description: 'Years in web and software development'
        },
        {
            label: 'Code Commits',
            value: 700,
            suffix: '+',
            description: 'Across multiple repositories'
        }
    ];

    const total = stats.length;

    return (
        <div ref={ref} className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            stat={stat}
                            index={index}
                            totalCount={total}
                            isVisible={inView}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface StatCardProps {
    stat: StatItem;
    index: number;
    totalCount: number;
    isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, totalCount, isVisible }) => {
    const [count, setCount] = useState(0);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    // Reset count when card leaves viewport so it re-animates on re-entry
    useEffect(() => {
        if (!isVisible) {
            setCount(0);
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) setHasBeenVisible(true);
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const target = stat.value;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [isVisible, stat.value]);

    // Compute horizontal spread offset: items move outwards from center when visible
    const center = (totalCount - 1) / 2;
    const offset = index - center; // negative = left side, positive = right side
    const distance = 48; // px per step; increase for more spread
    const translateX = hasBeenVisible ? offset * distance : 0;
    const translateY = isVisible ? 0 : 16;
    const opacity = isVisible ? 1 : 0;

    // Stagger delays: enter and exit have opposite staggers for nicer effect
    const enterDelay = index * 100;
    const exitDelay = (totalCount - 1 - index) * 80;
    const transitionDelay = isVisible ? enterDelay : exitDelay;

    const isReEntry = isVisible && hasBeenVisible;
    const transitionStyle = isReEntry ? 'none' : `transform 700ms cubic-bezier(.2,.9,.2,1) ${transitionDelay}ms, opacity 500ms ease ${transitionDelay}ms`;

    return (
        <div
            className={`relative group ${isReEntry ? 're-enter' : ''}`}
            style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px)`,
                opacity,
                transition: transitionStyle,
                '--offset': offset,
            } as React.CSSProperties}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <div className="space-y-3">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                        {count}
                        {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

export default InteractiveStats;
