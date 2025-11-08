import { useEffect, useRef, useState } from "react";

interface ColorSegment {
    text: string;
    className: string;
}

interface SectionTitleProps {
    text?: string;
    segments?: ColorSegment[];
    className?: string;
}

const SectionTitle = ({ text, segments, className = "" }: SectionTitleProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Build character list with their respective classes
    const buildCharacterList = () => {
        if (segments && segments.length > 0) {
            const chars: Array<{ char: string; className: string; index: number }> = [];
            let charIndex = 0;
            segments.forEach((segment) => {
                segment.text.split("").forEach((char) => {
                    chars.push({
                        char,
                        className: segment.className,
                        index: charIndex++,
                    });
                });
            });
            return chars;
        } else if (text) {
            return text.split("").map((char, index) => ({
                char,
                className,
                index,
            }));
        }
        return [];
    };

    const charList = buildCharacterList();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimating(true);
                } else {
                    setIsAnimating(false);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="inline-flex flex-wrap gap-0">
            {charList.map(({ char, className: charClass, index }) => (
                <span
                    key={index}
                    className={`inline-block will-change-transform ${charClass} ${isAnimating ? "animate-wave" : "opacity-0 translate-y-6"
                        }`}
                    style={{
                        animationDelay: isAnimating ? `${index * 45}ms` : "0ms",
                        animationFillMode: "both",
                        animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        display: "inline-block",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

export default SectionTitle;
