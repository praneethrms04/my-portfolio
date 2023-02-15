import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/header/Navbar";
import Form from "../components/form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's have a chat..." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
