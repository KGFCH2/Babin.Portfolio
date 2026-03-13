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
    glowColor = 'hsl(var(--primary) / 0.6)',
    color,
    animationType = 'bounce',
}) => {
    const animationClass = {
        bounce: 'group-hover/section:animate-bounce group-hover/icon:animate-bounce',
        pulse: 'group-hover/section:animate-pulse group-hover/icon:animate-pulse',
        spin: 'group-hover/section:animate-spin group-hover/icon:animate-spin',
        scale: 'group-hover/section:scale-125 group-hover/icon:scale-125',
    }[animationType];

    // Map dynamic glowColor to one of two supported classes to avoid inline styles
    const glowClass = glowColor === 'transparent' ? 'ai--glow-none' : 'ai--glow-default';

    return (
        <span
            className={`ai ${glowClass} group/icon inline-block relative transition-all duration-300 ${className} ${animationClass}`}
        >
            {/* Outer glow halo - large blur */}
            <div className="ai__halo-lg group-hover/section:opacity-80 group-hover/icon:opacity-80" />

            {/* Middle glow - medium blur */}
            <div className="ai__halo-md group-hover/section:opacity-60 group-hover/icon:opacity-60" />

            {/* Close glow - small blur */}
            <div className="ai__halo-sm group-hover/section:opacity-40 group-hover/icon:opacity-40" />

            {/* Icon with animation and color transition */}
            <Icon
                size={size}
                className={`ai__icon transition-all duration-300 ${animationClass} group-hover/icon:drop-shadow-lg`}
            />
        </span>
    );
};

export default AnimatedIcon;
