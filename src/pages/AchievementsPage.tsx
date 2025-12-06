import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import Achievements from "@/components/Achievements";

const AchievementsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative min-h-screen">
                <SkipToContent />
                <ParticlesBackground />
                <Header />
                <main id="main-content" className="pt-16">
                    <Achievements />
                </main>
                <Footer />
                <BackToTop />
            </div>
        </ThemeProvider>
    );
};

export default AchievementsPage;
