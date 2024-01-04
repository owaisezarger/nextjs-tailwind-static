import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider slides={SliderData} />
      <Contact />
      <Footer />
    </div>
  );
}
