import { Award, Shield, GraduationCap } from "lucide-react";

const JudgesPanel = () => {
  const judges = [
    {
      name: "Shreya",
      title: "Network Engineer at Ericsson",
      icon: Award,
      description: "Expert in telecommunications and network infrastructure with extensive experience in 5G technologies and IoT connectivity solutions.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      name: "Bijay Nair",
      title: "Navy Personnel",
      icon: Shield,
      description: "Maritime technology specialist with deep expertise in naval systems, robotics applications, and defense technologies.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      name: "Dr. Avinash",
      title: "Professor",
      icon: GraduationCap,
      description: "Academic researcher specializing in artificial intelligence, machine learning, and innovative educational methodologies.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Meet Our Expert{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Judges Panel
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry professionals and academic experts who will evaluate and guide 
            the next generation of innovators in their technical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {judges.map((judge, index) => {
            const IconComponent = judge.icon;
            return (
              <div
                key={judge.name}
                className="professional-card text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Image Placeholder */}
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${judge.bgColor} flex items-center justify-center`}>
                  <IconComponent className={`h-12 w-12 ${judge.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{judge.name}</h3>
                <p className={`font-semibold mb-4 ${judge.color}`}>{judge.title}</p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {judge.description}
                </p>

                <div className={`mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full ${judge.bgColor}`}>
                  <IconComponent className={`h-4 w-4 ${judge.color}`} />
                  <span className={`text-sm font-medium ${judge.color}`}>Expert Judge</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JudgesPanel;