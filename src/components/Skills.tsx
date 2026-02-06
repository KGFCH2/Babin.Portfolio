import React, { useState } from 'react';
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import StudyBackground from "./StudyBackground";
import { LucideIcon, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedIcon from "./AnimatedIcon";
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
    const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
    const isMobile = useIsMobile();

    // Function to get skill icon
    const getSkillIcon = (skillName: string) => {
        const iconMap: Record<string, { icon: React.ComponentType<any>; color: string } | { image: string; alt: string }> = {
            // Programming Languages
            'C': { image: 'https://icon.icepanel.io/Technology/svg/C.svg', alt: 'C' },
            'C++': { icon: SiCplusplus, color: '#00599C' },
            'Java': { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', alt: 'Java' },
            'Python': { image: 'https://icon.icepanel.io/Technology/svg/Python.svg', alt: 'Python' },
            'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },

            // Web Development
            'HTML': { icon: SiHtml5, color: '#E34F26' },
            'CSS': { icon: SiCss3, color: '#1572B6' },
            'TypeScript': { icon: SiTypescript, color: '#3178C6' },
            'React': { icon: SiReact, color: '#61DAFB' },
            'Vite': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png', alt: 'Vite' },
            'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
            'Framer Motion': { image: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', alt: 'Framer Motion' },

            // Backend & Frameworks
            'Node.js': { icon: SiNodedotjs, color: '#339933' },
            'Flask': { icon: SiFlask, color: '#000000' },
            'FastAPI': { icon: SiFastapi, color: '#009688' },

            // Database
            'MySQL': { image: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png', alt: 'MySQL' },
            'SQLite': { image: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F256%2Fsqlite_logo_icon_169724.png&id=169724&pack_or_individual=pack', alt: 'SQLite' },
            'MongoDB': { image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', alt: 'MongoDB' },

            // Data Science & ML
            'NumPy': { image: 'https://images.seeklogo.com/logo-png/39/2/numpy-logo-png_seeklogo-398690.png', alt: 'NumPy' },
            'Pandas': { image: 'https://img.icons8.com/color/512/pandas.png', alt: 'Pandas' },
            'Matplotlib': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png', alt: 'Matplotlib' },
            'Seaborn': { image: 'https://cdn.worldvectorlogo.com/logos/seaborn-1.svg', alt: 'Seaborn' },
            'Plotly': { image: 'https://images.plot.ly/logo/new-branding/plotly-logomark.png', alt: 'Plotly' },
            'Scikit-learn': { image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', alt: 'Scikit-learn' },
            'XGBoost': { image: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7w8rh2oj5arc1epo2sls.png', alt: 'XGBoost' },
            'TensorFlow': { image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', alt: 'TensorFlow' },

            // Deployment & Platforms
            'Vercel': { icon: SiVercel, color: '#000000' },
            'Streamlit': { image: 'https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png', alt: 'Streamlit' },
            'Netlify': { image: 'https://www.netlify.com/v3/img/components/logomark.png', alt: 'Netlify' },

            // Tools & IDEs
            'VS Code': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png', alt: 'VS Code' },
            'GitHub': { icon: SiGithub, color: '#181717' },
            'Git': { icon: SiGit, color: '#F05032' },

            // Design Tools
            'Canva': { image: 'https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg', alt: 'Canva' },
            'MS Word': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Office_Word_%282025%E2%80%93present%29.svg/1990px-Microsoft_Office_Word_%282025%E2%80%93present%29.svg.png', alt: 'MS Word' },
            'MS PowerPoint': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg.png', alt: 'MS PowerPoint' },
            'MS Excel': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1166px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png', alt: 'MS Excel' },
            'Paint': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft_Paint.svg/2048px-Microsoft_Paint.svg.png', alt: 'Paint' },

            // Coding Platforms
            'LeetCode': { image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', alt: 'LeetCode' },
            'Hackerrank': { image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png', alt: 'Hackerrank' },
            'Codolio': { image: 'https://codolio-pt.vercel.app/codolio_assets/gif-owl-transparent.GIF', alt: 'Codolio' },
        };

        const iconConfig = iconMap[skillName];
        if (!iconConfig) {
            return <AnimatedIcon Icon={Zap} size={24} color="#eab308" glowColor="transparent" animationType="pulse" />;
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
        { name: 'C', category: 'Programming', description: 'A powerful, low-level language for system programming.' },
        { name: 'C++', category: 'Programming', description: 'An extension of C, used for high-performance applications and game development.' },
        { name: 'Java', category: 'Programming', description: 'A versatile, object-oriented language popular for enterprise-level applications.' },
        { name: 'Python', category: 'Programming', description: 'A high-level, interpreted language for general-purpose programming.' },
        { name: 'JavaScript', category: 'Programming', description: 'The scripting language for web pages, essential for frontend development.' },

        // Web Development
        { name: 'HTML', category: 'Web', description: 'The standard markup language for creating web pages.' },
        { name: 'CSS', category: 'Web', description: 'Cascading Style Sheets, used for styling web pages.' },
        { name: 'TypeScript', category: 'Web', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
        { name: 'React', category: 'Web', description: 'A JavaScript library for building user interfaces.' },
        { name: 'Vite', category: 'Web', description: 'A fast frontend build tool that significantly improves the development experience.' },
        { name: 'Tailwind', category: 'Web', description: 'A utility-first CSS framework for rapidly building custom designs.' },
        { name: 'Framer Motion', category: 'Web', description: 'A production-ready motion library for React.' },

        // Backend & Frameworks
        { name: 'Node.js', category: 'Backend', description: 'A JavaScript runtime built on Chrome V8 JavaScript engine.' },
        { name: 'Flask', category: 'Backend', description: 'A lightweight Python web framework.' },
        { name: 'FastAPI', category: 'Backend', description: 'A modern, fast (high-performance) web framework for building APIs with Python.' },

        // Database
        { name: 'MySQL', category: 'Database', description: 'An open-source relational database management system.' },
        { name: 'SQLite', category: 'Database', description: 'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.' },
        { name: 'MongoDB', category: 'Database', description: 'A NoSQL document database known for its flexibility and scalability.' },

        // Data Science & ML
        { name: 'NumPy', category: 'Data Science', description: 'The fundamental package for numerical computation in Python.' },
        { name: 'Pandas', category: 'Data Science', description: 'A library providing high-performance, easy-to-use data structures and data analysis tools.' },
        { name: 'Matplotlib', category: 'Data Science', description: 'A comprehensive library for creating static, animated, and interactive visualizations in Python.' },
        { name: 'Seaborn', category: 'Data Science', description: 'A Python data visualization library based on matplotlib, providing a high-level interface for drawing attractive and informative statistical graphics.' },
        { name: 'Plotly', category: 'Data Science', description: 'An interactive graphing library for Python, used for scientific graphing, financial charting, and more.' },
        { name: 'Scikit-learn', category: 'ML', description: 'A free software machine learning library for the Python programming language.' },
        { name: 'XGBoost', category: 'ML', description: 'An optimized distributed gradient boosting library designed to be highly efficient, flexible, and portable.' },
        { name: 'TensorFlow', category: 'ML', description: 'An open-source machine learning framework for research and production.' },

        // Deployment & Platforms
        { name: 'Vercel', category: 'Deployment', description: 'A platform for frontend developers, providing instant deployments, global CDN, and automatic HTTPS.' },
        { name: 'Streamlit', category: 'Deployment', description: 'An open-source app framework for Machine Learning and Data Science teams.' },
        { name: 'Netlify', category: 'Deployment', description: 'A platform for automating web projects, providing continuous deployment, serverless functions, and a global CDN.' },

        // Tools & IDEs
        { name: 'VS Code', category: 'Tools', description: 'A free source-code editor made by Microsoft for Windows, Linux and macOS.' },
        { name: 'GitHub', category: 'Tools', description: 'A platform for version control and collaboration, hosting millions of open-source projects.' },
        { name: 'Git', category: 'Tools', description: 'A distributed version control system for tracking changes in source code during software development.' },

        // Design Tools
        { name: 'Canva', category: 'Design', description: 'An online graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.' },
        { name: 'MS Word', category: 'Design', description: 'A word processor developed by Microsoft.' },
        { name: 'MS PowerPoint', category: 'Design', description: 'A presentation program developed by Microsoft.' },
        { name: 'MS Excel', category: 'Design', description: 'A spreadsheet program developed by Microsoft.' },
        { name: 'Paint', category: 'Design', description: 'A simple raster graphics editor that has been included with all versions of Microsoft Windows.' },

        // Coding Platforms
        { name: 'LeetCode', category: 'Platforms', description: 'A platform for preparing technical interviews, with a vast library of coding challenges.' },
        { name: 'Hackerrank', category: 'Platforms', description: 'A platform for competitive programming and coding challenges.' },
        { name: 'Codolio', category: 'Platforms', description: 'A platform for coding practice and interview preparation.' },

        // Additional Libraries

    ];

    const getCategorySolid = (category: string) => {
        const map: Record<string, string> = {
            Programming: 'bg-red-600',
            Web: 'bg-blue-600',
            Backend: 'bg-indigo-600',
            Database: 'bg-emerald-600',
            'Data Science': 'bg-blue-600',
            ML: 'bg-pink-600',
            Deployment: 'bg-amber-600',
            Tools: 'bg-slate-600',
            Design: 'bg-rose-600',
            Platforms: 'bg-violet-600',
        };
        return map[category] || 'bg-blue-600';
    };

    const allCategories = Array.from(new Set(skills.map(s => s.category)));

    const filteredSkills = skills.filter(skill => {
        const matchesCategory = !selectedCategory || skill.category === selectedCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="skills" className="py-20 relative overflow-hidden section-divider-top section-divider-offset-md scroll-mt-20" ref={ref}>
            <StudyBackground />
            <div className={`container mx-auto px-6 relative z-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 max-w-[250px] mx-auto md:max-w-none">
                    <SectionTitle
                        segments={[
                            {
                                text: "Technical",
                                className: "text-blue-900 dark:text-cyan-300",
                            },
                            {
                                text: " Skills",
                                className: "text-blue-700 dark:text-[#89D3BD]",
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
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                        >
                            All Skills
                        </button>
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? `${getCategorySolid(category)} ${category === 'Web Development' ? 'text-black' : 'text-white'} shadow-lg`
                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
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
                        const colorClass = getCategorySolid(skill.category);
                        const delayClass = `anim-delay-${Math.min(500, Math.round(index * 50))}`;

                        return (
                            <article
                                key={skill.name}
                                aria-labelledby={`skill-${index}`}
                                onClick={() => {
                                    if (isMobile && skill.description) {
                                        setActiveSkillId(activeSkillId === skill.name ? null : skill.name);
                                    }
                                }}
                                onMouseEnter={() => {
                                    if (!isMobile && skill.description) {
                                        setActiveSkillId(skill.name);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!isMobile) {
                                        setActiveSkillId(null);
                                    }
                                }}
                                className={`group relative overflow-hidden border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.05] ${delayClass} min-h-[140px] cursor-pointer`}
                            >
                                {/* hover color overlay */}
                                <div className={`absolute inset-0 rounded-xl ${colorClass} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4 transition-opacity duration-300 group-hover:opacity-20">
                                        {getSkillIcon(skill.name)}
                                    </div>
                                    <h3 id={`skill-${index}`} className="text-sm font-medium text-foreground text-center transition-opacity duration-300 group-hover:opacity-20">
                                        {skill.name}
                                    </h3>

                                    {/* Description overlay/content */}
                                    {skill.description && (
                                        <div className={`absolute inset-0 flex items-center justify-center text-center p-2 transition-all duration-300 ${activeSkillId === skill.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                            <p className="text-xs text-foreground font-medium leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 flex items-center justify-end relative z-10">
                                    <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full text-white ${colorClass}`}>
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
