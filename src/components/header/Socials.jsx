import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'
import './header.css'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/chanidukarunarathna/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Chanidu26' target="_blank"><BsGithub/></a>
        <a href='https://medium.com/@chanidukarunarathna' target="_blank"><BsMedium/></a>
        <a href='https://www.behance.net/chanidukarunarathna' target="_blank"><BsBehance/></a>
    </div>
  )
}

export default Socials