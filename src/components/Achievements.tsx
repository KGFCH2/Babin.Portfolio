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
    const [isClosing, setIsClosing] = useState(false);

    // Helper to determine type based on extension
    const getFileType = (path: string) => {
        const ext = path.toLowerCase();
        if (ext.endsWith('.pdf')) return 'pdf';
        return 'image';
    };

    const getFilteredData = () => {
        const awardsCategories = ["Awards & Recognitions"];
        const badgeCategories = ["Microsoft Badges", "Microsoft Trophies", "Holopin Badges", "HP Life Badges"];
        // Hackathons & Events is treated as certificates (not awards, not badges)

        const isBadgeItem = (item: { title: string }) => {
            const title = item.title.toLowerCase();
            return title.includes('badge') || title.includes('trophy');
        };

        return achievementsData.map(cat => {
            // Rename LU
            const categoryName = cat.category === "LinkedIn Learning (LU)" ? "Let's Upgrade" : cat.category;
            const modifiedCat = { ...cat, category: categoryName };

            if (filter === 'all') return modifiedCat;

            if (filter === 'awards') {
                return awardsCategories.includes(cat.category) ? modifiedCat : null;
            }

            if (filter === 'badges') {
                if (badgeCategories.includes(cat.category)) return modifiedCat;
                // Check for badge items in other categories
                const badgeItems = cat.items.filter(item => isBadgeItem(item));
                if (badgeItems.length > 0) {
                    return { ...modifiedCat, items: badgeItems };
                }
                return null;
            }

            if (filter === 'certificates') {
                // Exclude Awards categories
                if (awardsCategories.includes(cat.category)) return null;
                // Exclude Badge categories
                if (badgeCategories.includes(cat.category)) return null;

                // For remaining categories, exclude badge items
                const nonBadgeItems = cat.items.filter(item => !isBadgeItem(item));
                if (nonBadgeItems.length > 0) {
                    return { ...modifiedCat, items: nonBadgeItems };
                }
                return null;
            }

            return modifiedCat;
        }).filter((cat): cat is typeof achievementsData[0] => cat !== null);
    };

    const filteredAchievements = getFilteredData();

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
        setIsClosing(true);
        setTimeout(() => {
            setSelectedItem(null);
            setZoomLevel(1);
            setIsClosing(false);
        }, 1500); // Match animation duration (slower close)
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
                    className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
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
                                className="min-w-[100px] hover:shadow-glow transition-all duration-300"
                            >
                                All
                            </Button>
                            <Button
                                variant={filter === 'awards' ? "default" : "outline"}
                                onClick={() => setFilter('awards')}
                                className="min-w-[100px] hover:shadow-glow transition-all duration-300"
                            >
                                Awards
                            </Button>
                            <Button
                                variant={filter === 'certificates' ? "default" : "outline"}
                                onClick={() => setFilter('certificates')}
                                className="min-w-[100px] hover:shadow-glow transition-all duration-300"
                            >
                                Certificates | Hackathons | Bootcamps | Events
                            </Button>
                            <Button
                                variant={filter === 'badges' ? "default" : "outline"}
                                onClick={() => setFilter('badges')}
                                className="min-w-[100px] hover:shadow-glow transition-all duration-300"
                            >
                                Badges | Trophies
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
                                                <div className="p-4 flex-grow flex flex-col justify-center items-center text-center">
                                                    <h4 className="text-lg font-semibold text-foreground leading-tight mb-2">{item.title}</h4>
                                                    {type === 'pdf' && (
                                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
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
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-all duration-400 ${isClosing
                        ? 'opacity-0 backdrop-blur-none'
                        : 'animate-fade-in'
                        }`}
                >
                    {/* Animated glow background */}
                    <div className={`absolute inset-0 transition-all duration-500 ${isClosing ? 'opacity-0 scale-150' : 'opacity-100'}`}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/30 via-purple-500/20 to-secondary/30 rounded-full blur-3xl animate-pulse" />
                    </div>

                    {/* Controls */}
                    <div className={`absolute top-4 right-4 flex items-center gap-2 z-50 transition-all duration-300 ${isClosing ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
                        }`}>
                        <button
                            onClick={handleZoomIn}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md hover:scale-110"
                            title="Zoom In"
                        >
                            <ZoomIn className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md hover:scale-110"
                            title="Zoom Out"
                        >
                            <ZoomOut className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleResetZoom}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md hover:scale-110"
                            title="Reset Zoom"
                        >
                            <RotateCcw className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleDownload}
                            className="p-2 bg-white/10 rounded-full text-white hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md hover:scale-110"
                            title="Download"
                        >
                            <Download className="h-6 w-6" />
                        </button>
                        <button
                            onClick={closeLightbox}
                            className="p-2 bg-red-500/80 rounded-full text-white hover:bg-red-600 transition-all duration-300 ml-2 backdrop-blur-md hover:scale-110 hover:rotate-90"
                            title="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onClick={closeLightbox}
                    >
                        <div
                            className={`transition-all duration-700 ease-out ${isClosing
                                ? 'scale-50 opacity-0 rotate-12 blur-sm'
                                : 'scale-100 opacity-100 rotate-0 blur-0'
                                }`}
                            style={{ transform: `scale(${isClosing ? 0.5 : zoomLevel}) ${isClosing ? 'rotate(12deg)' : 'rotate(0deg)'}` }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Glowing border effect - Indian Flag colors */}
                            <div className={`absolute -inset-2 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-2xl blur-xl transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-60'}`} />
                            <img
                                src={selectedItem.file}
                                alt="Achievement Full View"
                                className="relative max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-2 border-white/10"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
