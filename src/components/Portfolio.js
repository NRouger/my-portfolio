import React, { useEffect } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import '../styles/Navbar.css'
import Aos from "aos";
import "aos/dist/aos.css";


function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); //This use effect it gives global animation to every single object
  return (
    <div>
      <Navbar className="navbar"/>
      <div className='container'>
      <div className="margin"></div>
      <div className="margin"></div>

        <section id="about">
          <h2 data-aos="fade-left" className='title'>About</h2>
          <p className='line-right'></p>
          <p className='title-m'> My name is Nicolás Rouger, or <strong style={{color: "white"}}>Nico</strong> for short.</p>
          <p className='subtitle'>About my experience</p>

          <p className='text-right'>In the last year, I started working on different small projects, personals and from colleagues, while in between I accomplished a full-time intensive coding bootcamp learning how to build a prototype of AirBnB. Since then, I continued working on a personal project, concept/o, while I continued studying and improving my skills.</p>
          <p className='text-right'>  I like to come with new ideas all the time. And understand how the structure and functionalities of a website are developed.
          My goal is to kick start my Front-end | Full-stack Developer career in a company that offers me the possibility to grow and give me space to my personal improvement.</p>

          {/* Add your about content here */}

        </section>
        <div className="margin"></div>
        <p className='line-thick'></p>
        <section id="projects">
          <h2 data-aos="fade-up" className='title'>Projects</h2>
          <p className='line-left' style={{margin: "40px 20px"}}></p>
          {/* Add your projects content here */}
          <h1 className='text'>concept/o</h1>
          <p className='text'>Is an AirBnB clone and Rails prototype, we've started as a final project.
          As this was a personal idea, I've been working since then, redisegning and improving it everyday to make it an even better and user-friendly experience.

          Is a website where a community can share art-exhibitions and coffee stores based on an interesting and attractive concept.</p>

          <h1 className='text'>share!</h1>
          <p className='text'>Is a simple and basic clone of AirBnB developed in 1 week, as a preparation for the final project.</p>
          <p className='subtitle' style={{margin: "40px 0px 20px 20px"}}>Click to open</p>
          <ul>
            <a href="https://glacial-tor-83816.herokuapp.com/" className='a-nav' style={{padding: "1px"}}>concept/o</a>
            <p><strong>share!</strong> available on github</p>
          </ul>
        </section>
        <div className="margin"></div>

        <p className='line-thick'></p>
        <section id="contact">
          <h2 data-aos="fade-up" className='title'>Contact</h2>
          <div className='grid-contact'>
            <p className='subtitle'>e-mail me</p>
            <p data-aos="fade-right" className='text'>nicorouger@gmail.com</p>
            <p className='subtitle'>LinkedIn</p>
            <a href="https://www.linkedin.com/in/nrougerv/"><p data-aos="fade-right" className='a-nav text'>Nicolás Rouger</p></a>
            <p className='subtitle'>GitHub</p>
            <a href="https://github.com/NRouger"><p data-aos="fade-right" className='a-nav text'>NRouger</p></a>
          </div>
        </section>
        <div className="margin"></div>
        <div className="margin"></div>
      </div>
    </div>
  );
}

export default Portfolio;
