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

          {/*Mobile App */}
          <div className="service_head">
            <h3>Software Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Creating intuitive and cutting-edge mobile apps designed for both iOS and Android platforms.</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*Wb developing Part */}
          <div className="service_head">
            <h3>Content Writing</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Transforming design concepts into responsive and user-friendly websites, using well-structured code to ensure seamless interactivity and optimal speed and efficiency.</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*UI/UX */}
          <div className="service_head">
            <h3>UI/UX and Graphic Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Blending imagination and understanding to design user experiences that flow effortlessly and user interfaces that captivate the eye, enhancing digital interactions and bringing joy to users.</p>
            </li>
          </ul>
        </article>
     
      </div>

    </section>
  )
}

export default Services