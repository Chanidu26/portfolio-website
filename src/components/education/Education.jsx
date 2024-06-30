import React from 'react'
import './education.css';

const Education = () => {
  return (
    <section id='education'>
      <h5>Explore Me</h5>
            <h2 className="education-title">Education</h2>
            <div className="section-heading text-center">
            </div>
            <div className="container">
                <div className="education-horizontal-timeline">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="single-horizontal-timeline">
                                <div className="experience-time">
                                    <h2>2022 - Present</h2>
                                    <h3>BSc (Hons) <span>in </span> Computer Engineering</h3>
                                </div>
                                <div className="timeline-horizontal-border">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <h4 className="title">University of Ruhuna Faculty of Engineering</h4>
                                        <h5>Galle, Sri Lanka</h5>
                                        <p className="description">
                                        I am a third-year undergraduate student pursuing a degree in Computer Engineering. 
                                        My focus areas include backend development and various aspects related to Software Engineering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="single-horizontal-timeline">
                                <div className="experience-time">
                                    <h2>2017 - 2019</h2>
                                    <h3>GCE Advanced Level</h3>
                                </div>
                                <div className="timeline-horizontal-border">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <h4 className="title">Mahinda College</h4>
                                        <h5>Galle, Sri Lanka</h5>
                                        <p className="description">
                                        I pursued my Advanced Level Examination (AL) education with a Physical Science Stream , focusing on Combined Maths, 
                                        Physics, and Combined Mathematics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
  )
}

export default Education