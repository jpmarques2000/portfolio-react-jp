import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experience/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
