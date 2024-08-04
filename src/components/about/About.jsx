import React from 'react'
import './about.css';
import ME from '../../assets/aboutme.jpg';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card' >
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>


            <article className='about_card' >
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>

          </div>

          <p>
          An <b>Engineering Undergraduate</b>, <b>Developer</b>, <b>Graphic Designer</b> and <b>Technical Writer</b> passionate about solving problems.
          I am skilled with building exceptional <b>websites</b> and <b>mobile applications.</b>, and currently i'm exploring the <b>DevOps</b> and <b>Cloud</b> Domain.
          </p>

          <a href='#projects' className='btn btn-primary'>My projects</a>
        </div>
      </div>
    </section>
  )
}

export default About