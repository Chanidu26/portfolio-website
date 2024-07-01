import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Blogs from './components/blogs/Blogs';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
        
        <Header/>
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Blogs/>
        <Services/>
        <Contact/>
        <Footer/>
         
    </div>
  );
}

export default App;
