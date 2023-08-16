// import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import Home from './components/home/home';
import Particle from './components/backparticle/particle';
import About from './components/about/about';
import Proyects from './components/service/service';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";


function App() {
  return (
    <div className="App">
      <Particle />
      <Nav />
      {/* <Fade triggerOnce='false' damping={0.2} duration='4000' delay={200}> */}
      <Home />
      <hr className="h" />
      <About />
      <hr className="h" />
      <ScrollToTop smooth={true} color='#cf1259ff' className='scroll' />
      <Skills />
      <hr className="h" />
      <Proyects />
      <hr className="h" />
      <Contact />
      {/* </Fade> */}
    </div>

  );
}

export default App;
