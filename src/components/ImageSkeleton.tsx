import React from 'react';

interface ImageSkeletonProps {
    width?: string;
    height?: string;
    className?: string;
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
    width = 'w-64',
    height = 'h-64',
    className = '',
    rounded = '2xl'
}) => {
    const roundedClasses = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl'
    };

    return (
        <div
            className={`${width} ${height} ${roundedClasses[rounded]} bg-muted/50 animate-pulse ${className}`}
            aria-busy="true"
            aria-label="Loading image"
        />
    );
};

export default ImageSkeleton;
