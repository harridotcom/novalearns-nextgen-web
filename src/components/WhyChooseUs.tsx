import { CheckCircle, Target, Zap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: Target,
      title: "Proven Results",
      description: "Our solutions have helped over 500 schools improve student engagement by an average of 40% and academic performance by 25%.",
      stats: "40% Engagement Boost",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Stay ahead with cutting-edge educational technology, AI-powered learning tools, and future-ready curriculum design.",
      stats: "Latest EdTech",
    },
    {
      icon: Shield,
      title: "Comprehensive Support",
      description: "From initial setup to ongoing maintenance, our dedicated team provides 24/7 support and continuous training for your staff.",
      stats: "24/7 Support",
    },
    {
      icon: CheckCircle,
      title: "Curriculum Excellence",
      description: "Standards-aligned digital curriculum designed by education experts and continuously updated based on learning outcomes.",
      stats: "Standards Aligned",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Schools Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Novalearns?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of educational institutions that have transformed their learning 
            environments with our proven methodologies and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {highlight.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Achievement Stats */}
          <div className="relative">
            <div className="education-card bg-gradient-subtle border-0 p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Schools Transformed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">250K+</div>
                  <div className="text-sm text-muted-foreground">Students Impacted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-secondary">15K+</div>
                  <div className="text-sm text-muted-foreground">Teachers Trained</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-center text-sm text-muted-foreground italic">
                  "Novalearns transformed our approach to education. Student engagement 
                  is at an all-time high, and our teachers feel more confident than ever."
                </p>
                <div className="text-center mt-2">
                  <div className="font-medium text-primary">Sarah Johnson</div>
                  <div className="text-xs text-muted-foreground">Principal, Lincoln High School</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;