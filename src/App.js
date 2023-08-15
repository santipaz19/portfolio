// import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import Home from './components/home/home';
import Particle from './components/backparticle/particle';
import About from './components/about/about';
import Proyects from './components/service/service';
import Skills from './components/skills/skills';


function App() {
  return (
    <div className="App">
      <Particle />
      <Nav />
      <Home />
      <hr className="h" />
      <About />
      <hr className="h" />
      <Skills />
      <hr className="h" />
      <Proyects />
    </div>

  );
}

export default App;
