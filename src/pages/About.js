import AboutContent from "../components/about-content/AboutContent";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/header/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT"
        text="Developed various app solutions using different coding languages and built frameworks and Libraries."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
