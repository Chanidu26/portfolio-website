import React from 'react'
import './header.css';
import CTA from './CTA';
import me from '../../assets/Header.jpg';
import Socials from './Socials';
import { FaAngleDoubleDown } from "react-icons/fa";



const Header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Chanidu Karunarathna</h1>
      <h5 className="text-light">Undergradute Fullstack Engineer | Developer | Graphic Designer | Blogger</h5>
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
