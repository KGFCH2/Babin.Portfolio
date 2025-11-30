import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Separate inView for auto-scroll (not triggerOnce)
  const { ref: carouselRef, inView: carouselInView } = useInView({
    threshold: 0.3,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  // Reinitialize carousel when filters change
  useEffect(() => {
    if (!api) return;
    // Small delay to let the DOM update with filtered items
    const timeout = setTimeout(() => {
      api.reInit();
    }, 100);
    return () => clearTimeout(timeout);
  }, [api, searchTerm, selectedTech]);

  // Auto-scroll effect when carousel is in view
  useEffect(() => {
    if (!api || !carouselInView || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [api, carouselInView, isHovered]);

  // Pause auto-scroll on user interaction
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Get gradient classes for tech filter buttons when selected
  const getTechGradient = (tech: string) => {
    const key = tech.toLowerCase();
    switch (key) {
      case "python":
        return "bg-gradient-to-r from-blue-500 to-yellow-500 text-white";
      case "react":
        return "bg-gradient-to-r from-cyan-400 to-cyan-600 text-white";
      case "typescript":
        return "bg-gradient-to-r from-blue-500 to-blue-700 text-white";
      case "tailwind":
      case "tailwindcss":
        return "bg-gradient-to-r from-teal-400 to-cyan-500 text-white";
      case "streamlit":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white";
      case "plotly":
        return "bg-gradient-to-r from-indigo-400 to-purple-600 text-white";
      case "xgboost":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      case "flask":
        return "bg-gradient-to-r from-gray-600 to-gray-800 text-white";
      case "scikit-learn":
      case "scikit":
        return "bg-gradient-to-r from-orange-400 to-amber-600 text-white";
      case "html":
        return "bg-gradient-to-r from-orange-500 to-red-600 text-white";
      case "css":
        return "bg-gradient-to-r from-blue-400 to-indigo-600 text-white";
      case "javascript":
      case "js":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "vite":
        return "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white";
      case "ai/ml":
        return "bg-gradient-to-r from-pink-500 to-rose-600 text-white";
      case "data visualization":
        return "bg-gradient-to-r from-emerald-400 to-teal-600 text-white";
      case "json":
        return "bg-gradient-to-r from-slate-500 to-zinc-700 text-white";
      case "numpy":
        return "bg-gradient-to-r from-sky-500 to-blue-600 text-white";
      case "pandas":
        return "bg-gradient-to-r from-indigo-500 to-blue-700 text-white";
      case "fastapi":
        return "bg-gradient-to-r from-teal-500 to-emerald-600 text-white";
      case "gui":
        return "bg-gradient-to-r from-violet-500 to-purple-700 text-white";
      case "framer motion":
        return "bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white";
      default:
        return "bg-gradient-to-r from-primary to-violet-500 text-white";
    }
  };

  // Return base + gradient hover classes for badges; hover applies a gradient background
  const getBadgeClasses = (tech: string) => {
    const key = tech.toLowerCase();
    switch (key) {
      case "python":
        return "bg-blue-100 dark:bg-blue-50 text-blue-800 border-blue-300 dark:border-blue-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500 hover:text-white hover:border-transparent";
      case "react":
        return "bg-cyan-100 dark:bg-cyan-50 text-cyan-800 border-cyan-300 dark:border-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:text-white hover:border-transparent";
      case "typescript":
        return "bg-blue-100 dark:bg-blue-50 text-blue-800 border-blue-300 dark:border-blue-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:border-transparent";
      case "tailwind":
      case "tailwindcss":
        return "bg-teal-100 dark:bg-teal-50 text-teal-800 border-teal-300 dark:border-teal-200 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white hover:border-transparent";
      case "streamlit":
        return "bg-red-100 dark:bg-red-50 text-red-800 border-red-300 dark:border-red-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:border-transparent";
      case "plotly":
        return "bg-indigo-100 dark:bg-indigo-50 text-indigo-800 border-indigo-300 dark:border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-600 hover:text-white hover:border-transparent";
      case "xgboost":
        return "bg-green-100 dark:bg-green-50 text-green-800 border-green-300 dark:border-green-200 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:border-transparent";
      case "flask":
        return "bg-gray-100 dark:bg-gray-200 text-gray-800 border-gray-300 dark:border-gray-400 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 hover:text-white hover:border-transparent";
      case "scikit-learn":
      case "scikit":
        return "bg-orange-100 dark:bg-orange-50 text-orange-800 border-orange-300 dark:border-orange-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-600 hover:text-white hover:border-transparent";
      case "html":
        return "bg-orange-100 dark:bg-orange-50 text-orange-800 border-orange-300 dark:border-orange-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-transparent";
      case "css":
        return "bg-blue-100 dark:bg-blue-50 text-blue-800 border-blue-300 dark:border-blue-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-600 hover:text-white hover:border-transparent";
      case "javascript":
      case "js":
        return "bg-yellow-100 dark:bg-yellow-50 text-yellow-800 border-yellow-300 dark:border-yellow-200 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-white hover:border-transparent";
      case "vite":
        return "bg-purple-100 dark:bg-purple-50 text-purple-800 border-purple-300 dark:border-purple-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-600 hover:text-white hover:border-transparent";
      case "ai/ml":
        return "bg-pink-100 dark:bg-pink-50 text-pink-800 border-pink-300 dark:border-pink-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 hover:text-white hover:border-transparent";
      case "data visualization":
        return "bg-emerald-100 dark:bg-emerald-50 text-emerald-800 border-emerald-300 dark:border-emerald-200 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-600 hover:text-white hover:border-transparent";
      case "json":
        return "bg-slate-100 dark:bg-slate-200 text-slate-800 border-slate-300 dark:border-slate-400 hover:bg-gradient-to-r hover:from-slate-500 hover:to-zinc-700 hover:text-white hover:border-transparent";
      case "numpy":
        return "bg-sky-100 dark:bg-sky-50 text-sky-800 border-sky-300 dark:border-sky-200 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white hover:border-transparent";
      case "pandas":
        return "bg-indigo-100 dark:bg-indigo-50 text-indigo-800 border-indigo-300 dark:border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-700 hover:text-white hover:border-transparent";
      case "fastapi":
        return "bg-teal-100 dark:bg-teal-50 text-teal-800 border-teal-300 dark:border-teal-200 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-600 hover:text-white hover:border-transparent";
      case "gui":
        return "bg-violet-100 dark:bg-violet-50 text-violet-800 border-violet-300 dark:border-violet-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-700 hover:text-white hover:border-transparent";
      case "framer motion":
        return "bg-fuchsia-100 dark:bg-fuchsia-50 text-fuchsia-800 border-fuchsia-300 dark:border-fuchsia-200 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-pink-600 hover:text-white hover:border-transparent";
      default:
        return "bg-purple-100 dark:bg-primary/10 text-purple-800 dark:text-primary border-purple-300 dark:border-primary/20 hover:bg-gradient-to-r hover:from-primary/60 hover:to-violet-500 hover:text-white hover:border-transparent";
    }
  };

  const projects = [
    {
      title: "CargoConnect",
      description:
        "CargoConnect is a responsive web app that helps users book vehicles for moving luggage and cargo across locations in India.",
      tech: ["TypeScript", "React", "Vite", "Tailwind"],
      github: "https://github.com/KGFCH2/CargoConnect",
      demo: "https://cargo-connect-two.vercel.app/",
      features: [
        "User registration and login",
        "Browse available vehicles (Mini Tempo, Large Tempo, Cargo Truck)",
        "Pickup & destination address input",
        "Fare estimate before booking",
        "Mobile-responsive UI",
      ],
      thumbnail: "/projects/CargoConnect.png",
    },
    {
      title: "PersonaPath",
      description:
        "PersonaPath — Personalized Career & Skills Advisor: a ready-to-run web app with lightweight frontend and Flask backend, rules-based career advisor and 500+ curated skills & career paths.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      github: "https://github.com/KGFCH2/PersonaPath",
      demo: null,
      features: [
        "Glassmorphism login with smooth animations",
        "Career advisor chat (rules engine)",
        "500+ skills & careers with learning paths",
        "Dark / Light theme toggle",
        "Micro-interactions & responsive layout",
      ],
      thumbnail: "/projects/PersonaPath.png",
    },
    {
      title: "SkyCast AI",
      description:
        "Intelligent Real-Time Weather Dashboard built with Streamlit. Features real-time weather data, interactive forecasts with Plotly charts, auto-location detection, multi-provider support (OpenWeatherMap or WeatherAPI), and AI-driven insights. Deployable Streamlit app with unit conversion and responsive visualizations.",
      tech: ["Python", "Streamlit", "AI/ML", "Data Visualization", "Plotly"],
      github: "https://github.com/KGFCH2/SkyCast_AI",
      demo: "https://sky-cast-ai-new.streamlit.app/",
      features: [
        "Real-time weather data & forecasts",
        "Interactive Plotly visualizations",
        "Auto-location detection & manual input",
        "Multi-provider API support",
        "AI-driven insights & alerts",
        "Unit conversion (Celsius/Fahrenheit)",
      ],
      thumbnail: "/projects/SkyCast_AI.png",
    },
    {
      title: "AquaWatch",
      description:
        "AquaWatch monitors and raises awareness about the water crisis across Indian states — alerts, resources, emergency contacts and actionable solutions.",
      tech: ["TypeScript", "React", "Vite", "JSON"],
      github: "https://github.com/KGFCH2/AquaWatch",
      demo: "https://aqua-watch-smoky.vercel.app/",
      features: [
        "Alerts and timely warnings",
        "Suggested solutions & awareness tips",
        "Verified government resources integration",
        "Emergency helpline & email support",
      ],
      thumbnail: "/projects/AquaWatch.jpeg",
    },
    {
      title: "ImpactSense (Earthquake Impact Prediction)",
      description:
        "ImpactSense is a machine-learning system to estimate earthquake impact using geophysical and environmental data — an internship project.",
      tech: ["Python", "NumPy", "Pandas", "scikit-learn", "XGBoost"],
      github: "https://github.com/KGFCH2/ImpactSense_Earthquake_Impact_Prediction",
      demo: null,
      features: [
        "Urban risk assessment & infrastructure planning",
        "Government disaster response prioritization",
        "Data preprocessing, feature engineering, model training",
      ],
      thumbnail: "/projects/ImpactSense.jpeg",
    },
    {
      title: "AI Powered ChatBot",
      description:
        "Gemini-only FastAPI chatbot with streaming responses, optional web search context, theme toggle and demo login — internship project.",
      tech: ["Python", "FastAPI", "JS", "HTML", "CSS"],
      github: "https://github.com/KGFCH2/AI_Powered_ChatBot",
      demo: null,
      features: [
        "Gemini streaming responses",
        "Optional web-search context (DuckDuckGo)",
        "Light/Dark theme, demo login, UI micro-interactions",
      ],
      thumbnail: "/projects/ChatBot.png",
    },
    {
      title: "India Stock Dashboard",
      description:
        "Interactive Streamlit dashboard showcasing Indian stock market data, charts, indicators and simple prediction helpers.",
      tech: ["Python", "Streamlit", "Plotly", "Pandas"],
      github: "https://github.com/KGFCH2/India_Stock_Dashboard",
      demo: null,
      features: [
        "Real-time & historical price visualizations",
        "Interactive Plotly charts and technical indicators",
        "Simple ensemble-based prediction fallback",
      ],
      thumbnail: "/projects/Stock_Market.png",
    },
    {
      title: "Heart Disease Prediction System",
      description:
        "A fast, accurate machine learning system for predicting heart disease risk using XGBoost on tabular health data. Intuitive GUI and production-ready performance.",
      tech: ["Python", "XGBoost", "scikit-learn", "GUI"],
      github: "https://github.com/KGFCH2/Heart_Disease_Prediction_System",
      demo: null,
      features: [
        "Model: XGBoost (eXtreme Gradient Boosting)",
        "Accuracy: 78.65% on test set",
        "Training Time: 1.02 seconds",
        "Prediction Speed: 0.34 ms (real-time)",
        "Memory Usage: ~50 MB",
        "Input Features: 7 health parameters",
        "Status: Production Ready",
      ],
      thumbnail: "/projects/Heart Disease Prediction System.png",
    },
    {
      title: "CropAI India",
      description:
        "CropAI India: AI-powered agricultural intelligence for Indian farming — crop analytics, market insights, and predictive features.",
      tech: ["React", "TypeScript", "Vite", "JSON"],
      github: "https://github.com/KGFCH2/CropAI_India",
      demo: "https://crop-ai-india.vercel.app/",
      features: [
        "Pan-India crop analytics",
        "Market intelligence & yield insights",
        "Scalable platform ready for ML integration",
      ],
      thumbnail: "/projects/CropAI India.png",
    },
    {
      title: "BharatBus (in progress)",
      description:
        "BharatBus — frontend in progress: booking & tracking UI built with React + TypeScript and Framer Motion.",
      tech: ["React", "TypeScript", "Vite", "Framer Motion"],
      github: "https://github.com/KGFCH2/BharatBus",
      demo: "https://bharat-bus.vercel.app/",
      features: ["Booking flow, live tracking mockups, operator dashboard"],
      thumbnail: "/projects/BharatBus.jpeg",
    },
  ];

  return (
    <section id="projects" className="py-20 relative section-divider-top" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <SectionTitle
                segments={[
                  {
                    text: "My",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-violet-600",
                  },
                  {
                    text: " Projects",
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-emerald-400",
                  },
                ]}
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Here are some of my recent and old projects showcasing my skills and experience
            </p>

            {/* Interactive Project Search */}
            <div className="max-w-2xl mx-auto mb-8 space-y-4">
              <input
                type="text"
                placeholder="🔍 Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Get all unique technologies */}
          {Array.from(new Set(projects.flatMap(p => p.tech))).length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTech === null
                  ? 'bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg'
                  : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
              >
                All Projects
              </button>
              {Array.from(new Set(projects.flatMap(p => p.tech)))
                .sort()
                .map(tech => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTech === tech
                      ? `${getTechGradient(tech)} shadow-lg`
                      : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                  >
                    {tech}
                  </button>
                ))}
            </div>
          )}

          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {projects
                  .filter(project => {
                    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      project.description.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesTech = !selectedTech || project.tech.includes(selectedTech);
                    return matchesSearch && matchesTech;
                  })
                  .slice()
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2 h-full">
                        <Card className="relative h-full overflow-hidden border-2 border-violet-300/50 dark:border-border/50 shadow-card hover:shadow-glow transition-smooth group flex flex-col bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-card dark:via-card dark:to-card backdrop-blur-sm hover:border-violet-400/70 dark:hover:border-primary/50">
                          {/* Light mode gradient overlay on hover */}
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-200/30 via-purple-200/20 to-indigo-200/30 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                          {project.thumbnail ? (
                            <div className="h-56 flex items-center justify-center bg-muted/10 p-3 overflow-hidden rounded">
                              <img
                                src={encodeURI(project.thumbnail)}
                                alt={`${project.title} thumbnail`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain object-center rounded transform transition-transform duration-300 ease-out group-hover:scale-105"
                              />
                            </div>
                          ) : (
                            <div className="h-56 flex items-center justify-center bg-muted/10 p-3 overflow-hidden rounded">
                              <span className="text-foreground font-bold text-2xl">{project.title}</span>
                            </div>
                          )}
                          {/* separator line between image and content (more visible) */}
                          <div className="w-full border-t-2 border-muted/30" />
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="space-y-4 flex-grow">
                              <h3 className="text-xl font-bold text-foreground">
                                {project.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className={`${getBadgeClasses(tech)} px-3 py-1 text-sm rounded-full border transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-auto pt-4">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 h-9 border-primary/50 hover:bg-primary/10 transform transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg active:scale-95"
                                asChild
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                              {project.demo ? (
                                <Button
                                  size="sm"
                                  className="flex-1 h-9 gradient-primary text-primary-foreground hover:opacity-90 transform transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg active:scale-95"
                                  asChild
                                >
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                  </a>
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="flex-1 h-9 opacity-60 cursor-not-allowed border-dashed bg-purple-500/10 border-purple-500/30 text-purple-400"
                                  disabled
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </Button>
                              )}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-muted-foreground animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4.1L12 6l-2-1.9M18 4.1L16 6l-2-1.9M22 4.1L20 6l-2-1.9M12 22V8M20 22V8M4 22V8" />
            </svg>
            <span className="text-sm">Swipe to explore more projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-x">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
