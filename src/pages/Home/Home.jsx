import Blogs from "../Blogs/Blogs";
import Services from "../Services/Services";
import CompanyLogos from "./CompanyLogos";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";
import Tools from "./Tools";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Tools></Tools>
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing/>
      <Faq/>
    </>
  );
};

export default Home;
