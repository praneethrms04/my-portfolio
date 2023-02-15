import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/header/Navbar";
import Work from "../components/work-card/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
