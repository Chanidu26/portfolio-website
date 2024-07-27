
import {RiReactjsLine,RiNextjsFill} from "react-icons/ri";
import { FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {SiSpringboot, SiMysql, SiTensorflow, SiJupyter, SiPhp, SiXampp, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
       <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      {/*programming languages*/}

      <div className="container icons-container">
        <div className="tech-icon cyan">
          <RiReactjsLine />
        </div>
        <div className="tech-icon green">
          <FaNodeJs />
        </div>
        <div className="tech-icon">
          <RiNextjsFill />
        </div>
        <div className="tech-icon orange">
          <SiTensorflow />
        </div>
        <div className="tech-icon orange">
          <FaJava />
        </div>
        <div className="tech-icon blue">
          <FaPython />
        </div>
        <div className="tech-icon green">
          <BiLogoMongodb />
        </div>
        <div className="tech-icon green">
          <SiSpringboot />
        </div>
        <div className="tech-icon blue">
          <SiMysql />
        </div>
        <div className="tech-icon orange">
          <FaHtml5 />
        </div>
        <div className="tech-icon blue">
          <FaCss3Alt />
        </div>
        <div className="tech-icon yellow">
          <IoLogoJavascript />
        </div>
        <div className="tech-icon blue">
          <SiTypescript />
        </div>
        <div className="tech-icon orange">
          <SiJupyter />
        </div>
        <div className="tech-icon orange">
          <FaGitAlt />
        </div>
        <div className="tech-icon blue">
          <SiPhp />
        </div>
        <div className="tech-icon orange">
          <SiXampp />
        </div>
      </div>
    </section>
  )
}

export default Skills