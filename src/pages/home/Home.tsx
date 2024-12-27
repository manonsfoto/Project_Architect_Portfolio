import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/mission/Mission";
import Projects from "../../components/projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
