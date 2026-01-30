import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
    Icon: LucideIcon;
    size?: number;
    className?: string;
    glowColor?: string;
    color?: string;
    animationType?: 'bounce' | 'pulse' | 'spin' | 'scale';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
    Icon,
    size = 24,
    className = '',
    glowColor = 'rgba(139, 92, 246, 0.6)',
    color,
    animationType = 'bounce',
}) => {
    const animationClass = {
        bounce: 'group-hover/icon:animate-bounce',
        pulse: 'group-hover/icon:animate-pulse',
        spin: 'group-hover/icon:animate-spin',
        scale: 'group-hover/icon:scale-125',
    }[animationType];

    return (
        <span
            className={`group/icon inline-block relative transition-all duration-300 ${className}`}
            style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                color: color || 'inherit'
            }}
        >
            {/* Outer glow halo - large blur */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-80 blur-2xl transition-all duration-300 -z-20 pointer-events-none"
                style={{
                    backgroundColor: glowColor,
                    transform: 'scale(2)',
                }}
            />

            {/* Middle glow - medium blur */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-60 blur-xl transition-all duration-300 -z-10 pointer-events-none"
                style={{
                    backgroundColor: glowColor,
                    transform: 'scale(1.5)',
                }}
            />

            {/* Close glow - small blur */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-40 blur-md transition-all duration-300 -z-10 pointer-events-none"
                style={{
                    backgroundColor: glowColor,
                    transform: 'scale(1.1)',
                }}
            />

            {/* Icon with animation and color transition */}
            <Icon
                size={size}
                className={`transition-all duration-300 ${animationClass} group-hover/icon:drop-shadow-lg`}
                style={{
                    filter: 'drop-shadow(0 0 8px ' + glowColor + ')',
                }}
            />
        </span>
    );
};

export default AnimatedIcon;
