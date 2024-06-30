import React from 'react'
import './navbar.css';
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { FaPen } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";


const Navbar = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><FaUser/></a>
      <a href="#education"><IoMdSchool/></a>
      <a href="#projects"><GrTasks/></a>
      <a href="#blogs"><FaPen/></a>
      <a href="#services"><FaHandsHelping/></a>
      <a href="#contact"><IoIosCall/></a>
    </nav>
  )
}

export default Navbar