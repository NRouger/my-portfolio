import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  // const [page, setPage] = useState('')
  // const goToAbout = useRef(null)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(page == 'about' && goToAbout.current) {
  //     goToAbout.current.click()
  //     navigate('/portfolio')
  //   }
  // }, [page])

  return (
    <nav className="navbar">
      <div style={{display: "contents"}}>
        <Link to="/stack" className="nav-list nav-item-left">stack</Link>
      </div>
      <ul className='nav-list'>
        <li><Link className="a-nav nav-item-right" to="/portfolio" onClick={() => setPage('about')}>about</Link></li>
        <li><Link className="a-nav nav-item-right" to="/projects" onClick={() => setPage('projects')}>projects</Link></li>
        <li><Link className="a-nav nav-item-right" to="/contact" onClick={() => setPage('contact')}>contact</Link></li>
        {/* <a ref={goToAbout} style={{display: 'none'}} className="a-nav nav-item-right" href="#projects">projects</a> */}
      </ul>
    </nav>
  );
}

export default Navbar;
