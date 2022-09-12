import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import Navbar from "../components/Navbar"
import Work from "../components/Work"




const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="PROJECTS" text ="some of my most recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects