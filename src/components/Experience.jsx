import React from 'react'
import cv from '../assets/Minji Kim Suh_CV.docx' 
import{DiHtml5, DiCss3, DiJavascript, DiReact, DiGithubBadge, DiNodejs, DiMysql} from 'react-icons/di'
import {FaPython, FaJava, FaLaravel} from 'react-icons/fa'
import './Experience.css'

const Experience = () => {

  return (
    <section id='experience'>
      <h5>What I Can Do</h5>
      <h2>Experience</h2>
      <div className="experience_btn">
      <a href ={cv} download className='btn'>Download CV</a>
      </div>
      <div className="container experience_container">
        <div className="experience_content">
          <div className="item">
              <DiHtml5  className='icon'/>
              <h4 className='hide'>HTML</h4>
          </div>

          <div className="item">
              <DiCss3  className='icon'/>
                <h4 className='hide'>CSS</h4>
          </div>

          <div className="item">
              <DiJavascript  className='icon'/>
                <h4 className='hide'>JavaScript</h4>
          </div>

          <div className="item">
              <FaLaravel  className='icon'/>
                <h4 className='hide'>Laravel | PHP</h4>
          </div>

          <div className="item">
              <FaPython className='icon'/>
                <h4 className='hide'>Python</h4>
          </div>

          <div className="item">
              <FaJava className='icon'/>
                <h4 className='hide'>Java</h4>
          </div>

          <div className="item">
              <DiNodejs  className='icon'/>
                <h4 className='hide'>Node.js</h4>
          </div>

          <div className="item">
              <DiReact  className='icon'/>
                <h4 className='hide'>React and React-Native</h4>
          </div>

          <div className="item">
              <DiGithubBadge  className='icon'/>
                <h4 className='hide'>Git | Github</h4>
          </div>

          <div className="item">
              <DiMysql  className='icon'/>
                <h4 className='hide'>MySql</h4>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience