import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import SocialMediaLinks from "./components/SocialMediaLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <SocialMediaLinks />
    </div>
  );
}

export default App;
