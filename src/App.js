import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Skills from "./component/skills/Skills";
import Projects from "./component/projects/Projects";
import About from "./component/about/About";
import Education from "./component/education/Education";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Contact from "./component/contactForm/Contact";
import Blog from "./component/blog/Blog";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Education />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
