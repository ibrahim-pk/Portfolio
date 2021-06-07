import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Skills from "./component/skills/Skills";
import Projects from "./component/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
