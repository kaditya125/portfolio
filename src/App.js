import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
      <Projects />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;

