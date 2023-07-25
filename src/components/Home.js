import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import "../styles/App.css";
import "../styles/Buttons.css";
import "../styles/Home.css";
import TypingEffect from "./TypingEffect";

function Home() {
  React.useEffect (() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

    <div className="container">
      <div className="margin-home"></div>

      <div className="home-grid">
        <div data-aos='zoom-in'>
        <div>
          <p className='subtitle-mobile'>Hi. my name is Nicolás Rouger, but call me</p>
          <div>
            <TypingEffect text="Nico" className="title" />
          </div>
          <p className="text-mobile" style={{margin: "1rem"}}>I'm a FullStack Web Developer.
          Passionate about the development of a user experience from scratch.</p>
          <div className='line-left' style={{margin: "3em 1em"}}></div>
          <div>
            <Link to="/portfolio"> {/*data-aos="fade" data-aos-offset="100"*/}
              <button className="material-bubble" style={{ margin: "3rem 1rem"}}>Get to know me</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
