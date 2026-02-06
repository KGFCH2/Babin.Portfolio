import React, { useState } from 'react';
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import StudyBackground from "./StudyBackground";
import { Zap } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { motion } from "framer-motion";
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
} from 'react-icons/si';

const Skills: React.FC = () => {
    const { ref } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    // Function to get skill icon
    const getSkillIcon = (skillName: string) => {
        const iconMap: Record<string, { icon: React.ComponentType<any>; color: string } | { image: string; alt: string }> = {
            'C': { image: 'https://icon.icepanel.io/Technology/svg/C.svg', alt: 'C' },
            'C++': { icon: SiCplusplus, color: '#00599C' },
            'Java': { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', alt: 'Java' },
            'Python': { image: 'https://icon.icepanel.io/Technology/svg/Python.svg', alt: 'Python' },
            'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
            'HTML': { icon: SiHtml5, color: '#E34F26' },
            'CSS': { icon: SiCss3, color: '#1572B6' },
            'TypeScript': { icon: SiTypescript, color: '#3178C6' },
            'React': { icon: SiReact, color: '#61DAFB' },
            'Vite': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png', alt: 'Vite' },
            'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
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
            'Netlify': { image: 'https://www.netlify.com/v3/img/components/logomark.png', alt: 'Netlify' },
            'VS Code': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png', alt: 'VS Code' },
            'GitHub': { icon: SiGithub, color: '#181717' },
            'Git': { icon: SiGit, color: '#F05032' },
            'Canva': { image: 'https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg', alt: 'Canva' },
            'MS Word': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Office_Word_%282025%E2%80%93present%29.svg/1990px-Microsoft_Office_Word_%282025%E2%80%93present%29.svg.png', alt: 'MS Word' },
            'MS PowerPoint': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg.png', alt: 'MS PowerPoint' },
            'MS Excel': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1166px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png', alt: 'MS Excel' },
            'Paint': { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft_Paint.svg/2048px-Microsoft_Paint.svg.png', alt: 'Paint' },
            'LeetCode': { image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', alt: 'LeetCode' },
            'Hackerrank': { image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png', alt: 'Hackerrank' },
            'Codolio': { image: 'https://codolio-pt.vercel.app/codolio_assets/gif-owl-transparent.GIF', alt: 'Codolio' },
        };

        const iconConfig = iconMap[skillName];
        if (!iconConfig) {
            return <AnimatedIcon Icon={Zap} size={24} color="#eab308" glowColor="transparent" animationType="pulse" />;
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
        return <IconComponent size={40} color={iconConfig.color} className="drop-shadow-sm" />;
    };

    const skills = [
        'C', 'C++', 'Java', 'Python', 'JavaScript',
        'HTML', 'CSS', 'TypeScript', 'React', 'Vite', 'Tailwind', 'Framer Motion',
        'Node.js', 'Flask', 'FastAPI',
        'MySQL', 'SQLite', 'MongoDB',
        'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly',
        'Scikit-learn', 'XGBoost', 'TensorFlow',
        'Vercel', 'Streamlit', 'Netlify',
        'VS Code', 'GitHub', 'Git',
        'Canva', 'MS Word', 'MS PowerPoint', 'MS Excel', 'Paint',
        'LeetCode', 'Hackerrank', 'Codolio',
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden scroll-mt-20" ref={ref}>
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
                <p className="text-center text-muted-foreground mb-12 text-lg">Building the future with modern technologies</p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                scale: 1.2,
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 15 },
                            }}
                            className="relative group"
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-blue-700/50 dark:group-hover:border-[#89D3BD]/50 group-hover:shadow-[0_10px_30px_rgba(29,78,216,0.2)] dark:group-hover:shadow-[0_10px_30px_rgba(137,211,189,0.2)] cursor-pointer">
                                {getSkillIcon(skill)}
                            </div>

                            {/* Tooltip - skill name on hover */}
                            <div
                                className={`absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-blue-700 dark:bg-[#89D3BD] text-white dark:text-black text-xs font-bold whitespace-nowrap z-20 pointer-events-none transition-all duration-200 ${
                                    hoveredSkill === skill
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-2'
                                }`}
                            >
                                {skill}
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-700 dark:bg-[#89D3BD] rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse anim-delay-1000" />
            </motion.div>
        </section>
    );
};

export default Skills;
