
import {RiReactjsLine,RiNextjsFill} from "react-icons/ri";
import { FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {SiSpringboot, SiMysql, SiTensorflow, SiJupyter, SiPhp, SiXampp, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import './skills.css'
import Logoslider  from "../Logoslider/Logoslider";

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
        <div className="tech-icon black">
          <FaGithub />
        </div>
        <div className="tech-icon cyan">
          <SiAdobephotoshop />
        </div>
        <div className="tech-icon blue">
          <FaDocker />
        </div>
        <div className="tech-icon cyan">
          <SiKubernetes />
        </div>
        <div className="tech-icon cyan">
          <SiCplusplus />
        </div>
        <div className="tech-icon blue">
          <VscVscode />
        </div>
        <div className="tech-icon red ">
          <FaJenkins />
        </div>
        <div className="tech-icon black">
          <FaAws />
        </div>
      </div>

      <Logoslider />
    </section>
  )
}

export default Skills