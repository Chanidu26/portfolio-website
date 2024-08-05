import React from 'react'
import './header.css';
import CTA from './CTA';
import me from '../../assets/Header.jpg';
import Socials from './Socials';
import { FaAngleDoubleDown } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter"


const Header = () => {
  const [ text ] = useTypewriter({
    words: ['Undergraduate', 'Developer', 'Engineer', 'Designer', 'Blogger'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Chanidu Karunarathna</h1>
      <h3 className="text-light">
          I am <span style={{ fontWeight: 'bold'}}>{text}</span><Cursor />
      </h3>
      <Socials/>
      <CTA/>
      <div className='me'>
           <img src={me} alt="me" />
      </div>
      <a href='#contact' className='scroll_down'><FaAngleDoubleDown/></a>

    </div>
  </header>
  )
}

export default Header
