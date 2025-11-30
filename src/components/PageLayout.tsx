import { ThemeProvider } from "next-themes";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative min-h-screen">
                <SkipToContent />
                <ParticlesBackground />
                <Header />
                <main id="main-content">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </div>
        </ThemeProvider>
    );
};

export default PageLayout;
