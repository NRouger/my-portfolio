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
      <div>
        <Link to="/stack" className="nav-list nav-item-left">stack</Link>
      </div>
      <ul className='nav-list'>
        <li><Link className="a-nav nav-item-right" to="/portfolio" onClick={() => setPage('about')}>about</Link></li>
        <li><a className="a-nav nav-item-right" href="#projects">projects</a></li>
        <li><a className="a-nav nav-item-right" href="#contact">contact</a></li>
        {/* <a ref={goToAbout} style={{display: 'none'}} className="a-nav nav-item-right" href="#projects">projects</a> */}
      </ul>
    </nav>
  );
}

export default Navbar;
