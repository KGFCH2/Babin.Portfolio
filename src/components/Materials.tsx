import React from "react";

const Materials: React.FC = () => {
    return (
        <section id="materials" className="py-20 section-divider-top">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400">My</span>
                        <span className="text-blueviolet"> Materials</span>
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
                            className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
                        >
                            View My Materials
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
