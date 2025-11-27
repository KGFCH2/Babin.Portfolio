import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { X, FileText, ExternalLink, ZoomIn, ZoomOut, Download, RotateCcw } from "lucide-react";
import { achievementsData } from "../data/achievements";
import { Button } from "@/components/ui/button";

const Achievements = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [selectedItem, setSelectedItem] = useState<{ file: string; type: 'image' | 'pdf' } | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [filter, setFilter] = useState<'all' | 'certificates' | 'awards' | 'badges'>('all');

    // Helper to determine type based on extension
    const getFileType = (path: string) => {
        const ext = path.toLowerCase();
        if (ext.endsWith('.pdf')) return 'pdf';
        return 'image';
    };

    const awardsCategories = [
        "Awards & Recognitions",
        "Unstop",
        "Hack2Skill"
    ];

    const badgesCategories = [
        "Microsoft Badges",
        "Holopin"
    ];

    const filteredAchievements = achievementsData.map(category => {
        if (filter === 'all') return category;

        if (filter === 'awards') {
            return awardsCategories.includes(category.category) ? category : null;
        }

        if (filter === 'badges') {
            if (badgesCategories.includes(category.category)) return category;
            // Check for items with "Badge" in title
            const badgeItems = category.items.filter(item => item.title.toLowerCase().includes('badge'));
            if (badgeItems.length > 0) {
                return { ...category, items: badgeItems };
            }
            return null;
        }

        if (filter === 'certificates') {
            if (awardsCategories.includes(category.category)) return null;
            if (badgesCategories.includes(category.category)) return null;

            // Filter out badge items from remaining categories
            const certItems = category.items.filter(item => !item.title.toLowerCase().includes('badge'));
            if (certItems.length > 0) {
                return { ...category, items: certItems };
            }
            return null;
        }
        return null;
    }).filter((cat): cat is typeof achievementsData[0] => cat !== null);

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
    };

    const handleResetZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel(1);
    };

    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedItem) {
            try {
                const response = await fetch(selectedItem.file);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                const filename = decodeURIComponent(selectedItem.file.split('/').pop() || 'download');
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Download failed:', error);
            }
        }
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        setZoomLevel(1);
    };

    if (!filteredAchievements || filteredAchievements.length === 0) {
        return (
            <section id="achievements" className="py-20 relative section-divider-top" ref={ref}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold">No achievements data available.</h2>
                </div>
            </section>
        );
    }

    const handleItemClick = (file: string) => {
        const type = getFileType(file);
        if (type === 'pdf') {
            window.open(file, '_blank');
        } else {
            setSelectedItem({ file, type });
        }
    };

    return (
        <section id="achievements" className="py-20 relative section-divider-top" ref={ref}>
            <div className="container mx-auto px-4">
                <div
                    className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : ""
                        }`}
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <SectionTitle
                                segments={[
                                    {
                                        text: "My",
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                                    },
                                    {
                                        text: " Achievements",
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                                    },
                                ]}
                            />
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            A collection of my certificates, awards, and recognitions.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Button
                                variant={filter === 'all' ? "default" : "outline"}
                                onClick={() => setFilter('all')}
                                className="min-w-[100px]"
                            >
                                All
                            </Button>
                            <Button
                                variant={filter === 'certificates' ? "default" : "outline"}
                                onClick={() => setFilter('certificates')}
                                className="min-w-[100px]"
                            >
                                Certificates
                            </Button>
                            <Button
                                variant={filter === 'awards' ? "default" : "outline"}
                                onClick={() => setFilter('awards')}
                                className="min-w-[100px]"
                            >
                                Awards/Hackathons/Programs
                            </Button>
                            <Button
                                variant={filter === 'badges' ? "default" : "outline"}
                                onClick={() => setFilter('badges')}
                                className="min-w-[100px]"
                            >
                                Badges
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {filteredAchievements.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item, index) => {
                                        const type = getFileType(item.file);
                                        return (
                                            <Card
                                                key={index}
                                                className="overflow-hidden border-border/50 shadow-card hover:shadow-glow transition-smooth group cursor-pointer flex flex-col h-full"
                                                onClick={() => handleItemClick(item.file)}
                                            >
                                                <div className="h-48 overflow-hidden bg-muted/10 relative flex items-center justify-center p-4">
                                                    {type === 'image' ? (
                                                        <img
                                                            src={item.file}
                                                            alt={item.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="text-primary/50 group-hover:text-primary transition-colors">
                                                            <FileText className="w-16 h-16" />
                                                        </div>
                                                    )}

                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <p className="text-white font-semibold text-lg flex items-center gap-2">
                                                            {type === 'pdf' ? <ExternalLink className="w-5 h-5" /> : null}
                                                            {type === 'pdf' ? 'Open PDF' : 'View Image'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="p-4 flex-grow flex flex-col justify-between">
                                                    <h4 className="text-lg font-semibold text-foreground leading-tight mb-2">{item.title}</h4>
                                                    {type === 'pdf' && (
                                                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-auto">
                                                            <FileText className="w-3 h-3" /> PDF Document
                                                        </p>
                                                    )}
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal for Images */}
            {selectedItem && selectedItem.type === 'image' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in">

                    {/* Controls */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                        <button
                            onClick={handleZoomIn}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-md"
                            title="Zoom In"
                        >
                            <ZoomIn className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-md"
                            title="Zoom Out"
                        >
                            <ZoomOut className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleResetZoom}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-md"
                            title="Reset Zoom"
                        >
                            <RotateCcw className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleDownload}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-md"
                            title="Download"
                        >
                            <Download className="h-6 w-6" />
                        </button>
                        <button
                            onClick={closeLightbox}
                            className="p-2 bg-red-500/80 rounded-full text-white hover:bg-red-600 transition-colors ml-2 backdrop-blur-md"
                            title="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" onClick={closeLightbox}>
                        <div
                            className="transition-transform duration-200 ease-out"
                            style={{ transform: `scale(${zoomLevel})` }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedItem.file}
                                alt="Achievement Full View"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
