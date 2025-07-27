import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Spacer below navbar */}
      <div style={{ height: "80px" }} />

      <Hero />

      <main>
        <section className="fullscreen-section">
          <About />
        </section>

        <section className="fullscreen-section">
          <Projects />
        </section>

        <section className="fullscreen-section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
