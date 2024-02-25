import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import "../styles/App.css";
import "../styles/Buttons.css";
import "../styles/Home.css";
import Navbar from '../components/Navbar'
import '../styles/Navbar.css'
import TypingEffect from "../components/TypingEffect";


function Home() {
  // const textToDisplay = "Nico"


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
            <p className='home subtitle'>Hi there, my name is</p>
            <TypingEffect text="NICO ROUGER" subtitle="last name" className="custom-typing-effect home title" />

            <p className="home subtitle">And I'm a <strong id='highlight-white'>UI Developer</strong></p>
            <div class="text-box">
              <p>I’m a Full stack Web Developer, certified by LeWagon Amsterdam. And now Front End web developer at Evenness. I would describe myself as a hard worker who's spontaneous, social, and has a passion for web development, Marketing and and enthusiasm for UI & UX design. </p>
            </div>
            <div>
              {/* <Link to="/portfolio"> data-aos="fade" data-aos-offset="100" */}
                {/* <button className="material-bubble" style={{ margin: "3rem 1rem"}}>Get to know me</button> */}
              {/* </Link> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
