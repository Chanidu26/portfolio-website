import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
       <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      {/*programming languages*/}

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>

        {/*Experience in */}

        <div className="experience_backend">
          <h3>Experience In</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>AZURE</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills