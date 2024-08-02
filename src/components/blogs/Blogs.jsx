import React from 'react'
import './blogs.css';
import IMG1 from '../../assets/blog1.png';
import IMG2 from '../../assets/blog2.png';
import IMG3 from '../../assets/blog3.png';

const Blogs = () => {
  const data =[
    {
      id: 1,
      image: IMG1,
      title: 'Understanding Solid Principles',
      github: 'https://medium.com/@chanidukarunarathna/solid-principles-explained-c9b1dbcc168e'
    },
  
    {
      id: 2,
      image: IMG2,
      title: 'What is CAP Thoerem',
      github: 'https://medium.com/@chanidukarunarathna/cap-theorem-is-easy-28cbe4a492c9'
    },
  
    {
      id: 3,
      image: IMG3,
      title: 'Mastering OOP Concepts in Python',
      github: 'https://medium.com/@chanidukarunarathna/mastering-oop-concepts-in-python-88eb94e7ee38'
    },
     
  ]
  return (
    <section id='blogs'>
      <h5>What i Wrote</h5>
      <h2>Blogs</h2>

      <div className="container portfolio_container">
     {
      data.map(({id, image, title, github}) => {
        return (
         <article key={id} className='portfolio_item'>
           <div className="portfolio_item-image">
              <img src={image} alt={title} />
           </div>
          <h4>{title}</h4>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Read Blog</a>
          </div>
      </article>
        )
      })
    }
    
    <h5 style={{textAlign: 'center'}}><a href ='https://medium.com/@chanidukarunarathna'>Show More Blogs</a></h5>
     </div>
    </section>
  )
}

export default Blogs