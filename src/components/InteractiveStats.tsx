import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Clock, GitBranch, LucideIcon } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import StudyBackground from './StudyBackground';

interface StatItem {
    label: string;
    value: number;
    suffix?: string;
    description: string;
    Icon: LucideIcon;
    glowColor: string;
}

const InteractiveStats: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const stats: StatItem[] = [
        {
            label: 'Projects Completed',
            value: 25,
            suffix: '+',
            description: 'Full-stack applications and ML systems',
            Icon: Code2,
            glowColor: 'rgba(29, 78, 216, 0.6)'
        },
        {
            label: 'Technologies',
            value: 20,
            suffix: '+',
            description: 'Languages, frameworks, and tools',
            Icon: Zap,
            glowColor: 'rgba(103, 232, 249, 0.6)'
        },
        {
            label: 'Experience',
            value: 2,
            suffix: '+',
            description: 'Years in web and software development',
            Icon: Clock,
            glowColor: 'rgba(29, 78, 216, 0.6)'
        },
        {
            label: 'Code Commits',
            value: 2000,
            suffix: '+',
            description: 'Across multiple repositories',
            Icon: GitBranch,
            glowColor: 'rgba(103, 232, 249, 0.6)'
        }
    ];

    const total = stats.length;

    return (
        <div ref={ref} className="py-16 relative overflow-hidden">
            <StudyBackground />
            <div className="container mx-auto px-4 relative z-10">
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

    // Reset count when card leaves viewport so it re-animates on re-entry
    useEffect(() => {
        if (!isVisible) {
            setCount(0);
        }
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

    // Compute horizontal spread offset: items move outwards from center
    const center = (totalCount - 1) / 2;
    const offset = index - center; // negative = left side, positive = right side
    const spreadDistance = 500; // px - how far cards spread when disappearing

    // When visible: cards are in normal grid position (translateX = 0)
    // When not visible: cards spread outward to sides
    const translateX = isVisible ? 0 : offset * spreadDistance;
    const scale = isVisible ? 1 : 0.8;
    const opacity = isVisible ? 1 : 0;

    // Stagger delays: outer cards move first when exiting, inner cards first when entering
    const enterDelay = Math.abs(offset) * 500; // Center cards appear first
    const exitDelay = (1.5 - Math.abs(offset)) * 500; // Outer cards disappear first
    const transitionDelay = isVisible ? enterDelay : exitDelay;

    return (
        <div
            className="relative group"
            style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity,
                transition: `transform 800ms cubic-bezier(.25,.8,.25,1) ${transitionDelay}ms, opacity 600ms ease ${transitionDelay}ms`,
            }}
        >
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors h-40 flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                            {count}
                            {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                        </div>
                        <AnimatedIcon Icon={stat.Icon} size={32} glowColor={stat.glowColor} animationType="bounce" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

export default InteractiveStats;
