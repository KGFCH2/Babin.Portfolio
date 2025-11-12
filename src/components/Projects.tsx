import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Return base + gradient hover classes for badges; hover applies a gradient background
  const getBadgeClasses = (tech: string) => {
    const key = tech.toLowerCase();
    switch (key) {
      case "python":
        return "bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-white";
      case "react":
        return "bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:text-white";
      case "typescript":
        return "bg-sky-50 text-sky-800 border-sky-200 hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-600 hover:text-white";
      case "tailwind":
      case "tailwindcss":
        return "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-emerald-600 hover:text-white";
      case "streamlit":
        return "bg-rose-50 text-rose-800 border-rose-200 hover:bg-gradient-to-r hover:from-rose-400 hover:to-rose-600 hover:text-white";
      case "plotly":
        return "bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-600 hover:text-white";
      case "xgboost":
        return "bg-orange-50 text-orange-800 border-orange-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white";
      case "flask":
        return "bg-amber-50 text-amber-800 border-amber-200 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 hover:text-white";
      case "scikit-learn":
      case "scikit":
        return "bg-violet-50 text-violet-800 border-violet-200 hover:bg-gradient-to-r hover:from-violet-400 hover:to-violet-600 hover:text-white";
      default:
        return "bg-primary/10 text-primary border-primary/20 hover:bg-gradient-to-r hover:from-primary/60 hover:to-violet-500 hover:text-white";
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent and old projects showcasing my skills and experience
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <Card className="h-full overflow-hidden border-border/50 shadow-card hover:shadow-glow transition-smooth group flex flex-col">
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
                                  className={`${getBadgeClasses(tech)} px-3 py-1 text-sm rounded-full border transition-colors duration-200`}
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
                              className="flex-1 h-9 border-primary/50 hover:bg-primary/10"
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
                                className="flex-1 h-9 gradient-primary text-primary-foreground hover:opacity-90"
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
      </div>
    </section>
  );
};

export default Projects;
