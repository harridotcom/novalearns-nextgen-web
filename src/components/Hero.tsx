import { Button } from "@/components/ui/button";
import { ChevronRight, Cpu, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Advanced technical research and consulting organization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in">
            <Cpu className="h-5 w-5" />
            <span className="text-sm font-medium">Research-Driven Technical Excellence</span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We are a research-driven organization providing{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              real-time consulting
            </span>{" "}
            for technical products across every domain of engineering
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            A leading research organization delivering real-time consulting for technical products 
            across all engineering domains with cutting-edge expertise and innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-hero group" size="lg">
              Explore Our Services
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Register for Competition
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-white/80">Technical Projects</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Industry Experts</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Cpu className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Engineering Domains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 border border-white/10 rounded-lg rotate-45 animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default Hero;