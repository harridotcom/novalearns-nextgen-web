import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CompetitionHero from "@/components/CompetitionHero";
import RegistrationForm from "@/components/RegistrationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CompetitionHero />
      <RegistrationForm />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
