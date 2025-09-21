import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in the competition?",
      answer: "The competition is open to all school students. Teams can have 1-4 members, with at least one team leader required for registration."
    },
    {
      question: "What are the competition domains?",
      answer: "Participants can choose from three exciting domains: Robotics, Internet of Things (IoT), and Artificial Intelligence (AI). Each domain offers unique challenges and learning opportunities."
    },
    {
      question: "What is the registration fee and what does it include?",
      answer: "The registration fee is ₹399 per team (not per individual). This includes competition materials, access to workshops, mentorship sessions, and certificates for all participants."
    },
    {
      question: "Can I participate individually or do I need a team?",
      answer: "While teams can have up to 4 members, individual participation is also allowed. You can register as a single-member team."
    },
    {
      question: "What should teams prepare for the competition?",
      answer: "Teams should come prepared with basic knowledge in their chosen domain. We'll provide detailed guidelines and preparation materials after registration. Prior experience is helpful but not mandatory."
    },
    {
      question: "Are there any age restrictions?",
      answer: "The competition is specifically designed for school students (typically ages 10-18). Participants must be currently enrolled in a school."
    },
    {
      question: "What prizes are available?",
      answer: "Winners will receive certificates, trophies, and exciting cash prizes. All participants will receive participation certificates and gain valuable experience with industry experts."
    },
    {
      question: "How do I make the payment after registration?",
      answer: "After submitting your registration form, you'll receive payment instructions via email. Payment can be made through multiple methods including UPI, bank transfer, or online payment gateways."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about the National Robotics, IoT, and AI Competition.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="professional-card border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium"
          >
            <span>Contact our support team</span>
            <HelpCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;