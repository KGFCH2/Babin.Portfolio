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
        triggerOnce: true,
    });

    const stats: StatItem[] = [
        {
            label: 'Projects Completed',
            value: 10,
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
            value: 500,
            suffix: '+',
            description: 'Across multiple repositories'
        }
    ];

    return (
        <div ref={ref} className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            stat={stat}
                            index={index}
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
    isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, isVisible }) => {
    const [count, setCount] = useState(0);

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

    return (
        <div
            className={`relative group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
            }}
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
