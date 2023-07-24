import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* <div className='nav-title'>
          <h4>Web developer</h4>
        </div> */}
        <li>
          <a className="a-nav" style={{textAlign: "right", justifyContent: "right"}} href="#stack">stack</a>
        </li>

        <li>
          <a className="a-nav" href="#about">about</a>
        </li>
        <li>
          <a className="a-nav" href="#projects">projects</a>
        </li>
        <li>
          <a className="a-nav" href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
