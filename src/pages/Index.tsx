import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CompetitionHero from "@/components/CompetitionHero";
import CountdownTimer from "@/components/CountdownTimer";
import JudgesPanel from "@/components/JudgesPanel";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CompetitionHero />
      <CountdownTimer />
      <JudgesPanel />
      <RegistrationForm />
      <FAQ />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
