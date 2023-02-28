import Navbar from "../components/header/Navbar";
import HeroImg from "../components/hero-img/HeroImg";
import Work from "../components/work-card/Work";
import AboutContent from "../components/about-content/AboutContent";
import HeroImg2 from "../components/HeroImg2";

import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <HeroImg2 heading="ABOUT" />
      <AboutContent />
      <HeroImg2 heading="PROJECTS" text="My Recent works here" />
      <Work />
      <HeroImg2 heading="CONTACT" />
      <Footer />
    </div>
  );
};

export default Home;
