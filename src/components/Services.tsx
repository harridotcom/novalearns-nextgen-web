import { BookOpen, Users, BarChart3, Settings, Award, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Digital Curriculum",
      description: "Comprehensive digital learning materials aligned with national standards, interactive content, and multimedia resources.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Professional development programs to empower educators with modern teaching methodologies and digital skills.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time data analytics to track student progress, identify learning gaps, and optimize educational outcomes.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Settings,
      title: "School Management",
      description: "Streamlined administrative tools for attendance, grading, scheduling, and communication between stakeholders.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Assessment Tools",
      description: "Innovative evaluation methods including formative assessments, automated grading, and performance tracking.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab",
      description: "Cutting-edge educational technologies including AI tutors, VR experiences, and adaptive learning platforms.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Comprehensive{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Educational Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curriculum development to teacher training, we provide everything your 
            institution needs to deliver exceptional educational experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="education-card group cursor-pointer"
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