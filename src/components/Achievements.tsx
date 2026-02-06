import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { X, FileText, ExternalLink, ZoomIn, ZoomOut, Download, RotateCcw } from "lucide-react";
import { achievementsData } from "../data/achievements";
import StudyBackground from "./StudyBackground";

type FilterType = 'All' | 'Awards' | 'Certificates | Technical Courses' | 'Bootcamps | Events | Competitions' | 'Internship Certificates' | 'Badges | Trophies';

const Achievements = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [selectedItem, setSelectedItem] = useState<{ file: string; type: 'image' | 'pdf' } | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isClosing, setIsClosing] = useState(false);
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const [activeFilter, setActiveFilter] = useState<FilterType>('All');

    // Helper to determine type based on extension
    const getFileType = (path: string) => {
        const ext = path.toLowerCase();
        if (ext.endsWith('.pdf')) return 'pdf';
        return 'image';
    };

    // Get all achievements with category name rename
    const getAllAchievements = () => {
        return achievementsData.map(cat => {
            const categoryName = cat.category === "LinkedIn Learning (LU)" ? "Let's Upgrade" : cat.category;
            return { ...cat, category: categoryName };
        });
    };

    // Filter achievements based on selected filter
    const getFilteredAchievements = (achievements: typeof achievementsData, filter: FilterType) => {
        const awardCategories = ["Awards & Recognitions"];
        const certificateCategories = ["AWS", "CISCO", "Cognitive Class", "GeeksforGeeks", "Google", "GTech Learn", "HackerRank", "HP Life", "IBM", "Infosys Springboard", "Microsoft", "Pantech e Learning", "Qualcomm", "Saylor Academy", "Scaler", "SimpliLearn", "Skill Nation", "Udemy"];
        const bootcampCategories = ["Events & Hackathons", "Hack2Skill", "Kaggle", "Let's Upgrade", "MyBharat", "myGov", "Skill India", "Unstop"];
        const internshipCategories = ["Oasis Infobyte", "Infosys Springboard Internships", "The Developers Arena"];
        const badgeCategories = ["AWS Badges", "Google Badges", "Holopin Badges", "HP Life Badges", "Microsoft Badges & Trophies", "Microsoft Trophies", "Qualcomm Badges"];

        switch (filter) {
            case 'All':
                return achievements;
            case 'Awards':
                return achievements.filter(cat => awardCategories.includes(cat.category));
            case 'Certificates | Technical Courses':
                return achievements.filter(cat => certificateCategories.includes(cat.category));
            case 'Bootcamps | Events | Competitions':
                return achievements.filter(cat => bootcampCategories.includes(cat.category));
            case 'Internship Certificates':
                return achievements.filter(cat => internshipCategories.includes(cat.category));
            case 'Badges | Trophies':
                return achievements.filter(cat => badgeCategories.includes(cat.category));
            default:
                return achievements;
        }
    };

    const allAchievements = getAllAchievements();
    const filteredAchievements = getFilteredAchievements(allAchievements, activeFilter);

    if (!allAchievements || allAchievements.length === 0) {
        return (
            <section id="achievements" className="py-20 relative" ref={ref}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold">No achievements data available.</h2>
                </div>
            </section>
        );
    }

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
        }, 1000); // Reduced animation duration to show full closing sequence
    };

    const handleImageError = (file: string) => {
        setImageErrors(prev => new Set(prev).add(file));
    };

    const handleItemClick = (file: string) => {
        const type = getFileType(file);
        if (type === 'pdf') {
            window.open(file, '_blank');
        } else {
            // Immediately close previous image if one is open
            if (selectedItem) {
                setSelectedItem(null);
                setZoomLevel(1);
                setIsClosing(false);
                // Open new image after state clears
                setTimeout(() => {
                    setSelectedItem({ file, type });
                }, 50);
            } else {
                setSelectedItem({ file, type });
            }
        }
    };

    return (
        <section id="achievements" className="py-12 md:py-20 relative min-h-screen" ref={ref}>
            <div className="fixed inset-0 -z-10 w-full h-full">
                <StudyBackground />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div
                    className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
                        }`}
                >
                    <div className="text-center space-y-4 mt-10 md:mt-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-[280px] mx-auto md:max-w-none">
                            <SectionTitle
                                segments={[
                                    {
                                        text: "My",
                                        className: "text-blue-700 dark:text-[#89D3BD]",
                                    },
                                    {
                                        text: " Achievements",
                                        className: "text-blue-900 dark:text-cyan-300",
                                    },
                                ]}
                            />
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            A collection of my certificates, awards, and recognitions.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                        {(['All', 'Awards', 'Certificates | Technical Courses', 'Bootcamps | Events | Competitions', 'Internship Certificates', 'Badges | Trophies'] as FilterType[]).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${activeFilter === filter
                                    ? 'bg-blue-700 dark:bg-[#89D3BD] text-white dark:text-black shadow-lg scale-105 font-black'
                                    : 'bg-muted/50 text-foreground hover:bg-muted border border-border/50 hover:border-primary/20'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-16 animate-slide-show">
                        {filteredAchievements.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-6">
                                <h3 className="text-2xl font-bold text-blue-700 dark:text-[#89D3BD] border-l-4 border-primary pl-4 whitespace-normal break-words max-w-full">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item, index) => {
                                        const type = getFileType(item.file);
                                        // Treat as selected only when modal is open and not closing
                                        const isSelected = !isClosing && selectedItem?.file === item.file;

                                        return (
                                            <Card
                                                key={index}
                                                className="overflow-hidden border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-2 hover:scale-[1.02]"
                                                onClick={() => handleItemClick(item.file)}
                                            >
                                                <div className="h-48 overflow-hidden bg-muted/10 relative flex items-center justify-center p-4">
                                                    {type === 'image' ? (
                                                        <>
                                                            {!imageErrors.has(item.file) ? (
                                                                <img
                                                                    src={item.file}
                                                                    alt={item.title}
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${isSelected ? 'shadow-[0_8px_30px_rgba(29,78,216,0.35)] dark:shadow-[0_8px_30px_rgba(6,182,212,0.35)]' : ''}`}
                                                                    onError={() => handleImageError(item.file)}
                                                                />
                                                            ) : (
                                                                <div className="text-muted-foreground flex flex-col items-center justify-center gap-2">
                                                                    <FileText className="w-12 h-12" />
                                                                    <span className="text-xs">Image unavailable</span>
                                                                </div>
                                                            )}
                                                        </>
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
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-all duration-1000 ${isClosing
                        ? 'opacity-0 backdrop-blur-none'
                        : 'animate-fade-in'
                        }`}
                >
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
                            className="p-2 bg-blue-700/80 dark:bg-[#89D3BD]/80 rounded-full text-white dark:text-black hover:bg-blue-700 dark:hover:bg-[#89D3BD] transition-all duration-300 ml-2 backdrop-blur-md hover:scale-110 hover:rotate-90"
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
                            className={`transition-all duration-300 ease-out ${isClosing
                                ? 'animate-close-image'
                                : ''
                                }`}
                            style={{ transform: `scale(${zoomLevel})` }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedItem.file}
                                alt="Achievement Full View"
                                className={`relative max-w-[85vw] max-h-[75vh] object-contain rounded-lg transition-all duration-300 ${isClosing ? 'border-0 shadow-none opacity-90' : 'border-2 border-white/10 shadow-[0_12px_40px_rgba(29,78,216,0.5)] dark:shadow-[0_12px_40px_rgba(6,182,212,0.6)]'}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
