import React from 'react'
import './footer.css';
import { BsBehance, BsLinkedin, BsMedium, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Chanidu Karunarathna</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#blogs">Articles</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/chanidukarunarathna/"><BsLinkedin/></a>
        <a href='https://github.com/Chanidu26'><BsGithub/></a>
        <a href="https://medium.com/@chanidukarunarathna"><BsMedium/></a>
        <a href="https://www.behance.net/chanidukarunarathna"><BsBehance/></a>
      </div>

      <div className="footer_copyright">
        <small> &copy; Chanidu Karunarathna. All right reserved 2024</small>
      </div>
    </footer>
  )
}

export default Footer