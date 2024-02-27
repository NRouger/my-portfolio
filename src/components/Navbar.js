import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div style={{display: "contents"}}>
          <Link className="a-nav nav-list nav-item-left" to="/stack"><svg width="120" height="80" viewBox="0 0 55 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.95 3.3L21.655 3.3V7.005H17.95V3.3ZM26.545 3.33L30.25 3.33V7.035L26.545 7.035V3.33ZM10.285 12.9832L12.28 10.3132C13.71 11.5132 15.165 12.4682 16.645 13.1782C18.135 13.8882 19.645 14.3982 21.175 14.7082C22.715 15.0282 24.29 15.1932 25.9 15.2032C27.51 15.1932 29.08 15.0332 30.61 14.7232C32.15 14.4132 33.66 13.8982 35.14 13.1782C36.62 12.4682 38.085 11.5132 39.535 10.3132L41.515 12.9832C40.155 14.1532 38.62 15.1532 36.91 15.9832C35.2 16.8132 33.4 17.4432 31.51 17.8732C29.63 18.3032 27.76 18.5032 25.9 18.4732C24.04 18.5032 22.17 18.3032 20.29 17.8732C18.41 17.4432 16.615 16.8132 14.905 15.9832C13.185 15.1532 11.645 14.1532 10.285 12.9832Z" fill="white"/></svg>
          </Link>
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
