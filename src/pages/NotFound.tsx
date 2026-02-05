import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="text-center z-10 px-4">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black text-blue-700 dark:text-[#89D3BD] leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[10rem] md:text-[14rem] font-black text-primary/5 leading-none blur-sm select-none">
            404
          </div>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-muted/50 border border-border/50">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </p>

        {/* Attempted path */}
        <div className="mb-8 p-3 rounded-lg bg-muted/30 border border-border/50 inline-block">
          <code className="text-sm text-muted-foreground">
            Attempted: <span className="text-primary">{location.pathname}</span>
          </code>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-primary/50 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">Or check out these sections:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['About', 'Projects', 'Skills', 'Research', 'Contact'].map((section) => (
              <Link
                key={section}
                to={`/#${section.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-sm bg-muted/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-border/50"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
