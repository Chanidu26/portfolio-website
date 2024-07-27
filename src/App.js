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
import Loading from './components/loading/Loading';
import { useEffect , useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setLoading(false);
    };
    

    loadData();
  }, []);

  return (
    <div className="App" >
      { loading ? (
        <Loading/>) :(
        <>
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
        </>
        )
      }
         
    </div>
  );
}

export default App;
