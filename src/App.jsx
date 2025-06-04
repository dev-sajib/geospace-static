import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FreelancerGrid from "./components/FreelancerGrid";
import ValueProposition from "./components/ValueProposition";
import OnDemandTeams from "./components/OnDemandTeams";
import TalentNetwork from "./components/TalentNetwork";
import HiringProcess from "./components/HiringProcess";
import WhyChoose from "./components/WhyChoose";
import Partnerships from "./components/Partnerships";
import Testimonial from "./components/Testimonial";
import ClientSatisfaction from "./components/ClientSatisfaction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FreelancerGrid />
        <ValueProposition />
        <OnDemandTeams />
        <TalentNetwork />
        <HiringProcess />
        <WhyChoose />
        <Partnerships />
        <Testimonial />
        <ClientSatisfaction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
