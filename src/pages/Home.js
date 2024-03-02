import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import "../styles/App.css";
import "../styles/Buttons.css";
import "../styles/Home.css";
import "../styles/Icons.css"
import Navbar from '../components/Navbar'
import '../styles/Navbar.css'
import TypingEffect from "../components/TypingEffect";


function Home() {
  // const textToDisplay = "Nico"


  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout (() => {
      setShowIcon(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // document.addEventListener('DOMContentLoaded', function() {
  //   document.querySelector('.lower-section').style.display = 'none';
  // });

  // document.addEventListener('load', function() {
  //   document.querySelector('.lower-section').style.display = 'block';
  // });

  React.useEffect (() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar className="navbar"/>
      <div className="container-fluid px-4">
        <div className="home-grid">
          <div data-aos='zoom-in'>
            <div class="py-5">
              <h5 className='home subtitle'>Hi there, my name is</h5>
              <TypingEffect text="NICO ROUGER" subtitle="" className="custom-typing-effect home title" />

              <h5 className="home subtitle mt-4">and I'm a <strong id='highlight-white'>Front-end Web Dev</strong></h5>
              <div class="text-box">
                {/* any text? */}
              </div>
              <div>
                {showIcon && (
                  <div class="arrow-bottom">
                    <div className={`icon ${showIcon ? 'bounce' : ''}`}>
                      <svg  width="80px" height="80px" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 23L0.679489 0.5L35.3205 0.5L18 23Z" fill="#5C5C5C"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line-section mt-5" />

      <div className="container-fluid" >
        <section className=" lower-section padding-section" >
          <div className="py-5">
            <h5 className="home title-2">
              Chasing the sun back and forth from
              <strong className="title-2-grey"> Barcelona to Amsterdam</strong>
            </h5>
          </div>
        </section>

        <div className="line-section mb-5"/>

        <section className="lower-section padding-section">
            <div>
              <div className="text-box">
                <h1 className="title-2-grey">About my experience</h1>
                <div>
                  <div className="my-5 d-inline-flex align-items-center">
                    <i className="fas fa-circle mx-2"></i>
                    <h5 className="subtitle-white">concept/o</h5>
                  </div>
                  <p className="mb-5">My first full-stack project at the bootcamp, in which we created a prototype of Airbnb. In which with authentications you can create an account and share, save, and book appointments for different concepts around the city! This immersive program facilitated the acquisition of proficiency in HTML, CSS, Bootstrap, JavaScript ES6, SQL, version control with Git, collaboration using GitHub, deployment on Heroku, and in-depth exploration of the Ruby on Rails framework.</p>
                  <button className="button-tech-purple">HTML</button>
                  <button className="button-tech-purple">CSS</button>
                  <button className="button-tech-purple">Bootstrap</button>
                  <button className="button-tech-purple">JavaScriptESC6</button>
                  <button className="button-tech-purple">Ruby</button>
                  <button className="button-tech-purple">Ruby on Rails</button>
                  <button className="button-tech-purple">PostgreSQL</button>
                  <button className="button-tech-purple">Git</button>
                  <button className="button-tech-purple">Heroku</button>
                </div>

                <h5 className="subtitle pt-5 mx-4">and my recent collaboration at</h5>
                <div>
                  <div className="mt-5 d-inline-flex align-items-center">
                    <i className="fas fa-circle mx-2"></i>
                    <h5 className="subtitle-white my-5">Eveness</h5>
                  </div>
                  <p className="mb-5">Where as a Front-End Web Developer, I am a vital member of a collaborative team dedicated to crafting an immersive user experience. Our current project involves the creation of a dynamic dashboard for both users and coaches within an innovative educational platform. This platform is poised to seamlessly integrate with emerging features and technologies in the evolving Metaverse landscape.</p>
                  <button className="button-tech-purple">HTML</button>
                  <button className="button-tech-purple">CSS</button>
                  <button className="button-tech-purple">JavaScriptESC6</button>
                  <button className="button-tech-purple">React.js</button>
                  <button className="button-tech-purple">Atomic Design</button>
                </div>
              </div>
            </div>
        </section>

        <div className="line-section mb-5"/>

        <section>
          <div className="text-box">
            <h1 className="title-2-grey mb-5 pb-5">About my experience</h1>
            <p>I’m a Full stack Web Developer, certified by LeWagon Amsterdam. And now Front End web developer at Evenness. I would describe myself as a hard worker who's spontaneous, social, and has a passion for web development, Marketing and and enthusiasm for UI & UX design.

            I believe that websites are a key element of a customer journey, and one of the biggest brand assets of a brand or organisation. It builds trust, creates consistency and establishes one's brand identity.

            I like to combine functionality and aesthetics. As a fullstack developer, I enjoy working on all aspects of the application lifecycle, from backend architecture and development to frontend design and usability.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
