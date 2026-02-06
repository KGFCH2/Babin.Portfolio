import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveStats from "@/components/InteractiveStats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Materials from "@/components/Materials";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen">
        <SkipToContent />
        <ParticlesBackground />
        <Header />
        <main id="main-content">
          <Hero />
          <InteractiveStats />
          <About />
          <Skills />
          <Projects />
          <Research />
          <Materials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;