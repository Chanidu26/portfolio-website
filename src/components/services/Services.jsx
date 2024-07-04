import React from 'react'
import './services.css';
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>

          
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Creating intuitive and cutting-edge Web applications.Iam providing full-stack Web development services.Iam Proficient with tech stacks of  
               MERN and Java-Springboot.As a Programming languages I have experience of html css js Python java and C++
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>UI UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Transforming design concepts into responsive and user-friendly websites, using well-structured code to ensure seamless interactivity and optimal speed and efficiency.Checkout my <a href='https://www.behance.net/chanidukarunarathna'>Behance</a> Portfolio</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Creating visually appealing and eye catching designs for your brand. I can create effective branding designs,social media graphics,logos,flyers and more.Checkout my <a href='https://www.behance.net/chanidukarunarathna'>Behance</a> Portfolio</p>
            </li>
          </ul>
        </article>
     
      </div>

    </section>
  )
}

export default Services