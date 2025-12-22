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
            'C': { image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png', alt: 'C' },
            'C++': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/330px-ISO_C%2B%2B_Logo.svg.png', alt: 'C++' },
            'Java': { image: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fjava_original_logo_icon_146458.png&id=146458&pack_or_individual=pack', alt: 'Java' },
            'Python': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png', alt: 'Python' },
            'JavaScript': { image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', alt: 'JavaScript' },

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
            Programming: 'from-red-400 to-indigo-500',
            Web: 'from-yellow-300 to-red-600',
            Backend: 'from-red-500 to-green-400',
            Database: 'from-red-500 to-yellow-500',
            'Data Science': 'from-orange-600 to-indigo-500',
            ML: 'from-pink-500 to-violet-600',
            Deployment: 'from-yellow-600 to-red-500',
            Tools: 'from-gray-700 to-slate-500',
            Design: 'from-rose-400 to-fuchsia-500',
            Platforms: 'from-indigo-400 to-emerald-600',
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
