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
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
    
              <p className="home subtitle">And I'm a <strong id='highlight-white'>Web Developer</strong></p>
              <div class="text-box">
                {/* any text? */}
              </div>
              <div>
                {showIcon && (
                  <div class="arrow-bottom">
                    <svg  width="80px" height="80px" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 23L0.679489 0.5L35.3205 0.5L18 23Z" fill="#5C5C5C"/>
                    </svg>
                  </div>
                )}
              </div>
                
              <section>
                
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
