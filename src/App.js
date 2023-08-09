// import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/navbar'
import Home from './components/home/home';
import Particle from './components/backparticle/particle';
import About from './components/about/about';
import Service from './components/service/service';


function App() {
  return (
    <div className="App">
      <Particle />
      <Nav />
      <Home />
      <hr className="h" />
      <About />
      <hr className="h" />
      <Service />
    </div>

  );
}

export default App;
