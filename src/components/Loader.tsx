import React, { useEffect } from 'react';

interface LoaderProps {
    minDurationMs?: number;
    onFinish?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ minDurationMs = 5000, onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish?.();
        }, minDurationMs);

        return () => clearTimeout(timer);
    }, [minDurationMs, onFinish]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                {/* Main rotating ring */}
                <div className="loader-ring">
                    <div className="loader-ring-inner"></div>
                </div>

                {/* Pulsing center circle */}
                <div className="loader-pulse"></div>

                {/* Loading text with animated dots */}
                <div className="loader-text">
                    <span>Loading</span>
                    <span className="loader-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
