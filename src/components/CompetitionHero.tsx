import { Button } from "@/components/ui/button";
import { Award, Users, Trophy, Clock } from "lucide-react";

const CompetitionHero = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">In Association with IEEE Bombay Section</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            National Robotics, IoT, and AI
            <span className="block text-secondary"> Competition for Schools</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            We are proud to host a cutting-edge competition bringing together young innovators 
            to explore Robotics, IoT, and AI technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-2xl font-bold">Up to 4</div>
              <div className="text-white/80">Members per Team</div>
            </div>
            <div className="text-center">
              <Trophy className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-2xl font-bold">₹399</div>
              <div className="text-white/80">Registration Fee</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-2xl font-bold">School</div>
              <div className="text-white/80">Students Only</div>
            </div>
          </div>

          <div className="pt-8">
            <Button className="btn-hero text-lg px-12 py-4" size="lg">
              Register Your Team Now
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/40 rounded-full"></div>
      </div>
    </section>
  );
};

export default CompetitionHero;