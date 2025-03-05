import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-dark" style={{ color: "white" }}>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
