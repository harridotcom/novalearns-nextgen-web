import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Users, IndianRupee, AlertCircle } from "lucide-react";

const RegistrationForm = () => {
  return (
    <section className="py-20" id="register">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Team{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Registration
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Register your team for the National Robotics, IoT, and AI Competition. 
            Teams can have up to 4 members with a registration fee of ₹399.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            {/* Payment Info Banner */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-8 flex items-center space-x-3">
              <IndianRupee className="h-6 w-6 text-secondary" />
              <div>
                <h4 className="font-semibold text-secondary">Registration Fee: ₹399 per team</h4>
                <p className="text-sm text-muted-foreground">Payment will be processed after form submission</p>
              </div>
            </div>

            <form className="space-y-8">
              {/* Team Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Team Information</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="teamName" className="block text-sm font-medium mb-2">
                      Team Name *
                    </label>
                    <Input 
                      id="teamName"
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium mb-2">
                      Institution/School Name *
                    </label>
                    <Input 
                      id="institution"
                      placeholder="Name of your school"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="domain" className="block text-sm font-medium mb-2">
                    Preferred Domain *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred domain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="robotics">Robotics</SelectItem>
                      <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                      <SelectItem value="ai">Artificial Intelligence (AI)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Team Leader */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b border-border pb-2">
                  Team Leader Details
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="leaderName" className="block text-sm font-medium mb-2">
                      Team Leader Name *
                    </label>
                    <Input 
                      id="leaderName"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="leaderEmail" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="leaderEmail"
                      type="email"
                      placeholder="leader@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="leaderPhone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      id="leaderPhone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b border-border pb-2">
                  Team Members (Optional - up to 3 additional members)
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="member2" className="block text-sm font-medium mb-2">
                      Member 2 Name
                    </label>
                    <Input 
                      id="member2"
                      placeholder="Full name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="member3" className="block text-sm font-medium mb-2">
                      Member 3 Name
                    </label>
                    <Input 
                      id="member3"
                      placeholder="Full name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="member4" className="block text-sm font-medium mb-2">
                      Member 4 Name
                    </label>
                    <Input 
                      id="member4"
                      placeholder="Full name (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-amber-800">Important:</p>
                  <p className="text-amber-700">
                    After submitting this form, you will receive payment instructions via email. 
                    Your registration will be confirmed once payment is received.
                  </p>
                </div>
              </div>

              <Button type="submit" className="btn-hero w-full text-lg py-4">
                Submit Registration & Proceed to Payment
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;