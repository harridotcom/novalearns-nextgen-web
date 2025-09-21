import { Button } from "@/components/ui/button";
import { ChevronRight, Award } from "lucide-react";
import logo from "@/assets/novalearns-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden pt-20">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          
          {/* Logo */}
          <div className="animate-fade-in">
            <img src={logo} alt="Novalearns" className="h-32 w-auto mx-auto mb-6" />
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Research-Driven{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Consulting
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real-time consulting for technical products across every domain of engineering
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="btn-hero group text-lg px-8 py-4" size="lg">
              Explore Services
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 group">
              <Award className="mr-2 h-5 w-5" />
              Join Competition
            </Button>
          </div>

          {/* Key Stats - Simplified */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Domains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;