import React from 'react'
import './Project.css'
import IMG1 from '../assets/project1.png'
import IMG2 from '../assets/project2.png'
import IMG3 from '../assets/project3.png'
import IMG4 from '../assets/project4.png'
import IMG5 from '../assets/project5.png'
import IMG6 from '../assets/project6.png'


const Project = () => {
  return (
    <section id='project'>
      <h4>My Recent Work</h4>
      <h2>Projects</h2>

      <div className="container project_container">

      <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
            <img src = {IMG6} alt='moviesearch'></img>
            </div>
            <h4 className='project_description'>ReactNative - MovieSearch</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/MovieDataBase_mobile' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
            </div>
          </div>
          </article>

      <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
            <img src = {IMG5} alt='icecream_website'></img>
            </div>
            <h4 className='project_description'>IceCream Ecommerce App</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/IceCreamScoop' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/IceCreamScoop/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

      <article className='project_item'>
          <div className="project_item_wrap">
          <div className="project_item_image">
                <img src = {IMG3} alt='memorygame'></img>
            </div>
            <h4 className='project_description'>Memory Game</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/Memory_Game' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/Memory_Game/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

      <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {IMG2} alt='weatherapp'></img>
            </div>
            <h4 className='project_description'>Weather Search Application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/Weather_App' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/Weather_App/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>

          <article className='project_item'>
          <div className="project_item_wrap">
          <div className="project_item_image">
                <img src = {IMG4} alt='CRUDapp'></img>
            </div>
            <h4 className='project_description'>Contact CRUD application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/contactlist' className='btn' target= '_blank' rel="noopener noreferrer">FrontEnd</a>
              <a href = 'https://github.com/alswl92/express' className='btn' target= '_blank' rel="noopener noreferrer">BackEnd</a>
            </div>
          </div>
          </article>

        <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_image">
                <img src = {IMG1} alt='calculatorapp'/>
            </div>
            <h4 className='project_description'>Calculator Web Application</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/MyCalculator' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://alswl92.github.io/MyCalculator/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article>
{/* 
          <article className='project_item'>
          <div className="project_item_wrap">
            <div className="project_item_comingsoon">
                Something Exciting
            </div>
            <h4 className='project_description'>Coming Soon...</h4>
            <div className='project_btn'>
              <a href='https://github.com/alswl92/' className='btn' target= '_blank' rel="noopener noreferrer">Github</a>
              <a href = 'https://github.com/alswl92/' className='btn btn-primary' target= '_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          </article> */}
      </div>
    </section>
  )
}

export default Project