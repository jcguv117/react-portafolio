
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <div className='bg-black cover'>
        <Navbar/>
        <Home/>
      </div>
      <About />
      <Projects />
      <Skills/>
      <Contact/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default App;
