import Blogs from "../Blogs/Blogs";
import Services from "../Services/Services";
import CompanyLogos from "./CompanyLogos";
import HeroSection from "./HeroSection";
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
    </>
  );
};

export default Home;
