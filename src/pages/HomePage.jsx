import HeroSection from "../components/HeroSection";
import FreelancerGrid from "../components/FreelancerGrid";
import ValueProposition from "../components/ValueProposition";
import OnDemandTeams from "../components/OnDemandTeams";
import TalentNetwork from "../components/TalentNetwork";
import HiringProcess from "../components/HiringProcess";
import WhyChoose from "../components/WhyChoose";
import Partnerships from "../components/Partnerships";
import Testimonial from "../components/Testimonial";
import ClientSatisfaction from "../components/ClientSatisfaction";
import FreelancerCarousel from "../components/FreelancerCarousel.jsx";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            {/*<FreelancerGrid/>*/}
            <FreelancerCarousel/>
            <ValueProposition/>
            <OnDemandTeams/>
            <TalentNetwork/>
            <HiringProcess/>
            <WhyChoose/>
            <Partnerships/>
            <Testimonial/>
            <ClientSatisfaction/>
        </>
    );
};

export default HomePage;
