import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';
import Navbar from "../components/Navbar";
import '../styles/StackView.css';

function StackPage() {
  return (
    <div className="container">
      <Navbar className="navbar"/>
      <div className="margin-stack"></div>
      <div className="grid-container-stack">
        <div className="item">
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <h1 className="title" style={{color: "white"}} >Stack</h1>
          </div>
          <div className="line-left"></div>
        </div>
        <div className="item">
          <p className="text-mobile">This are the technologies that I have been using in the last year.</p>
        </div>
        <div className="item stack-flex">
          <h3 className="stack-text-tec">
          React, Redux,
          JavaScript ES6,
          Ruby on Rails,
          HTML, CSS, Bootstrap,
          SQL, git, GitHub, Heroku
          </h3>
        </div>
        <div>
          <Link to="/portfolio"> {/*data-aos="fade" data-aos-offset="100"*/}
            <button className="material-bubble" style={{ margin: "3rem 3rem"}}>portfolio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StackPage;
