import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div style={{display: "contents"}}>
          <Link className="a-nav nav-list nav-item-left" to="/stack">stack</Link>
        </div>
      <ul className='nav-list'>
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
