import React from 'react'
import './navbar.css';
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { FaPen } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('#');
  
  return (
    <nav>
      <a href="#" onClick = {() => setActive('#')} className={active === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#education" onClick={() => setActive('#education')} className={ active === '#education' ? 'active' : ''}><IoMdSchool/></a>
      <a href="#skills" onClick={() => setActive('#skills')} className={ active === "#skills"? 'active' : ''}><GrTasks/></a>
      <a href="#blogs" onClick={() => setActive('#blogs')} className={ active === "#blogs"? 'active' : ''}><FaPen/></a>
      <a href="#services" onClick={() => setActive('#services')} className={ active === "#services"? 'active' : ''}><FaHandsHelping/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={ active === "#contact"? 'active' : ''}><IoIosCall/></a>
    </nav>
  )
}

export default Navbar