import React from "react";
import '../styles/App.css';
import Navbar from "./Navbar";

function StackPage() {
  return (
    <div className="container">
      <Navbar className="navbar"/>
      <div style={{marginTop: "3rem"}}></div>
      <div>
        <h1 className="title" style={{color: "white"}}>Stack</h1>
        <div className="line-left"></div>
        <p className="text">This are the technologies that I have been using in the last year.</p>
        <div>
          <h3 className="stack-text-tec">
          React, Redux,
          JavaScript ES6,
          Ruby on Rails,
          HTML, CSS, Bootstrap,
          SQL, git, GitHub, Heroku
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StackPage;
