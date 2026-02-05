import React from "react";
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import StudyBackground from "./StudyBackground";
import { BookOpen } from "lucide-react";

const Materials: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="materials" className="group py-20 section-divider-top scroll-mt-20" ref={ref}>
            <StudyBackground />
            <div
                className={`container mx-auto px-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            >
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold max-w-[280px] mx-auto md:max-w-none">
                        <SectionTitle
                            segments={[
                                {
                                    text: "My",
                                    className: "text-blue-700 dark:text-[#89D3BD]",
                                },
                                {
                                    text: " Materials",
                                    className: "text-blue-700 dark:text-[#89D3BD]",
                                },
                            ]}
                        />
                    </h2>
                    <p className="text-foreground/80">
                        I will upload my study materials in that section later...
                    </p>
                    <div className="mt-4">
                        <a
                            href="#materials"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.querySelector("#materials");
                                el?.scrollIntoView({ behavior: "smooth" });
                            }}
                            aria-label="View my materials"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground dark:bg-[#89D3BD] dark:text-black hover:opacity-95 transition transform duration-300 hover:shadow-[0_10px_20px_var(--shadow-color)] hover:-translate-y-1 hover:scale-105"
                        >
                            <BookOpen className="h-4 w-4 text-primary-foreground dark:text-black" />
                            <span>View My Materials</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
