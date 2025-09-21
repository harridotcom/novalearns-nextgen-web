import { Mic, Smartphone, Globe, Users, Cpu, Brain, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Real-time Industry Speaker Sessions",
      description: "Live interactive sessions with industry experts sharing cutting-edge insights and practical knowledge across various technical domains.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom mobile application development for iOS and Android platforms using latest technologies and best practices.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web application development with modern frameworks, responsive design, and scalable architecture.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Expert consulting services for technical product development, system architecture, and engineering solutions.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Cpu,
      title: "Robotics & IoT Workshops",
      description: "Hands-on workshops covering robotics fundamentals, IoT implementations, and smart automation systems.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Brain,
      title: "AI/ML Training Sessions",
      description: "Comprehensive training programs in artificial intelligence, machine learning algorithms, and data science applications.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation Consulting",
      description: "Strategic guidance for research initiatives, innovation management, and technology transfer in various engineering fields.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From real-time consulting to cutting-edge workshops, we deliver comprehensive 
            technical solutions across all engineering domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="professional-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4`}>
                  <IconComponent className={`h-6 w-6 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;