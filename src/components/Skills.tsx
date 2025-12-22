import React, { useState } from 'react';
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import StudyBackground from "./StudyBackground";
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiReact,
    SiVite,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiFlask,
    SiFastapi,
    SiMysql,
    SiSqlite,
    SiMongodb,
    SiNumpy,
    SiPandas,
    SiPlotly,
    SiScikitlearn,
    SiTensorflow,
    SiVercel,
    SiStreamlit,
    SiNetlify,
    SiGithub,
    SiGit,
    SiCanva,
    SiLeetcode,
    SiHackerrank,
    SiOpenjdk,
    SiVscodium,
} from 'react-icons/si';

const Skills: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Function to get skill icon
    const getSkillIcon = (skillName: string) => {
        const iconMap: Record<string, { icon: React.ComponentType<any>; color: string } | { image: string; alt: string }> = {
            // Programming Languages
            'C': { icon: SiC, color: '#A8B9CC' },
            'C++': { icon: SiCplusplus, color: '#00599C' },
            'Java': { icon: SiOpenjdk, color: '#ED8B00' },
            'Python': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png', alt: 'Python' },
            'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },

            // Web Development
            'HTML': { icon: SiHtml5, color: '#E34F26' },
            'CSS': { icon: SiCss3, color: '#1572B6' },
            'TypeScript': { icon: SiTypescript, color: '#3178C6' },
            'React': { icon: SiReact, color: '#61DAFB' },
            'Vite': { icon: SiVite, color: '#646CFF' },
            'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
            'Framer Motion': { icon: SiFramer, color: '#0055FF' },

            // Backend & Frameworks
            'Node.js': { icon: SiNodedotjs, color: '#339933' },
            'Flask': { icon: SiFlask, color: '#000000' },
            'FastAPI': { icon: SiFastapi, color: '#009688' },

            // Database
            'MySQL': { icon: SiMysql, color: '#4479A1' },
            'SQLite': { icon: SiSqlite, color: '#003B57' },
            'MongoDB': { icon: SiMongodb, color: '#47A248' },

            // Data Science & ML
            'NumPy': { icon: SiNumpy, color: '#013243' },
            'Pandas': { icon: SiPandas, color: '#150458' },
            'Matplotlib': { image: 'https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png', alt: 'Matplotlib' },
            'Seaborn': { image: 'https://seaborn.pydata.org/_images/logo-wide-lightbg.svg', alt: 'Seaborn' },
            'Plotly': { icon: SiPlotly, color: '#3F4F75' },
            'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
            'XGBoost': { image: 'https://img.shields.io/badge/XGBoost-00A65A?style=for-the-badge&logo=xgboost&logoColor=white', alt: 'XGBoost' },
            'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },

            // Deployment & Platforms
            'Vercel': { icon: SiVercel, color: '#000000' },
            'Streamlit': { icon: SiStreamlit, color: '#FF4B4B' },
            'Netlify': { icon: SiNetlify, color: '#00C58E' },

            // Tools & IDEs
            'VS Code': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png', alt: 'VS Code' },
            'GitHub': { icon: SiGithub, color: '#181717' },
            'Git': { icon: SiGit, color: '#F05032' },

            // Design Tools
            'Canva': { icon: SiCanva, color: '#00C4CC' },
            'MS Word': { image: 'https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white', alt: 'MS Word' },
            'MS PowerPoint': { image: 'https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=for-the-badge&logo=microsoft-powerpoint&logoColor=white', alt: 'MS PowerPoint' },
            'MS Excel': { image: 'https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white', alt: 'MS Excel' },
            'Paint': { image: 'https://img.shields.io/badge/MS_Paint-0078D4?style=for-the-badge&logo=windows&logoColor=white', alt: 'Paint' },

            // Coding Platforms
            'LeetCode': { icon: SiLeetcode, color: '#FFA116' },
            'Hackerrank': { icon: SiHackerrank, color: '#00EA64' },
            'Codolio': { image: 'https://img.shields.io/badge/Codolio-6366F1?style=for-the-badge&logo=code&logoColor=white', alt: 'Codolio' },
        };

        const iconConfig = iconMap[skillName];
        if (!iconConfig) {
            return <span className="text-2xl">⚡</span>; // Default icon
        }

        // Check if it's an image badge
        if ('image' in iconConfig) {
            return (
                <img
                    src={iconConfig.image}
                    alt={iconConfig.alt}
                    className="h-8 object-contain drop-shadow-sm"
                    loading="lazy"
                />
            );
        }

        // Otherwise it's an icon component
        const IconComponent = iconConfig.icon;
        return <IconComponent size={32} color={iconConfig.color} className="drop-shadow-sm" />;
    };
    const skills = [
        // Programming Languages
        { name: 'C', category: 'Programming' },
        { name: 'C++', category: 'Programming' },
        { name: 'Java', category: 'Programming' },
        { name: 'Python', category: 'Programming' },
        { name: 'JavaScript', category: 'Programming' },

        // Web Development
        { name: 'HTML', category: 'Web' },
        { name: 'CSS', category: 'Web' },
        { name: 'TypeScript', category: 'Web' },
        { name: 'React', category: 'Web' },
        { name: 'Vite', category: 'Web' },
        { name: 'Tailwind', category: 'Web' },
        { name: 'Framer Motion', category: 'Web' },

        // Backend & Frameworks
        { name: 'Node.js', category: 'Backend' },
        { name: 'Flask', category: 'Backend' },
        { name: 'FastAPI', category: 'Backend' },

        // Database
        { name: 'MySQL', category: 'Database' },
        { name: 'SQLite', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },

        // Data Science & ML
        { name: 'NumPy', category: 'Data Science' },
        { name: 'Pandas', category: 'Data Science' },
        { name: 'Matplotlib', category: 'Data Science' },
        { name: 'Seaborn', category: 'Data Science' },
        { name: 'Plotly', category: 'Data Science' },
        { name: 'Scikit-learn', category: 'ML' },
        { name: 'XGBoost', category: 'ML' },
        { name: 'TensorFlow', category: 'ML' },

        // Deployment & Platforms
        { name: 'Vercel', category: 'Deployment' },
        { name: 'Streamlit', category: 'Deployment' },
        { name: 'Netlify', category: 'Deployment' },

        // Tools & IDEs
        { name: 'VS Code', category: 'Tools' },
        { name: 'GitHub', category: 'Tools' },
        { name: 'Git', category: 'Tools' },

        // Design Tools
        { name: 'Canva', category: 'Design' },
        { name: 'MS Word', category: 'Design' },
        { name: 'MS PowerPoint', category: 'Design' },
        { name: 'MS Excel', category: 'Design' },
        { name: 'Paint', category: 'Design' },

        // Coding Platforms
        { name: 'LeetCode', category: 'Platforms' },
        { name: 'Hackerrank', category: 'Platforms' },
        { name: 'Codolio', category: 'Platforms' },

        // Additional Libraries

    ];

    const getCategoryGradient = (category: string) => {
        const map: Record<string, string> = {
            Programming: 'from-indigo-500 to-purple-500',
            Web: 'from-emerald-400 to-cyan-500',
            Backend: 'from-orange-500 to-red-500',
            Database: 'from-yellow-400 to-orange-500',
            'Data Science': 'from-sky-400 to-indigo-500',
            ML: 'from-pink-500 to-violet-600',
            Deployment: 'from-teal-400 to-blue-500',
            Tools: 'from-slate-400 to-slate-700',
            Design: 'from-rose-400 to-fuchsia-500',
            Platforms: 'from-green-400 to-emerald-600',
        };
        return map[category] || 'from-primary to-secondary';
    };

    const allCategories = Array.from(new Set(skills.map(s => s.category)));

    const filteredSkills = skills.filter(skill => {
        const matchesCategory = !selectedCategory || skill.category === selectedCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="skills" className="py-20 relative overflow-hidden section-divider-top section-divider-offset-md" ref={ref}>
            <StudyBackground />
            <div className={`container mx-auto px-6 relative z-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    <SectionTitle
                        segments={[
                            {
                                text: "Technical",
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                            },
                            {
                                text: " Skills",
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                            },
                        ]}
                    />
                </h2>
                <p className="text-center text-muted-foreground mb-8 text-lg">Building the future with modern technologies</p>

                {/* Interactive Search and Filter */}
                <div className="max-w-2xl mx-auto mb-12 space-y-4">
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                                ? 'bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg'
                                : 'bg-muted text-foreground hover:bg-muted/80'
                                }`}
                        >
                            All Skills
                        </button>
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? `bg-gradient-to-r ${getCategoryGradient(category)} text-white shadow-lg`
                                    : 'bg-muted text-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Showing {filteredSkills.length} of {skills.length} skills
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {filteredSkills.length > 0 ? filteredSkills.map((skill, index) => {
                        const gradient = getCategoryGradient(skill.category);
                        const delayClass = `anim-delay-${Math.min(500, Math.round(index * 50))}`;

                        return (
                            <article
                                key={skill.name}
                                aria-labelledby={`skill-${index}`}
                                className={`group relative overflow-hidden border border-border/60 bg-card/60 p-6 rounded-lg flex flex-col justify-between hover:shadow-glow transition-transform duration-200 transform hover:-translate-y-1 ${delayClass} min-h-[140px]`}
                            >
                                {/* hover gradient overlay */}
                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">
                                        {getSkillIcon(skill.name)}
                                    </div>
                                    <h3 id={`skill-${index}`} className="text-sm font-medium text-foreground text-center">
                                        {skill.name}
                                    </h3>
                                </div>

                                <div className="mt-4 flex items-center justify-end relative z-10">
                                    <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full text-white bg-gradient-to-br ${gradient}`}>
                                        {skill.category}
                                    </span>
                                </div>
                            </article>
                        );
                    }) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-lg text-muted-foreground">No skills found matching your search.</p>
                        </div>
                    )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse anim-delay-1000" />
            </div>
        </section>
    );
};

export default Skills;
