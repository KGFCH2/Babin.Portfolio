import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        { name: 'C', category: 'Programming' },
        { name: 'C++', category: 'Programming' },
        { name: 'Java', category: 'Programming' },
        { name: 'Python', category: 'Programming' },
        { name: 'JavaScript', category: 'Web' },
        { name: 'TypeScript', category: 'Web' },
        { name: 'React', category: 'Web' },
        { name: 'Vite', category: 'Web' },
        { name: 'HTML', category: 'Web' },
        { name: 'CSS', category: 'Web' },
        { name: 'Tailwind', category: 'Web' },
        { name: 'SQL', category: 'Database' },
        { name: 'NumPy', category: 'Data Science' },
        { name: 'Pandas', category: 'Data Science' },
        { name: 'Matplotlib', category: 'Data Science' },
        { name: 'Seaborn', category: 'Data Science' },
        { name: 'Scikit-learn', category: 'ML' },
        { name: 'VS Code', category: 'Tools' },
        { name: 'GitHub', category: 'Tools' },
        { name: 'Canva', category: 'Design' },
    ];

    const getCategoryGradient = (category: string) => {
        const map: Record<string, string> = {
            Programming: 'from-indigo-500 to-purple-500',
            Web: 'from-emerald-400 to-cyan-500',
            Database: 'from-yellow-400 to-orange-500',
            'Data Science': 'from-sky-400 to-indigo-500',
            ML: 'from-pink-500 to-violet-600',
            Tools: 'from-slate-400 to-slate-700',
            Design: 'from-rose-400 to-fuchsia-500',
        };
        return map[category] || 'from-primary to-secondary';
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden section-divider-top section-divider-offset-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400">Technical</span>
                    <span className="ml-2 text-gradient">Skills</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-lg">Building the future with modern technologies</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, index) => {
                        const gradient = getCategoryGradient(skill.category);
                        const delayClass = `anim-delay-${Math.min(500, Math.round(index * 50))}`;

                        return (
                            <article
                                key={skill.name}
                                aria-labelledby={`skill-${index}`}
                                className={`group relative overflow-hidden border border-border/60 bg-card/60 p-4 rounded-lg flex flex-col justify-between hover:shadow-glow transition-transform duration-200 transform hover:-translate-y-1 ${delayClass}`}
                            >
                                {/* hover gradient overlay */}
                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none`} />

                                <div className="relative z-10">
                                    <h3 id={`skill-${index}`} className="text-lg font-semibold text-foreground">
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
                    })}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse anim-delay-1000" />
            </div>
        </section>
    );
};

export default Skills;
