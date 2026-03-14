import React, { useState } from 'react';
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import StudyBackground from "./StudyBackground";
import { Zap } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
    SiCplusplus,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiFlask,
    SiFastapi,
    SiMongodb,
    SiTensorflow,
    SiVercel,
    SiGithub,
    SiGit,
    SiNextdotjs,
} from 'react-icons/si';

const Skills: React.FC = () => {
    const { ref } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const { theme } = useTheme();

    // Function to get skill icon
    const getSkillIcon = (skillName: string) => {
        type IconComponent = React.ComponentType<{ size?: number; color?: string; className?: string }>;
        const iconMap: Record<string, { icon: IconComponent; color: string } | { image: string; alt: string }> = {
            'C': { image: 'https://icon.icepanel.io/Technology/svg/C.svg', alt: 'C' },
            'C++': { image: 'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg', alt: 'C++' },
            'Java': { image: 'https://icon.icepanel.io/Technology/svg/Java.svg', alt: 'Java' },
            'Python': { image: 'https://icon.icepanel.io/Technology/svg/Python.svg', alt: 'Python' },
            'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
            'HTML': { icon: SiHtml5, color: '#E34F26' },
            'CSS': { icon: SiCss3, color: '#1572B6' },
            'TypeScript': { icon: SiTypescript, color: '#3178C6' },
            'React': { icon: SiReact, color: '#61DAFB' },
            'Vite': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png', alt: 'Vite' },
            'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
            'Framer Motion': { image: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', alt: 'Framer Motion' },
            'Node.js': { icon: SiNodedotjs, color: '#339933' },
            'Flask': { icon: SiFlask, color: '#000000' },
            'FastAPI': { icon: SiFastapi, color: '#009688' },
            'MySQL': { image: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png', alt: 'MySQL' },
            'SQLite': { image: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F256%2Fsqlite_logo_icon_169724.png&id=169724&pack_or_individual=pack', alt: 'SQLite' },
            'MongoDB': { image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', alt: 'MongoDB' },
            'NumPy': { image: 'https://images.seeklogo.com/logo-png/39/2/numpy-logo-png_seeklogo-398690.png', alt: 'NumPy' },
            'Pandas': { image: 'https://img.icons8.com/color/512/pandas.png', alt: 'Pandas' },
            'Matplotlib': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png', alt: 'Matplotlib' },
            'Seaborn': { image: 'https://cdn.worldvectorlogo.com/logos/seaborn-1.svg', alt: 'Seaborn' },
            'Plotly': { image: 'https://images.plot.ly/logo/new-branding/plotly-logomark.png', alt: 'Plotly' },
            'Scikit-learn': { image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', alt: 'Scikit-learn' },
            'XGBoost': { image: 'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7w8rh2oj5arc1epo2sls.png', alt: 'XGBoost' },
            'TensorFlow': { image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', alt: 'TensorFlow' },
            'Vercel': { icon: SiVercel, color: '#000000' },
            'Streamlit': { image: 'https://images.seeklogo.com/logo-png/44/2/streamlit-logo-png_seeklogo-441815.png', alt: 'Streamlit' },
            'Netlify': { image: 'https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B', alt: 'Netlify' },
            'Visual Studio Code': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png', alt: 'Visual Studio Code' },
            'GitHub': { icon: SiGithub, color: '#181717' },
            'Git': { icon: SiGit, color: '#F05032' },
            'LeetCode': { image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', alt: 'LeetCode' },
            'HackerRank': { image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png', alt: 'HackerRank' },
            'Codolio': { image: 'https://codolio-pt.vercel.app/codolio_assets/gif-owl-transparent.GIF', alt: 'Codolio' },
            'Firebase': { image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', alt: 'Firebase' },
            'Amazon Web Services': { image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'Amazon Web Services' },
            'Microsoft Azure': { image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', alt: 'Microsoft Azure' },
            'Google Cloud': { image: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', alt: 'Google Cloud' },
            'Docker': { image: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', alt: 'Docker' },
            'Next.js': { icon: SiNextdotjs, color: '#000000' },
            'Linux': { image: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg', alt: 'Linux' },
            'Network Fundamentals': { image: 'https://img.icons8.com/color/512/network.png', alt: 'Network Fundamentals' },
        };

        const iconConfig = iconMap[skillName];
        if (!iconConfig) {
            return <AnimatedIcon Icon={Zap} size={24} glowColor="transparent" animationType="pulse" className="text-amber-500" />;
        }

        if ('image' in iconConfig) {
            return (
                <img
                    src={iconConfig.image}
                    alt={iconConfig.alt}
                    className="h-10 w-10 object-contain drop-shadow-sm"
                    loading="lazy"
                />
            );
        }

        const IconComponent = iconConfig.icon;

        // Special handling for dark mode colors
        let finalColor = iconConfig.color;
        if (theme === 'dark') {
            if (skillName === 'Flask' || skillName === 'Vercel' || skillName === 'Next.js') {
                finalColor = '#FFFFFF'; // White for Flask, Vercel and Next.js in dark mode
            } else if (skillName === 'GitHub') {
                finalColor = '#FFFFFF'; // White for GitHub in dark mode
            }
        }

        return <IconComponent size={40} color={finalColor} className="drop-shadow-sm" />;
    };

    const skillCategories: Record<string, string[]> = {
        'Languages': ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
        'Frontend': ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        'Backend': ['Node.js', 'Flask', 'FastAPI'],
        'Database': ['MySQL', 'MongoDB', 'SQLite', 'Firebase'],
        'AI & ML': ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'XGBoost', 'TensorFlow'],
        'Cloud & DevOps': ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Linux'],
        'Deployment': ['Vercel', 'Netlify', 'Streamlit'],
        'Tools': ['Git', 'GitHub', 'Visual Studio Code'],
    };

    const codingProfiles = [
        { name: 'LeetCode', url: 'https://leetcode.com/u/Babin123/' },
        { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/babinbid05' },
        { name: 'Codolio', url: 'https://codolio.com/profile/Babin_KGF' },
    ];

    const filterOptions = ['All', ...Object.keys(skillCategories)];

    const filteredSkills = activeFilter === 'All'
        ? Object.values(skillCategories).flat()
        : skillCategories[activeFilter] || [];

    return (
        <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
            <StudyBackground />
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 max-w-[250px] mx-auto md:max-w-none">
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

                {/* Filter Buttons */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:flex md:justify-center mb-10 max-w-6xl mx-auto place-items-center">
                    {filterOptions.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`${filter === 'All' ? 'col-span-2 md:col-auto md:mx-0 w-auto mx-auto' : 'w-full md:w-auto'} text-center px-2 md:px-3 py-1.5 md:py-2 rounded-full font-semibold transition-all duration-300 text-xs md:text-xs md:whitespace-nowrap ${activeFilter === filter
                                ? 'bg-blue-700 dark:bg-[#89D3BD] text-white dark:text-black shadow-[0_12px_40px_hsla(221,83%,48%,0.25)] dark:shadow-[0_12px_40px_hsla(180,100%,50%,0.25)] scale-105 font-black'
                                : 'bg-muted/50 text-foreground hover:bg-muted border border-border/50 hover:border-primary/20 hover:shadow-[0_16px_50px_hsla(221,83%,48%,0.3)] dark:hover:shadow-[0_16px_50px_hsla(180,100%,50%,0.3)] active:shadow-[0_8px_25px_hsla(221,83%,48%,0.4)] dark:active:shadow-[0_8px_25px_hsla(180,100%,50%,0.4)]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                transition: { type: "spring", stiffness: 400, damping: 15 },
                            }}
                            className="relative group"
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-blue-700/50 dark:group-hover:border-[#89D3BD]/50 group-hover:shadow-[0_10px_30px_rgba(29,78,216,0.2)] dark:group-hover:shadow-[0_10px_30px_rgba(137,211,189,0.2)] cursor-pointer overflow-hidden relative">
                                {/* Icon - visible by default */}
                                <div
                                    className={`transition-all duration-300 ${hoveredSkill === skill
                                        ? 'opacity-0 scale-75'
                                        : 'opacity-100 scale-100'
                                        }`}
                                >
                                    {getSkillIcon(skill)}
                                </div>

                                {/* Skill name - appears on hover */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-blue-700/90 dark:bg-[#89D3BD]/90 rounded-2xl transition-all duration-300 ${hoveredSkill === skill
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-75'
                                        }`}
                                >
                                    <span className="text-white dark:text-black text-[10px] md:text-xs font-extrabold text-center leading-tight px-1">
                                        {skill}
                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

                {/* Coding Profiles Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-900 dark:text-cyan-300">Coding Profiles</h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {codingProfiles.map((profile, index) => (
                            <motion.a
                                key={profile.name}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-[#89D3BD]/50 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm group"
                            >
                                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {getSkillIcon(profile.name)}
                                </div>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-[#89D3BD]">
                                    {profile.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse anim-delay-1000" />
            </motion.div>
        </section>
    );
};

export default Skills;
