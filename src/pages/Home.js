import Navbar from "../components/header/Navbar";
import HeroImg from "../components/hero-img/HeroImg";
import Footer from "../components/footer/Footer";
import AboutContent from "../components/about-content/AboutContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Home;
