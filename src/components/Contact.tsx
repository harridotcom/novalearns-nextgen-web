import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transform Education?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how Novalearns can empower your institution with 
            cutting-edge educational technology and proven methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="education-card">
            <h3 className="text-2xl font-semibold mb-6">Request a Demo</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@school.edu"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="school" className="block text-sm font-medium mb-2">
                  School/Institution *
                </label>
                <Input 
                  id="school"
                  placeholder="Name of your school or institution"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Your Role *
                </label>
                <Input 
                  id="role"
                  placeholder="e.g., Principal, Teacher, IT Director"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="students" className="block text-sm font-medium mb-2">
                  Number of Students
                </label>
                <Input 
                  id="students"
                  placeholder="Approximate number of students"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your needs
                </label>
                <Textarea 
                  id="message"
                  placeholder="What challenges are you facing? What solutions are you looking for?"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Schedule Demo
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Our education specialists are ready to help you discover how 
                Novalearns can transform your institution's learning experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@novalearns.com</p>
                  <p className="text-muted-foreground">sales@novalearns.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/10">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Education Drive</p>
                  <p className="text-muted-foreground">Innovation City, IC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="education-card bg-gradient-subtle border-0">
              <h4 className="font-semibold mb-4">Response Times</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{"< 24h"}</div>
                  <div className="text-sm text-muted-foreground">Demo Scheduling</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{"< 1h"}</div>
                  <div className="text-sm text-muted-foreground">Support Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;