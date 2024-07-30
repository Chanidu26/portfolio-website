import React from 'react'
import './services.css';
import {BsCheck} from 'react-icons/bs'
import { FaPaintbrush } from "react-icons/fa6";
import { MdScreenshot } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>

          
          <div className="service_head">
            <h3>FrontEndDevelopment     <CgWebsite /></h3>
          </div>

          <ul className='service_list'>
            <li>
              <p>
                <strong>Tools:</strong> HTML Css JavaScipt React Nextjs
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>Backend Development     <CgWebsite /></h3>
          </div>

          <ul className='service_list'>
            <li>
              <p>
                <strong>Tools:</strong> Express Node MongoDb Spring Java Python MySql
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>UI UX Design  <MdScreenshot /></h3>
          </div>

          <ul className='service_list'>
            <li>
              
              <p><strong>Tools :</strong> Figma Canva | Checkout my <a href='https://www.behance.net/chanidukarunarathna'>Behance</a> Portfolio</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>Graphic Design   <FaPaintbrush /></h3>
          </div>

          <ul className='service_list'>
            <li>
              
              <p><strong>Tools:</strong> Photoshop Canva Illustrator.<br></br> Checkout my <a href='https://www.behance.net/chanidukarunarathna'>Behance</a> Portfolio</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>Mobile App Development  </h3>
          </div>

          <ul className='service_list'>
            <li>
              
              <p> <strong>Tools :</strong> Android Studio Intellij IDEA Flutter React Native</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>DevOps </h3>
          </div>

          <ul className='service_list'>
            <li>
              <p> <strong>Tools :</strong> Git Github Docker Kubernetes AWS</p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}

export default Services