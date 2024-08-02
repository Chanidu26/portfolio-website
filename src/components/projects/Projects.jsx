import React from 'react'
import './projects.css';
import IMG1 from '../../assets/project1.jpg';
import IMG2 from '../../assets/project2.jpg';
import IMG3 from '../../assets/project3.jpg';

const Projects = () => {
  
  const data =[
    {
      id: 1,
      image: IMG1,
      title: 'Room Reservation Managing System ',
      github: 'https://github.com/Chanidu26'
    },
  
    {
      id: 2,
      image: IMG2,
      title: 'Portfolio Website',
      github: 'https://github.com/Chanidu26'
    },
  
    {
      id: 3,
      image: IMG3,
      title: 'Bank Management System using OOP',
      github: 'https://github.com/Chanidu26'
    },
     
  ]
  return (
    <section id='projects'>
       <h5>My Recent Work</h5>
       <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github,paragraph}) => {
            return (
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
                <h4>{title}</h4>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
        <h5 style={{textAlign: 'center'}}><a href ='https://github.com/Chanidu26'>Show More Projects</a></h5>
      </div>
    </section>
  )
}

export default Projects