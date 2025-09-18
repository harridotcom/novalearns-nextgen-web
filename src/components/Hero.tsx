import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
                ✨ Transforming Education Technology
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Schools with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smarter Learning
                </span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your educational institution with cutting-edge digital tools, 
                comprehensive teacher training, and data-driven insights that boost 
                student engagement by up to 40%.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary-brand group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Schools Trust Us</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="text-muted-foreground">Engagement Boost</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src={heroImage}
                alt="Modern educational technology in classroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;