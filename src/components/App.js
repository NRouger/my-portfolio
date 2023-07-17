import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <section id="about">
          <h2>About</h2>
          {/* Add your about content here */}
        </section>
        <section id="projects">
          <h2>Projects</h2>
          {/* Add your projects content here */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          {/* Add your contact content here */}
        </section>
        <div>
          <p className='subtitle'>This is the portfolio of Nicolás Rouger, but call me</p>
          <h1 className="title">
            Nico
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
